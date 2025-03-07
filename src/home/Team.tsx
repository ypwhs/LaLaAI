export const Team: React.FC = () => {
  return (
    <section className="flex flex-col items-center mt-36 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center max-w-full font-medium w-[624px]">
        <div className="flex flex-col items-center w-full">
          <span className="text-base leading-relaxed text-amber-400">
            Our Team
          </span>
          <h2 className="mt-4 text-5xl tracking-tighter leading-tight text-center text-stone-900 max-md:text-4xl">
            Team Members
          </h2>
          <p className="mt-4 text-lg leading-8 text-center text-zinc-700 max-md:max-w-full">
            The backbone of decentralized AI ecosystems, enabling secure,
            transparent, and sustainable interactions in the AI-powered Web3 era
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 items-start mt-20 max-md:mt-10 max-md:max-w-full">
        {[1, 2, 3, 4].map((index) => (
          <article key={index} className="flex flex-col min-w-60 w-[282px]">
            <div className="max-w-full rounded-3xl w-[282px]">
              <div className="rounded-3xl bg-neutral-100">
                <div className="flex shrink-0 rounded-3xl bg-zinc-100 h-[380px]" />
              </div>
            </div>
            <div className="self-start mt-4 text-stone-900">
              <h3 className="text-xl font-bold leading-9">xxx</h3>
              <p className="text-base leading-relaxed">
                Chief Executive Officers
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
