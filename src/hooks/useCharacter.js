import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../ApolloClient/request";

export const useCharacter = (id) => {
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: id },
  });

  return {
    loading,
    error,
    data,
  };
};
