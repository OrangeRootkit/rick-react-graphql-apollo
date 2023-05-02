import React from "react";
import Card from "../Components/Card";
import s from "./CharactersList.module.scss";
import { useCharacters } from "../hooks/useCharacters";

const CharactersList = () => {
  const { loading, error, data } = useCharacters();

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  const arr = data.characters.results;

  return (
    <div className={s.wrapper}>
      {arr.map((el) => (
        <Card image={el.image} name={el.name} />
      ))}
    </div>
  );
};

export default CharactersList;
