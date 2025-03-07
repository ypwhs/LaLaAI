import { BlogCard } from "./BlogCard";

export const FeaturedPosts = () => {
  return (
    <section className="flex flex-col items-center w-full max-md:max-w-full">
      <div className="flex flex-col items-center w-full font-medium max-md:max-w-full">
        <div className="flex flex-col items-center max-md:max-w-full">
          <h1 className="mt-2 text-6xl tracking-tighter leading-none text-center text-stone-900 max-md:max-w-full max-md:text-4xl">
            Our Latest Blog Posts
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 items-start mt-20 max-md:mt-10 max-md:max-w-full">
        <BlogCard
          variant="featured"
          date="Monday, Jan 10, 2025"
          title="LalaDev blog title,LalaDev blog title LalaDev blog title LalaDev blog title"
          body="LalaDev blog's body introduction LalaDev blog's body introduction LalaDev blog's body introduction"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2372e24fdd2aa07ee37e67f559c463d4d34e166573caa6080cf2946a155f6641?placeholderIfAbsent=true&apiKey=3502cb5477604be48a52d3631aa7ee49"
        />

        <BlogCard
          variant="featured"
          date="Monday, Jan 10, 2025"
          title="LalaDev blog title,LalaDev blog title LalaDev blog title LalaDev blog title"
          body="LalaDev blog's body introduction LalaDev blog's body introduction LalaDev blog's body introduction"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ac92961ec646668bc518aedef315f9ce02a0e33048576215c1d2a75a12cbe253?placeholderIfAbsent=true&apiKey=3502cb5477604be48a52d3631aa7ee49"
        />
      </div>
    </section>
  );
};
