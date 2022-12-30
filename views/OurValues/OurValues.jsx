import Image from "next/image";
import { ScrollMouse } from "../../components";

const values = [
  {
    id: "1",
    images: "/assets/img/Experienced.png",
    name: "Experienced",
  },
  {
    id: "2",
    images: "/assets/img/Trustworthy.png",
    name: "Trustworthy",
  },
  {
    id: "3",
    images: "/assets/img/FreeConsultation.png",
    name: "Free Consultation",
  },
  {
    id: "4",
    images: "/assets/img/AffordablePrice.png",
    name: "Affordable Price",
  },
  {
    id: "5",
    images: "/assets/img/Accurate.png",
    name: "Accurate",
  },
  {
    id: "6",
    images: "/assets/img/Respectful.png",
    name: "Respectful",
  },
  {
    id: "7",
    images: "/assets/img/Accountable.png",
    name: "Accountable",
  },
];
const OurValues = () => {
  return (
    <section className="min-h-screen relative">
      <div className="m-10 mb-0 md:m-20">
        <div className="container flex flex-col">
          <div className="flex flex-col gap-10 md:gap-20 relative">
            <h1 className="capitalize font font-bold text-5xl">Our Values</h1>
            <div className="flex flex-wrap gap-20 justify-center">
              {values?.map((e) => {
                return (
                  <div key={e.id} className="flex flex-col justify-center">
                    <span className="max-w-[150px] h-[150px]">
                      <img
                        src={e.images}
                        loading="lazy"
                        alt=""
                        className="object-cover"
                      />
                    </span>
                    <h1 className="text-center">{e.name}</h1>
                  </div>
                );
              })}
            </div>
            <div className="absolute right-0 bottom-0 text-gray-500">
              <ScrollMouse />
            </div>
          </div>
          <div className="flex justify-center min-h-screen items-center">
            <h1 className="text-lg md:text-5xl md:max-w-3xl text-center">
              "Accounting & Taxation are our expertise. We'll take care of them,
              so you can focus on yours."
            </h1>
          </div>
        </div>
      </div>

      <div className="absolute right-10 bottom-10 text-gray-500">
        Let's Work Together
        <ScrollMouse />
      </div>
    </section>
  );
};

export default OurValues;
