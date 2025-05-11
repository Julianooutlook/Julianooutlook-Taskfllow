import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../axios.js";
import { Trash, Pencil, Plus } from "lucide-react";
import { GlobalStyle } from "../styles/GlobalStyles.js";
import TopNavBar from "../components/NavegationButtons.jsx";

import {
  StyledContainerTimeline,
  StyledUl,
  StyledLi,
  StyledDivLista,
  StyledInput,
  StyledInputPlus,
  StyledTitle,
  StyledInputTasks,
  StyledEdit,
  StyledSpan,
  StyledButtonTaskDelete,
  StyledButtonTaskDiv,
  StyledButtonSaveTaks,
  StyledButtonCancelEditTaks,
  GroupButtosEditCancel,
  StyledbuttonPlus,
  StyledCheckBox,
} from "../styles/Timeline.js";

const Timeline = () => {
  const { taskId } = useParams();
  const [subtasks, setSubtasks] = useState([]);
  const [description, setDescription] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingDescriptions, setEditingDescriptions] = useState({});
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    fetchSubtasks();
  }, []);

  const handleToggleChecked = async (id) => {
    try {
      const subtask = subtasks.find((s) => s.id === id);
      if (!subtask) return;

      const updatedChecked = !subtask.checked;

      console.log("false, true:", updatedChecked);

      const response = await api.patch(`/subtasks/${id}`, {
        checked: updatedChecked,
      });

      setSubtasks((prev) =>
        prev.map((s) => (s.id === id ? { ...s, checked: updatedChecked } : s))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id, newDescription) => {
    if (!newDescription) {
      alert("Descrição não pode estar vazia.");
      return;
    }

    try {
      const response = await api.put(`/subtasks/${id}`, {
        description: newDescription,
      });

      const updated = response.data.tarefa;

      setSubtasks((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, description: updated.description } : item
        )
      );

      setEditingDescriptions((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    } catch (error) {
      console.error("Erro ao atualizar subtarefa:", error);
    }
  };

  const fetchSubtasks = async () => {
    try {
      const response = await api.get(`/subtasks/${taskId}`);
      setSubtasks(response.data.subtasks);
      setTaskTitle(response.data.taskTitle || "Sem título");
    } catch (error) {
      console.error("Erro ao buscar subtarefas:", error);
    }
  };

  const handleAdd = async () => {
    if (!description.trim()) return;

    try {
      await api.post("/subtasks", {
        task_id: taskId,
        description,
      });
      setDescription("");
      fetchSubtasks();
    } catch (error) {
      console.error("Erro ao adicionar subtarefa:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/subtasks/${id}`);
      fetchSubtasks();
    } catch (error) {
      console.error("Erro ao deletar subtarefa:", error);
    }
  };

  return (
    <>
      <TopNavBar />
      <GlobalStyle />
      <StyledContainerTimeline>
        <StyledTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Timeline da Tarefa: {taskTitle}
        </StyledTitle>

        <StyledDivLista>
          <StyledUl>
            {subtasks.map((item) => (
              <StyledLi
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(item.id)}
                initial={{ opacity: 1 }}
                animate={{
                  opacity:
                    hoveredId === null || hoveredId === item.id ? 1 : 0.3,
                  scale: hoveredId === item.id ? 1.02 : 1,
                }}
                transition={{ duration: 0.1 }}
              >
                {editingId === item.id ? (
                  <>
                    <StyledSpan>
                      <StyledInputTasks
                        value={editingDescriptions[item.id] || ""}
                        onChange={(e) =>
                          setEditingDescriptions((prev) => ({
                            ...prev,
                            [item.id]: e.target.value,
                          }))
                        }
                      />

                      <GroupButtosEditCancel>
                        <StyledButtonSaveTaks
                          onClick={() => {
                            handleUpdate(item.id, editingDescriptions[item.id]);
                            setEditingId(null);
                          }}
                        >
                          Salvar
                        </StyledButtonSaveTaks>

                        <StyledButtonCancelEditTaks
                          onClick={() => setEditingId(null)}
                        >
                          Cancelar
                        </StyledButtonCancelEditTaks>
                      </GroupButtosEditCancel>
                    </StyledSpan>
                  </>
                ) : (
                  <StyledButtonTaskDiv>
                    <>
                      <StyledCheckBox
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => handleToggleChecked(item.id)}
                      />
                      {item.description}

                      <StyledButtonTaskDelete
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash />
                      </StyledButtonTaskDelete>

                      <StyledEdit
                        onClick={() => {
                          setEditingId(item.id);
                          setEditingDescriptions((prev) => ({
                            ...prev,
                            [item.id]: item.description,
                          }));
                        }}
                      >
                        <Pencil />
                      </StyledEdit>
                    </>
                  </StyledButtonTaskDiv>
                )}
              </StyledLi>
            ))}

            <StyledInputPlus>
              <StyledInput
                placeholder="Nova entrada"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <StyledbuttonPlus
                onClick={() => {
                  handleAdd(description);
                  setDescription("");
                }}
              >
                <Plus />
              </StyledbuttonPlus>
            </StyledInputPlus>
          </StyledUl>
        </StyledDivLista>
      </StyledContainerTimeline>
    </>
  );
};

export default Timeline;
