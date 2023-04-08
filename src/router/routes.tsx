import Home from "@/pages/home";
import Products from "@/pages/products";

export default [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    hideInNavbar: true,
  },
  {
    path: "/products",
    name: "Productos",
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
    element: <>Personalizados</>,
  },
];
