import { useState } from "react";
import { NavLink } from "react-router-dom";

import ChevronDown from "@/components/icons/chevronDown";

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
      onMouseEnter={() =>
        !window.matchMedia("(max-width: 600px)").matches && setShowList(true)
      }
      onMouseLeave={() => setShowList(false)}
    >
      <NavLink
        className="title"
        to={to || "#"}
        onClick={(e) => {
          if (window.matchMedia("(max-width: 600px)").matches) {
            e.preventDefault();
            setShowList((prev) => !prev);
          }
        }}
      >
        <p>{title}</p>
        <ChevronDown
          style={{
            margin: "0 2px",
          }}
        />
      </NavLink>

      <ul className={showList ? "visible" : ""}>
        {options.map((o) => (
          <li key={`${o.name}${o.to}`}>
            <NavLink
              to={o.to || "#"}
              onClick={() => {
                setShowList(false);
                onClick?.();
              }}
            >
              {o.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownList;
