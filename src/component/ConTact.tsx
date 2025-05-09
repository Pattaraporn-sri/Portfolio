import { Link } from "react-router-dom";
import facebook from "../IMG/icons8-facebook-50 (2).png";
import IG from "../IMG/icons8-ig-50 (1).png";
import Github from "../IMG/icons8-github-50 (1).png";
import email from "../IMG/icons8-email-50 (1).png";

import flower4 from "../IMG/ดอกไม้4-Photoroom.png";
import flower5 from "../IMG/ดอกไม้5-Photoroom.png";
import { useInView } from "react-intersection-observer";

function ConTact() {
  const { ref: container1Ref, inView: container1InView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  }); //เลื่อนมาแล้ว animation ทำงานทุกครั้ง

  const { ref: container2Ref, inView: container2InView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="bg-orange-100 h-screen">
      <div className="pt-8">
        <p className=" font-Calistoga text-yellow-800 text-5xl pl-[600px]">
          CONTACT ME
        </p>

        {/* เส้นใต้ */}
        <div className="border-t border-yellow-800 w-2/5 ml-[450px] mt-5 border-2" />

        <div className="font font-Taviraj text-xl text-yellow-800 mt-10 ml-[500px] bg-orange-200 w-[450px] h-[500px] rounded-lg pt-24 pl-12 rounded-tl-[3rem] rounded-br-[3rem] shadow-xl">
          <div className="flex -mt-10">
            <p>Name : </p>
            <input
              className="h-8 w-64 ml-4 pl-2 text-sm rounded-md"
              placeholder="your name"
            />
          </div>
          <div className="flex mt-6">
            <p>E-mail : </p>
            <input
              className="h-8 w-64 ml-2 pl-2 text-sm rounded-md"
              placeholder="your e-mail"
            />
          </div>
          <div className="flex mt-6">
            <p>Phone : </p>
            <input
              className="h-8 w-64 ml-2 pl-2 text-sm rounded-md"
              placeholder="xx-xxxxxxxx"
            />
          </div>
          <div className="flex mt-6">
            <p>Message : </p>
            <input className="h-32 w-64 ml-2 pl-2 text-sm rounded-md" />
          </div>

          <div className="flex mt-5">
            <Link
              to="//www.facebook.com/pattaraporn.sritirat.2024"
              className="font-Calistoga"
            >
              <img src={facebook} className="h-8 mt-3" />
            </Link>
            <Link to="//www.instagram.com/_yypatt/" className="font-Calistoga">
              <img src={IG} className="h-8 mt-3 ml-3" />
            </Link>
            <Link to="https://github.com/Pattaraporn-sri" className="font-Calistoga">
              <img src={Github} className="h-8 mt-3 ml-3" />
            </Link>
            <Link to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="font-Calistoga">
              <img src={email} className="h-7 mt-4 ml-3" />
            </Link>
          </div>
          <button className="bg-yellow-600 text-sm w-28 h-10 mt-6 shadow-lg rounded-lg ml-32">
            <p className="text-yellow-900 py-2">Submit</p>
          </button>

          <div className="flex absolute h-[500px] -mt-[385px] -ml-36">
            <div
              className={`absolute -ml-[450px] ${
                container1InView
                  ? "animation-mymove"
                  : "opacity-0 translate-y-10"
              }`}
              ref={container1Ref}
            >
              <img src={flower4} className="h-[550px] -mt-44 rotate-45" />
            </div>
            <div
              className={`absolute ${
                container2InView
                  ? "animation-mymove"
                  : "opacity-0 translate-y-10"
              }`}
              ref={container2Ref}
            >
              <img
                src={flower5}
                className="h-[350px] ml-[800px] -mt-12 -rotate-45"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConTact;
