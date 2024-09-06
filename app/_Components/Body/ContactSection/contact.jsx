"use client";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const notify = () => toast("Thanks for reaching out !");

  const handleSubmit = (e) => {
    e.preventDefault();
    notify();
  };

  return (
    <div className="container sm:mt-[150px] mt-[100px]" id="contact">
      <div className=" mx-auto max-w-screen-xl text-center">
        <div id="title_container" className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 sm:text-4xl text-3xl tracking-tight font-extrabold    text-gray-900">
            Get in Touch
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl ">
            Have a question or need assistance? Interested in sharing feedback
            on a new feature? Want more informations? We're here to help!"
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <form
          onSubmit={handleSubmit}
          action="submit"
          className="space-y-8 w-full md:w-[80%] md:mx-auto lg:w-[60%] lg:mx-0"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white w-40 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Send
          </button>
        </form>
        <div id="img_container " className="lg:block hidden">
          <Image width={350} height={350} src="/message.png" />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
}
