import React from 'react'
import { formatText } from '../utils/util'

const Stat = ({ stat }) => {
  const formatedName = formatText(stat.stat.name)

  return (
    <p className='font-thin text-2xl'>{formatedName}: {stat.base_stat}</p>
  )
}

export default Stat
