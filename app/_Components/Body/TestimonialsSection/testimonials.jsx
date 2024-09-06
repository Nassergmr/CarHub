import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-white sm:mt-[150px] mt-[100px]" id="testimonials">
      <div className="container mx-auto max-w-screen-xl text-center ">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 sm:text-4xl text-3xl tracking-tight font-extrabold text-gray-900">
            What Our Customers Are Saying
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">
            Discover how our cars have provided exceptional experiences for our
            valued customers.
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-100 border-b border-gray-300 md:p-12 lg:border-r">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 className="text-lg font-semibold text-gray-900">
                Smooth Ride & Top-notch Service
              </h3>
              <p className="my-4">
                "The car I rented was in pristine condition and drove like a
                dream. The customer service was fantastic, making the whole
                process seamless. Highly recommended!"
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                width={100}
                height={100}
                className="rounded-full"
                src="/people/image-6.png"
                alt="Customer 1"
              />
              <div className="space-y-0.5 font-medium text-left">
                <div>Alex Johnson</div>
                <div className="text-sm font-light text-gray-500">
                  Frequent Traveler
                </div>
              </div>
            </figcaption>
          </figure>

          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-100 border-b border-gray-300 md:p-12">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 className="text-lg font-semibold text-gray-900">
                Unmatched Comfort and Style
              </h3>
              <p className="my-4">
                "From the luxury interior to the smooth handling, the car
                exceeded my expectations. It was perfect for my weekend
                getaway."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                width={100}
                height={100}
                className="rounded-full"
                src="/people/image-2.png"
                alt="Customer 2"
              />
              <div className="space-y-0.5 font-medium text-left">
                <div>Jessica Lee</div>
                <div className="text-sm font-light text-gray-500">
                  Business Professional
                </div>
              </div>
            </figcaption>
          </figure>

          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-100 border-b border-gray-300 lg:border-b-0 md:p-12 lg:border-r">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 className="text-lg font-semibold text-gray-900">
                Reliable and Affordable
              </h3>
              <p className="my-4">
                "I was surprised by the affordability without compromising on
                quality. The car was reliable and perfect for my road trip!"
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                width={100}
                height={100}
                className="rounded-full"
                src="/people/image-3.png"
                alt="Customer 3"
              />
              <div className="space-y-0.5 font-medium text-left">
                <div>Mark Thompson</div>
                <div className="text-sm font-light text-gray-500">
                  Adventure Seeker
                </div>
              </div>
            </figcaption>
          </figure>

          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-100 border-gray-300 md:p-12">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 className="text-lg font-semibold text-gray-900">
                Exceptional Experience
              </h3>
              <p className="my-4">
                "The booking process was effortless, and the car was in
                excellent condition. I will definitely use this service again!"
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                width={100}
                height={100}
                className="rounded-full"
                src="/people/Mikolaj-Krol-500x600-c-default.png"
                alt="Customer 4"
              />
              <div className="space-y-0.5 font-medium text-left">
                <div>Jack Davis</div>
                <div className="text-sm font-light text-gray-500">
                  Programmer
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
