import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { signOut, getAuth } from "firebase/auth";
import "./cab.scss";
import lock from "/lock-line.png";
import moon from "/moon-line.png";
import not from "/notification-3-line.png";
import bag from "/shopping-bag-4-line.png";
import coins from "/database-2-line.png";
import chat from "/chat-smile-line.png";
import radio from "/rfid-fill.png";
import support from "/question-fill.png";
import quest from "/questionnaire-fill.png";
import global from "/global-line.png";

export default function Cab() {
  const [theme, setTheme] = useState("light");
  const [text, setText] = useState("Светлая тема");
  const [avatar, setAvatar] = useState(null);

  const AvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatar(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate();
  const auth = getAuth();
  function SignOutBtn() {
    signOut(auth);
    navigate("/login");
  }

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setText("Темная тема");
    } else {
      setTheme("light");
      setText("Светлая тема ");
    }
  };
  return (
    <div className={`${theme === "light" ? "light-theme" : "dark-theme"} Cab`}>
      <div className="container">
        <h1 className="profile">Профиль</h1>
        {avatar && <img src={avatar} alt="" className="avatar"/>}
        <input type="file" accept="image/*" onChange={AvatarChange}/>
        <h4 className="redact">Редактировать профиль</h4>
        <div className="profile-items">
          <div className="profile-item">
            <img src={lock} alt="" className="lock" />
            <p className="pin">Пин-код</p>
            <div className="iphone-switch">
              <input type="checkbox" id="switch" />
              <label for="switch"></label>
            </div>
          </div>
          <div className="profile-item">
            <img src={not} alt="" className="lock" />
            <p className="pin">Напоминание</p>
            <div className="iphone-switch marg">
              <input type="checkbox" id="switchId" />
              <label for="switchId"></label>
            </div>
          </div>
          <div className="profile-item">
            <img src={moon} alt="" className="lock" />
            <p className="pin"> {text}</p>
            <h4 className="change" onClick={changeTheme}>
              Изменить
            </h4>
          </div>
        </div>
        <div className="profile-items">
          <div className="profile-item">
            <img src={bag} alt="" className="lock" />
            <p className="pin">История покупок</p>
            <h4 className="change sec-change">Смотреть</h4>
          </div>
          <div className="profile-item">
            <img src={coins} alt="" className="lock" />
            <p className="pin">Карта</p>
            <h4 className="change th-change">Изменить</h4>
          </div>
        </div>
        <div className="profile-items">
          <div className="profile-item">
            <img src={chat} alt="" className="lock" />
            <p className="pin">Написать отзыв </p>
            <h4 className="change four-change">Смотреть</h4>
          </div>
          <div className="profile-item">
            <img src={radio} alt="" className="lock" />
            <p className="pin">Пройти опрос </p>
            <h4 className="change ">Пройти</h4>
          </div>
        </div>
        <div className="profile-items">
          <div className="profile-item">
            <img src={support} alt="" className="lock" />
            <p className="pin">Поддержка </p>
            <h4 className="change five-change">Написать</h4>
          </div>
          <div className="profile-item">
            <img src={quest} alt="" className="lock" />
            <p className="pin">О приложении </p>
          </div>
          <div className="profile-item">
            <img src={global} alt="" className="lock" />
            <p className="pin">Связаться </p>
          </div>
        </div>
      </div>
      <h4 className="leave" onClick={SignOutBtn}>
        Выйти
      </h4>
    </div>
  );
}
