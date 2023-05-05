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
        <div className="row">
          <FormController
            name="name"
            label="Nombre"
            control={control}
            render={({ field }) => <input {...field} />}
          />
          <FormController
            name="lastName"
            label="Apellido"
            control={control}
            render={({ field }) => <input {...field} />}
          />
        </div>
        <div className="row">
          <FormController
            name="phone"
            label="Teléfono"
            control={control}
            render={({ field }) => <input {...field} />}
          />
          <FormController
            name="email"
            label="E-mail"
            control={control}
            render={({ field }) => <input {...field} />}
          />
        </div>
        <FormController
          name="message"
          label="Mensaje"
          control={control}
          render={({ field }) => <textarea {...field} />}
        />
      </form>
      <div className="decoration-wrapper">
        <img className="decoration" src={OnixDecoration3} draggable={false} />
      </div>
    </div>
  );
};

export default ContactUs;
