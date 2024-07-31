import React from "react";
import "./lectionPage.scss";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import back from "/arrow-back.png";
import lections from "../../lections.json";

export default function LectionPage() {
  const { id } = useParams();
  const lectionPage = lections.lists.find(
    (lection) => lection.id === parseInt(id)
  );
  return (
    <div className="LectionPage">
      <Link to="/"><img src={back} alt="" /></Link>
      <h1 className="h1-lectpg">Лекции</h1>
      <img src={lectionPage.img} alt="" className="lecture-img img-lectpg"/>
      <h2 className="h2-lectpg">{lectionPage.title}</h2>
      <p className="text-lectpg">{lectionPage.text}</p>
    </div>
  );
}
