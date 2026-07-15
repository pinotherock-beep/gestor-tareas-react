import { memo, useState } from 'react';
import { useTasks } from '../context/TaskContext.jsx';

function TaskItem({ task }) {
  const { dispatch } = useTasks();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.title);

  function saveEdit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: 'EDIT_TASK', payload: { id: task.id, title: text.trim() } });
    setEditing(false);
  }

  return (
    <li className={`task-item ${task.completed ? 'done' : ''}`}>
      {editing ? (
        <form onSubmit={saveEdit} className="edit-form">
          <input aria-label="Editar tarea" value={text} onChange={e => setText(e.target.value)} />
          <button>Guardar</button>
        </form>
      ) : (
        <>
          <label>
            <input type="checkbox" checked={task.completed} onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })} />
            <span>{task.title}</span>
          </label>
          <div className="actions">
            <button onClick={() => setEditing(true)}>Editar</button>
            <button className="danger" onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}>Eliminar</button>
          </div>
        </>
      )}
    </li>
  );
}

export default memo(TaskItem);
