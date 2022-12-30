import Image from "next/image";
import { ScrollMouse } from "../../components";
import OurServiceImg from "../../images/OurService.jpg";

const OurService = () => {
  return (
    <section className="min-h-screen relative">
      <div className="m-10 md:m-20 pb-24 md:pb-10">
        <div className="container flex">
          <div className="flex flex-col gap-10">
            <h1 className="capitalize font font-bold text-5xl max-w-full md:max-w-[20px]">
              Our Service
            </h1>
            <div className="flex flex-col lg:flex-row md:justify-center gap-10">
              <Image
                src={OurServiceImg}
                loading="lazy"
                alt=""
                className="w-full max-w-xl"
              />
              <div className="flex flex-col w-full gap-4 ">
                <span>
                  <ul>
                    <h1 className="text-lg md:text-4xl text-gray-200">
                      Accounting Services
                    </h1>
                    <li className="text-base list-disc ml-4">
                      Preparation and evaluation of Financial Statements
                    </li>
                    <li className="text-base list-disc ml-4">
                      SOP creation for your business
                    </li>
                    <li className="text-base list-disc ml-4">
                      Establish accounting software tailored for your business
                      needs (ref. ACCURATE Accounting System)
                    </li>
                  </ul>
                </span>

                <span>
                  <ul>
                    <h1 className="text-lg md:text-4xl text-gray-200">
                      Tax Services & Advisory
                    </h1>
                    <li className="text-base list-disc ml-4">
                      Tax Compliance (Monthly and Yearly) for Individual &
                      Company
                    </li>
                    <li className="text-base list-disc ml-4">
                      Tax Review and Tax Planning
                    </li>
                    <li className="text-base list-disc ml-4">
                      VAT Number Registration
                    </li>
                    <li className="text-base list-disc ml-4">
                      EFIN Registration
                    </li>
                  </ul>
                </span>

                <span>
                  <ul>
                    <h1 className="text-lg md:text-4xl text-gray-200">
                      In-House Training
                    </h1>
                    <li className="text-base list-disc ml-4">
                      Basic knowledge of Indonesia Tax Law and its
                      implementation
                    </li>
                    <li className="text-base list-disc ml-4">
                      Basic knowledge for simple Accounting and Bookeeping
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-10 bottom-10 text-gray-500">
        Our Excellence People
        <ScrollMouse />
      </div>
    </section>
  );
};

export default OurService;
