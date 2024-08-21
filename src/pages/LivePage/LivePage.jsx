import React from "react";
import { useParams } from "react-router";
import live from "../../live.json";
import "./livepage.scss";

export default function LivePage() {
  const { id } = useParams();
  const livePage = live.find((item) => item.id === parseInt(id));
  return (
    <div className="LivePage">
      <img src={livePage.img} alt="" className="livepg-img"/>
      <h1 className="livepg-h1">{livePage.header}</h1>
      <h4 className="livepg-h4">{livePage.date}</h4>
      <p className="livepg-text">
        На вебинаре о поднятии самооценки
        <br /> мы рассмотрим широкий спектр тем, связанных
        <br /> с улучшением отношения к себе и повышением
        <br /> уверенности.
        <br />
        <br /> Основы самооценки
        <br /> Факторы, которые на неё влияют
        <br /> Препятствия на пути к любви к себе
        <br /> Стратегии улучшения самооценки
        <br /> Упражнения и инстурменты
      </p>
    </div>
  );
}
