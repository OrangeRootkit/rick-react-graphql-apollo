import React from "react";
import s from "../Components/Card.module.scss";

const Card = ({ image, name }) => {


  return (
    <div className={s.wrapper}>
      <img className={s.image} src={image} alt="image" />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
