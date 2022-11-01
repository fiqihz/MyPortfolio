import SIKUMBANG from "../assets/SIKUMBANG.png";
import SIKASEP from "../assets/SIKASEP.jpg";
import MUNJULMEALS from "../assets/MUNJULMEALS.png";
import wr from "../assets/wr.png";
import loyola from "../assets/loyola.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="text-xl text-[#61dafb] font-semibold mb-2 uppercase">
              Portofolio
            </h4>
            <h2 className="text-2xl text-slate-700 font-bold mb-2">
              Latest Frontend Development Project
            </h2>
            <p className="text-slate-500 mb-14">
              Here you can see my latest project which i build using ReactJS.
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center xl:max-w-5xl xl:mx-auto">
          <div className="mb-8 p-4 md:w-1/2 hover:scale-95 transition duration-300 ease-in-out group">
            <div className="rounded-md shadow-md overflow-hidden ">
              <img
                src={MUNJULMEALS}
                alt="MunjulMeals"
                className="w-full group-hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <h3 className="font-semibold mt-5 text-lg">MunjulMeals</h3>
            <p className="text-slate-500 mt-2 text-justify">
              Web-Based simple food order application which i build using
              ReactJS and TailwindCSS.
            </p>
          </div>

          <div className="mb-8 p-4 md:w-1/2 hover:scale-95 transition duration-300 ease-in-out group">
            <div className="rounded-md shadow-md overflow-hidden ">
              <img
                src={SIKASEP}
                alt="Sikasep"
                className="w-full group-hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <h3 className="font-semibold mt-5 text-lg">
              SIKASEP Bank BJB Syariah
            </h3>
            <p className="text-slate-500 mt-2 text-justify">
              Web-Based Application for customers in making it easier for
              customers in finding homes for the future
            </p>
          </div>

          <div className="mb-8 p-4 md:w-1/2 hover:scale-95 transition duration-300 ease-in-out group">
            <div className="rounded-md shadow-md overflow-hidden ">
              <img
                src={SIKUMBANG}
                alt="SIKUMBANG"
                className="w-full group-hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <h3 className="font-semibold mt-5 text-lg">
              SIKUMBANG Bank BJB Syariah
            </h3>
            <p className="text-slate-500 mt-2 text-justify">
              Web-Based Application for customers in making it easier for
              customers in finding homes for the future
            </p>
          </div>

          <div className="mb-8 p-4 md:w-1/2 hover:scale-95 transition duration-300 ease-in-out group">
            <div className="rounded-md shadow-md overflow-hidden ">
              <img
                src={wr}
                alt="Working Report"
                className="w-full group-hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <h3 className="font-semibold mt-5 text-lg">
              Working Report Padepokan Tujuh Sembilan
            </h3>
            <p className="text-slate-500 mt-2 text-justify">
              Web-Based Application for Employee’s working report submission
            </p>
          </div>

          <div className="mb-8 p-4 md:w-1/2 hover:scale-95 transition duration-300 ease-in-out group">
            <div className="rounded-md shadow-md overflow-hidden ">
              <img
                src={loyola}
                alt="SMA Kolese Loyola Semarang"
                className="w-full group-hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <h3 className="font-semibold mt-5 text-lg">
              PPDB SMA Kolese Loyola Semarang
            </h3>
            <p className="text-slate-500 mt-2 text-justify">
              Web Application used for Registration and Admission of New
              Students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
