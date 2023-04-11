import OnixDecoration3 from "@/assets/decoration_3.png";

import "./contact-us.scss";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <form className="form"></form>
      <div className="decoration-wrapper">
        <img className="decoration" src={OnixDecoration3} draggable={false} />
      </div>
    </div>
  );
};

export default ContactUs;
