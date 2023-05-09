import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    if(title.trim() && description.trim()){
      createTask(title, description);
      setDescription("");
      setTitle("");
    } else {
      alert('Por favor ingrese una tarea y descripcion')
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={HandleSubmit}>
        <h1 className="text-2xl font-bold text-white">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu descripcion"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-300">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
