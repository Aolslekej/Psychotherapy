import React from "react";
import { useState, useEffect } from "react";
import "./review.scss";

export default function Review() {
  const [arr, setArr] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const storageRev = JSON.parse(localStorage.getItem(arr));
    if (storageRev) {
      setArr(storageRev);
    }
  },[]);

  const addRev = () => {
    setArr([...arr, name, phone, text]);
  };
  return (
    <div className="Review">
      <div className="container">
        <h1 className="rev-h1">Ваш отзыв</h1>
        <p className="rev-text">
          Напишите отзыв о нашем приложении.Это поможет нам стать лучше
        </p>
        <div>
          <div className="your-inf">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="inp-inf"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your number"
              className="inp-inf phone"
            />
          </div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="your-text"
            placeholder="Review"
          />
          <button
            className="send-rev"
            onClick={() => {
              addRev();
              setName("");
              setPhone("");
              setText("");
            }}
          >
            Send
          </button>
        </div>
      </div>
      <>
        {arr.map((item, index) => (
          <div className="block" key={index}>
            <h2 className="rev">{item}</h2>
          </div>
        ))}
      </>
    </div>
  );
}
