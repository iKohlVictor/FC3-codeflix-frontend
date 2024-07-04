import Image from 'next/image';
import React from "react"
import Header from './components/Header';

export default function Home() {
  return (
    <div className="relative h-screen lg:h-[140vh] overflow-hidden bg-gradient-to-b">
      <Header/>
      <main className="relative pb-24 pl-4 lg:pl-16">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className="absolute flex flex-col left-0 top-0 -z-10 h-[95vh] w-screen bg-black">
            <Image src='/banner.png' alt='maid' fill={true} className='h-[65vh] object-top lg:h-[95vh]'/>
          </div>

          <h1 className="text-lg font-bold md:text-4xl lg:text-7xl">
            MAID
          </h1>
        </div>

        <div className="flex space-x-3">
          <button className="
          bg-white text-black md:text-x1 flex cursor-pointer itens-center gap-x-2 rounded px-5 y-1.5 text-sm font-semibold transition hover:opacity-75 md:px-8 md:py-2.5">
            Play
          </button>
          <button
          className="bg-gray-600 text-black md:text-x1 flex cursor-pointer itens-center gap-x-2 rounded px-5 y-1.5 text-sm font-semibold transition hover:opacity-75 md:px-8 md:py-2.5"
          >More Info</button>
        </div>

      </main>

    </div>
  );
}
