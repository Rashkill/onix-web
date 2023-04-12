import OnixDecoration3 from "@/assets/decoration_3.png";

import "./contact-us.scss";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <form className="form">
        <h3 className="title">
          Dejanos un mensaje y nos pondremos en contacto!
        </h3>
      </form>
      <div className="decoration-wrapper">
        <img className="decoration" src={OnixDecoration3} draggable={false} />
      </div>
    </div>
  );
};

export default ContactUs;
