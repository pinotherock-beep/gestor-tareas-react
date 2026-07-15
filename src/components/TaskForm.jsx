import { useState } from 'react';
import { useTasks } from '../context/TaskContext.jsx';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const { dispatch } = useTasks();

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch({ type: 'ADD_TASK', payload: title.trim() });
    setTitle('');
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input aria-label="Nueva tarea" value={title} onChange={e => setTitle(e.target.value)} placeholder="Escribe una nueva tarea..." />
      <button>Agregar</button>
    </form>
  );
}
