import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./pokelist.module.css";
import Card from "./Card";

const Pokelist = () => {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) => {
        const fetches = res.data.results.map((p) => {
          return axios.get(p.url).then((res) => res.data);
        });

        Promise.all(fetches).then((res) => {
          setdata(res);
          setIsLoading(false);
        });
      });
  }, []);

  if (isLoading) {
    return <p> ...Loading</p>;
  }

  return (
    <div className={style.container}>
      {data.map((card) => (
        <Card
          name={card.name}
          key={card.name}
          image={card.sprites.other["official-artwork"].front_default}
        />
      ))}
    </div>
  );
};

export default Pokelist;
