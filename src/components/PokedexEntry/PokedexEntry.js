import React from 'react'
import './PokedexEntry.scss'
import pokeballBackground from '../../assets/images/pokeball-background.png';
import caughtIcon from '../../assets/images/pokeball.png';
import { caughtPoke, uncaughtPoke } from '../../features/pokemonList/pokemonListSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const PokedexEntry = ({ entry_number, pokemon_species, caught }) => {
  const dispatch = useDispatch();
  // const capitalName = pokemon_species.name.charAt(0).toUpperCase() + pokemon_species.name.slice(1);
  const entryNumber = String(entry_number).padStart(3, 0);

  const handleClick = () => {
    console.log(entry_number);
    if (caught) {
      dispatch(uncaughtPoke({ entry_number }))
    } else {
      dispatch(caughtPoke({ entry_number }))
    }
  }

  return (
    <article className='entry'>
      <Link to={`/pokemon/${entry_number}`}>
        <div className='entry__container'>
          <button className='entry__caught-button' onClick={handleClick}>
            <img
              className={`entry__caught ${caught ? "" : " entry__caught--grey"}`}
              src={caughtIcon}
              alt="Pokemon caught" />
          </button>
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
      </Link>
    </article>
  )
}

export default PokedexEntry