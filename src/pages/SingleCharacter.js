import React from "react";
import { useParams } from "react-router-dom";
import { SingleUserCharacter } from "../hooks/SingleUserCharacter";

export default function SingleCharacter() {
  const { id } = useParams();

  const { error, loading, data } = SingleUserCharacter(id);

  if (loading) {
    return <h2> wait !! loading </h2>;
  }
  return (
    <div>
      <>
        <h1>{data.character.name}</h1>
        <h2>{data.character.status}</h2>
        <img src={data.character.image} />

        {data.character.episode &&
          data.character.episode.map((episode) => {
            return (
              <>
                <p>{episode.name}</p> - <p>{episode.episode}</p>
                
              </>
            );
          })}
      </>
    </div>
  );
}
