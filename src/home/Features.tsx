export const Features: React.FC = () => {
  return (
    <section className="flex flex-col items-center max-md:max-w-full">
      <div className="flex flex-col items-center max-w-full w-[624px]">
        <span className="text-base font-medium leading-relaxed text-amber-400">
          How it Works
        </span>
        <div className="flex flex-col items-center mt-2 w-full text-center">
          <h2 className="text-5xl font-medium tracking-tighter leading-tight text-stone-900 max-md:max-w-full max-md:text-4xl">
            Empower AI Agents
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-700 max-md:max-w-full">
            The backbone of decentralized AI ecosystems, enabling secure,
            transparent, and sustainable interactions in the AI-powered Web3 era
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 items-start mt-14 text-center max-md:mt-10 max-md:max-w-full">
        <article className="flex overflow-hidden flex-col justify-center items-center px-6 py-8 rounded-3xl bg-neutral-50 min-w-60 w-[370px] max-md:px-5">
          <div className="flex flex-col items-center max-w-full w-[322px]">
            <div className="flex flex-col items-center text-2xl font-medium leading-snug text-stone-900">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eff620638af5d4ed5be567d7f967edf26e12bd88a9d8c0cd1aec06057d3d9d53?placeholderIfAbsent=true&apiKey=3502cb5477604be48a52d3631aa7ee49"
                alt="Agent DID Icon"
                className="object-contain w-12 aspect-square"
              />
              <h3 className="mt-3">Agent DID</h3>
            </div>
            <p className="mt-2 text-base leading-7 text-zinc-700">
              LALA uses decentralized identity tech to verify and control access
              for AI agents, ensuring secure interactions between AI, other
              agents, and humans.
            </p>
          </div>
        </article>
        <article className="flex overflow-hidden flex-col justify-center items-center px-6 py-8 rounded-3xl bg-neutral-50 min-w-60 w-[370px] max-md:px-5">
          <div className="flex flex-col items-center max-w-full w-[322px]">
            <div className="flex flex-col items-center text-2xl font-medium leading-snug text-stone-900">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eff620638af5d4ed5be567d7f967edf26e12bd88a9d8c0cd1aec06057d3d9d53?placeholderIfAbsent=true&apiKey=3502cb5477604be48a52d3631aa7ee49"
                alt="DNS Icon"
                className="object-contain w-12 aspect-square"
              />
              <h3 className="mt-3">Decentralized DNS</h3>
            </div>
            <p className="mt-2 text-base leading-7 text-zinc-700">
              This service provides readable, configurable, and traceable domain
              name mappings for AI agents, streamlining agent-to-agent
              interactions.
            </p>
          </div>
        </article>
        <article className="flex overflow-hidden flex-col justify-center items-center px-6 py-8 rounded-3xl bg-neutral-50 min-w-60 w-[370px] max-md:px-5">
          <div className="flex flex-col items-center max-w-full w-[322px]">
            <div className="flex flex-col items-center text-2xl font-medium leading-snug text-stone-900">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eff620638af5d4ed5be567d7f967edf26e12bd88a9d8c0cd1aec06057d3d9d53?placeholderIfAbsent=true&apiKey=3502cb5477604be48a52d3631aa7ee49"
                alt="Token Icon"
                className="object-contain w-12 aspect-square"
              />
              <h3 className="mt-3">Token Incentive Mechanism</h3>
            </div>
            <p className="mt-2 text-base leading-7 text-zinc-700">
              LALA employs a token model to manage DID and domain name
              registration, renewal, permissions, and node rewards, ensuring
              network sustainability.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
