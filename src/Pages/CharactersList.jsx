import React from "react";
import Card from "../Components/Card";
import s from "./CharactersList.module.scss";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

const CharactersList = () => {
  const { loading, error, data } = useCharacters();

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  const arr = data.characters.results;

  return (
    <div className={s.wrapper}>
      {arr.map((el) => (
        <Link key={el.id} className={s.link} to={`/${el.id}`}>
          <Card key={el.id} image={el.image} name={el.name} id={el.id} />
        </Link>
      ))}
    </div>
  );
};

export default CharactersList;
