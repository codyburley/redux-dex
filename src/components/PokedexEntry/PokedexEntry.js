import React from 'react'
import './PokedexEntry.scss'

const PokedexEntry = ({ entry_number, pokemon_species }) => {
  return (
    <div>
      {entry_number}
      {pokemon_species.name}
    </div>
  )
}

export default PokedexEntry