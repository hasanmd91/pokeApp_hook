import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./pokesingle.module.css";
import { useParams, useNavigate } from "react-router-dom";

const Pokesingle = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setadata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
      .then((res) => {
        console.log(res.data);
        setadata(res.data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p> ....Loading</p>;
  }
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img
          src={data.sprites?.other.dream_world.front_default}
          alt={data.name}
        />
      </div>

      <div className={style.info}>
        <h2> {data.name}</h2>

        <button onClick={() => navigate(-1)}> Go Back</button>
      </div>
    </div>
  );
};

export default Pokesingle;
