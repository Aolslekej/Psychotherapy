import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import mail from "/mail-line.png";
import eye from "/eye-line.png";
import "./registr.scss";

export default function Registr() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  /*const auth = getAuth();

  async function createUser(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, Email, Password).then(
      (currentUser) => {
        console.log(currentUser);
      }
    );
  }*/

  return (
    <div className="Registr">
      <h1 className="become">Become a member!</h1>
      <form action="" className="reg">
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
        </label>
      </form>
      <button className="reg-button">Sign up</button>
      <div className="to-login">
        <p>Already have an account?</p>
        <Link to="/login" className="sign">
          Log in.
        </Link>
      </div>
    </div>
  );
}
