export const KeyFeatures: React.FC = () => {
  return (
    <section className="flex flex-col items-center mt-36 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center max-w-full w-[856px]">
        <span className="text-base font-medium leading-relaxed text-amber-400">
          Key Features
        </span>
        <div className="flex flex-col items-center mt-2 w-full text-center">
          <h2 className="text-5xl font-medium tracking-tighter leading-[62px] text-stone-900 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            Empowering AI Agents with Decentralized Trust & Efficiency
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-700 w-[624px] max-md:max-w-full">
            The backbone of decentralized AI ecosystems, enabling secure,
            transparent, and sustainable interactions in the AI-powered Web3 era
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-8 items-start max-md:max-w-full">
          <article className="flex overflow-hidden flex-col justify-center p-10 bg-neutral-50 min-w-60 rounded-[32px] w-[584px] max-md:px-5 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="max-w-full w-[503px]">
                <div className="w-full">
                  <h3 className="text-3xl font-medium tracking-tight leading-10 text-stone-900 max-md:max-w-full">
                    Decentralized Domain Name Services (DNS)
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-zinc-700 max-md:max-w-full">
                    Simplifies agent discovery and communication with
                    customizable, human-readable domain names for easier
                    cross-chain and cross-application access.
                  </p>
                </div>
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1772a0af8d421681dbb7a53ca36a05c388559fad3dee85692027f2fc43b2b57a?placeholderIfAbsent=true&apiKey=3502cb5477604be48a52d3631aa7ee49"
              alt="DNS Feature"
              className="object-contain mt-12 w-full rounded-3xl aspect-[1.11] shadow-[0px_4px_8px_rgba(0,0,0,0.05)] max-md:mt-10 max-md:max-w-full"
            />
          </article>
          <article className="flex overflow-hidden flex-col justify-center p-10 bg-neutral-50 min-w-60 rounded-[32px] w-[584px] max-md:px-5 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="max-w-full w-[503px]">
                <div className="w-full">
                  <h3 className="text-3xl font-medium tracking-tight leading-snug text-stone-900 max-md:max-w-full">
                    Agent Decentralized Identifier(DID)
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-zinc-700 max-md:max-w-full">
                    Simplifies agent discovery and communication with
                    customizable, human-readable domain names for easier
                    cross-chain and cross-application access.
                  </p>
                </div>
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e827acb031d3182a495c0decfbec44d20975982c2774c3062cc1d4c129fed602?placeholderIfAbsent=true&apiKey=3502cb5477604be48a52d3631aa7ee49"
              alt="DID Feature"
              className="object-contain mt-24 w-full rounded-3xl aspect-[1.11] shadow-[0px_4px_8px_rgba(0,0,0,0.05)] max-md:mt-10 max-md:max-w-full"
            />
          </article>
        </div>
        <article className="overflow-hidden p-10 mt-8 max-w-full bg-neutral-50 rounded-[32px] w-[1192px] max-md:px-5">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                <div className="max-w-full w-[400px]">
                  <div className="flex flex-col items-start w-full">
                    <div className="w-full">
                      <h3 className="text-3xl font-medium tracking-tight leading-10 text-stone-900">
                        Agent Store: Collection of Agent DID
                      </h3>
                      <p className="mt-4 text-lg leading-8 text-zinc-700">
                        Provide a list of all currently registered Agents,
                        support fuzzy search and category view, and offer
                        simulation call functionality for Agent API.
                      </p>
                    </div>
                  </div>
                </div>
                <button className="flex flex-col justify-center items-start self-start py-2 pr-2 pl-7 mt-10 bg-stone-900 rounded-[100px] max-md:pl-5">
                  <div className="flex gap-4 items-center">
                    <span className="self-stretch my-auto text-lg font-medium leading-8 text-white">
                      Learn More{" "}
                    </span>
                    <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch pr-3.5 pl-3 my-auto w-12 h-12 bg-amber-400 min-h-12 rounded-[1000px]">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/baec404a19b40b4c88f03ab527c8adb045a9b9f771c4a0b0b0cd42a8cee56042?placeholderIfAbsent=true&apiKey=3502cb5477604be48a52d3631aa7ee49"
                        alt="Arrow Icon"
                        className="object-contain self-stretch my-auto aspect-[1.04] fill-stone-900 w-[23px]"
                      />
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="ml-5 w-[63%] max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/83fb7249ae03d2fd85da7eba57aac7a3ad6aa9d7acf5a6b608261a6c44de5bf2?placeholderIfAbsent=true&apiKey=3502cb5477604be48a52d3631aa7ee49"
                alt="Agent Store Feature"
                className="object-contain grow w-full rounded-3xl aspect-[1.51] shadow-[0px_4px_8px_rgba(0,0,0,0.05)] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
