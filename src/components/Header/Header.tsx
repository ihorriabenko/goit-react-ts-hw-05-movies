import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav id='nav'>
        <ul>
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/movies`}>Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
