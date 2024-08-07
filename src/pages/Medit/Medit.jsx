import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";
import sleeping from "/sleeping.png";
import balance from "/balance.png";
import guitar from "/guitar.png";
import lotus from "/lotus.png";
import forNew from "/new.png";
import stress from "/stress.png";
import "./medit.scss";

export default function Medit() {
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
    <div className="Medit">
      <div className="container">
        <div className="header">
          <div className="forsignout">
            <h1 className="Therapy-h1">Выбрать медитацию</h1>
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
        <div className="med-item">
          <div className="med-items">
            <img src={sleeping} alt="" className="med-img" />
            <h4 className="med-h4">Для сна</h4>
            <p className="med-text">
              Расслабление и<br /> улучшение сна
            </p>
          </div>
          <div className="med-items">
            <img src={balance} alt="" className="med-img" />
            <h4 className="med-h4">На работе/учебе</h4>
            <p className="med-text">
              Быстрая медитация
              <br /> для перезагрузки
            </p>
          </div>
          <div className="med-items">
            <img src={lotus} alt="" className="med-img" />
            <h4 className="med-h4">Глубокая медитация</h4>
            <p className="med-text">
              Длительная медитация
              <br /> для погружения в себя
            </p>
          </div>
          <div className="med-items">
            <img src={guitar} alt="" className="med-img" />
            <h4 className="med-h4">Музыкальная</h4>
            <p className="med-text">
              Улучшает настроение,
              <br /> снижает стресс,
              <br /> выводит из депрессии
            </p>
          </div>
          <div className="med-items">
            <img src={stress} alt="" className="med-img" />
            <h4 className="med-h4"> Для снижения стресса</h4>
            <p className="med-text">
              Повышает
              <br /> стрессоустойчивость
            </p>
          </div>
          <div className="med-items">
            <img src={forNew} alt="" className="med-img" />
            <h4 className="med-h4">Для новичков</h4>
            <p className="med-text">
              Обучающий
              <br /> материал
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
