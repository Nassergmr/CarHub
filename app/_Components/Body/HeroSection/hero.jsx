import Image from "next/image";
import Button_main from "../../Elements/button_main";

export default function Hero() {
  return (
    <div className="sm:mt-[100px] mt-[50px] mb-[100px] relative">
      <div
        id="hero_container"
        className="grid lg:grid-cols-2 grid-cols-1 px-5 gap-y-11"
      >
        <div id="content" className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-800 font-black leading-7 md:leading-10">
            Find, book, or rent a <span className="text-blue-700">car</span> -
            quickly and easily!
          </h1>
          <p className="lg:mt-5 mb-5 mt-3 mx-auto lg:w-10/12 text-gray-400 font-normal text-sm sm:text-lg">
            Streamline your car rental experience with our effortless booking
            process.
          </p>
          <Button_main>Explore Cars</Button_main>
        </div>

        <div id="img_container" className="ml-auto lg:mx-0 mx-auto">
          <Image
            className="mx-auto"
            src="/hero.png"
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
