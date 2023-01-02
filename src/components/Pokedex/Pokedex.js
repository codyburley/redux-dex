import React from "react";
import "./Pokedex.scss";
import { useSelector } from "react-redux";
import PokedexEntry from "../PokedexEntry/PokedexEntry";

const Pokedex = () => {
  const { pokemon } = useSelector((state) => state.pokemonList);

  return (
    <section className="pokedex">
      {pokemon.map((poke, i) => {
        return <PokedexEntry key={i} {...poke} />;
      })}
    </section>
  );
};

export default Pokedex;
