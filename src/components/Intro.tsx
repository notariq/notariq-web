import React from 'react'
import Scene from './Scene'
import Link from 'next/link';
import "../app/globals.css"

export default function Intro() {
  return (
    <div className='no-select h-screen w-full flex flex-col md:flex-row md:justify-between'>
        <div className='flex flex-col gap-2 p-8 justify-center'>
          <div>
            <h1 className='mb-3 text-7xl md:text-10xl'>Hi,</h1>
            <h2 className='text-3xl md:text-5xl'>{'I\'m notariq'}</h2>
          </div>
            <div className='flex flex-row md:flex-col gap-4 md:gap-2 md:text-xl mt-2 text-slate-500'>
              <Link href={'https://x.com'}><p className='hover:underline'>twitter</p></Link>
              <Link href={'https://github.com'}><p className='hover:underline'>{"github"}</p></Link>
              <Link href={'https://instagram.com'}><p className='hover:underline'>{"instagram"}</p></Link>
          </div>
        </div>
        <div className="flex grow justify-center items-center">
            <Scene />
        </div>
      </div>
  );
}
