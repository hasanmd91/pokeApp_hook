import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.css";

const Card = ({ image, name }) => {
  return (
    <div className={style.card}>
      <img src={image} alt={name} />
      <h3> {name[0].toUpperCase() + name.slice(1)}</h3>
      <Link to={name}> see more</Link>
    </div>
  );
};

export default Card;
