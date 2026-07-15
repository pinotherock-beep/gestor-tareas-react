import { createContext, useContext, useEffect, useReducer } from 'react';

const TaskContext = createContext();
const STORAGE_KEY = 'react-task-manager-tasks';

const initialState = { tasks: [], filter: 'all', search: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [{ id: crypto.randomUUID(), title: action.payload, completed: false, createdAt: new Date().toISOString() }, ...state.tasks] };
    case 'EDIT_TASK':
      return { ...state, tasks: state.tasks.map(t => t.id === action.payload.id ? { ...t, title: action.payload.title } : t) };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(t => t.id !== action.payload) };
    case 'TOGGLE_TASK':
      return { ...state, tasks: state.tasks.map(t => t.id === action.payload ? { ...t, completed: !t.completed } : t) };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'LOAD_TASKS':
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) dispatch({ type: 'LOAD_TASKS', payload: JSON.parse(saved) });
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tasks));
  }, [state.tasks]);

  return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>;
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks debe usarse dentro de TaskProvider');
  return context;
}
