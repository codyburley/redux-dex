import React, { useState, useEffect } from 'react';
import './Description.scss';
import Pokedex from 'pokedex-promise-v2';
import { TypeHelper } from '../TypeHelper/TypeHelper';

const P = new Pokedex();

const Description = ({ entry_number, types, height, weight }) => {
  const [description, setDescription] = useState()
  // const capitalName = name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    P.getPokemonSpeciesByName(entry_number)
      .then((response) => {
        setDescription(response)
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });
  }, [])

  const typeFunction = (name) => {

    const func = () => window[name];
    console.log(func)
    if (typeof func !== 'function') {
      console.log('oof')
      return;
    }
    func.apply(window);
  }

  if (!description) {
    return <h1>Loading...</h1>
  }

  return (
    <section className='description'>
      <div className="description__type-container">
        <span className="description__type-icon"></span>
        {types.map(type => {
          return (
            <>
              <div className='description__type-icon'>
                {TypeHelper(type.type.name)}

              </div>
              <span className="description__type">{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</span>
            </>
          )
        })}
      </div>
    </section>
  )
}

export default Description