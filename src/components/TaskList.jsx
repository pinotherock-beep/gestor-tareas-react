import useFilteredTasks from '../hooks/useFilteredTasks.js';
import TaskItem from './TaskItem.jsx';

export default function TaskList() {
  const tasks = useFilteredTasks();
  if (tasks.length === 0) return <p className="empty">No hay tareas para mostrar.</p>;
  return <ul className="task-list">{tasks.map(task => <TaskItem key={task.id} task={task} />)}</ul>;
}
