import { BlogCard } from "./BlogCard";

export const MoreBlogs = () => {
  return (
    <section className="flex flex-col items-center mt-36 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center font-medium">
        <span className="text-base leading-relaxed text-amber-400">Blogs</span>
        <h2 className="mt-4 text-5xl tracking-tighter leading-tight text-center text-stone-900 max-md:text-4xl">
          Read More Blogs
        </h2>
      </div>

      <div className="mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 items-start max-md:max-w-full">
          {[...Array(6)].map((_, index) => (
            <BlogCard
              key={index}
              date="Monday, Jan 10, 2025"
              title="LalaDev blog title LalaDev blog title LalaDev blog title"
              body="LalaDev blog's body introduction LalaDev blog's body introduction LalaDev blog's body"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
