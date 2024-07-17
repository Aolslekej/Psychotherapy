import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { signOut, getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/storage";
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
import { Link } from "react-router-dom";

export default function Cab() {
  const [theme, setTheme] = useState("light");
  const [text, setText] = useState("Светлая тема");
  const [avatar, setAvatar] = useState(null);
  const [checked, setChecked] = useState(false);
  const [pin, setPin] = useState("");

  useEffect(() => {
    const storedPin = localStorage.getItem("pin");
    if (storedPin) {
      setPin(storedPin);
    }
  }, []);

  function generatePin() {
    return Math.floor(1000 + Math.random() * 9000);
  }

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      const pin = generatePin();
      localStorage.setItem("pin", pin);
      setPin(`Ваш ПИН-код: ${pin}`);
    } else {
      localStorage.removeItem("pin");
      setPin("ПИН-код удален");
    }
  };

  const AvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatar(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);

     /*const storageRef = firebase.storage().ref();
      const avatarRef = storageRef.child(`avatars/${file.name}`);

      avatarRef
        .put(file)
        .then(() => {
          console.log("Успешно");
        })
        .catch((e) => {
          console.log(e);
        });*/
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
        {avatar && <img src={avatar} alt="" className="avatar" />}
        <input
          type="file"
          accept="image/*"
          onChange={AvatarChange}
          className="inp-av"
        />
        <h4 className="redact">Редактировать профиль</h4>
        <div className="profile-items">
          <div className="profile-item">
            <img src={lock} alt="" className="lock" />
            <p className="pin">Пин-код</p>
            <div className="iphone-switch">
              <input
                type="checkbox"
                id="switch"
                onChange={handleCheckboxChange}
                checked={checked}
              />
              <label for="switch"></label>
            </div>
            <h2 className="pin-code">{pin}</h2>
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
            <img src={chat} alt="" className="lock" />
            <p className="pin">Написать отзыв </p>
            <Link to="/rev" className="change four-change">
              Смотреть
            </Link>
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
            <Link to="/onboarding" className="pin">
              О приложении{" "}
            </Link>
          </div>
          <div className="profile-item">
            <img src={global} alt="" className="lock" />
            <Link to="/contact" className="pin cont">Связаться </Link>
          </div>
        </div>
      </div>
      <h4 className="leave" onClick={SignOutBtn}>
        Выйти
      </h4>
    </div>
  );
}
