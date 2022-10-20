const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 text-slate-300 font medium md:w-1/2">
            <h2 className="font-bold text-4xl text-white mb-5">
              Andi Fiqih Zulfikar Ashari
            </h2>
            <h3>Contact Me:</h3>
            <p>Jl. Mawar No.16, Pondok Hijau Indah</p>
            <p>Bandung</p>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/2">
            <h3 className="font-semibold text-xl text-white mb-5">Link</h3>
            <ul className="text-slate-300">
              <li>
                <a
                  href="#home"
                  className="inline-block text-base hover:text-[#61dafb]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="inline-block text-base hover:text-[#61dafb]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="inline-block text-base hover:text-[#61dafb]"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full pt-10 border-t border-slate-600 px-0">
          <div className="flex items-center mt-3 justify-center mb-5">
            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/fiqihz/"
              target="_blank"
              className="w-9 h-9 mr-3 border border-slate-300 rounded-full flex justify-center hover:shadow-lg hover:bg-[#61dafb] hover:border-[#61dafb] hover:text-white transition duration-200"
            >
              <svg
                width="20px"
                className="fill-current text-slate-300"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/fiqihz/"
              target="_blank"
              className="w-9 h-9 mr-3 border border-slate-300 rounded-full flex justify-center hover:shadow-lg hover:bg-[#61dafb] hover:border-[#61dafb] hover:text-white transition duration-200"
            >
              <svg
                width="20px"
                className="fill-current text-slate-300"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            {/* GITLAB */}
            <a
              href="https://gitlab.com/fiqihz"
              target="_blank"
              className="w-9 h-9 mr-3 border border-slate-300 rounded-full flex justify-center hover:shadow-lg hover:bg-[#61dafb] hover:border-[#61dafb] hover:text-white transition duration-200"
            >
              <svg
                width="20px"
                className="fill-current text-slate-300"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitLab</title>
                <path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z" />
              </svg>
            </a>
          </div>
          <p className="font-medium text-sm text-gray-500 text-center">
            Created by @fiqihz using with{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              className="text-bold text-yellow-400"
            >
              ReactJS
            </a>{" "}
            with{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="text-sky-500 font-bold"
            >
              TailwindCSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
