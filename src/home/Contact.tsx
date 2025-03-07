export const Contact: React.FC = () => {
  return (
    <section className="flex flex-wrap gap-10 justify-between items-center mt-36 max-w-full w-[1201px] max-md:mt-10">
      <div className="self-stretch my-auto min-w-60 w-[555px] max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[555px]">
          <div className="w-full">
            <span className="text-base font-medium leading-relaxed text-amber-400">
              Contact Us
            </span>
            <div className="mt-2 w-full">
              <h2 className="text-6xl font-medium tracking-tighter leading-[74px] text-stone-900 max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                Get in Touch.
                <br />
                Contact Information
                <br />
                and Support.
              </h2>
              <p className="mt-4 text-lg leading-8 text-zinc-700 max-md:max-w-full">
                AI Agent-Driven Data Protection: Intelligent, Comprehensive, and
                Trusted.
              </p>
            </div>
          </div>
        </div>
      </div>
      <form className="self-stretch my-auto text-base leading-relaxed rounded-3xl min-w-60 w-[500px] max-md:max-w-full">
        <div className="flex overflow-hidden gap-2 items-start p-10 rounded-3xl bg-neutral-100 max-md:px-5">
          <div className="min-w-60 w-[420px]">
            <div className="w-full whitespace-nowrap max-w-[420px]">
              <label className="text-stone-900" htmlFor="email">
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="youremail@gmail.com"
                className="flex overflow-hidden gap-2 items-center px-5 py-3 mt-2 w-full bg-white rounded-md border border-solid border-zinc-700 border-opacity-20 text-zinc-700"
              />
            </div>
            <div className="mt-5 w-full max-w-[420px]">
              <label className="text-stone-900" htmlFor="message">
                Write Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here"
                className="flex overflow-hidden gap-2 items-start px-5 pt-3 pb-20 mt-2 w-full bg-white rounded-md border border-solid border-zinc-700 border-opacity-20 min-h-[120px] text-zinc-700"
              />
            </div>
            <button className="gap-3 self-stretch px-6 py-4 mt-5 max-w-full font-medium text-center text-white bg-stone-900 rounded-[90px] w-[178px] max-md:px-5">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
