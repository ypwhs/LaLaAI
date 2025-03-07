"use client";
import * as React from "react";

export const Header: React.FC = () => {

  return (
    <header className="flex absolute top-0 left-2/4 z-0 flex-col items-center self-start px-2 py-6 max-w-full font-medium whitespace-nowrap -translate-x-2/4 h-[107px] min-h-[107px] translate-y-[0%] w-[1440px]">
      <nav className="max-w-full w-[1200px]">
        <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1200px] max-md:max-w-full">
          <div className="flex gap-3 items-center self-stretch my-auto text-2xl font-bold leading-none text-stone-900 w-[196px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eef671a51c3465b8b5a6c631be54d3f26803e8c785d748e81b9ada845330b49?placeholderIfAbsent=true&apiKey=3502cb5477604be48a52d3631aa7ee49"
              alt="LalaDev Logo"
              className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square rounded-[521px]"
            />
            <h1 className="self-stretch my-auto">LalaDev</h1>
          </div>
          <ul className="self-stretch my-auto text-base leading-relaxed text-zinc-700 w-[223px]">
            <div className="flex gap-10 items-start">
            <li>
                  <a href="/">Home</a>
              </li>
            
              <li>
                  <a href="/roadmap">Roadmap</a>
              </li>
              <li>
                  <a href="/blog">Blog</a>
              </li>
            </div>
          </ul>
          <div className="flex items-center self-stretch my-auto text-lg leading-8 text-white w-[196px]">
            <button className="flex overflow-hidden gap-2 justify-center items-center self-stretch px-8 py-4 my-auto bg-stone-900 rounded-[1000px] w-[196px] max-md:px-5">
              <div className="flex gap-4 items-center self-stretch my-auto w-[132px]">
                <span className="self-stretch my-auto">LaunchApp</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/de1b9c657057d48503d3005bb35b6d20444655bc574511fc6f26fd7045a5b320?placeholderIfAbsent=true&apiKey=3502cb5477604be48a52d3631aa7ee49"
                  alt="Launch Icon"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square fill-white w-[23px]"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
