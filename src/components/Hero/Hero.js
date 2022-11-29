import { useDispatch } from 'react-redux';
import { caughtPoke, uncaughtPoke } from '../../features/pokemonList/pokemonListSlice';
import caughtIcon from '../../assets/images/pokeball.png';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import './Hero.scss';
import { useEffect, useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Switch from '@mui/material/Switch';

const Hero = ({ sprites, name, caught, entry_number }) => {
  const dispatch = useDispatch();
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
  const entryNumber = String(entry_number).padStart(3, 0);

  const [currentSprite, setCurrentSprite] = useState('')
  const [gen, setGen] = useState('home');
  const [gender, setGender] = useState('male');
  const [shiny, setShiny] = useState(false);
  const [back, setBack] = useState(false);

  const handleGenderClick = () => {
    if (gender === 'male') {
      setGender('female')
    } else {
      setGender('male')
    }
  }

  useEffect(() => {
    if (gen === 'home' && gender === 'male' && shiny === false) {
      setCurrentSprite(sprites.other.home.front_default)
    }
    if (gen === 'home' && gender === 'male' && shiny === true) {
      setCurrentSprite(sprites.other.home.front_shiny)
    }
    if (gen === 'home' && gender === 'female' && shiny === false) {
      if (sprites.other.home.front_female === null) {
        setCurrentSprite(sprites.other.home.front_default)
      } else {
        setCurrentSprite(sprites.other.home.front_female)
      }
    }
    if (gen === 'home' && gender === 'female' && shiny === true) {
      if (sprites.other.home.front_female === null) {
        setCurrentSprite(sprites.other.home.front_shiny)
      } else {
        setCurrentSprite(sprites.other.home.front_shiny_female)
      }
    }
    if (gen === 'classic' && gender === 'male' && shiny === false && back === false) {
      setCurrentSprite(sprites.front_default)
    }
    if (gen === 'classic' && gender === 'male' && shiny === true && back === false) {
      setCurrentSprite(sprites.front_shiny)
    }
    if (gen === 'classic' && gender === 'male' && shiny === false && back === true) {
      setCurrentSprite(sprites.back_default)
    }
    if (gen === 'classic' && gender === 'male' && shiny === true && back === true) {
      setCurrentSprite(sprites.back_shiny)
    }
    if (gen === 'classic' && gender === 'female' && shiny === false && back === false) {
      if (sprites.front_female === null) {
        setCurrentSprite(sprites.front_default)
      } else {
        setCurrentSprite(sprites.front_female)
      }
    }
    if (gen === 'classic' && gender === 'female' && shiny === true && back === false) {
      if (sprites.front_female === null) {
        setCurrentSprite(sprites.front_shiny)
      } else {
        setCurrentSprite(sprites.front_shiny_female)
      }
    }
    if (gen === 'classic' && gender === 'female' && shiny === false && back === true) {
      if (sprites.front_female === null) {
        setCurrentSprite(sprites.back_default)
      } else {
        setCurrentSprite(sprites.back_female)
      }
    }
    if (gen === 'classic' && gender === 'female' && shiny === true && back === true) {
      if (sprites.front_female === null) {
        setCurrentSprite(sprites.back_shiny)
      } else {
        setCurrentSprite(sprites.back_shiny_female)
      }
    }
  }, [currentSprite, gender, shiny, gen, back, sprites])

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
            <MaleIcon fontSize='inherit' className='hero__gender-icon' />
          </button>
          <button
            className={`hero__gender-button hero__gender-button--female ${gender === 'male' ? ' hero__gender-button--inactive' : ''}`}
            onClick={handleGenderClick}
          >
            <FemaleIcon fontSize='inherit' className='hero__gender-icon' />
          </button>
          <button className={`hero__shiny-button ${!shiny ? "" : " hero__shiny-button--active"}`} onClick={() => shiny ? setShiny(false) : setShiny(true)}>
            <AutoAwesomeIcon className={`hero__shiny ${!shiny ? "" : " hero__shiny--active"}`} />
          </button>
        </div>
      </div>
      <div className="hero__body-container">
        <div className='hero__switch-wrapper'>
          <span className='hero__switch-title'>Change Sprites</span>
          <Switch size='small' onChange={() => gen === 'home' ? setGen('classic') : setGen('home')} />
        </div>
        <div className="hero__image-container">
          <img
            src={currentSprite}
            alt={capitalName}
            className="hero__image"
          />
        </div>
        <div className='hero__button-container'>
          {gen === 'home' ? "" :
            <>
              <div className='hero__image-divider'>
                <button className='hero__image-button' onClick={() => setBack(false)} disabled={!back}>
                  <ChevronLeftIcon fontSize='inherit' className='hero__chevron' />
                </button>
                <span className='hero__image-count'>{back === false ? "1" : "2"}/2</span>
              </div>
              <button className='hero__image-button' onClick={() => setBack(true)} disabled={back}>
                <ChevronRightIcon fontSize='inherit' className='hero__chevron' />
              </button>
            </>}
        </div>
      </div>
    </section>
  )
}

export default Hero