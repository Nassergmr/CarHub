"use client";

import Li_navebar from "../../Elements/li_navebar";
import LogoIcon from "../../../../public/logo.svg";
import Drawer from "./drawer";
import Login_Modal from "../../Elements/login_modal";

export default function Navebar({
  activeLink,
  setActiveLink,
  modal,
  setModal,
}) {
  const handleActiveClick = (id) => {
    setActiveLink(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className=" top-0 z-20 shadow-md py-4 bg-white fixed w-full">
      <div className="container flex justify-between items-center">
        <LogoIcon className="w-[120px] h-[50px]" />
        <ul className="lg:gap-x-8 md:gap-x-5 md:flex transition hidden">
          <Li_navebar>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleActiveClick("home");
              }}
              className={`hover:text-blue-700 transition ${
                activeLink === "home"
                  ? "text-blue-700 font-bold "
                  : "font-semibold"
              }`}
              href="#home"
            >
              Home
            </a>
          </Li_navebar>
          <Li_navebar>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleActiveClick("catalogue");
              }}
              className={`hover:text-blue-700 transition ${
                activeLink === "catalogue"
                  ? "text-blue-700 font-bold "
                  : "font-semibold"
              }`}
              href="#catalogue"
            >
              Catalogue
            </a>
          </Li_navebar>
          <Li_navebar>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleActiveClick("testimonials");
              }}
              className={`hover:text-blue-700 transition ${
                activeLink === "testimonials"
                  ? "text-blue-700 font-bold "
                  : "font-semibold"
              }`}
              href="#testimonials"
            >
              Testimonials
            </a>
          </Li_navebar>
          <Li_navebar>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleActiveClick("about");
              }}
              className={`hover:text-blue-700 transition ${
                activeLink === "about"
                  ? "text-blue-700 font-bold "
                  : "font-semibold"
              }`}
              href="#about"
            >
              About Us
            </a>
          </Li_navebar>
          <Li_navebar>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleActiveClick("contact");
              }}
              className={`hover:text-blue-700 transition ${
                activeLink === "contact"
                  ? "text-blue-700 font-bold "
                  : "font-semibold"
              }`}
              href="#contact"
            >
              Contact Us
            </a>
          </Li_navebar>
        </ul>
        <Drawer activeLink={activeLink} setActiveLink={setActiveLink} />
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setModal(!modal)}
        >
          <span className="flex justify-center items-center">Sign In</span>
        </button>
      </div>
      <Login_Modal modal={modal} setModal={setModal} />
    </nav>
  );
}
