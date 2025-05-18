import pool from "../models/db.js";
import { broadcastActivity } from "../../server/app.js";

export async function deleteTask(req, res) {
  const { id } = req.params;

  try {
    const tarefaResult = await pool.query("SELECT * FROM tasks WHERE id = $1", [
      id,
    ]);

    if (tarefaResult.rows.length === 0) {
      return res.status(404).json({ mensagem: "Tarefa não encontrada!" });
    }

    const tarefa = tarefaResult.rows[0];

    const userResult = await pool.query(
      'SELECT name FROM "users" WHERE id = $1',
      [tarefa.user_id]
    );

    const userName = userResult.rows[0]?.name || "Usuário desconhecido";

    const deleteResult = await pool.query(
      "DELETE FROM tasks WHERE id = $1 RETURNING *;",
      [id]
    );

    broadcastActivity({
      user: userName,
      message: `🗑️ ${userName} apagou a tarefa "${tarefa.title}"`,
      timestamp: new Date().toISOString(),
    });

    res.status(200).json({
      mensagem: "Tarefa deletada com sucesso!",
      tarefa: deleteResult.rows[0],
    });
  } catch (error) {
    console.error("Erro ao deletar tarefa:", error);
    res.status(500).send("Erro ao deletar tarefa");
  }
}

export async function updateTask(req, res) {
  const { id } = req.params;
  const { title, description, priority } = req.body;

  try {
    if (!req.user) {
      return res.status(401).json({ mensagem: "Usuário não autenticado" });
    }

    const tarefaResult = await pool.query("SELECT * FROM tasks WHERE id = $1", [
      id,
    ]);

    if (tarefaResult.rows.length === 0) {
      return res.status(404).json({ mensagem: "Tarefa não encontrada!" });
    }

    const updateQuery = `
            UPDATE tasks
            SET title = $1, description = $2, priority = $3
            WHERE id = $4
            RETURNING *;
        `;
    const updateValues = [title, description, priority, id];
    const updateResult = await pool.query(updateQuery, updateValues);

    const updatedTask = updateResult.rows[0];

    const userResult = await pool.query(
      'SELECT name FROM "users" WHERE id = $1',
      [req.user.id]
    );
    const userName = userResult.rows[0]?.name || "Usuário desconhecido";

    broadcastActivity({
      user: userName,
      message: `✏️ ${userName} atualizou a tarefa "${updatedTask.title}".`,
      timestamp: new Date().toISOString(),
    });

    res.status(200).json({
      mensagem: "Tarefa atualizada com sucesso!",
      tarefa: updatedTask,
    });
  } catch (err) {
    console.error("Erro ao atualizar tarefa:", err);
    res.status(500).send("Erro ao atualizar tarefa");
  }
}

export async function searchAllTasks(req, res) {
  try {
    const userId = req.user.id;

    const query = `
            SELECT tasks.*, flows.name AS flow_name
            FROM tasks
            LEFT JOIN flows ON tasks.flow_id = flows.id
            WHERE tasks.user_id = $1
            ORDER BY tasks.id ASC;
        `;
    const values = [userId];

    const { rows } = await pool.query(query, values);

    res.status(200).json(rows);
  } catch (err) {
    console.error("Erro ao buscar tarefas:", err);
    res.status(500).send("Erro ao buscar tarefas");
  }
}

export async function createTasking(req, res) {
  const { title, description, priority, flow_id } = req.body;

  if (!req.user) {
    return res.status(401).json({ mensagem: "Usuário não autenticado" });
  }
  const userId = req.user.id;

  const prioridadeValida = ['baixa', 'média', 'alta'];

  if (!prioridadeValida.includes(priority?.toLowerCase())) {
    return res.status(400).json({ error: "Prioridade inválida" });
  }

  try {
    const result = await pool.query('SELECT name FROM "users" WHERE id = $1', [
      userId,
    ]);
    const userName = result.rows[0]?.name || "Usuário desconhecido";

    const query = `
      INSERT INTO tasks (title, description, priority, user_id, flow_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const values = [title, description, priority.toLowerCase(), userId, flow_id];

    const { rows } = await pool.query(query, values);

    broadcastActivity({
      user: userName,
      message: `📝 ${userName} criou a tarefa "${title}".`,
      timestamp: new Date().toISOString(),
    });

    res.status(201).json({ message: "Tarefa criada com sucesso", tarefas: rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar tarefa" });
  }
}


export async function getFlows(req, res) {
  try {
    const query = `SELECT * FROM flows ORDER BY id ASC;`;
    const { rows } = await pool.query(query);

    res.status(200).json(rows);
  } catch (error) {
    console.error("Erro ao buscar fluxos:", error);
    res.status(500).send("Erro ao buscar fluxos");
  }
}

export async function moveTask(req, res) {
    const { id } = req.params;
    const { flow_id, completed } = req.body;
  
    try {
      const userId = req.user.id;
  
      const verifyQuery = 'SELECT * FROM tasks WHERE id = $1 AND user_id = $2;';
      const verifyResult = await pool.query(verifyQuery, [id, userId]);
  
      if (verifyResult.rows.length === 0) {
        return res.status(404).json({
          mensagem: "Tarefa não encontrada ou não pertence ao usuário!",
        });
      }
  
      const currentTask = verifyResult.rows[0];
      const oldFlowId = currentTask.flow_id;
      const taskTitle = currentTask.title;
  
      const userQuery = "SELECT name FROM users WHERE id = $1;";
      const userResult = await pool.query(userQuery, [userId]);
      const userName = userResult.rows[0].name;
  
      const updateQuery = `
        UPDATE tasks SET flow_id = $1, completed = $2 WHERE id = $3
        RETURNING *;
      `;
      const updateValues = [flow_id, completed, id];
      const { rows } = await pool.query(updateQuery, updateValues);
  
      const updatedTask = rows[0];
  
      let mensagem = "";
  
      if (oldFlowId === 1 && flow_id === 2) {
        mensagem = `🚀 ${userName} iniciou a tarefa "${taskTitle}"`;
      } else if (oldFlowId === 2 && flow_id === 3 && completed) {
        mensagem = `✅ ${userName} completou a tarefa "${taskTitle}"`;
      } else if (oldFlowId === 3 && flow_id === 2 && !completed) {
        mensagem = `🔄 ${userName} desmarcou a tarefa "${taskTitle}"`;
      } else {
        mensagem = `📦 ${userName} moveu a tarefa "${taskTitle}"`;
      }
  
      broadcastActivity({
        user: userName,
        message: mensagem,
        timestamp: new Date().toISOString(),
      });
  
      res.status(200).json({
        mensagem: "Tarefa movida com sucesso!",
        tarefa: updatedTask,
      });
    } catch (error) {
      console.error("Erro ao mover tarefa:", error);
      res.status(500).send("Erro ao mover tarefa");
    }
  }
  