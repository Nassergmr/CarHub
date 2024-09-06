"use client";

import { ChevronDownIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { manufacturers } from "../../Constants/index";
import { getCars } from "@/app/_Utils";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Manufacturer({
  query,
  setQuery,
  setQuery_2,
  setManufacturer,
  isOpen,
  setIsOpen,
  setAllModels,
  setCarModel,
}) {
  const manufacturerRef = useRef(null);
  const targetRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      manufacturerRef.current &&
      !manufacturerRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .startsWith(query.toLowerCase().replace(/\s+/g, ""))
        );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = async (item) => {
    setQuery(item);
    setIsOpen(false);

    const carData = await getCars(item);
    if (Array.isArray(carData)) {
      setManufacturer(carData);
    } else {
    }
  };

  useEffect(() => {
    if (query === "") {
      setQuery_2("");
      setAllModels(false);
      setCarModel(false);
    }
  }, [query, setQuery_2]);

  const handleInputClick = () => {
    toggleDropdown();
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const ManufacturerLogo = query.toString().replace(/-/g, " ").toLowerCase();
  const ManufacturerLogoUrl = `/svgs/${ManufacturerLogo}.svg`;
  const isValidManufacturer = manufacturers.includes(query.trim());

  return (
    <div className="relative w-full pt-3" ref={manufacturerRef}>
      <div
        ref={targetRef}
        id="manufacturer"
        className="bg-gray-100 flex items-center h-14 rounded-full scroll-target focus-within:shadow-lg"
      >
        {isValidManufacturer && (
          <div
            id="img_container"
            className="mx-[10px] w-[50px] grid place-items-center rounded-full bg-gray-100"
          >
            <Image
              src={ManufacturerLogoUrl}
              width={50}
              height={50}
              className="text-gray-100"
            />
          </div>
        )}
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Make..."
          className={clsx(
            "w-full rounded-lg border-none font-semibold bg-gray-100 cursor-pointer",
            "focus:outline-none",
            query === "" && "ml-[40px]"
          )}
          autoComplete="off"
          onClick={handleInputClick}
        />
        <ChevronDownIcon
          onClick={toggleDropdown}
          className="size-8 ml-auto mr-4 cursor-pointer"
        />
      </div>

      {isOpen && (
        <div className="absolute w-full z-10 max-h-[300px] overflow-y-scroll bg-gray-100 text-black rounded-lg shadow  mt-[10px]">
          <ul className="py-2 text-sm text-black font-semibold h-auto">
            {filteredManufacturers.map((item, index) => (
              <li key={index}>
                <button
                  className="block px-4 py-2 hover:bg-blue-700  hover:text-white w-full text-left"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
