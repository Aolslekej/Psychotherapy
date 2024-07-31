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
  const [user] = useAuthState(auth);
  const [infMess, setInfMess] = useState("");
  const [logLoad, setLogLoad] = useState(false);
  const [logErr, setLogErr] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = localStorage.getItem("email");
        if (!email) {
          email = window.prompt("Подтвердите ваш email");
        }
        signInWithEmailLink(
          auth,
          localStorage.getItem("email"),
          window.location.href
        )
          .then((result) => {
            console.log(result.user);
            localStorage.removeItem("email");
            navigate("/");
          })
          .catch((e) => {
            console.log(e.message);
            navigate("/login");
          });
      }
    }
  }, []);

  const handleLogin = () => {
    setLogLoad(true);
    sendSignInLinkToEmail(auth, email, {
      url: "http://localhost:5173",
      handleCodeInApp: true,
    })
      .then(() => {
        localStorage.setItem("email", email);
        setInfMess("Ссылка отправлена на ваш email");
        setLogLoad(false);
        setLogErr("");
      })
      .catch((e) => {
        setLogLoad(false);
        setLogErr(e.message);
      });
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
