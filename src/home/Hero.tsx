export const Hero = () => {
  return (
    <section className="flex justify-center items-center px-0 py-16 w-full">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-6xl text-center text-stone-900 max-md:text-5xl max-sm:text-3xl">
          Empowering AI Agents with Decentralized Trust & Efficiency
        </h1>
        <p className="text-lg text-center text-zinc-700">
          The backbone of decentralized AI ecosystems, enabling secure,
          transparent, and sustainable interactions in the AI-powered Web3 era
        </p>
        <div className="flex gap-2.5 items-center px-5 py-2.5 bg-white border border-solid border-neutral-200 rounded-[50px]">
          <span className="text-lg opacity-60 text-zinc-700">Search DID</span>
          <button className="px-5 py-2.5 text-base bg-amber-400 rounded-3xl border-none text-stone-900">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};
