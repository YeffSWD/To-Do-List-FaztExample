import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  const [idValue, setidValue] = useState(data.length);

  function createTask(taskTitle, taskDescription) {
    if (taskTitle.trim() && taskDescription.trim()) {
      setTasks([
        ...tasks,
        {
          title: taskTitle,
          id: idValue,
          description: taskDescription,
        },
      ]);
      setidValue(idValue + 1);
    } else {
      alert('Por favor inserte un nuumbre y una descripcion a la tarea');
    }
  }

  function deleteTasks(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
