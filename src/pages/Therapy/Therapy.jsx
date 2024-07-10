import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import ocean from "/ocean.png";
import "./therapy.scss";

export default function Therapy() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  function SignOutBtn() {
    signOut(auth);
    navigate("/login");
  }

  useEffect(() => {
    onAuthStateChanged(auth, (userServ) => {
      if (userServ) {
        setUser(userServ);
      } else {
        navigate("/login");
      }
    });
  });
  if (!user) {
    return;
  }

  return (
    <div className="Therapy">
      <div className="container">
        <div className="header">
          <div className="forsignout">
            <h1 className="Therapy-h1">Tерапия</h1>
            <button onClick={SignOutBtn} className="signOut">
              Sign Out
            </button>
          </div>
          <div className="menu">
            <Link to="/">
              <button className="items">Лекции</button>
            </Link>
            <Link to="/meditations">
              <button className="items">Медитации</button>
            </Link>
            <Link to="/therapists">
              <button className="items">Терапевты</button>
            </Link>
            <Link to="/live">
              <button className="items">Live вебинары</button>
            </Link>
          </div>
        </div>
        <div className="main">
          <h2 className="lectures">Лекции</h2>
          <div className="lecture-item">
            <div className="lecture-items">
              <img src={ocean} alt="" className="lecture-img" />
              <h4>Как справляться со стрессом и тревогой?</h4>
              <p>Стресс можно определить как негативную реакцию... </p>
            </div>
            <div className="lecture-items"></div>
            <div className="lecture-items"></div>
            <div className="lecture-items"></div>
            <div className="lecture-items"></div>
          </div>
        </div>
      </div>
      <Link to="/cab">Личный кабинет </Link>
    </div>
  );
}
