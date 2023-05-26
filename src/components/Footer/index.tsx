import OnixPlant from "@/assets/plant.png";
import Instagram from "@/components/icons/instagram";
import Email from "@/components/icons/email";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-box">
        <h3>
          Ponete en contacto <br /> con nosotrxs
        </h3>
        <ul className="contacts">
          <li>
            <a href="https://www.instagram.com/onix_ar" target="blank">
              <Instagram width={16} /> @onix_ar
            </a>
          </li>
          {/* <li>
            <a href="callto:342-1234567">
              <Phone width={16} /> 342-1234567 (wpp)
            </a>
          </li> */}
          <li>
            <a href="mailto:onixar.tienda@gmail.com">
              <Email width={16} /> onixar.tienda@gmail.com
            </a>
          </li>
        </ul>
        <img className="plant" src={OnixPlant} draggable={false} />
      </div>
    </footer>
  );
};

export default Footer;
