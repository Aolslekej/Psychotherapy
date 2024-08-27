import React from "react";
import { useRef } from "react";
import { useState } from "react";
import skip from "/skip.png";
import start from "/start.png";
import pause from "/pause.png";
import "./forestaudio.scss";

export default function ForestAudio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(0);

  const tracks = [
    {
      title: "Forest",
      sound: "Fir",
      src: "/forestAudio.mp3",
    },
    {
      title: "Forest",
      sound:"Birds",
      src: "/anti-stress.mp3",
    },
    {
      title: "Forest",
      sound:"Evening",
      src: "/evening.mp3",
    },
  ];

  const playNextTrack = () => {
    const nextTrack = (currentTrack + 1) % tracks.length;
    setCurrentTrack(nextTrack);
    audioRef.current.src = tracks[nextTrack].src;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const playPrevTrack = () => {
    const prevTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    setCurrentTrack(prevTrack);
    audioRef.current.src = tracks[prevTrack].src;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const playAndPause = () => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="ForestAudio">
      <h2 className="audio-h2">{tracks[currentTrack].title}</h2>
      <h4 className="audio-h4">{tracks[currentTrack].sound}</h4>
      <audio
        src={tracks[currentTrack].src}
        ref={audioRef}
        onEnded={playNextTrack}
      ></audio>
      <div className="audio-menu">
        <button onClick={playPrevTrack} className="audio-button">
          <img src={skip} alt="" className="audio-reverse" />
        </button>
        <button onClick={playAndPause} className="play-button">
          <img src={isPlaying ? start : pause} alt="" className="audio-img" />
        </button>
        <button onClick={playNextTrack} className="audio-button">
          <img src={skip} alt="" />
        </button>
      </div>
    </div>
  );
}
