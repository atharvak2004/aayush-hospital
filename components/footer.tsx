"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  selected?: number[];
  onChange: (selected: number[]) => void;
};

export default function CategoryFilter({
  selected = [], // default empty array
  onChange,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
    { id: 4, name: "Category 4" },
    { id: 5, name: "Category 5" },
  ];

  const toggleCategory = (id: number) => {
    const updated = selected.includes(id)
      ? selected.filter(
          (item) => item !== id
        )
      : [
          ...selected,
          id,
        ];

    onChange(updated);
  };

  const clearFilters = () => {
    onChange([]);
  };

  return (
    <div className="border rounded-xl p-5 bg-white">

      {/* Header */}
      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className="
            flex
            items-center
            gap-2
            lg:pointer-events-none
          "
        >
          <h4 className="text-sm font-medium">
            Categories
          </h4>

          <ChevronDown
            className={`
              lg:hidden
              h-4
              w-4
              transition-transform
              ${
                isOpen
                  ? "rotate-180"
                  : ""
              }
            `}
          />
        </button>

        <button
          type="button"
          onClick={clearFilters}
          className="
            text-xs
            text-gray-500
            hover:text-black
          "
        >
          Clear
        </button>
      </div>

      {/* Mobile collapse + desktop always open */}
      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          mt-4
          ${
            isOpen
              ? "max-h-[500px]"
              : "max-h-0 lg:max-h-[500px]"
          }
        `}
      >
        <div className="space-y-3">

          {categories.map((cat) => (
            <label
              key={cat.id}
              className="
                flex
                items-center
                gap-3
                cursor-pointer
                text-sm
              "
            >
              <input
                type="checkbox"
                checked={
                  selected?.includes(cat.id) || false
                }
                onChange={() =>
                  toggleCategory(cat.id)
                }
                className="accent-black"
              />

              {cat.name}
            </label>
          ))}

        </div>
      </div>
    </div>
  );
}