"use client";

import { useCategories } from "@/hooks/useCategories";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  selected: number[];
  onChange: (selected: number[]) => void;
};

export default function CategoryFilter({
  selected,
  onChange,
}: Props) {

  const { categories, loading } =
    useCategories();

  const [isOpen, setIsOpen] =
    useState(false);

  const toggleCategory = (
    id: number
  ) => {

    let updated: number[];

    if (
      selected.includes(id)
    ) {

      updated =
        selected.filter(
          (item) =>
            item !== id
        );

    } else {

      updated = [
        ...selected,
        id
      ];

    }

    onChange(updated);

  };

  const clearFilters = () => {
    onChange([]);
  };

  if (loading) {
    return (
      <div className="border rounded-xl p-5 bg-white space-y-4">

        <div className="flex justify-between items-center">

          <Skeleton className="h-4 w-24"/>

          <Skeleton className="h-4 w-10"/>

        </div>

        <div className="space-y-3">

          {Array.from({
            length: 5
          }).map((_,i)=>(

            <div
              key={i}
              className="flex items-center gap-3"
            >

              <Skeleton className="w-4 h-4"/>

              <Skeleton className="h-4 w-28"/>

            </div>

          ))}

        </div>

      </div>
    );
  }

  return (

    <div className="border rounded-xl p-5 bg-white">

      {/* Header */}

      <div className="flex justify-between items-center">

        <button
          onClick={() =>
            setIsOpen(
              !isOpen
            )
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

          {/* Mobile arrow */}

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
          onClick={
            clearFilters
          }
          className="
          text-xs
          text-gray-500
          hover:text-black
          "
        >
          Clear
        </button>

      </div>

      {/* Mobile collapse + Desktop always open */}

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

          {categories.map(
            (cat:any)=>(
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
                checked={selected.includes(
                  Number(cat.id)
                )}
                onChange={() =>
                  toggleCategory(
                    Number(cat.id)
                  )
                }
                className="
                accent-black
                "
              />

              {cat.name}

            </label>
          ))}

        </div>

      </div>

    </div>

  );

}