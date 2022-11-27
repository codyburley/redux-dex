import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { caughtPoke, uncaughtPoke } from '../../features/pokemonList/pokemonListSlice';
import caughtIcon from '../../assets/images/pokeball.png';
import './Hero.scss'

const Hero = ({ sprites, name, id, caught, entry_number }) => {
  const dispatch = useDispatch();
  const { pokemon } = useSelector(state => state.pokemonList)

  // useEffect(() => {

  // }, [])

  const handleClick = () => {
    if (caught) {
      dispatch(uncaughtPoke({ entry_number }))
    } else {
      dispatch(caughtPoke({ entry_number }))
    }
  }

  return (
    <section className='hero'>
      <div className='hero__title-container'>
        <button className='hero__caught-button' onClick={handleClick}>
          <img
            className={`hero__caught ${caught ? "" : " hero__caught--grey"}`}
            src={caughtIcon}
            alt="Pokemon caught" />
        </button>
        <span>No.{id}</span>
        <h1>{name}</h1>
        <button>Male</button>
        <button>Female</button>
        <button>Shiny</button>
      </div>
    </section>
  )
}

export default Hero