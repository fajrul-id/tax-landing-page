import Image from "next/image";
import { ScrollUp } from "../../components";
import LetsWorkTogetherImg from "../../images/LetsWorkTogether.jpg";
const LetsWorkTogether = () => {
  return (
    <section className="min-h-screen relative">
      <div className="m-10 md:m-20">
        <div className="container flex">
          <div className="flex flex-col gap-10">
            <h1 className="capitalize font font-bold text-5xl max-w-full md:max-w-[250px]">
              Let's work together.
            </h1>
            <div className="flex flex-col lg:flex-row md:justify-center gap-10">
              <Image
                src={LetsWorkTogetherImg}
                loading="lazy"
                alt=""
                className="w-full max-w-xl max-h-[50vh]"
              />
              <div className="flex flex-col gap-4 justify-center">
                <span>
                  <h2 className="text-lg md:text-2xl text-gray-400">
                    Where to find us
                  </h2>
                  <p className="text-base">
                    New Anggrek 2 Blok V3/16, Grand Depok City, Kota Depok 16412
                  </p>
                </span>
                <span>
                  <h2 className="text-lg md:text-2xl text-gray-400">
                    How to contact us
                  </h2>
                  <p className="text-base">+62-813-1918-6669</p>
                </span>
                <span>
                  <h2 className="text-lg md:text-2xl text-gray-400">
                    How to correspondence us
                  </h2>
                  <p className="text-base">info@swiftax.co.id</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-10 bottom-10 text-gray-500">
        Go Up
        <ScrollUp />
      </div>
    </section>
  );
};

export default LetsWorkTogether;
