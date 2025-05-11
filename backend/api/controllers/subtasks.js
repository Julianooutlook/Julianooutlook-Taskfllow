import express from 'express';
import pool from '../models/db.js';

const router = express.Router();

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { checked } = req.body;

    try {
        await pool.query(
            'UPDATE subtasks SET checked = $1 WHERE id = $2', [checked, id]
        );
        res.status(200).json({ message: 'Checked atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao checkar subtasks' });
    }
});

router.put("/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;

        if (!description) {
            return res.status(400).json({ mensagem: "Descrição é obrigatória" });
        }
        
        const subTarefaResult = await pool.query("SELECT * FROM subtasks WHERE id = $1", [id]);
        
        if (subTarefaResult.rows.length === 0) {
            return res.status(404).json({ mensagem: "Tarefa não encontrada!" });
        }

        const updateQuery = `
            UPDATE subtasks SET description = $1 WHERE id = $2 RETURNING *;
        `;

        const updateValues = [description, id];
        const updateResult = await pool.query(updateQuery, updateValues);

        const updateSubtasks = updateResult.rows[0];



        res.status(200).json({
            mensagem: "Subtarefa atualizada com sucesso!",
            tarefa: updateSubtasks,
        });
        
    } catch (error) {
        console.error('Erro ao aualizar subtarefa:', error);
        res.status(500).send('Erro ao atualizar tarefa');
    }
});

router.get("/:taskId", async (req, res) => {
    try {
        const { taskId } = req.params;

        const query = `
        SELECT subtasks.*, tasks.title AS tasks_title
        FROM subtasks JOIN tasks ON subtasks.tasks_id = tasks.id WHERE subtasks.tasks_id = $1;`;

        const { rows } = await pool.query(query, [taskId]);
        res.json({ subtasks: rows, taskTitle: rows[0]?.tasks_title || null});

    } catch (error) {
        console.error('Erro ao buscar subtarefas:', error);
        res.status(500).json({ error: 'Erro ao buscar subtarefas' });
    }

});

router.post("/", async (req, res) => {
    const { task_id, description, checked } = req.body;

    if (!task_id || !description) {
        return res.status(400).json({ error: "task_id e descrição são obrigatórios" });
    }

    try {
        await pool.query(
            'INSERT INTO subtasks (tasks_id, description, checked) VALUES ($1, $2, $3)',
            [task_id, description, checked]
        );
        res.status(201).json({ message: "Subtarefa adicionada com sucesso!" });
    } catch (error) {
        console.error("Erro ao adicionar subtarefa:", error);
        res.status(500).json({ error: "Erro ao adicionar subtarefa" });
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        await pool.query(
            'DELETE FROM subtasks WHERE id = $1;',
            [id]
        );
        res.sendStatus(204);
    } catch (error) {
        console.error('Erro ao apagar subtarefa', error);
        res.status(500).json({ error: 'Erro ao deletar subtarefa' });
    }
});

export default router;
