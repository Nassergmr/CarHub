"use client";

import CarIcon from "../../../../public/model-icon.png";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Model({
  isOpen_2,
  setIsOpen_2,
  query,
  query_2,
  setQuery_2,
  manufacturer,
  setCarModel,
  setAllModels,
}) {
  const modelRef = useRef(null);

  const toggleDropdown_2 = () => setIsOpen_2(!isOpen_2);

  const handleClickOutside = (event) => {
    if (modelRef.current && !modelRef.current.contains(event.target)) {
      setIsOpen_2(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle selecting a model from the dropdown
  const handleModelClick = (model) => {
    setCarModel(model);
    setQuery_2(model); // Update the input field with the selected model
    setIsOpen_2(false); // Close the dropdown
    setAllModels(false);
  };

  const handleAllModelsClick = () => {
    setAllModels(true);
    setIsOpen_2(false);
    setQuery_2("All");
    setCarModel(false);
  };

  return (
    <div ref={modelRef} className="relative w-full pt-3">
      <div
        id="model"
        className={clsx(
          "bg-gray-100 py-[10px] flex items-center h-14 rounded-full focus-within:shadow-lg",
          query === "" && "bg-gray-500 cursor-default"
        )}
      >
        {query !== "" && (
          <div
            id="img_container"
            className={clsx(
              "grid place-items-center rounded-full w-12 bg-gray-100 mx-[10px]",
              query === "" && "bg-gray-500"
            )}
          >
            <Image
              src={CarIcon}
              alt="Car Icon"
              width={30}
              height={30}
              className={clsx("bg-gray-100 mb-1")}
            />
          </div>
        )}

        <input
          type="text"
          disabled={query === ""}
          value={query_2} // Display the selected model
          onChange={(event) => setQuery_2(event.target.value)}
          placeholder="Model..."
          className={clsx(
            "w-full rounded-lg border-none font-semibold bg-gray-100 cursor-pointer",
            "focus:outline-none",
            query === "" && "bg-gray-500 ml-[40px] cursor-default"
          )}
          autoComplete="off"
          onClick={toggleDropdown_2}
        />

        <ChevronDownIcon
          onClick={toggleDropdown_2}
          className={clsx(
            "size-8 ml-auto mr-4 cursor-pointer",
            query === "" && "hidden"
          )}
        />
      </div>

      {isOpen_2 && (
        <div className="absolute w-full z-10 max-h-[300px] overflow-y-scroll bg-gray-100 text-black rounded-lg shadow  mt-[10px]">
          <ul className="py-2 text-sm text-black font-semibold h-auto">
            <button
              onClick={handleAllModelsClick}
              className=" block px-4 py-2 hover:bg-blue-700 text-blue-700 font-bold text-xl hover:text-white w-full text-left"
            >
              All
            </button>

            <hr className="" />
            {manufacturer.map((item, index) => (
              <li key={index}>
                <button
                  className="block px-4 py-2 hover:bg-blue-700  hover:text-white w-full text-left"
                  onClick={() => handleModelClick(`${item.model} ${item.year}`)}
                >
                  {`${item.make.charAt(0).toUpperCase() + item.make.slice(1)} ${
                    item.model
                  } ${item.year}`}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
