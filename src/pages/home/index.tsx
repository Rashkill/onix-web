import ProductCard from "@/components/ProductCard";
import img from "@/assets/logo.png";
const Home = () => {
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
        <div>
          <button color="primary">Contactanos</button>
          <button color="secondary">Pedí tu personalizado</button>
        </div>
      </header>
      <h2>Explorá nuestros productos</h2>
      <div className="products">
        <ProductCard>
          <h3>Stickers</h3>
        </ProductCard>
        <ProductCard>
          <h3>ToteBags</h3>
        </ProductCard>
        <ProductCard>
          <h3>Posters & Postcards</h3>
        </ProductCard>
      </div>
      <button color="primary">Ver Catálogo Completo</button>
    </div>
  );
};

export default Home;
