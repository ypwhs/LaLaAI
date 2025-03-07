import React from "react";

interface RoadmapCardProps {
  title: string;
  step: string;
  date: string;
  cardTitle: string;
  description: string;
}

export function RoadmapCard({
  title,
  step,
  date,
  cardTitle,
  description,
}: RoadmapCardProps) {
  return (
    <div className="flex gap-12 w-full max-md:flex-col">
      <div className="flex relative flex-col gap-20 px-3 py-4 rounded-3xl bg-stone-900 h-[250px] w-[202px] max-md:gap-10 max-md:p-5 max-md:w-full max-md:h-auto">
        <div className="flex flex-col gap-2">
          <h3 className="text-base text-white">{title}</h3>
          <span className="text-sm opacity-50 text-neutral-50">{step}</span>
        </div>
        <time className="px-6 py-2 text-lg bg-amber-400 rounded-[90px] text-stone-900 w-fit">
          {date}
        </time>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="136" height="160" viewBox="0 0 136 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-bg" style="position: absolute; bottom: 20px; right: 12px; opacity: 0.1"> <g opacity="0.1"> <path d="M55.2099 55.2099C45.9427 45.9427 45.9427 30.9176 55.2099 21.6504C64.4771 12.3831 79.5022 12.3831 88.7694 21.6504L89.9999 22.8809M55.2099 55.2099C45.9427 45.9427 30.9176 45.9427 21.6504 55.2099C12.3831 64.4771 12.3831 79.5022 21.6504 88.7694L22.8809 90M55.2099 55.2099L89.9999 90M89.9999 90L124.79 55.2099M89.9999 90L55.2099 124.79M89.9999 90L124.79 124.79M124.79 55.2099C134.057 45.9427 134.057 30.9176 124.79 21.6504C115.523 12.3831 100.498 12.3831 91.2305 21.6504L89.9999 22.8809M124.79 55.2099C134.057 45.9427 149.082 45.9427 158.35 55.2099C167.617 64.4771 167.617 79.5022 158.35 88.7694L157.119 90M89.9999 22.8809V157.119M55.2099 124.79C45.9427 134.057 30.9176 134.057 21.6504 124.79C12.3831 115.523 12.3831 100.498 21.6504 91.2305L22.8809 90M55.2099 124.79C45.9427 134.057 45.9427 149.082 55.2099 158.35C64.4771 167.617 79.5022 167.617 88.7694 158.35L89.9999 157.119M22.8809 90H157.119M124.79 124.79C134.057 134.057 149.082 134.057 158.35 124.79C167.617 115.523 167.617 100.498 158.35 91.2305L157.119 90M124.79 124.79C134.057 134.057 134.057 149.082 124.79 158.35C115.523 167.617 100.498 167.617 91.2305 158.35L89.9999 157.119" stroke="#E3ECEF" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g> </svg>',
            }}
          />
        </div>
      </div>
      <div className="flex-1 pt-4">
        <h2 className="mx-0 mt-0 mb-4 text-2xl font-medium leading-8 text-neutral-950 max-md:text-xl">
          {cardTitle}
        </h2>
        <p className="m-0 text-lg leading-8 max-w-[880px] text-stone-900 max-md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
