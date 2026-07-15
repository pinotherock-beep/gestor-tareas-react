import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1>Gestor de Tareas</h1>
      <nav>
        <NavLink to="/">Tareas</NavLink>
        <NavLink to="/about">Acerca de</NavLink>
      </nav>
    </header>
  );
}
