import { useQuery, gql } from '@apollo/client'

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




export const UseCharacters=()=>{
    const { error, loading, data } = useQuery(GET_CHARACTERS);

    return{
        error,
        loading,
        data
    };
       

};