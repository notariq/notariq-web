import React from 'react'
import Scene from './Scene'
import Link from 'next/link';
import ReactPopover from './ReactPopover';
import "../app/globals.css"

export default function Intro() {
  return (
    <div className='no-select h-full w-full flex flex-col md:flex-row md:justify-between'>
        <div className='flex flex-col gap-2 p-8 justify-center'>
        <div>
          <h1 className="mb-3 text-7xl massive-text">Hi,</h1>
          <div className="flex flex-row gap-8 items-center">
            <h2 className="text-3xl md:text-8xl">{'I\'m'}</h2>
            <ReactPopover
              trigger="hover"
              content={
                <p>Hauzan Ariq Bakri</p>
              }
            >
              <h2 className="text-3xl md:text-8xl hover:underline">{'notariq'}</h2>
            </ReactPopover>
          </div>
        </div>
            <div className='flex flex-row gap-4 md:gap-8 md:text-3xl mt-6 text-slate-500'>
              <Link href={'https://x.com/ariqbakri'} className='hover:underline'>twitter</Link>
              <Link href={'https://github.com/notariq'} className='hover:underline'>github</Link>
              <Link href={'https://instagram.com/ariqbakri'} className='hover:underline'>instagram</Link>
          </div>
        </div>
        <div className="flex grow justify-center items-center">
            <Scene />
        </div>
      </div>
  );
}
