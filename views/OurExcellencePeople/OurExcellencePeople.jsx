import Image from "next/image";
import { ScrollMouse } from "../../components";
import AnaChristyawati from "../../images/AnaChristyawati.jpg";
import DedeNursahidah from "../../images/DedeNursahidah.jpg";
import FatahillahAkbar from "../../images/FatahillahAkbar.jpg";
const OurExcellencePeople = () => {
  return (
    <section className="min-h-screen relative">
      <div className="m-10 md:m-20">
        <div className="container flex flex-col gap-10">
          <div className="flex flex-col gap-8">
            <h1 className="capitalize font font-bold text-5xl">
              Our Excellence People
            </h1>
            <p className="text-lg max-w-3xl">
              We are supported by tax and accounting professionals who have over
              20 years of experience in their respective fields and are
              dedicated to helping our clients.
            </p>
          </div>
          <div
            id="card"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            <span className="flex flex-col justify-center items-center gap-4">
              <Image
                src={AnaChristyawati}
                loading="lazy"
                alt=""
                className="
            rounded-full max-w-[15rem]"
              />
              <span>
                <p className="font-semibold">Ana Christyawati</p>
                <p>Partner Leader</p>
              </span>
            </span>

            <span className="flex flex-col justify-center items-center gap-4">
              <Image
                src={DedeNursahidah}
                loading="lazy"
                alt=""
                className="
            rounded-full max-w-[15rem]"
              />
              <span>
                <p className="font-semibold">Ana Christyawati</p>
                <p>Partner Leader</p>
              </span>
            </span>

            <span className="flex flex-col justify-center items-center gap-4">
              <Image
                src={FatahillahAkbar}
                loading="lazy"
                alt=""
                className="
            rounded-full max-w-[15rem]"
              />
              <span>
                <p className="font-semibold">Ana Christyawati</p>
                <p>Partner Leader</p>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="absolute right-10 bottom-10 text-gray-500">
        Our Values
        <ScrollMouse />
      </div>
    </section>
  );
};

export default OurExcellencePeople;
