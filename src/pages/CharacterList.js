import React from 'react'
import { useQuery, gql } from '@apollo/client'

export default function CharacterList() {

  const GET_CHARACTERS = gql`
    query {
      characters {
        results {
          name
          gender
          image
        }
      }
    }
  `;

  const { error, loading, data } = useQuery(GET_CHARACTERS);

  console.log({ error, loading, data });

  return (
    <div>
      {data && data.characters && data.characters.results.map((character) => {
        return (
          <div key={character.name}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
    
        );

      })
      
      }

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
  );
}
