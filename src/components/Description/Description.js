import React, { useState, useEffect } from 'react';
import './Description.scss';
import Pokedex from 'pokedex-promise-v2';
import Type from '../TypeHelper/TypeHelper';
import StraightenIcon from '@mui/icons-material/Straighten';
import ScaleIcon from '@mui/icons-material/Scale';

const P = new Pokedex();

const Description = ({ entry_number, types, height, weight }) => {
  const [description, setDescription] = useState()

  useEffect(() => {
    P.getPokemonSpeciesByName(entry_number)
      .then((response) => {
        setDescription(response)
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });
  }, [entry_number])

  if (!description) {
    return <h1>Loading...</h1>
  }

  return (
    <section className='description'>
      {types.map(type => {
        return (
          <div key={type.type.name} className={`description__type-container description__type-container--${type.type.name}`}>
            <Type type={type.type.name} />
            <span className="description__type">{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</span>
          </div>
        )
      })}
      <article className="description__wrapper">
        <h2 className='description__genus'>{description.genera[7].genus}</h2>
        <div className="description__flavor-container">
          <p className='description__flavor-text'>{description.flavor_text_entries[0].flavor_text.replace(/\W/g, ' ')}</p>
        </div>
      </article>
      <div className="description__measurement-container">
        <div className='description__measurement'>
          <StraightenIcon className='description__measurement-icon description__measurement-icon--height' />
          <p className='description__measurement-text'>{height / 10}m</p>
        </div>
        <div className='description__measurement'>
          <ScaleIcon className='description__measurement-icon' />
          <p className='description__measurement-text'>{(weight / 10).toFixed(1)}kg</p>
        </div>
      </div>
    </section>
  )
}

export default Description