import React, { useState, useEffect } from "react";
import { useActivityFeed } from "../hooks/useActivityFeed.js";
import { useLocation } from "react-router-dom";
import { Logout } from "../components/logout.jsx";
import { useNavigate } from "react-router-dom";

import {
  DashboardTheme,
  AnimatedTitle,
  StyledTitle,
  StyledInput,
  StyledForm,
  StyledSelect,
  StyledSpan,
  StyledDivForm,
  StyledButton,
  StyledSection,
  StyledH3,
  StyledStrongTitle,
  StyledPriority,
  StyledButtoms,
  StyledButtonFayeIcon,
  StyledButtonDel,
  StyledButtonNext,
  StyledButtonUpdate,
  StyledButtonBack,
  StyledButtonCancel,
  StyledFeedContainer,
  StyledList,
  StyledLi,
  variants,
  WelcomeTitle,
  StyledDescription,
} from "../styles/Dashboard.js";
import { FaEye, FaEyeSlash, FaTrash } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { IoMdArrowRoundForward } from "react-icons/io";
import { RiArrowGoBackLine } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { FaArrowUp, FaArrowDown, FaMinus } from "react-icons/fa";

import api from "../axios.js";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [flows, setFlows] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("baixa");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [expandedTaskId, setExpandedTaskId] = useState(null);
  const navigate = useNavigate(); 
  const activityFeed = useActivityFeed();
  const location = useLocation();
  const userName = location.state?.userName || localStorage.getItem('user');


  useEffect(() => {

    fetchTasks();
    fetchFlows();
  }, []);


  const fetchTasks = async () => {
    try {
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
      alert("Erro ao carregar tarefas. Faça login novamente");
    }
  };

  const fetchFlows = async () => {
    try {
      const response = await api.get("/flows");
      setFlows(response.data);
    } catch (error) {
      console.error("Erro ao carregar fluxos:", error);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const usuario = JSON.parse(localStorage.getItem("usuario"));

      if (!usuario) {
        throw new Error("Usuario nao encontrado");
      }

      await api.post("/createTasking", {
        user_id: usuario.id,
        title,
        description,
        priority,
        flow_id: 1,
      });
      resetForm();
      fetchTasks();
    } catch (error) {
      console.error("Erro ao criar a tarefa:", error);
      alert("Erro ao criar tarefa");
    }
  };

  const handleUpdate = async (id) => {
    try {
      await api.put(`/tasks/${id}`, { title, description, priority });
      resetForm();
      fetchTasks();
    } catch (error) {
      alert("Erro ao atualizar tarefa");
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      alert("Erro ao deletar tarefa");
    }
  };

  const moveToFlow = async (id, flow_id, completed = false) => {
    try {
      await api.put(`/tasks/${id}/move`, { flow_id, completed });
      fetchTasks();
    } catch (error) {
      alert("Erro ao mover a tarefa");
    }
  };

  const startEditing = (task) => {
    setEditingTaskId(task.id);
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
  };

  const resetForm = () => {
    setEditingTaskId(null);
    setTitle("");
    setDescription("");
    setPriority("baixa");
  };

  const toggleDescription = (id) => {
    setExpandedTaskId((prev) => (prev === id ? null : id));
  };

  const renderActions = (task, flowId) => {
    switch (flowId) {
      case 1:
        return (
          <StyledButtonNext onClick={() => moveToFlow(task.id, 2)}>
            <IoMdArrowRoundForward />
          </StyledButtonNext>
        );
      case 2:
        return (
          <>
            <StyledButtonNext onClick={() => navigate(`/timeline/${task.id}`)}>
              📋{" "}
            </StyledButtonNext>

            <StyledButtonNext onClick={() => moveToFlow(task.id, 3, true)}>
              <MdDone />
            </StyledButtonNext>
            
            <StyledButtonUpdate onClick={() => startEditing(task)}>
              <RxUpdate />
            </StyledButtonUpdate>
          </>
        );
      case 3:
        return (
          <StyledButtonBack onClick={() => moveToFlow(task.id, 2, false)}>
            <RiArrowGoBackLine />
          </StyledButtonBack>
        );
      default:
        return null;
    }
  };

  return (
    
    <DashboardTheme>
      <Logout />

      <WelcomeTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Bem-Vindo, {userName}
      </WelcomeTitle>
      <AnimatedTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        TaskFlow
        <StyledTitle> Suas tarefas organizadas </StyledTitle>
      </AnimatedTitle>

      <StyledForm
        onSubmit={
          editingTaskId
            ? (e) => {
                e.preventDefault();
                handleUpdate(editingTaskId);
              }
            : handleCreate
        }
      >
        <StyledInput
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <StyledInput
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <StyledDivForm>
          <StyledSpan>Prioridade</StyledSpan>
          <StyledSelect
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="alta">Alta</option>
            <option value="media">Média</option>
            <option value="baixa">Baixa</option>
          </StyledSelect>
        </StyledDivForm>

        <StyledButton
          initial={false}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.1 }}
          type="submit"
        >
          {editingTaskId ? <RxUpdate /> : "Criar"}
        </StyledButton>

        {editingTaskId && (
          <StyledButtonCancel
            initial={false}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.1 }}
            type="button"
            onClick={resetForm}
          >
            Cancelar
          </StyledButtonCancel>
        )}
      </StyledForm>

      <StyledFeedContainer>
        <StyledH3>Atividades Recentes:</StyledH3>
        <StyledList initial="hidden" animate="visible">
          {activityFeed.map((activity, index) =>
            activity ? (
              <StyledLi custom={index} variants={variants} key={index}>
                {activity.message}
              </StyledLi>
            ) : null
          )}
        </StyledList>
      </StyledFeedContainer>

      <StyledSection>
        {flows.length > 0 ? (
          flows.map((flow) => (
            <div
              key={flow.id}
              style={{
                flex: 1,
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
              }}
            >
              <StyledH3>{flow.name}</StyledH3>
              {tasks
                .filter((task) => task.flow_id === flow.id)
                .map((task) => (
                  <div key={task.id} style={{ marginBottom: "10px" }}>
                    <StyledStrongTitle>{task.title}</StyledStrongTitle>
                    <div>
                      <p>
                        <StyledPriority $priority={task.priority}>
                          {task.priority === "alta" && <FaArrowUp />}
                          {task.priority === "media" && <FaMinus />}
                          {task.priority === "baixa" && <FaArrowDown />}
                          {task.priority}{" "}
                        </StyledPriority>
                      </p>

                      <StyledButtonFayeIcon
                        onClick={() => toggleDescription(task.id)}
                      >
                        {expandedTaskId === task.id ? (
                          <FaEyeSlash />
                        ) : (
                          <FaEye />
                        )}
                      </StyledButtonFayeIcon>
                      {expandedTaskId === task.id && (
                        <StyledDescription>
                          {task.description}
                        </StyledDescription>
                      )}

                      <StyledButtoms>
                        {renderActions(task, flow.id)}

                        <StyledButtonDel onClick={() => handleDelete(task.id)}>
                          <FaTrash />
                        </StyledButtonDel>
                      </StyledButtoms>
                    </div>
                  </div>
                ))}
            </div>
          ))
        ) : (
          <p>Carregando fluxos...</p>
        )}
      </StyledSection>
    </DashboardTheme>
  );
};

export default Dashboard;
