import React, { useRef } from "react";
import cat from "../IMG/cat-Photoroom.png";
import { useNavigate } from "react-router-dom";
import html from "../IMG/icon-html.png";
import css from "../IMG/icon-css.png";
import js from "../IMG/icon-javascript.png";
import react from "../IMG/icon-react.png";
import typescript from "../IMG/icon-typescript.png";
import vite from "../IMG/icon-vite.png";
import tailwind from "../IMG/icon-tailwindcss.png";
import Ant from "../IMG/Ant-Design.png";
import school from "../IMG/icons8-school-50 (1).png";
import Univer from "../IMG/icons8-university-50 (1).png";
import { useEffect } from "react";
import butterfly from "../IMG/image-Photoroom.png";
import topflower from "../IMG/image-Photoroom (1).png";
import Shape from "./Shape";
import butterflyimage from "src/IMG/image-Photoroom.png";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const MoreDetails: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const butterflyImage = "src/IMG/image-Photoroom.png";

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll(".Hidden");

        elements.forEach((element) => {
          const elementTop = (element as HTMLElement).getBoundingClientRect()
            .top;
          const screenHeight = window.innerHeight;

          if (elementTop < screenHeight - 50) {
            (element as HTMLElement).classList.remove("Hidden");
            (element as HTMLElement).classList.add("animation-MyMove");
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollToTop();
  }, []);
  const navigate = useNavigate();

  //ฟังก์ชันย้อนกลับ
  const handleGoBack = () => {
    navigate(-1); //ใช้ -1 เพื่อย้อนกลับไปหน้าก่อนหน้า
  };

  return (
    <div className="bg-orange-100 min-h-screen absolute w-full">
      <p className="font font-Calistoga text-yellow-800 text-5xl ml-[600px] pt-20 animation-Move">
        ABOUT ME
      </p>
      {/* เส้นใต้ */}
      <div className="border-t border-yellow-800 w-2/5 ml-[400px] mt-5 border-2"></div>

      <div className="font font-Taviraj w-[700px] ml-56 mt-14 text-yellow-800 ">
        <div className="animation-top absolute top-5 -right-14">
          <img src={topflower} className=" h-36 rotate-45" />
        </div>
        <div className="relative animation-mymove">
          <p className="text-4xl font-bold relative animation-mymove">Hello!</p>
          <p className=" mt-5">
            My name is Pattaraporn Sritirat,Graduated with KhonKaen University
            currently studying Geo-Informatics Computer College.
          </p>
          <p>
            My career objective is becoming a Web Developer. I am interested in
            Front End Developer.
          </p>
          <p>
            I am an extremely creative, a product team player, energetic and
            responsible, active and enthusiastic, able to work under pressure
            and flexible time.
          </p>
          <p>
            Having services mind, pleasant personality, good decision making,
            good relationship, positive attitude, and open mind.
          </p>
          <p>
            Having services mind, pleasant personality, good decision making,
            good relationship, positive attitude, and open mind.
          </p>

          <div className="animation-butterfly-flutter">
            <img
              src={butterfly}
              alt="butterfly"
              className="h-24 -mt-[330px] -ml-16 rotate-45"
            />
          </div>
        </div>

        <div>
          <img
            className="h-[400px] absolute -mt-[150px] ml-[800px] rounded "
            src={cat}
            alt="about-me-cat"
          />
        </div>

        {/* ข้อมูลเพิ่มเติม */}
        <div className="mt-44 text-yellow-800">
          <p className="font font-Calistoga text-yellow-800 text-5xl ml-[350px] pt-28">
            EDUCATION
          </p>
          {/* เส้นใต้ */}
          <div className="border-t border-yellow-800 w-5/6 ml-[200px] mt-5 border-2"></div>
          <div className="mt-10 ml-28 text-xl">
            <div className="flex w-[800px]">
              <img src={school} className="h-8 mr-5 -mt-1" />
              <p className="font-bold">Khon Kaen Wittayayon School</p>
              <p className="ml-72 text-sm">2016-2021</p>
            </div>
            <div className="flex w-[800px] mt-10">
              <img src={Univer} className="h-8 mr-5" />
              <p className="font-bold">KhonKaen University</p>
              <p className="ml-96 text-sm">Currently Studying</p>
            </div>
            <p className="text-sm ml-12">Geo-Informatics Computer College</p>
          </div>

          <div>
            <p className="font font-Calistoga text-yellow-800 text-5xl ml-[300px] pt-28">
              Technical Skills
            </p>

            {/* เส้นใต้ */}
            <div className="border-t border-yellow-800 w-5/6 ml-[200px] mt-5 mb-16 border-2" />

            <div ref={containerRef}>
              <div className="Hidden">
                <div className="flex">
                  <img
                    src={html}
                    className="h-32 -mt-5 ml-14 shadow-lg rounded-lg"
                  />
                  <p className="absolute mt-32 ml-24">HTML</p>
                  <img
                    src={css}
                    className="h-32 ml-12 -mt-5 shadow-lg rounded-lg"
                  />
                  <p className="absolute mt-32 ml-[270px]">CSS</p>
                  <img
                    src={js}
                    className="h-32 ml-12 -mt-5 shadow-lg rounded-lg"
                  />
                  <p className="absolute mt-32 ml-[430px]">JavaScript</p>
                  <img
                    src={react}
                    className="h-28 -mt-2 ml-16 shadow-lg rounded-lg"
                  />
                  <p className="absolute mt-32 ml-[630px]">React</p>
                  <img
                    src={typescript}
                    className="h-32 ml-12 -mt-5 shadow-lg rounded-lg"
                  />
                  <p className="absolute mt-32 ml-[780px]">TypeScript</p>
                </div>
                <div className="flex">
                  <img
                    src={vite}
                    className="h-28 ml-60 mt-14 shadow-lg rounded-lg"
                  />
                  <p className="absolute ml-[280px] mt-[190px]">Vite</p>
                  <img
                    src={tailwind}
                    className="absolute h-32 mt-12 ml-[410px] shadow-lg rounded-lg"
                  />
                  <p className="absolute mt-[190px] ml-[420px]">Tailwind CSS</p>
                  <img
                    src={Ant}
                    className="h-28 mt-16 ml-[250px] shadow-lg rounded-lg"
                  />
                  <p className="absolute mt-[190px] ml-[620px] w-56">
                    Ant Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*ปุ่มย้อนกลับ*/}
      <button
        onClick={handleGoBack}
        className="mt-24 mb-10 px-3 py-2 bg-yellow-700 hover:bg-yellow-800 text-white text-sm rounded ml-[700px] shadow-xl"
      >
        Go Back..
      </button>
    </div>
  );
};

export default MoreDetails;
