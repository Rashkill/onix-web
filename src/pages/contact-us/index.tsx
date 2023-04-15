import OnixDecoration3 from "@/assets/decoration_3.png";
import FormController from "@/components/FormController";

import { useForm } from "react-hook-form";

import "./contact-us.scss";

const ContactUs = () => {
  const { control } = useForm();
  return (
    <div className="contact-us">
      <form className="form">
        <h3 className="title">
          Dejanos un mensaje y nos pondremos en contacto!
        </h3>
        <FormController
          name="name"
          label="Nombre"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </form>
      <div className="decoration-wrapper">
        <img className="decoration" src={OnixDecoration3} draggable={false} />
      </div>
    </div>
  );
};

export default ContactUs;
