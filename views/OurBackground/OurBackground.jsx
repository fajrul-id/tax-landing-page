import Image from "next/image";
import { Animated } from "react-animated-css";
import { ScrollMouse } from "../../components";
import OurBackgroundImg from "../../images/OurBackground.jpg";
const OurBackground = () => {
  return (
    <section className="min-h-screen relative">
      <div className="mx-10 mt-10 md:mt-20 md:mx-20">
        <div className="container flex">
          <div className="flex flex-col gap-10 mb-32">
            <Animated
              animationIn="fadeInLeft"
              animationInDuration={1000}
              isVisible={true}
            >
              <h1 className="capitalize font font-bold text-5xl max-w-full md:max-w-[20px]">
                Our Background.
              </h1>
            </Animated>
            <div className="h-full flex flex-col lg:flex-row md:justify-center gap-10">
              <Image
                src={OurBackgroundImg}
                loading="lazy"
                alt=""
                className="w-full max-w-xl max-h-[50vh]"
              />
              <div className="flex flex-col gap-4 justify-center">
                <p>
                  Founded in 2001, SWIFTax Consulting is a one-stop service for
                  businesses and individuals requiring tax and accounting
                  services. From the beginning, we have focused on UMKM
                  businesses, assisting with tax and accounting, and helping
                  businesses grow and develop.
                </p>
                <p>
                  With over 20 years of experience in the tax and accounting
                  field, we are backed by practitioners and certified tax
                  accountants who are always available.
                </p>
                <p>
                  We do everything you would expect from an accountant and tax
                  advisors, but more. In addition, we offer a wide range of tax
                  and accounting advice as well as business and personal advice.
                </p>
                <p>
                  Whether you are an established business or just starting out,
                  we will support you and guide you step by step through your
                  company's business and financial needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-10 bottom-10 text-gray-500">
        Our Service
        <ScrollMouse />
      </div>
    </section>
  );
};

export default OurBackground;
