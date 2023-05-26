import { NavLink } from "react-router-dom";

import ChevronDown from "@/components/icons/chevronDown";
import { useState } from "react";

type DropdownListProps = {
  title: string;
  to: string;
  options?: { name: string; to: string }[];
  active?: boolean;
  onClick?: () => void;
};

const DropdownList: React.FC<DropdownListProps> = ({
  title,
  to,
  options = [],
  onClick,
}) => {
  const [showList, setShowList] = useState(false);
  return (
    <div
      className="dropdown-list"
      onMouseEnter={() => setShowList(true)}
      onMouseLeave={() => setShowList(false)}
      onClick={onClick}
    >
      <NavLink
        className="title"
        to={to || "#"}
        onClick={() => setShowList(false)}
      >
        <p>{title}</p>
        <ChevronDown style={{ pointerEvents: "none" }} />
      </NavLink>

      {showList && (
        <ul>
          {options.map((o) => (
            <li key={`${o.name}${o.to}`}>
              <NavLink to={o.to || "#"} onClick={() => setShowList(false)}>
                {o.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
