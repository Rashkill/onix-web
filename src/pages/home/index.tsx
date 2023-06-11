import ProductCard from "@/components/ProductCard";
import img from "@/assets/decoration_3.png";
import { useNavigate } from "react-router-dom";
import routes from "@/router/routes";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <header>
        <h1>
          Bienvenidx a <span color="pink">Onix</span>
        </h1>
        <h2>Tienda de Arte & Ilustraciones Propias</h2>
        <p>
          Nuestro objetivo es ofrecer productos con diseños e ilustraciones{" "}
          <b>100% originales</b> y dar a conocer nuestro arte. NO ofrecemos
          servicios de imprenta ni venta mayorista
        </p>
        <div className="buttons">
          <button color="primary">Contactanos</button>
          <button color="secondary">Pedí tu personalizado</button>
        </div>
      </header>
      <h2>Explorá nuestros productos</h2>
      <div className="products">
        {routes
          .find((r) => r.name === "Productos")
          ?.children?.map((p) => (
            <ProductCard
              key={p.path}
              img={p.img}
              onClick={() => navigate(`/products${p.path}`)}
            >
              <h3>{p.name}</h3>
            </ProductCard>
          ))}
      </div>
      <button color="primary" onClick={() => navigate("/products")}>
        Ver Catálogo Completo
      </button>
    </div>
  );
};

export default Home;
