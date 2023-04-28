// import rrd
import { NavLink, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <header>
        <h1>Kosa</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/kosa/">Acceuil</NavLink>
            </li>
            <li>
              <NavLink to="/kosa/about">A propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
};
export default Main;
