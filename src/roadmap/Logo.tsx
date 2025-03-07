import React from "react";

export function Logo() {
  return (
    <div className="flex gap-3 items-center">
      <div className="relative w-12 h-12 bg-yellow-500 rounded-[521.221px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8584090f8a0641050b3d6cf498941926891a4222"
          className="absolute left-0.5 top-1 w-11 rounded-2xl h-[38px]"
          alt="LalaDev Logo"
        />
        <div className="absolute bg-yellow-500 rounded-lg h-[5px] left-[7px] top-[37px] w-[33px]" />
        <div className="absolute bg-yellow-500 rounded-lg h-[5px] left-[38px] top-[33px] w-[7px]" />
      </div>
      <h1 className="text-2xl font-bold text-stone-900">LalaDev</h1>
    </div>
  );
}
