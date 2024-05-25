import React from 'react'
import Image from './Image'

const PokeImage = ({ sprites }) => {
  return (
    <>
      {/* <img className='h-36 w-36 m-6' src={sprites?.other?.dream_world.front_default} alt='Selected Pokemon' /> */}
      <Image src={sprites?.other?.home.front_default} alt='Selected Pokemon' />
    </>
  )
}

export default PokeImage
