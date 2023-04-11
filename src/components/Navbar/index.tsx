import { useMemo } from "react";
import { NavLink } from "react-router-dom";

import Logo from "@/assets/icon.png";
import OnixLogo from "@/components/icons/onixLogo";
import ArrowUpRight from "@/components/icons/arrowUpRight";

import routes from "@/router/routes";

import DropdownList from "./DropdownList";
import "./navbar.scss";

const Navbar = () => {
  const buttons = useMemo(() => {
    return routes
      .filter((r) => !r.hideInNavbar)
      .map((r) => {
        if ((r.children || []).length > 0)
          return (
            <DropdownList
              key={`${r.name}${r.path}`}
              title={r.name}
              to={r.path}
              options={r.children?.map(({ name, path }) => ({
                name,
                to: `${r.path}${path}`,
              }))}
            />
          );
        if (r.alt)
          return (
            <NavLink key={`${r.name}${r.path}`} to={r.path}>
              <div className="contact-us">
                {r.name} <ArrowUpRight width={20} />
              </div>
            </NavLink>
          );
        return (
          <NavLink key={`${r.name}${r.path}`} to={r.path}>
            {r.name}
          </NavLink>
        );
      });
  }, [routes]);

  return (
    <div className="navbar">
      <NavLink to="/" className="logo">
        <img src={Logo} draggable={false} />
        <OnixLogo className="letters" />
      </NavLink>
      <nav className="list">{buttons}</nav>
    </div>
  );
};

export default Navbar;
