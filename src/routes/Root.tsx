import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
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
      <main id='main'>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
