import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Wrapper from "./Wrapper";
import "./router.scss";

const Router = () => {
  return useRoutes(
    routes.map(({ path, element, children, noHeader, name, color }) => ({
      path,
      element: (
        <Wrapper showHeader={!noHeader} headerInfo={{ title: name, color }} />
      ),
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
