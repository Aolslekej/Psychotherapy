import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./forestaudio.scss";

export default function ForestAudio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const tracks = [
    {
      title: "Track 1",
      src: "/forestAudio.mp3",
    },
    {
      title: "Track 2",
      src: "/anti-stress.mp3",
    },
    {
      title: "Track 3",
      src: "/relaxAudio.mp3",
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
      <audio
        src={tracks[currentTrack].src}
        ref={audioRef}
        onEnded={playNextTrack}
      ></audio>
      <button onClick={playPrevTrack}>Prev</button>
      <button onClick={playAndPause}>{isPlaying ? "Играть" : "Пауза"}</button>
      <button onClick={playNextTrack}>Next</button>
    </div>
  );
}
