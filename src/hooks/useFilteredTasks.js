import { useMemo } from 'react';
import { useTasks } from '../context/TaskContext.jsx';

export default function useFilteredTasks() {
  const { state } = useTasks();
  return useMemo(() => {
    return state.tasks
      .filter(task => state.filter === 'completed' ? task.completed : state.filter === 'pending' ? !task.completed : true)
      .filter(task => task.title.toLowerCase().includes(state.search.toLowerCase()));
  }, [state.tasks, state.filter, state.search]);
}
