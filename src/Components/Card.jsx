import React from "react";
import s from "../Components/Card.module.scss";

const Card = ({ image, name, handler, id }) => {
  return (
    <div id={id} className={s.wrapper}>
      <img className={s.image} src={image} alt="image" id={id} />
      <h2 className={s.name}>{name}</h2>
    </div>
  );
};

export default Card;
