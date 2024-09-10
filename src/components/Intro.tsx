import React from 'react'
import Scene from './Scene'

export default function Intro() {
  return (
    <div className='h-full w-full flex flex-col md:flex-row md:justify-between'>
        <div className='flex flex-col gap-2 p-5 ml-[4vw] justify-center'>
          <h1 className='text-7xl md:text-9xl'>Hello,</h1>
          <h2 className='text-3xl md:text-5xl'>{'I\'m notariq'}</h2>
        </div>
        <div className="flex grow justify-center items-center">
            <Scene />
        </div>
      </div>
  );
}
