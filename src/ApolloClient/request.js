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

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      image
      name
      status
      episode {
        name
        episode
      }
    }
  }
`;
