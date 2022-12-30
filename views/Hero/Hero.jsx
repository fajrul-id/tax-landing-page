import Image from "next/image";
import { ScrollMouse } from "../../components";
import logo from "../../images/logo.png";
import { Animated } from "react-animated-css";
const Hero = () => {
  return (
    <section className="hero h-screen relative">
      <div className="px-8 py-8 sm:px-20 sm:py-40">
        <div className="container flex flex-col space-y-20">
          <div id="logo" className="flex flex-row items-center">
            <Image
              src={logo}
              loading="lazy"
              alt=""
              className="w-full max-w-[80px]"
            />
            <Animated
              animationIn="lightSpeedIn"
              animationOut="zoomOutDown"
              animationInDuration={1000}
              animationOutDuration={1000}
              isVisible={true}
            >
              {" "}
              <h1 className="font-semibold uppercase">
                teman sehati umkm indonesia
              </h1>
            </Animated>
          </div>
          <div id="hero_content" className="space-y-10">
            <Animated
              animationIn="fadeInLeft"
              animationInDuration={1000}
              isVisible={true}
            >
              <h1 className="font-semibold text-5xl max-w-sm sm:text-6xl md:text-7xl sm:max-w-lg">
                SWIFTax Consulting
              </h1>
            </Animated>
            <Animated animationIn="zoomIn" animationInDuration={1000}>
              <button
                className="text-sm md:text-lg uppercase ml-4 border p-2 md:p-4"
                onClick={() => {
                  window.scrollBy(0, 700);
                }}
              >
                show more{"->"}
              </button>
            </Animated>
          </div>
        </div>
      </div>

      <div className="absolute right-10 bottom-10 text-gray-200">
        Our Background
        <ScrollMouse />
      </div>
    </section>
  );
};

export default Hero;
