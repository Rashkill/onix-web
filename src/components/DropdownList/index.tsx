import { NavLink } from "react-router-dom";
import "./dropdown-list.scss";
import ChevronDown from "../icons/chevronDown";
import { useState } from "react";

type DropdownListProps = {
  title: string;
  to: string;
  options?: { name: string; to: string }[];
  active?: boolean;
};

const DropdownList: React.FC<DropdownListProps> = ({
  title,
  to,
  options = [],
}) => {
  const [showList, setShowList] = useState(false);
  return (
    <div
      className="dropdown-list"
      onMouseEnter={() => setShowList(true)}
      onMouseLeave={() => setShowList(false)}
    >
      <NavLink className="title" to={to || "#"}>
        <p>{title}</p>
        <ChevronDown style={{ pointerEvents: "none" }} />
      </NavLink>

      {showList && (
        <ul>
          {options.map((o) => (
            <li key={`${o.name}${o.to}`}>
              <NavLink to={o.to || "#"}>{o.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
