
import dailynews from "../IMG/Daily-news-1.png";
import Demon from "../IMG/Demon-Slayer.png";
import { Link } from "react-router-dom";
import framework from "../IMG/Screenshot 2025-01-07 133422.png";
import code from "../IMG/icons8-code-50 (1).png";
import redux from "../IMG/Redux.png";
import tailwind from "../IMG/react-tailwind.png";
import UI from "../IMG/Layout.png";
import serviceAPI from "../IMG/Service-API.png";
import { useInView } from "react-intersection-observer";
import Game from "../IMG/game.png"

function MyWork(): JSX.Element {
  const { ref: section1Ref, inView: section1InView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: section2Ref, inView: section2InView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="bg-orange-100 h-[1850px]  w-full -mt-60">
      <p className="font font-Calistoga text-yellow-800 text-5xl ml-[600px] pt-20">
        MY WORK
      </p>
      {/* เส้นใต้ */}
      <div className="border-t border-yellow-800 w-2/5 ml-[400px] mt-5 border-2" />

      {/*โชว์ข้อมูลภาพใหญ่ สัก 2 ภาพ*/}
      <div
        className={`relative h-72 w-[500px] ml-44 mt-14 flex transition-all duration-1000 ${
          section1InView ? "animation-Move" : "opacity-0 translate-y-10"
        }`}
        ref={section1Ref}
      >
        <div className="absolute bg-orange-50 h-80 w-[1050px] opacity-50 rounded-xl shadow-xl shadow-orange-200" />
        <img
          src={dailynews}
          className="absolute h-64 w-[440px] rounded-lg shadow-lg mt-8 ml-8"
        />
        <p className="absolute font font-Taviraj text-yellow-800 text-2xl font-bold mt-16 ml-[520px] w-[720px]">
          React Router Dom - Daily News
        </p>
        <span className="absolute font-Taviraj text-yellow-800 ml-[520px] mt-28 w-[500px] text-sm">
          Making our app have multiple pages. Pages will work when the user
          clicks on a link or enters the URL of the website and will switch to
          another page. Users can move between web pages without having to load
          them. New website
        </span>
        <Link
          to="https://github.com/Pattaraporn-sri/Daily-News/tree/main"
          className="absolute font-Taviraj w-28 h-9 py-2 px-4 text-white text-sm ml-[520px] mt-48 bg-yellow-800 hover:bg-yellow-700 rounded-lg shadow-lg"
        >
          Source code
        </Link>

        <Link
          to="http://localhost:5174/"
          className="absolute font-Taviraj w-28 h-9 py-2 px-5 text-white text-sm bg-yellow-800 hover:bg-yellow-700 rounded-lg shadow-lg ml-[650px] mt-48"
        >
          Live Demo
        </Link>
      </div>

      <div
        className={`flex mt-20 transition-all duration-1000 ${
          section2InView ? "animation-MyMove" : "opacity-0 translate-y-10"
        }`}
        ref={section2Ref}
      >
        <div className="absolute bg-orange-50 h-[350px] w-[1050px] opacity-50 ml-44 rounded-lg shadow-lg shadow-orange-200"></div>
        <p className="absolute font-Taviraj text-yellow-800 text-2xl font-bold ml-56 w-[500px] mt-24">
          API - Demon Slayer
        </p>
        <p className="absolute text-sm font-Taviraj text-yellow-800 w-[430px] ml-56 mt-36">
          API (Application Programming Interface) Is an intermediary between the
          client and server to act as an interface between these two parts in
          exchanging information. and connection between applications
        </p>
        <Link
          to="https://github.com/Pattaraporn-sri/API-Demon-Slayer/tree/main"
          className="absolute font-Taviraj text-white bg-yellow-800 hover:bg-yellow-700 w-28 h-9 py-2 px-4 text-sm shadow-lg rounded-lg ml-56 mt-60"
        >
          Source code
        </Link>
        <div>
          <Link
            to="http://localhost:5174/"
            className="absolute font-Taviraj text-white bg-yellow-800 hover:bg-yellow-700 w-28 h-9 py-2 px-5 text-sm shadow-lg  rounded-lg mt-60 ml-[350px]"
          >
            Live Demo
          </Link>
        </div>
        <img
          src={Demon}
          className="absolute h-72 w-[500px] ml-[700px] rounded-lg shadow-lg mt-8"
        />
      </div>
      <div>
        <div className="flex mt-[380px]">
          {/*Container1*/}
          <div className="bg-orange-50 w-[450px] h-[350px] mt-14 ml-12 rounded-3xl shadow-lg shadow-orange-200 transform transition-all duration-300 hover:scale-105 hover:translate-y-[-10px]">
            <img
              src={framework}
              className="h-48 ml-7 mt-7 rounded-xl shadow-lg"
            />

            <p className="font-Taviraj font-bold text-yellow-700 text-xl ml-7 pt-6 ">
              React Framework
            </p>
            <Link
              to="https://github.com/Pattaraporn-sri/React-Framework"
              className="flex w-32 h-9 py-2 px-3 mt-4 mr-2 ml-7 border-yellow-700 hover:border-yellow-600 shadow-lg rounded-xl font font-Kanit border-2 "
            >
              <img src={code} className="h-4" />
              <p className="text-sm font-Taviraj text-yellow-700 ml-2">
                source code
              </p>
            </Link>
          </div>
          {/*Container2*/}
          <div className="bg-orange-50  w-[450px] h-[350px] mt-14 ml-10 rounded-3xl shadow-lg shadow-orange-200 transform transition-all duration-300 hover:scale-105 hover:translate-y-[-10px]">
            <img src={redux} className="h-48 ml-7 mt-7 rounded-xl shadow-lg" />

            <p className="font-Taviraj font-bold text-yellow-700 text-xl ml-7 pt-6">
              React Redux
            </p>
            <Link
              to="https://github.com/Pattaraporn-sri/React-Redux"
              className="flex w-32 h-9 py-2 px-3 mt-4 mr-2 ml-7 border-yellow-700 hover:border-yellow-600 shadow-lg rounded-xl font font-Kanit border-2 "
            >
              <img src={code} className="h-4" />
              <p className="text-sm font-Taviraj text-yellow-700 ml-2">
                source code
              </p>
            </Link>
          </div>
          {/*Container3*/}
          <div className="bg-orange-50  w-[450px] h-[350px] mt-14 ml-10 rounded-3xl shadow-lg shadow-orange-200 transform transition-all duration-300 hover:scale-105 hover:translate-y-[-10px]">
            <img
              src={tailwind}
              className="h-48 ml-7 mt-7 rounded-xl shadow-lg"
            />

            <p className="font-Taviraj font-bold text-yellow-700 text-xl ml-7 pt-6">
              React Tailwind
            </p>
            <Link
              to="https://github.com/Pattaraporn-sri/React-tailwind"
              className="flex w-32 h-9 py-2 px-3 mt-4 mr-2 ml-7 border-yellow-700 hover:border-yellow-600 shadow-lg rounded-xl font font-Kanit border-2 "
            >
              <img src={code} className="h-4" />
              <p className="text-sm font-Taviraj text-yellow-700 ml-2">
                source code
              </p>
            </Link>
          </div>
        </div>
        <div className="flex">
          {/*Containe4*/}
          <div className="bg-orange-50  w-[450px] h-[350px] mt-14 ml-10 rounded-3xl shadow-lg shadow-orange-200 transform transition-all duration-300 hover:scale-105 hover:translate-y-[-10px]">
            <img
              src={UI}
              className="h-48 w-96 ml-7 mt-7 rounded-xl shadow-lg"
            />

            <p className="font-Taviraj font-bold text-yellow-700 text-xl ml-8 pt-6">
              Style UI & Module Style
            </p>
            <Link
              to="https://github.com/Pattaraporn-sri/React-UI-Module"
              className="flex w-32 h-9 py-2 px-3 mt-4 mr-2 ml-8 border-yellow-700 hover:border-yellow-600 shadow-lg rounded-xl font font-Kanit border-2 "
            >
              <img src={code} className="h-4" />
              <p className="text-sm font-Taviraj text-yellow-700 ml-2">
                source code
              </p>
            </Link>
          </div>
          {/*Container5*/}
          <div className="bg-orange-50 w-[450px] h-[350px] mt-14 ml-10 rounded-3xl shadow-lg shadow-orange-200 transform transition-all duration-300 hover:scale-105 hover:translate-y-[-10px]">
            <img
              src={serviceAPI}
              className="h-48 w-96 ml-7 mt-7 rounded-xl shadow-lg"
            />

            <p className="font-Taviraj font-bold text-yellow-700 text-xl ml-7 pt-6">
              API Connection
            </p>
            <Link
              to="https://github.com/Pattaraporn-sri/React-service-API"
              className="flex w-32 h-9 py-2 px-3 mt-4 mr-2 ml-7 border-yellow-700 hover:border-yellow-600 shadow-lg rounded-xl font font-Kanit border-2 "
            >
              <img src={code} className="h-4" />
              <p className="text-sm font-Taviraj text-yellow-700 ml-2">
                source code
              </p>
            </Link>
          </div>
          {/*Container6*/}
          <div className="bg-orange-50 w-[450px] h-[350px] mt-14 ml-10 rounded-3xl shadow-lg shadow-orange-200 transform transition-all duration-300 hover:scale-105 hover:translate-y-[-10px]">
            <img
              src={Game}
              className="h-48 ml-7 mt-7 rounded-xl shadow-lg"
            />

            <p className="font-Taviraj font-bold text-yellow-700 text-xl ml-7 pt-6">
              React Volcabulary Game
            </p>
            <Link to="https://github.com/Pattaraporn-sri/React-Game" className="flex w-32 h-9 py-2 px-3 mt-4 mr-2 ml-7 border-yellow-700 hover:border-yellow-600 shadow-lg rounded-xl font font-Kanit border-2 ">
              <img src={code} className="h-4" />
              <p className="text-sm font-Taviraj text-yellow-700 ml-2">
                source code
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
