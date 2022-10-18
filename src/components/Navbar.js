import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => {
    setToggle(!toggle);
  };

  const toggleClasses =
    toggle === true
      ? "block absolute right-3 hamburger-change "
      : "block absolute right-3 ";

  return (
    <header className="fixed top-0 left-0 bg-transparent w-full z-[9999] bg-white bg-opacity-80 navbar-blur">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="py-6 block text-[#61dafb] font-bold text-lg"
            >
              fiqihz<span className="text-yellow-400">Dev</span>
            </a>
          </div>
          <button onClick={handleChangeToggle} className={toggleClasses}>
            <span className="w-[30px] h-[2px] block my-2 bg-black transition duration-200 ease-in-out origin-top-left"></span>
            <span className="w-[30px] h-[2px] block my-2 bg-black transition duration-200 ease-in-out"></span>
            <span className="w-[30px] h-[2px] block my-2 bg-black transition duration-200 ease-in-out origin-bottom-left"></span>
          </button>

          {toggle && (
            <nav className="absolute py-5 px-5 right-2 top-full max-w-[250px] w-full bg-white border-2 shadow-lg rounded-lg">
              <ul className="block">
                <li className="group">
                  <a
                    href="#home"
                    className="flex group-hover:text-[#61dafb] py-2"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="flex group-hover:text-[#61dafb] py-2"
                  >
                    About
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="flex group-hover:text-[#61dafb] py-2"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="flex group-hover:text-[#61dafb] py-2"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
