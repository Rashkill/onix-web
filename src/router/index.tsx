import Navbar from "@/components/Navbar";
import { Outlet, useRoutes } from "react-router-dom";
import routes from "./routes";
import "./router.scss";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
    </div>
  );
};

const Router = () => {
  return useRoutes(
    routes.map(({ path, element, children }) => ({
      path,
      element: <Wrapper />,
      children: [
        { path, element },
        ...(children || [])?.map((c) => ({
          path: `${path}${c.path}`,
          element: c.element,
        })),
      ],
    }))
  );
};

export default Router;
