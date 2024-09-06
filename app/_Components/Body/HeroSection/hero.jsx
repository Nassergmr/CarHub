"use client";

import Image from "next/image";

export default function Hero() {
  const handleActiveClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="sm:mt-[200px] mt-[150px] relative" id="home">
      <div
        id="hero_container"
        className="grid lg:grid-cols-2 grid-cols-1 px-5 gap-y-11"
      >
        <div id="content" className="text-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-800 font-black leading-7 md:leading-10">
            Find, book, or rent a <span className="text-blue-700">car</span> -
            quickly and easily!
          </h1>
          <p className="lg:mt-5 mb-5 mt-3 mx-auto lg:w-10/12 text-gray-400 font-normal text-sm sm:text-lg">
            Streamline your car rental experience with our effortless booking
            process.
          </p>
          <button
            onClick={() => {
              handleActiveClick("catalogue");
            }}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <span className="flex justify-center items-center">
              Explore Cars
            </span>
          </button>
        </div>

        <div id="img_container" className="ml-auto lg:mx-0 mx-auto">
          <Image
            className="mx-auto"
            src="/hero.png"
            width={600}
            height={600}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
