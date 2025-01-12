import React, { useState } from "react";
import cat from "../IMG/cat-Photoroom.png";
import { Link } from "react-router-dom";

function AboutMe(): JSX.Element {
  const [showMore, setShowMore] = useState(false);
  const toggleDetails = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div id="AboutMe" className="section">
      <div className="bg-orange-100 h-screen">
        <p className="font font-Calistoga text-yellow-800 text-5xl ml-[600px] pt-16 animation-top animate-fade-in delay-500">
          ABOUT ME!
        </p>
        {/* เส้นใต้ */}
        <div className="border-t border-yellow-800 w-2/5 ml-[420px] mt-5 border-2 animate-fade-in delay-700"></div>

        <div className="font font-Taviraj w-[500px] ml-80 mt-12 text-yellow-800 animation-mymove animate-fade-in delay-1000">
          <p className="text-5xl mb-4">Hello!</p>
          <p className="animate-fade-in delay-1200">
            My name is Pattaraporn Sritirat, Graduated with KhonKaen University
            currently studying Geo-Informatics Computer College.
          </p>
          <p className="animate-fade-in delay-1400">
            My career objective is becoming a Web Developer. I am interested in
            Font End Developer.
          </p>
          <p>
            I am an extremely creative, a product team player, energetic and
            responsible, active and enthusiastic, able to work under pressure
            and flexible time.
          </p>

          <div>
            <img
              className="h-[400px] absolute -mt-[350px] ml-[600px] rounded"
              src={cat}
              alt="about-me-cat"
            />
          </div>

          {/*ปุ่ม More Details*/}
          <div className="mt-7">
            <Link
              to="/more-details"
              className="px-2 py-1 bg-yellow-700 text-white text-sm rounded hover:bg-yellow-800 shadow-xl"
            >
              More Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
