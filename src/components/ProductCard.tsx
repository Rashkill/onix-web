import DefaultImg from "@/assets/Onix.jpg";
const ProductCard: React.FC<{
  img?: string;
  onClick?: () => void;
  children?: React.ReactElement;
}> = ({ img, onClick, children }) => {
  return (
    <div
      className={`product-card${onClick ? " clickable" : ""}`}
      onClick={onClick}
    >
      <img src={img || DefaultImg} alt="" draggable={false} />
      <div className="info">{children}</div>
    </div>
  );
};

export default ProductCard;
