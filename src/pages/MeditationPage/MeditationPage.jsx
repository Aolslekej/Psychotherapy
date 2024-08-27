import React from "react";
import meditations from "../../meditations.json";
import { Link } from "react-router-dom";
import back from "/arrow-back.png";
import { useParams } from "react-router";
import mic from "/mic-fill.png";
import time from "/time-fill.png";
import "./meditationpage.scss";

export default function MeditationPage() {
  const { id } = useParams();
  const meditationpage = meditations.find((medit) => medit.id === parseInt(id));
  const style1 = {
    backgroundImage: `url(${meditationpage.img})`,
  };
  const style2 = {
    backgroundImage: `url(${meditationpage.img2})`,
  };
  const style3 = {
    backgroundImage: `url(${meditationpage.img3})`,
  };
  return (
    <div className="MeditationPage">
      <Link to="/meditations">
        <img src={back} alt="" />
      </Link>
      <h1 className="meditPage-h1">{meditationpage.h1}</h1>
      <Link to="/audio" className="style-link">
        <div className=" for-all-blocks" style={style1}>
          <div className="blur-block">
            <h3 className="meditPage-h3">{meditationpage.titlefirst}</h3>
            <div className="disp-block">
              <img src={mic} alt="" className="disp-img" />
              <p className="disp-text">Запись</p>
              <img src={time} alt="" className="disp-img" />
              <p className="disp-text">{meditationpage.timefirst}</p>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/anti-stress" className="style-link">
        <div className="meditPage-block-2 for-all-blocks" style={style2}>
          <div className="blur-block">
            <h3 className="meditPage-h3">{meditationpage.titlesecond}</h3>
            <div className="disp-block">
              <img src={mic} alt="" className="disp-img" />
              <p className="disp-text">Запись</p>
              <img src={time} alt="" className="disp-img" />
              <p className="disp-text">{meditationpage.timefirst}</p>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/relax">
        <div className="meditPage-block-3 for-all-blocks" style={style3}>
          <div className="blur-block">
            <h3 className="meditPage-h3">{meditationpage.titlethird}</h3>
            <div className="disp-block">
              <img src={mic} alt="" className="disp-img" />
              <p className="disp-text">Запись</p>
              <img src={time} alt="" className="disp-img" />
              <p className="disp-text">{meditationpage.timefirst}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
