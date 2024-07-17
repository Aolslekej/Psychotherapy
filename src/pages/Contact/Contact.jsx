import React from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="Contact">
      <h1 className="h1-cont">Наши контакты</h1>
      <div className="cont-dis">
        <div className="cont-block">
          <h2 className="ph">+375445584244</h2>
          <h4 className="or">or</h4>
          <h2 className="ph">+375295892566</h2>
        </div>
        <div className="cont-block">
          <h2 className="ph">vadim_baranovsky@mail.ru</h2>
          <h4 className="or">or</h4>
          <h2 className="ph">aalcxek@mail.ru</h2>
        </div>
      </div>
    </div>
  );
}
