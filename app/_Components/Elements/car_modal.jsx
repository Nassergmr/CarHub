"use client";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
export default function Car_Modal({ modal, setModal, carDetails }) {
  const closeModal = () => {
    setModal(false);
  };
  return (
    <Dialog
      open={modal}
      as="div"
      className="relative z-50 focus:outline-none"
      onClose={closeModal}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/20" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            className="w-full max-w-md rounded-xl shadow-md bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            style={{
              transform: modal ? "scale(1)" : "scale(0.95)",
              opacity: modal ? 1 : 0,
            }}
          >
            <div
              onClick={() => setModal(false)}
              className="absolute cursor-pointer  right-0 p-[1px] rounded-full bg-gray-100 top-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <DialogTitle
              as="h3"
              className="text-xl mb-5 font-bold mt-5 text-black"
            >
              {carDetails?.make.charAt(0).toUpperCase() +
                carDetails?.make.slice(1)}{" "}
              {carDetails?.model}
            </DialogTitle>
            <div id="details_container" className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h2 className="text-gray-500">City mpg</h2>
                <p>{carDetails?.city_mpg}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-gray-500">Class</h2>
                <p>{carDetails?.class}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-gray-500">Combination mpg</h2>
                <p>{carDetails?.combination_mpg}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-gray-500">Cylinders</h2>
                <p>{carDetails?.cylinders}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-gray-500">Displacement</h2>
                <p>{carDetails?.displacement}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-gray-500">Drive</h2>
                <p>{carDetails?.drive}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-gray-500">Fuel type</h2>
                <p>{carDetails?.fuel_type}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-gray-500">Highway mpg</h2>
                <p>{carDetails?.highway_mpg}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-gray-500">Make</h2>
                <p>{carDetails?.make}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-gray-500">Model</h2>
                <p>{carDetails?.model}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-gray-500">Transmission</h2>
                <p>{carDetails?.transmission}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-gray-500">Year</h2>
                <p>{carDetails?.year}</p>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
