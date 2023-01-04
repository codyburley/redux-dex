import { useState, useEffect } from "react";
import "./Pokedex.scss";
import PokedexEntry from "../PokedexEntry/PokedexEntry";

const Pokedex = ({ pokemon }) => {
  return (
    <section className="pokedex">
      {pokemon.map((poke, i) => {
        return <PokedexEntry key={i} {...poke} index={i} />;
      })}
    </section>
  );
};

export default Pokedex;
