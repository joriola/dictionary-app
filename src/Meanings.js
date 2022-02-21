import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <div className="definition mt-3">{definitions.definition}</div>
            <div className="example">{definitions.example}</div>
            <Synonyms synonyms={definitions.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
