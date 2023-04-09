import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import routes from "@/router/routes";

import "./header.scss";

const Header: React.FC<{ title: string; color?: string }> = ({
  title,
  color,
}) => {
  const location = useLocation();

  const name = useMemo(() => {
    //@ts-ignore
    const childrenLocations: {
      path: string;
      name: string;
      element: JSX.Element;
    }[] = routes
      .filter((r) => (r.children || [])?.length > 0 && !r.noHeader)
      //@ts-ignore
      .reduce((prev, curr) => [...(prev.children || prev), ...curr.children], {
        children: [],
      });

    if (childrenLocations.length <= 0) return title;

    return (
      childrenLocations.find(
        (c) => c.path === `/${location.pathname.split("/").slice(-1)[0]}`
      )?.name || title
    );
  }, [routes, title, location]);

  return (
    <div className="header" style={{ backgroundColor: color }}>
      <h2>{name}</h2>
    </div>
  );
};

export default Header;
