import React from "react";
import "./Phonetics.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics d-flex">
      <AudioPlayer
        src={props.phonetics.audio}
        autoPlay={false}
        autoPlayAfterSrcChange={false}
        customVolumeControls={[]}
        customAdditionalControls={[]}
        customProgressBarSection={[]}
        showJumpControls={false}
        style={{ width: "50px" }}
        layout="horizontal-reverse"
      />
      <span className="text">{props.phonetics.text}</span>
    </div>
  );
}
