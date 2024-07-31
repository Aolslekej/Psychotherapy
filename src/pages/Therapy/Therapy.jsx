import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";
import ocean from "/ocean.jpeg";
import lego from "/lego.jpeg";
import bench from "/bench.jpeg";
import society from "/society.jpeg";
import enjoy from "/enjoy.jpeg";
import "./therapy.scss";

export default function Therapy() {
  const dispatch = useDispatch();
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
            <button
              onClick={() => {
                SignOutBtn();
                dispatch(removeUser());
              }}
              className="signOut"
            >
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
            <div
              className="lecture-items"
              onClick={() => {
                navigate("/ocean");
              }}
            >
              <img src={ocean} alt="" className="lecture-img" />
              <h4>Как справляться со стрессом и тревогой?</h4>
              <p>Стресс можно определить как негативную реакцию... </p>
            </div>
            <div
              className="lecture-items"
              onClick={() => {
                navigate("/lego");
              }}
            >
              <img src={lego} alt="" className="lecture-img" />
              <h4>Как научиться контролировать эмоции?</h4>
              <p>Эмоции играют важную роль в нашей жизни... </p>
            </div>
            <div
              className="lecture-items"
              onClick={() => {
                navigate("/bench");
              }}
            >
              <img src={bench} alt="" className="lecture-img" />
              <h4>Одиночество и одинокий: в чём разница?</h4>
              <p>Одиночество и одинокий часто путают, но...</p>
            </div>
            <div
              className="lecture-items"
              onClick={() => {
                navigate("/society");
              }}
            >
              <img src={society} alt="" className="lecture-img" />
              <h4>Как общество влияет на наше состояние?</h4>
              <p>Созависимость не только негативно влияет на...</p>
            </div>
            <div
              className="lecture-items"
              onClick={() => {
                navigate("/enjoy");
              }}
            >
              <img src={enjoy} alt="" className="lecture-img" />
              <h4>Как получать удовольствие от жизни?</h4>
              <p>Стресс можно определить как негативную реакцию... </p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/cab">Личный кабинет </Link>
    </div>
  );
}
