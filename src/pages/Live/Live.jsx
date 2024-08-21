import React from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";
import { Link } from "react-router-dom";
import love from "/love-yourself.png";
import hurt from "/we-hurt.png";
import hearts from "/hearts.png";
import people from "/people.png";
import jump from "/jump.png";
import "./live.scss";

export default function Live() {
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
    <div className="Live">
      <div className="container">
        <div className="header">
          <div className="forsignout">
            <h1 className="Therapy-h1">Live вебинары</h1>
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
        <div className="live-item">
          <Link to="/live/1" className="style-link">
            <div className="live-items">
              <img src={love} alt="" />
              <h4 className="live-h4">Поднятие самооценки</h4>
              <p className="live-text">5 апреля, 18:00</p>
            </div>
          </Link>
          <Link to="/live/2" className="style-link">
            <div className="live-items">
              <img src={hurt} alt="" />
              <h4 className="live-h4">Как справляться с болью?</h4>
              <p className="live-text">10 апреля, 11:00</p>
            </div>
          </Link>
          <Link to="/live/3" className="style-link">
            <div className="live-items">
              <img src={hearts} alt="" />
              <h4 className="live-h4">
                Почему вы считаете себя литромантиком?
              </h4>
              <p className="live-text">12 апреля, 10:00</p>
            </div>
          </Link>
          <Link to="/live/4" className="style-link">
            <div className="live-items">
              <img src={people} alt="" />
              <h4 className="live-h4">Как спорт влияет на нашу психику?</h4>
              <p className="live-text-about">
                Многие люди ходят в зал, чтобы снять напряжение...
              </p>
            </div>
          </Link>
          <Link to="/live/5" className="style-link">
            <div className="live-items">
              <img src={jump} alt="" />
              <h4 className="live-h4">Сон и его влияние на настроение</h4>
              <p className="live-text-about">
                Когда человек злой или грустный, его спрашивают...
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
