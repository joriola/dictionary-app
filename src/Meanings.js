import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definitions.definition}
              <br />
              <strong>Example: </strong>
              <em>{definitions.example}</em>
              <br />
              <Synonyms synonyms={definitions.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
