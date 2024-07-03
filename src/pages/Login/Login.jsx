import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import mail from "/mail-line.png";
import eye from "/eye-line.png";
import "./login.scss";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [errText, setErrText] = useState(false)
  const auth = getAuth();
  const navigate = useNavigate();
  function loginUser() {
    signInWithEmailAndPassword(auth, Email, Password)
      .then((user) => {
        setErrText(false);
        console.log(user);
        navigate("/");
      })
      .catch((e) => setErrText(true));
  }

  return (
    <div className="Login">
      <h1 className="welcome">Welcome back!</h1>
      <form action="" className="log">
        <label htmlFor="" className="label">
          Your e-mail
          <div className="input">
            <input
              type="text"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="text"
            />
            <img src={mail} alt="" className="img" />
          </div>
        </label>
        <label htmlFor="" className="label">
          Password
          <div className="input">
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              className="text"
            />
            <img src={eye} alt="" className="img" />
          </div>
          {errText && <h4 className="error">Не верный email или пароль</h4>}
        </label>
      </form>
      <a href="" className="forgot">
        Forgot Password?
      </a>
      <button className="log-button" onClick={loginUser}>
        Log in
      </button>
      <div className="to-sign">
        <p>Don’t have an account?</p>
        <Link to="/registr" className="sign">
          Sign up now.
        </Link>
      </div>
    </div>
  );
}
