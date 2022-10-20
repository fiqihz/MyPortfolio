import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => {
    setToggle(!toggle);
  };

  const toggleClasses =
    toggle === true
      ? "block absolute right-3 hamburger-change lg:hidden"
      : "block absolute right-3 lg:hidden";

  const navClasses = toggle === true ? "block" : "hidden";

  return (
    <header className="fixed top-0 left-0 bg-transparent w-full flex items-center z-[9999] bg-white bg-opacity-80 navbar-blur">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="py-6 block text-[#61dafb] font-bold text-lg lg:text-xl"
            >
              fiqihz<span className="text-yellow-400">Dev</span>
            </a>
          </div>
          <div className="flex items-center px-4">
            <button onClick={handleChangeToggle} className={toggleClasses}>
              <span className="hamburger-button origin-top-left"></span>
              <span className="hamburger-button"></span>
              <span className="hamburger-button origin-bottom-left"></span>
            </button>

            <nav
              className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none ${navClasses}`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="flex group-hover:text-[#61dafb] py-2 px-8"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="flex group-hover:text-[#61dafb] py-2 px-8"
                  >
                    About
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="flex group-hover:text-[#61dafb] py-2 px-8"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
