import React from 'react'
import PokeImage from './PokeImage'
import Stat from './Stat'
import Image from './Image'
import { formatText } from '../utils/util'
import ghost from '../images/ghost.gif'
import { PokeList } from './PokeList'

const PokeData = ({ selectedPokemon, setSelectedPokemon }) => {
  const { id, name, sprites, stats } = selectedPokemon
  const formatedName = formatText(name)

  if (!selectedPokemon.id) {
    return (
      <div className='flex flex-wrap place-content-evenly'>
        <Image src={ghost} alt='No pokemon selected' />
        <PokeList setSelectedPokemon={setSelectedPokemon} />
      </div>
    )
  }

  return (
    <div className='flex flex-wrap place-content-evenly'>
      <div className=''>
        <PokeImage sprites={sprites} />
      </div>
      <div className='flex inline-block'>
        <div>
          <p className='my-2 font-thin text-5xl'>Nº {id}</p>
          <p className='my-2 font-thin text-3xl'>{formatedName}</p>
          <div className='my-2 p-2 border-2 rounded-md border-neutral-500 bg-slate-600 mx-2'>
            <p className='my-2 font-thin text-3xl'>Stats</p>
            {stats?.map((stat) =>
              <Stat key={stat.stat.url} stat={stat} />
            )}
          </div>
        </div>
        <PokeList setSelectedPokemon={setSelectedPokemon} />
      </div>
    </div>
  )
}

export default PokeData
