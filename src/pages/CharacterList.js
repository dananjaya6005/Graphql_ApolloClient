import React from 'react'
import { useQuery,gql } from '@apollo/client'

export default function CharacterList() {

    const GET_CHARACHTERS = gql`
    query {
        characters{
          results{
            name
            gender
            image
            
          }
        }
      }
      
    `;

    const {error,loading,data} = useQuery(GET_CHARACHTERS);

    console.log({error,loading,data});


  return (
    <div>CharacterList</div>
    
  )
}
