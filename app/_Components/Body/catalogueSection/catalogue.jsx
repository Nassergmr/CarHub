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
  const [allModels, setAllModels] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="sm:mt-[150px] mt-[100px]">
      <div id="title_section" className="container">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-gray-800 font-bold">
          Car Catalogue
        </h1>
        <p className="mt-1 mb-5 lg:w-10/12 text-gray-400 font-normal text-sm sm:text-base">
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
          allModels={allModels}
          setAllModels={setAllModels}
        />
      </div>

      <div id="car_section">
        <Car
          query={query}
          manufacturer={manufacturer}
          carModel={carModel}
          setCarModel={setCarModel}
          allModels={allModels}
          setAllModels={setAllModels}
          modal={modal}
          setModal={setModal}
          selectedCar={selectedCar}
          setSelectedCar={setSelectedCar}
        />
      </div>
    </div>
  );
}
