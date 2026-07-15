import { useTasks } from '../context/TaskContext.jsx';

export default function SearchBar() {
  const { state, dispatch } = useTasks();
  return <input className="search" aria-label="Buscar tareas" value={state.search} onChange={e => dispatch({ type: 'SET_SEARCH', payload: e.target.value })} placeholder="Buscar tarea..." />;
}
