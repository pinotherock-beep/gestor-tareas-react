import { useTasks } from '../context/TaskContext.jsx';

const filters = [
  ['all', 'Todas'],
  ['pending', 'Pendientes'],
  ['completed', 'Completadas'],
];

export default function FilterBar() {
  const { state, dispatch } = useTasks();
  return (
    <div className="filters" aria-label="Filtros de tareas">
      {filters.map(([value, label]) => (
        <button key={value} className={state.filter === value ? 'active' : ''} onClick={() => dispatch({ type: 'SET_FILTER', payload: value })}>{label}</button>
      ))}
    </div>
  );
}
