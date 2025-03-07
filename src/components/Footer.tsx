export const Footer: React.FC = () => {
  return (
    <footer className="flex overflow-hidden flex-col justify-center items-center mt-36 w-full bg-neutral-50 min-h-[490px] rounded-[40px_40px_0px_0px] max-md:mt-10">
      <div className="max-w-full w-[1200px]">
        <div className="flex flex-wrap gap-10 justify-between items-start w-full max-w-[1200px] max-md:max-w-full">
          <div className="min-w-60 w-[352px]">
            <div className="flex flex-col items-start w-full max-w-[333px]">
              <div className="flex gap-2.5 items-center text-lg font-bold leading-none whitespace-nowrap text-stone-900">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/778265a94bc8aa021ea09facf084e60b1017ee0b88055cd3bbb9493233926de1?placeholderIfAbsent=true&apiKey=3502cb5477604be48a52d3631aa7ee49"
                  alt="LalaDev Logo"
                  className="object-contain shrink-0 self-stretch my-auto w-9 aspect-[0.97] rounded-[392px]"
                />
                <span className="self-stretch my-auto">LalaDev</span>
              </div>
              <p className="self-stretch mt-4 text-base leading-7 text-zinc-700">
                The backbone of decentralized AI ecosystems, enabling secure,
                transparent, and sustainable interactions in the AI-powered Web3
                era
              </p>
              <div className="flex gap-6 items-start mt-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c259c2d41839cda74c4e2a02971d4006b681c195ecaa3151dae48006b45d5c01?placeholderIfAbsent=true&apiKey=3502cb5477604be48a52d3631aa7ee49"
                  alt="Social Icon 1"
                  className="object-contain shrink-0 w-5 aspect-square"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/45e618f549b4a158a753d6123542ea98640ac4209cce782d1c89afa85b1f52d6?placeholderIfAbsent=true&apiKey=3502cb5477604be48a52d3631aa7ee49"
                  alt="Social Icon 2"
                  className="object-contain shrink-0 w-5 aspect-square"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/29cc25bcede10518f9950e14dea04a9590df8ef65ede2bb47d17bcd353cc1500?placeholderIfAbsent=true&apiKey=3502cb5477604be48a52d3631aa7ee49"
                  alt="Social Icon 3"
                  className="object-contain shrink-0 w-5 aspect-square"
                />
                <div className="flex shrink-0 w-5 h-5" />
              </div>
            </div>
            <p className="mt-20 text-base leading-relaxed text-zinc-700 max-md:mt-10">
              Copyright © 2025 LALADEV. All Rights Reserved
            </p>
          </div>
          <nav className="flex gap-3.5 items-start min-w-60">
            <div className="flex flex-col w-40 whitespace-nowrap">
              <h3 className="text-base font-medium leading-relaxed text-stone-900">
                Menu
              </h3>
              <ul className="self-start mt-9 text-lg leading-8 text-zinc-700">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li className="mt-6">
                  <a href="#team">Team</a>
                </li>
                <li className="mt-6">
                  <a href="#roadmap">Roadmap</a>
                </li>
                <li className="mt-6">
                  <a href="#blogs">Blogs</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col w-40 min-h-[250px]">
              <h3 className="text-base font-medium leading-relaxed text-stone-900">
                Info
              </h3>
              <ul className="self-start mt-9 text-lg leading-8 text-zinc-700">
                <li>
                  <a href="#terms">Terms</a>
                </li>
                <li className="mt-6">
                  <a href="#privacy">Privacy Policy</a>
                </li>
                <li className="mt-6">
                  <a href="#support">Support</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};
