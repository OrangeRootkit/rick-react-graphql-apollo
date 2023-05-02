import { useQuery } from "@apollo/client";
import { ALL_CHARACTERS } from "../ApolloClient/request";

export const useCharacters = () => {
  const { loading, error, data } = useQuery(ALL_CHARACTERS);

  return {
    loading,
    error,
    data,
  };
};
