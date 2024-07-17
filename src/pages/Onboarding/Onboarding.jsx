import React from "react";
import { useState } from "react";
import "./onboarding.scss";
import emotions from "/emotions.png";
import therapy from "/therapy.png";
import stat from "/stat.png";
import arrow from "/arrow.png";
import { Link } from "react-router-dom";

const slides = [
  {
    img: emotions,
    title: "Отслеживайте свои эмоции",
    text: "Отмечайте в дневнике ваше настроение, чем вы занимались и что чувствовали в тот момент",
  },
  {
    img: therapy,
    title: "Терапия",
    text: "С помощью разных видов терапии вы сможете улучшить свою психическую устойчивость и благополучие.Также научитесь распознавать и решать проблемы.",
  },
  {
    img: stat,
    title: "Статистика",
    text: `Покажет вам: Реальную картину вашего эмоционального состояния.Что приводит к возникновению тех или иных чувств.`,
  },
  { title: "Советы", text: "Делайте записи регулярно.Относитесь непредвзято, пишите всё, что вы на самом деле чувствуете и думаете.В «Заметки» вы можете выплеснуть всё, что накопилось и использовать как личный дневник." },
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };
  return (
    <div className="slider">
      <div>
        <img src={slides[currentSlide].img} alt="" />
        <h2 className="title">{slides[currentSlide].title}</h2>
        <p className="slide-text">{slides[currentSlide].text}</p>
      </div>
      <div className="arrows">
        <img src={arrow} alt="" onClick={prevSlide} className="back-ar" />
        <img src={arrow} alt="" onClick={nextSlide} className="next-ar" />
      </div>
      <Link to="/cab" className="to-cab">
        Back
      </Link>
    </div>
  );
}
