import React from "react";
import { useParams } from "react-router";
import therapists from "../../therapists.json";
import "./therapistspage.scss";

export default function TherapistsPage() {
  const { id } = useParams();
  const therapPage = therapists.find(
    (therapist) => therapist.id === parseInt(id)
  );

  return (
    <div className="TherapistsPage">
      <img src={therapPage.img} alt="" className="therapImg" />
      <h1 className="therapH1">{therapPage.name}</h1>
      <h4 className="therapH4">{therapPage.price}</h4>
      <details>
        <summary>О себе:</summary>
        <p className="grey-text">
          Помогаю взглянуть на себя с другой стороны,
          <br /> решитб проблемы, найти интерес к жизни
          <br /> и насытить её яркими красками
        </p>
        <h4>Работаю с:</h4>
        <li className="grey-text">Депрессия и тревожность</li>
        <li className="grey-text">Проблемы в отношениях</li>
        <li className="grey-text">Проблемы в семье</li>
        <h4>Принцип работы:</h4>
        <li className="grey-text">Эмпатия и пониимание</li>
        <li className="grey-text">Конфиденцифльность</li>
        <li className="grey-text">Сотрудничество</li>
        <p className="grey-text">
          Моя цель — создать доверительную
          <br /> и поддерживающую атмосферу во время
          <br />
          консультаций, чтобы клиенты чувствовали
          <br /> себя комфортно и могли открываться
          <br /> без страха осуждения. Я стремлюсь помочь
          <br /> каждому человеку найти свои внутренние
          <br /> ресурсы для преодоления трудностей
          <br /> и достижения гармонии в жизни.
        </p>
      </details>
    </div>
  );
}
