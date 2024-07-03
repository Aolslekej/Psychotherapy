import React from "react";
import { useState } from "react";
import "./forgot.scss";

export default function Forgot() {
  const [email, setEmail] = useState("");
  return (
    <div className="Forgot">
      <h1 className="yourEm">Введите ваш email</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="emInp"
      />
      <button className="get">Получить ссылку</button>
      <a href="/login" className="backLog">
        Log in
      </a>
    </div>
  );
}
