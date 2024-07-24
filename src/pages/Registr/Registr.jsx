import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import mail from "/mail-line.png";
import eye from "/eye-line.png";
import "./registr.scss";

export default function Registr() {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [errText, setErrText] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  async function createUser(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, Email, Password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            Email: user.email,
            id: user.uid,
            token: user.accesstoken,
          })
        );
        navigate("/");
        setErrText(false);
      })
      .catch((e) => {
        setErrText(true);
      });
  }

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
          {errText && (
            <h4 className="errorReg">Неправильно введен email или пароль</h4>
          )}
        </label>
      </form>
      <button className="reg-button" onClick={createUser}>
        Sign up
      </button>
      <div className="to-login">
        <p>Already have an account?</p>
        <Link to="/login" className="sign">
          Log in.
        </Link>
      </div>
    </div>
  );
}
