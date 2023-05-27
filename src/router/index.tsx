import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Wrapper from "./Wrapper";
import "./router.scss";

const routesScreens = routes.map(
  ({ path, element, children, noHeader, name, color }) => ({
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
  })
);
console.log(routesScreens);
const Router = () => {
  return useRoutes(routesScreens);
};

export default Router;
