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
import userFill from "/user-fill.png";
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
          <Link to="/cab"><img src={userFill} alt="" className="userFill"/></Link>
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
            <Link to="/lections/1" className="link">
              <div className="lecture-items">
                <img src={ocean} alt="" className="lecture-img" />
                <h4 className="lect-h4">
                  Как справляться со стрессом и тревогой?
                </h4>
                <p className="lect-text">
                  Стресс можно определить как негативную реакцию... 
                </p>
              </div>
            </Link>
            <Link to="/lections/2" className="link">
              <div className="lecture-items">
                <img src={lego} alt="" className="lecture-img" />
                <h4 className="lect-h4">
                  Как научиться контролировать эмоции?
                </h4>
                <p className="lect-text">
                  Эмоции играют важную роль в нашей жизни... 
                </p>
              </div>
            </Link>
            <Link to="/lections/3" className="link">
              <div className="lecture-items">
                <img src={bench} alt="" className="lecture-img" />
                <h4 className="lect-h4">
                  Одиночество и одинокий: в чём разница?
                </h4>
                <p className="lect-text">
                  Одиночество и одинокий часто путают, но...
                </p>
              </div>
            </Link>
            <Link to="/lections/4" className="link">
              <div className="lecture-items">
                <img src={society} alt="" className="lecture-img" />
                <h4 className="lect-h4">
                  Как общество влияет на наше состояние?
                </h4>
                <p className="lect-text">
                  Созависимость не только негативно влияет на...
                </p>
              </div>
            </Link>
            <Link to="/lections/5" className="link">
              <div className="lecture-items">
                <img src={enjoy} alt="" className="lecture-img" />
                <h4 className="lect-h4">Как получать удовольствие от жизни?</h4>
                <p className="lect-text">
                  Стресс можно определить как негативную реакцию... 
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
