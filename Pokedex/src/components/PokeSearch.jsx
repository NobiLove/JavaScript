import React, { useState } from 'react'
import UsePokeApi from '../Hooks/UsePokeApi'

const PokeSearch = ({ setSelectedPokemon }) => {
  const [search, setSearch] = useState('')

  async function submit (event) {
    event.preventDefault()
    const pokemon = await UsePokeApi(search)
    setSelectedPokemon(pokemon)
  }

  return (
    <form>
      <input
        className='bg-black rounded-xl py-2 px-2 mx-2 my-1 hover:border-red-600 border-2 font-thin text-2xl'
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <button onClick={submit} className='bg-black rounded-xl py-2 px-2 mx-2 my-1 hover:border-red-600 border-2 font-thin text-2xl'>Search</button>
    </form>
  )
}

export default PokeSearch
