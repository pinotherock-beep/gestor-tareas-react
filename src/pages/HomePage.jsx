import TaskForm from '../components/TaskForm.jsx';
import SearchBar from '../components/SearchBar.jsx';
import FilterBar from '../components/FilterBar.jsx';
import TaskList from '../components/TaskList.jsx';

export default function HomePage() {
  return (
    <main className="container">
      <section className="card">
        <h2>Mis tareas</h2>
        <TaskForm />
        <SearchBar />
        <FilterBar />
        <TaskList />
      </section>
    </main>
  );
}
