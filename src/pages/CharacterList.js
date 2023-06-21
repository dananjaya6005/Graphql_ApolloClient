import React from "react";
import "./Character.css";
import { UseCharacters } from "../hooks/UseCharacters";
import { Link, useParams } from "react-router-dom";

export default function CharacterList() {
  const { error, loading, data } = UseCharacters();

  console.log({ error, loading, data });

  return (
    <>
      <div className="character_list">
        {data &&
          data.characters &&
          data.characters.results.map((character) => {
            return (
              <>
                <Link to={`/${character.id}`}>
                  <h2>{character.name}</h2>
                  <h3>{character.gender}</h3>
                  <img src={character.image} />
                </Link>
              </>
            );
          })}

        {/* {data && data.characters ? 
    data.characters.results.map((character) => {
      return (
        <div key={character.name}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      );
    })
    : null
  } */}
      </div>
    </>
  );
}
