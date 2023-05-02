import { gql } from "@apollo/client";

export const ALL_CHARACTERS = gql`
  query AllCharacters {
    characters {
      results {
        id
        name
        status
        image
      }
    }
  }
`;


