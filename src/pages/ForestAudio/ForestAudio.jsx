import React from "react";
import { useRef } from "react";
import { useState } from "react";

export default function ForestAudio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
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
      <audio controls>
        <source src="audio.mp3" ref={audioRef} />
      </audio>
      <button onClick={playAndPause}>{isPlaying ? "Пауза" : "Играть"}</button>
    </div>
  );
}
