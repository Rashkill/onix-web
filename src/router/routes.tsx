import colors from "@/config/colors";
import ContactUs from "@/pages/contact-us";
import Home from "@/pages/home";
import Products from "@/pages/products";

import StickersImg from "@/assets/products/Stickers.png";
import ToteBagsImg from "@/assets/products/Totebags.png";
import PostersAndPostcardsImg from "@/assets/products/PostersAndPostcards.png";

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
      {
        path: "/totebags",
        name: "Tote Bags",
        img: ToteBagsImg,
        element: <>Tote Bags</>,
      },
      {
        path: "/stickers",
        name: "Stickers",
        img: StickersImg,
        element: <>Stickers</>,
      },
      {
        path: "/posters-postcards",
        name: "Posters & Postcards",
        img: PostersAndPostcardsImg,
        element: <>Posters and Postcards</>,
      },
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
    element: <ContactUs />,
    alt: true,
  },
  {
    path: "*",
    name: "Error404",
    element: <>Error 404</>,
    hideInNavbar: true,
    noHeader: true,
  },
];
