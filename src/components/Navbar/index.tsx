import { NavLink } from "react-router-dom";
import Logo from "@/assets/icon.png";
import OnixLogo from "@/components/icons/onixLogo";
import routes from "@/router/routes";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="logo">
        <img src={Logo} />
        <OnixLogo className="letters" />
      </NavLink>
      <nav className="list">
        <ul>
          {routes
            .filter((r) => !r.hideInNavbar)
            .map((r) => (
              <li key={`${r.name}${r.path}`}>
                <NavLink to={r.path}>{r.name}</NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
