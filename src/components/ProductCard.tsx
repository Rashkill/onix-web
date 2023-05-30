import DefaultImg from "@/assets/Onix.jpg";
const ProductCard: React.FC<{
  img?: string;
  children?: React.ReactElement;
}> = ({ img, children }) => {
  return (
    <div className="product-card">
      <img src={img || DefaultImg} alt="" draggable={false} />
      <div className="info">{children}</div>
    </div>
  );
};

export default ProductCard;
