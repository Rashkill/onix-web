import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "@/assets/icon.png";
import OnixLogo from "@/components/icons/onixLogo";
import ArrowUpRight from "@/components/icons/arrowUpRight";

import routes from "@/router/routes";

import DropdownList from "./DropdownList";
import BurgerMenuIcon from "../icons/burgerMenu";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
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
              onClick={() => setMenuVisible(false)}
            />
          );
        if (r.alt)
          return (
            <NavLink
              key={`${r.name}${r.path}`}
              to={r.path}
              onClick={() => setMenuVisible(false)}
            >
              <div className="contact-us-button">
                {r.name} <ArrowUpRight width={20} />
              </div>
            </NavLink>
          );
        return (
          <NavLink
            key={`${r.name}${r.path}`}
            to={r.path}
            className="navlink"
            onClick={() => setMenuVisible(false)}
          >
            {r.name}
          </NavLink>
        );
      });
  }, [routes]);

  return (
    <>
      <div
        className={`navbar-backdrop${menuVisible ? " visible" : ""}`}
        onClick={() => setMenuVisible(false)}
      />
      <div className="navbar">
        <NavLink to="/" className="logo">
          <img src={Logo} draggable={false} />
          <OnixLogo className="letters" />
        </NavLink>
        <button
          className="btn-icon burger-icon"
          onClick={() => setMenuVisible((prev) => !prev)}
        >
          <BurgerMenuIcon color="white" />
        </button>
        <nav className={`list${menuVisible ? " visible" : ""}`}>{buttons}</nav>
      </div>
    </>
  );
};

export default Navbar;
