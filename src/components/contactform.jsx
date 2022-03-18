import * as React from "react";
import { btn, btnIcon } from "./contactform.module.css";

const ContactForm = () => {
  return (
    <section className="section" id="contact-form">
      <form
        className="form"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <h2>¿Cómo podemos colaborar?</h2>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="field">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Correo electrónico</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            paddingTop: "2.4rem",
          }}
        >
          <button className={btn} type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={btnIcon}
            >
              <title>Send</title>
              <path d="M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z" />
            </svg>
            <span>Enviar</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
