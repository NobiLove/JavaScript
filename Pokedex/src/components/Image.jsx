import React from 'react'

const Image = ({ src, alt }) => {
  return (
    <img className='h-80 w-80 m-6' src={src} alt={alt} />
  )
}

export default Image
