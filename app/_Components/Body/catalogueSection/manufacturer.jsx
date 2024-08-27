import TireIcon from "../../../../public/car-logo.svg";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { manufacturers } from "../../Constants";

export default function Manufacturer({
  query,
  setQuery,
  selected,
  setSelected,
}) {
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .startsWith(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox
      value={selected}
      onChange={(value) => setSelected(value)}
      onClose={() => setQuery("")}
    >
      <div className="relative bg-gray-100  flex items-center w-[300px] h-12 rounded-full focus-within:shadow-lg">
        <div className="grid place-items-center rounded-full w-12 bg-gray-100">
          <TireIcon className="w-[20px] h-[20px]" />
        </div>
        <ComboboxInput
          className={clsx(
            "w-full rounded-lg border-none bg-gray-100",
            "focus:outline-none data-[focus]:-outline-none data-[focus]:outline-none"
          )}
          displayValue={(manufacturer) => manufacturer}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Manufacturer..."
        />
        <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5 ml-auto">
          <ChevronDownIcon className="size-4" />
        </ComboboxButton>
      </div>

      <ComboboxOptions
        anchor="bottom"
        transition
        className={clsx(
          "costume-styles w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 data-[left-[90px]]:"
        )}
      >
        {filteredManufacturers.map((item, index) => (
          <ComboboxOption
            key={index}
            value={item}
            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
          >
            <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
            <div className="text-sm/6 w-full hover:bg-blue-700 hover:text-white font-medium text-black ">
              {item}
            </div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
}
