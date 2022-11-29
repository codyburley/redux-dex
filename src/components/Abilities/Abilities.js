import React from 'react';
import './Abilities.scss';

const Abilities = ({ abilityArray }) => {
  console.log(abilityArray)
  return (
    <section className='abilities'>
      <div className="abilities__title-container">
        <h3 className="abilities__title">Abilities</h3>
      </div>
      <ul className="abilities__container">
        {abilityArray.map(ability => {
          return (
            <li key={ability.ability.name} className='abilities__wrapper'>
              {ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Abilities