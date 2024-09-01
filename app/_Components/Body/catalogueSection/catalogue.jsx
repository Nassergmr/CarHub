"use client";

import { useContext, useState } from "react";
import Form from "./form";
import { ManuContext } from "@/app/layout";
import Car from "./car";

export default function Catalogue() {
  const [query, setQuery] = useState("");
  const [manufacturer, setManufacturer] = useContext(ManuContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen_2, setIsOpen_2] = useState(false);
  const [query_2, setQuery_2] = useState("");
  const [carModel, setCarModel] = useState("");
  const [allModals, setAllModals] = useState(false);

  return (
    <div className="sm:mt-[150px] mt-[100px]">
      <div id="title_section" className="container">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-gray-800 font-bold">
          Car Catalogue
        </h1>
        <p className="mt-1 mb-8 lg:w-10/12 text-gray-400 font-normal text-sm sm:text-base">
          Explore our cars you may like
        </p>
      </div>

      <div id="search_section" className="">
        <Form
          query={query}
          setQuery={setQuery}
          query_2={query_2}
          setQuery_2={setQuery_2}
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isOpen_2={isOpen_2}
          setIsOpen_2={setIsOpen_2}
          carModel={carModel}
          setCarModel={setCarModel}
          allModals={allModals}
          setAllModals={setAllModals}
        />
      </div>

      <div id="car_section">
        <Car
          manufacturer={manufacturer}
          carModel={carModel}
          setCarModel={setCarModel}
          allModals={allModals}
          setAllModals={setAllModals}
        />
      </div>
    </div>
  );
}
