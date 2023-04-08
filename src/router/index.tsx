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
    routes.map(({ path, element }) => ({
      path,
      element: <Wrapper />,
      children: [{ path, element }],
    }))
  );
};

export default Router;
