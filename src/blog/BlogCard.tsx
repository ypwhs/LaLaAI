"use client";
import * as React from "react";

interface BlogCardProps {
  date: string;
  title: string;
  body: string;
  imageUrl?: string;
  variant?: "featured" | "regular";
}

export const BlogCard: React.FC<BlogCardProps> = ({
  date,
  title,
  body,
  imageUrl,
  variant = "regular",
}) => {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`flex flex-col ${isFeatured ? "min-w-60 w-[588px]" : "min-w-60 w-[390px]"}`}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className={`object-contain max-w-full rounded-3xl ${isFeatured ? "aspect-[1.43] w-[588px]" : "aspect-[1.43]"}`}
        />
      ) : (
        <div className="flex max-w-full rounded-3xl bg-zinc-100 min-h-[300px] w-full" />
      )}

      <div
        className={`flex gap-2 items-center self-start ${isFeatured ? "mt-7" : "mt-4"} text-base font-medium leading-relaxed text-amber-400`}
      >
        <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
        <time className="self-stretch my-auto w-[161px]">{date}</time>
      </div>

      <div className={`${isFeatured ? "mt-6" : "mt-4"} w-full`}>
        <h3
          className={`${isFeatured ? "text-2xl font-medium" : "text-2xl font-semibold tracking-tight"} leading-9 text-neutral-950`}
        >
          {title}
        </h3>
        <p
          className={`mt-4 ${isFeatured ? "text-lg leading-8" : "text-base leading-7"} text-zinc-700`}
        >
          {body}
        </p>
      </div>

      <div
        className={`flex gap-4 items-center self-start mt-4 text-lg font-medium leading-8 ${isFeatured ? "text-white" : "text-stone-900"}`}
      >
        {isFeatured ? (
          <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch px-8 py-4 my-auto bg-stone-900 rounded-[1000px] max-md:px-5">
            <div className="flex gap-4 items-center self-stretch my-auto">
              <span className="self-stretch my-auto">Read more</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ce36fa87872ca8492ad8f64a3a8cd85da4efbea43c6ccb914709ea70afa5e1f?placeholderIfAbsent=true&apiKey=3502cb5477604be48a52d3631aa7ee49"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-square fill-white w-[23px]"
              />
            </div>
          </div>
        ) : (
          <>
            <span className="self-stretch my-auto">Read more</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/50e228f73471bf7efa4da4bc6d6b57bd277d978ce10840dd4019716abc840ac8?placeholderIfAbsent=true&apiKey=3502cb5477604be48a52d3631aa7ee49"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-square fill-stone-900 w-[23px]"
            />
          </>
        )}
      </div>
    </article>
  );
};
