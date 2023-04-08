import { NavLink } from "react-router-dom";
import Logo from "@/assets/icon.png";
import OnixLogo from "@/components/icons/onixLogo";
import routes from "@/router/routes";
import DropdownList from "./DropdownList";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="logo">
        <img src={Logo} />
        <OnixLogo className="letters" />
      </NavLink>
      <nav className="list">
        {routes
          .filter((r) => !r.hideInNavbar)
          .map((r) =>
            (r.children || []).length > 0 ? (
              <DropdownList
                key={`${r.name}${r.path}`}
                title={r.name}
                to={r.path}
                options={r.children?.map(({ name, path }) => ({
                  name,
                  to: `${r.path}${path}`,
                }))}
              />
            ) : (
              <div key={`${r.name}${r.path}`}>
                <NavLink to={r.path}>{r.name}</NavLink>
              </div>
            )
          )}
      </nav>
    </div>
  );
};

export default Navbar;
