import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-[#61dafb] md:text-xl">
              Hi everyone 👋, i'm
              <span className="block font-bold text-slate-900 text-3xl mt-1 lg:text-4xl">
                Andi Fiqih Zulfikar Ashari
              </span>
            </h1>
            <h2 className="text-slate-500 font-semibold lg:text-xl">
              Front-end <span className="text-yellow-400">Developer</span>
            </h2>
            <p className="mt-3 text-slate-500 leading-relaxed mb-10 lg:text-lg">
              A Frontend Developer who is highly interested and developing my
              skill on
              <span className="font-bold text-slate-600"> ReactJS</span>.
            </p>
            <a
              href=""
              className="font-bold bg-[#61dafb] py-2 px-4 text-white rounded-full text-sm hover:opacity-70 transition duration-200 hover:shadow-lg md:py-3 lg:px-6"
            >
              Contact Me
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="mt-10">
              <img
                src={profile}
                alt="Me"
                className="rounded-full max-w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
