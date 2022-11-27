import React from 'react'
import './PokedexEntry.scss'
import pokeballBackground from '../../assets/images/pokeball-background.png';
import caughtIcon from '../../assets/images/pokeball.png';

const PokedexEntry = ({ entry_number, pokemon_species, caught }) => {
  // const capitalName = pokemon_species.name.charAt(0).toUpperCase() + pokemon_species.name.slice(1);
  const entryNumber = String(entry_number).padStart(3, 0);

  return (
    <article className='entry'>
      <div className='entry__container'>
        <img
          className={`entry__caught ${caught ? "" : " entry__caught--grey"}`}
          src={caughtIcon}
          alt="Pokemon caught" />
        No.
        {entryNumber}
      </div>
      <div className='entry__image-container'>
        <img
          className='entry__image-background'
          src={pokeballBackground}
          alt='pokeball background'
        />
        <img
          className='entry__image'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${entry_number}.png`}
          alt={pokemon_species.name}
        />
      </div>
    </article>
  )
}

export default PokedexEntry