import "./MainPage.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ConsoleText from "./ConsoleText";
import Navbar from "./Navbar";
import CircleText from "./CircleText";
import AboutMe from "./AboutMe";
import Background from "../IMG/flower2-Photoroom.png";
import Hill from "../IMG/hill-Photoroom.png";
import MyWork from "./MyWork";
import ConTact from "./ConTact";

function Portfolio(): JSX.Element {
  return (
    <div>
      <div className="bg-orange-100 h-screen">
        {/*ส่วน Home*/}
        <div>
          <Parallax pages={1.2}>
            <div id="Home" className="relative h-screen">
              <div className="absolute top-10 left-0 right-0 z-20 font-Taviraj text-yellow-800">
                <Navbar />
              </div>
              {/*เส้นใต้*/}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-3/5 border-t-2 border-yellow-800"></div>

              <div className="parallax-container">
                <ParallaxLayer offset={0} speed={0.3}>
                  <img
                    className="w-full h-screen object-cover mt-8 opacity-75"
                    src={Hill}
                    alt="Hill"
                  />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8}>
                  <img
                    className="absolute w-full  max-w-full h-screen max-h-screen object-cover -top-[160%]"
                    src={Background}
                    alt="Background"
                  />
                </ParallaxLayer>
              </div>

              {/*ตัวหนังสือโค้งบน*/}
              <div className="absolute top-36 left-1/2 transform -translate-x-1/2 z-10 font-TrainOne">
                <CircleText
                  text="PORTFOLIO"
                  id="circlePathTop"
                  direction="top"
                />
              </div>

              <p className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center text-4xl font-bold  font-Taviraj text-yellow-800">
                <ConsoleText
                  words={["Pattaraporn Sritirat"]}
                  colors={[""]}
                ></ConsoleText>
              </p>

              {/*ข้อความโค้งล่าง*/}
              <div className="absolute bottom-2/4 left-1/2 transform -translate-x-1/2 z-10 font-TrainOne">
                <CircleText
                  text="Font End Dev"
                  id="circlePathBottom"
                  direction="bottom"
                />
              </div>
            </div>
          </Parallax>
        </div>
      </div>

      {/*About Me*/}
      <div id="AboutMe" className="bg-orange-100 h-screen">
        <AboutMe />
      </div>

      {/*My Work*/}
      <div id="MyWork">
        <MyWork />
      </div>

      {/*Contact*/}
      <div id="ConTact">
        <ConTact />
      </div>
    </div>
  );
}

export default Portfolio;
