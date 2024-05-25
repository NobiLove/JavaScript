import { useState } from 'react'
import PokeData from './components/PokeData'
import PokeSearch from './components/PokeSearch'
import PokeLogo from './components/PokeLogo'

export default function App () {
  const [selectedPokemon, setSelectedPokemon] = useState({})

  return (
    <div className='bg-zinc-900 text-white h-screen w-screen'>
      <nav className='bg-slate-700 py-3 px-3 flex place-content-between items-center'>
        <PokeSearch setSelectedPokemon={setSelectedPokemon} />
      </nav>
      <main className='bg-slate-900'>
        <PokeData selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
      </main>
    </div>
  )
}
