import React from "react";
import { useState } from "react";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import "./forgot.scss";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const auth = getAuth();
  const actionCodeSettings = {
    url: 'myapp.com',
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.myapp.ios'
    },
    android: {
      packageName: 'com.myapp.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'myapp.page.link'
  };
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
