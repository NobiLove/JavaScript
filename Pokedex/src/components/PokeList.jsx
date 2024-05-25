import React from 'react'
import UsePokeApi from '../Hooks/UsePokeApi'
import { pokemonList } from '../utils/util'

export const PokeList = ({ setSelectedPokemon }) => {
  async function handleClick (e) {
    const name = e.target.id.toLowerCase()
    const pokemon = await UsePokeApi(name)
    setSelectedPokemon(pokemon)
  }

  return (
    <div className='h-96 overflow-y-auto '>
      <ul>
        {pokemonList.map(pokemon => {
          return (
            <li key={pokemon.id} className='text-xl font-thin'>
              <button
                onClick={handleClick}
                id={pokemon.name.english}
                className=''
              >Nº {pokemon.id} {pokemon.name.english}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
