import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 max-w-[875px] m-auto mt-20'>
      {technologies.map((technology)=> (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default Tech