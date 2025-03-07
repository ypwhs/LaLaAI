export const FAQ: React.FC = () => {
  return (
    <section className="flex flex-col items-center mt-36 max-w-full w-[1000px] max-md:mt-10">
      <div className="flex flex-col items-center max-w-full w-[624px]">
        <span className="text-base font-medium leading-relaxed text-amber-400">
          FAQ
        </span>
        <div className="flex flex-col items-center mt-2 w-full text-center">
          <h2 className="text-5xl font-medium tracking-tighter leading-tight text-stone-900 max-md:max-w-full max-md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-700 max-md:max-w-full">
            Everything you need to know about the LalaDev. Can't find the answer
            you're looking for? Please chat to our
            <a href="#contact" className="underline">
              {" "}
              friendly team
            </a>
            .
          </p>
        </div>
      </div>
      <div className="mt-20 w-full text-lg leading-8 max-w-[1000px] max-md:mt-10 max-md:max-w-full">
        <button className="overflow-hidden gap-2 self-stretch p-8 w-full font-medium rounded-xl bg-neutral-50 text-stone-900 max-md:px-5 max-md:max-w-full text-left">
          What is LALA, and how does it help AI agents with secure
          authentication?
        </button>
        <div className="flex overflow-hidden gap-2 items-start p-8 mt-6 w-full rounded-xl bg-neutral-100 max-md:px-5">
          <div className="min-w-60 w-[936px]">
            <h3 className="font-medium text-stone-900 max-md:max-w-full">
              How does LALA's decentralized domain name service (DNS) enhance AI
              agent discovery and interaction?
            </h3>
            <p className="mt-4 text-zinc-700 max-md:max-w-full">
              By unifying decentralized identity (DID) for trusted verification,
              domain services (DNS) for efficient resource routing, and
              tokenized incentives for governance alignment – all within a
              serverless architecture built for scalability.
            </p>
          </div>
        </div>
        <button className="overflow-hidden gap-2 self-stretch p-8 mt-6 w-full font-medium rounded-xl bg-neutral-50 text-stone-900 max-md:px-5 max-md:max-w-full text-left">
          How does LALA enable cross-chain AI agent collaboration and solve
          interoperability challenges?
        </button>
        <button className="overflow-hidden gap-2 self-stretch p-8 mt-6 w-full font-medium rounded-xl bg-neutral-50 text-stone-900 max-md:px-5 max-md:max-w-full text-left">
          How does LALA's token rewards and governance system maintain long-term
          stability and sustainability?
        </button>
      </div>
    </section>
  );
};
