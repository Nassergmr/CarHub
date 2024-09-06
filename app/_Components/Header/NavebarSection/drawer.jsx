"use client";
import { useState, useRef, useEffect } from "react";
import MenuIcon from "../../../../public/icon-menu.svg";
import CloseIcon from "../../../../public/close.svg";
import Li_drawer from "../../Elements/li_drawer";

export default function Drawer({ activeLink, setActiveLink }) {
  const [drawer, setDrawer] = useState(false);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setDrawer(false);
      }
    };

    if (drawer) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent scrolling when drawer is open
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = ""; // Re-enable scrolling when drawer is closed
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = ""; // Clean up by enabling scrolling on unmount
    };
  }, [drawer]);

  const handleActiveClick = (id) => {
    setActiveLink(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Menu toggle button */}
      <div className="md:hidden block ml-auto cursor-pointer mr-3 hover:text-blue-700 font-semibold transition">
        <MenuIcon
          className="w-[38px] h-[38px]"
          onClick={toggleDrawer}
          id="menu"
          alt="menu"
        />
      </div>

      {/* Dark overlay */}
      {drawer && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-20"
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer content */}
      <div
        ref={drawerRef}
        className={`fixed top-0 w-[50%] sm:w-[40%] ${
          drawer ? "right-0" : "-right-full"
        } h-[100vh] bg-white absolute shadow-lg transition-all duration-300 ease-in-out z-30`}
      >
        <ul onClick={toggleDrawer} className="flex gap-y-5 flex-col ml-5 mt-6">
          <div id="close_icon" className="mb-5">
            <CloseIcon className="h-7 cursor-pointer w-[25px]" />
          </div>
          <Li_drawer>
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
          </Li_drawer>
          <Li_drawer>
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
          </Li_drawer>
          <Li_drawer>
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
          </Li_drawer>
          <Li_drawer>
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
          </Li_drawer>
          <Li_drawer>
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
          </Li_drawer>
        </ul>
      </div>
    </>
  );
}
