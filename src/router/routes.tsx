import colors from "@/config/colors";
import Home from "@/pages/home";
import Products from "@/pages/products";

export default [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    hideInNavbar: true,
    noHeader: true,
  },
  {
    path: "/products",
    name: "Productos",
    color: colors.Orange,
    element: <Products />,
    children: [
      { path: "/totebags", name: "ToteBags", element: <>Tote Bags</> },
      { path: "/stickers", name: "Stickers", element: <>Stickers</> },
      { path: "/posters", name: "Posters", element: <>Posters</> },
      { path: "/postcards", name: "Postcards", element: <>Postcards</> },
    ],
  },
  {
    path: "/custom",
    name: "Personalizados",
    color: colors.Purple,
    element: <>Personalizados</>,
  },
  {
    path: "/contact-us",
    name: "Contactanos",
    color: colors.LightYellow,
    element: <>Contactanos</>,
    hideInNavbar: true,
  },
  {
    path: "*",
    name: "Error404",
    element: <>Error 404</>,
    hideInNavbar: true,
    noHeader: true,
  },
];
