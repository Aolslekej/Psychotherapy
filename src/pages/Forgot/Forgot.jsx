import React, { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  getAuth,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from "firebase/auth";
import "./forgot.scss";
import { useNavigate } from "react-router";

export default function Forgot() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const auth = getAuth();
  const [infMess, setInfMess] = useState("");
  const [logLoad, setLogLoad] = useState(false);
  const [logErr, setLogErr] = useState("");

  const handleLogin = () => {
    setLogLoad(true);
    sendSignInLinkToEmail(auth, email, {
      url: "http://localhost:5173",
      handleCodeInApp: true,
    })
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        setInfMess("Ссылка отправлена на ваш email");
        setLogLoad(false);
        setLogErr("");
      })
      .catch((e) => {
        setLogLoad(false);
        setLogErr(e.message);
      });
  };

  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    }
    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        window.localStorage.removeItem("emailForSignIn");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div className="Forgot">
      <h1 className="yourEm">Введите ваш email</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="emInp"
      />
      <button className="get" onClick={handleLogin}>
        {logLoad ? (
          <span>Ссылка отправляется</span>
        ) : (
          <span>Получить ссылку</span>
        )}
      </button>
      {logErr && <h4 className="mess mess-err">{logErr}</h4>}
      {infMess && <h4 className="mess mess-sub">{infMess}</h4>}
      <a href="/login" className="backLog">
        Log in
      </a>
    </div>
  );
}
