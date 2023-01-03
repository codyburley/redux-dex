import React, { useEffect, useState } from "react";
import "./PokedexEntry.scss";
import pokeballBackground from "../../assets/images/pokeball-background.png";
import caughtIcon from "../../assets/images/pokeball.png";
import { toggleCaught } from "../../features/pokemonList/pokemonListSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PokedexEntry = ({ name, index }) => {
  const pokemon = useSelector((state) => state.pokemonList.pokemonCaught);
  const dispatch = useDispatch();
  const entryNumber = index + 1;
  const [caught, setCaught] = useState();

  useEffect(() => {
    const isCaught = pokemon.find((p) => p === entryNumber);
    isCaught ? setCaught(true) : setCaught(false);
  }, [pokemon, entryNumber]);

  const handleClick = () => {
    dispatch(toggleCaught({ entryNumber }));
  };

  return (
    <article className="entry">
      <div className="entry__container">
        <button className="entry__caught-button" onClick={handleClick}>
          <img
            className={`entry__caught ${caught ? "" : " entry__caught--grey"}`}
            src={caughtIcon}
            alt="Pokemon caught"
          />
        </button>
        No.
        {entryNumber}
      </div>
      <Link to={`/pokemon/${entryNumber}`}>
        <div className="entry__image-container">
          <img
            className="entry__image-background"
            src={pokeballBackground}
            alt="pokeball background"
          />
          <img
            className="entry__image"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${entryNumber}.png`}
            alt={name}
          />
        </div>
      </Link>
    </article>
  );
};

export default PokedexEntry;
