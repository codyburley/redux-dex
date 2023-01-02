import React from "react";

import fire from "../../assets/svg-icons/fire.svg";
import bug from "../../assets/svg-icons/bug.svg";
import dark from "../../assets/svg-icons/dark.svg";
import dragon from "../../assets/svg-icons/dragon.svg";
import electric from "../../assets/svg-icons/electric.svg";
import fairy from "../../assets/svg-icons/fairy.svg";
import fighting from "../../assets/svg-icons/fighting.svg";
import flying from "../../assets/svg-icons/flying.svg";
import ghost from "../../assets/svg-icons/ghost.svg";
import grass from "../../assets/svg-icons/grass.svg";
import ground from "../../assets/svg-icons/ground.svg";
import ice from "../../assets/svg-icons/ice.svg";
import normal from "../../assets/svg-icons/normal.svg";
import poison from "../../assets/svg-icons/poison.svg";
import psychic from "../../assets/svg-icons/psychic.svg";
import rock from "../../assets/svg-icons/rock.svg";
import steel from "../../assets/svg-icons/steel.svg";
import water from "../../assets/svg-icons/water.svg";

const Type = ({ type }) => {
  const typeObj = {
    fire: fire,
    bug: bug,
    dark: dark,
    dragon: dragon,
    electric: electric,
    fairy: fairy,
    fighting: fighting,
    flying: flying,
    ghost: ghost,
    grass: grass,
    ground: ground,
    ice: ice,
    normal: normal,
    poison: poison,
    psychic: psychic,
    rock: rock,
    steel: steel,
    water: water,
  };

  const getType = (obj, key) => obj[key];

  return (
    <img
      className="description__type-image"
      src={getType(typeObj, type)}
      href={type}
    />
  );
};

export default Type;
