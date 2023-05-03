import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import s from "./Character.module.scss";
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const { loading, error, data } = useCharacter(+id);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <div className={s.wrapper}>
      <img className={s.image} src={data.character.image}></img>
      <div className={s.wrapper_text}>
        <h2 className={s.name}>{data.character.name}</h2>
        <h3 className={s.list}>Episodes</h3>
        <ul>
          {data.character.episode.map((episode, i) => (
            <li key={i} className={s.list__item}>
              {episode.episode} - {episode.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Character;
