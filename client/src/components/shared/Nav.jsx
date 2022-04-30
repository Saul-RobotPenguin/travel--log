import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <ul>
      <NavLink to="/">
        <li>
          <a>Home </a>
        </li>
      </NavLink>
      <NavLink to="/reviews">
        <li>
          <a>Reviews</a>
        </li>
      </NavLink>
      <NavLink to="/create-review">
        <li>
          <a>Create Reviews</a>
        </li>
      </NavLink>
    </ul>
  );
};

export default Nav;
