import React from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";
import { Link } from "react-router-dom";
import Oleg from "/Oleg.png";
import Anna from "/Anna.png";
import Kate from "/Kate.png";
import Alina from "/Alina.png";
import Olga from "/Olga.png";
import Ivan from "/Ivan.png";
import "./therapists.scss";

export default function Therapists() {
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
    <div className="Therapists">
      <div className="container">
        <div className="header">
          <div className="forsignout">
            <h1 className="Therapy-h1">Терапевты</h1>
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
        <div className="therapists-item">
          <Link to="/therapists/1" className="style-link">
            <div className="therapists-items">
              <img src={Oleg} alt="" />
              <h3 className="name-h3">Олег Куров</h3>
              <h4 className="work-h4">Психолог</h4>
              <p className="price-p">Сессия 50 минут, 20$</p>
            </div>
          </Link>
          <Link to="/therapists/2" className="style-link">
            <div className="therapists-items">
              <img src={Anna} alt="" />
              <h3 className="name-h3">Анна Туричева</h3>
              <h4 className="work-h4">Психотерапевт</h4>
              <p className="price-p">Сессия 50 минут, 20$</p>
            </div>
          </Link>
          <Link to="/therapists/3" className="style-link">
            <div className="therapists-items">
              <img src={Kate} alt="" />
              <h3 className="name-h3">Катя Лиман</h3>
              <h4 className="work-h4">Психиатр</h4>
              <p className="price-p">Сессия 80 минут, 40$</p>
            </div>
          </Link>
          <Link to="/therapists/4" className="style-link">
            <div className="therapists-items">
              <img src={Alina} alt="" />
              <h3 className="name-h3">Алина Кунт</h3>
              <h4 className="work-h4">Психотерапевт</h4>
              <p className="price-p">Сессия 70 минут, 25$</p>
            </div>
          </Link>
          <Link to="/therapists/5" className="style-link">
            <div className="therapists-items">
              <img src={Olga} alt="" />
              <h3 className="name-h3">Ольга Шивко</h3>
              <h4 className="work-h4">Психиатр</h4>
              <p className="price-p">Сессия 60 минут, 35$</p>
            </div>
          </Link>
          <Link to="/therapists/6" className="style-link">
            <div className="therapists-items">
              <img src={Ivan} alt="" />
              <h3 className="name-h3">Иван Домиров</h3>
              <h4 className="work-h4">Психиатр</h4>
              <p className="price-p">Сессия 60 минут, 25$</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
