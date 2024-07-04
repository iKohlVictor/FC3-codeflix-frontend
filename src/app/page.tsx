export default function Home() {
  return (
    <div className="relative h-full lg:h-[140vh]">
      <main className="relative pb-24 pl-4 lg:space-y-24 lg:pl-16">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className="absolute flex flex-col left-0 top-0 -z-10 h-[95vh] w-screen bg-black"></div>

          <h1 className="text-lg font-bold md:text-4xl lg:text-7xl">
            The Witcher: Monster Slayer
          </h1>

          <p className="text-shadow-md max-w-xs text-xs nd:max-w-lg md:text-lg lg:max-w-2xl">
            The Witcher: Monster Slayer is a location-based augmented-reality RPG that challenges
            you to become a professional monster hunter.
          </p>
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
