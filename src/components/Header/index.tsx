import "./header.scss";

const Header: React.FC<{ title: string; color?: string }> = ({
  title,
  color,
}) => {
  return (
    <div className="header" style={{ backgroundColor: color }}>
      <h2>{title}</h2>
    </div>
  );
};

export default Header;
