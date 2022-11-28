import { useDispatch } from 'react-redux';
import { caughtPoke, uncaughtPoke } from '../../features/pokemonList/pokemonListSlice';
import caughtIcon from '../../assets/images/pokeball.png';
import maleIcon from '../../assets/images/male.png';
import femaleIcon from '../../assets/images/female.png';
import shinyIcon from '../../assets/images/shiny.png';
import './Hero.scss';
import { useState } from 'react';

const Hero = ({ sprites, name, caught, entry_number }) => {
  const dispatch = useDispatch();
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
  const entryNumber = String(entry_number).padStart(3, 0);
  const [gender, setGender] = useState('male');

  const homeSprites = sprites.other.home;

  const handleGenderClick = () => {
    if (gender === 'male') {
      setGender('female')
    } else {
      setGender('male')
    }
  }

  const handleClick = () => {
    if (caught) {
      dispatch(uncaughtPoke({ entry_number }))
    } else {
      dispatch(caughtPoke({ entry_number }))
    }
  }

  console.log(homeSprites)

  return (
    <section className='hero'>
      <div className='hero__title-container'>
        <div className='hero__caught-wrapper'>
          <button className='hero__caught-button' onClick={handleClick}>
            <img
              className={`hero__caught ${caught ? "" : " hero__caught--grey"}`}
              src={caughtIcon}
              alt="Pokemon caught" />
          </button>
          <span className='hero__entry'>No.{entryNumber}</span>
        </div>
        <h1 className='hero__name'>{capitalName}</h1>
        <div className='hero__button-wrapper'>
          <button
            className={`hero__gender-button hero__gender-button--male ${gender === 'female' ? ' hero__gender-button--inactive' : ''}`}
            onClick={handleGenderClick}
          >
            <img
              className='hero__gender hero__gender--male'
              src={maleIcon}
              alt="Male" />
          </button>
          <button
            className={`hero__gender-button hero__gender-button--female ${gender === 'male' ? ' hero__gender-button--inactive' : ''}`}
            onClick={handleGenderClick}
          >
            <img
              className='hero__gender hero__gender--female'
              src={femaleIcon}
              alt="Female" />
          </button>
          <button className='hero__shiny-button hero__shiny-button--active'>
            <img
              className={`hero__shiny ${caught ? "" : " hero__shiny--active"}`}
              src={shinyIcon}
              alt="Shiny" />
          </button>
        </div>
      </div>
      <div className="hero__image-container">
        <img
          src={homeSprites.front_default}
          alt={capitalName}
          className="hero__image"
        />
      </div>
      <div className='hero__image-wrapper'>
        <div className='hero__image-divider'>
          <button>
          </button>
          <span>1/2</span>
        </div>

        <button>

        </button>
      </div>
    </section>
  )
}

export default Hero