"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SortCard from "./SortCard";

interface FiltersProps {
  showFilter: boolean;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

// ! Caution Onclick function in SortCard is being propagated upwards and it toggles the card state and that's why the card closing automatically when we choose an option

export default function Filters({ showFilter, setShowFilter }: FiltersProps) {
  const [selectedSort, setSelectedSort] = useState(0); // select the index of the selected item
  const [showSortCard, setShowSortCard] = useState(false); // used to toggle the open/close state of the card
  // sort options
  const sortOptions = [
    "Recommended",
    "Newest First",
    "Popular",
    "Price - High to Low",
    "Price - Low to High",
  ];
  // toggle the sort option card
  function toggleSortCard(): void {
    setShowSortCard((prevState) => !prevState);
  }

  function toggleFilter(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void {
    event.stopPropagation();
    setShowFilter((prevState) => !prevState);
  }
  return (
    <div className="md:px-12 lg:px-24">
      <div className="w-full flex py-3 border-y border-solid">
        <div className="w-full flex justify-center md:justify-start font-bold uppercase border-r border-solid border-[#F5F5F5]">
          {/*if showFilter is true then show how the quanitity of search results*/}

          <div className="flex gap-20 items-center">
            <p className="hidden sm:block">3325 Items</p>
            <div
              className="flex gap-4 items-center"
              onClick={(event) => toggleFilter(event)}
            >
              <FontAwesomeIcon
                icon={faAngleRight}
                className="hidden sm:block w-auto h-4 text-[#292D32]"
              />

              {showFilter ? (
                <p className="underline text-[#888792]">Hide Filters</p>
              ) : (
                <>
                  <p className="sm:hidden text-primary text-sm">Filter</p>
                  <p className="hidden sm:block underline text-[#888792]">
                    Show Filters
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <div
          className="w-full flex justify-center md:justify-end md:pr-9 text-primary text-sm md:text-lg font-bold uppercase gap-1 items-center relative"
          onClick={toggleSortCard}
        >
          {sortOptions[selectedSort]}
          <FontAwesomeIcon
            icon={faAngleRight}
            className={`w-auto h-4 transform trasition-transform duration-300 ${
              showSortCard ? "rotate-270" : "rotate-90"
            }`}
          />
          {showSortCard && (
            <SortCard
              setSelectedSort={setSelectedSort}
              selectedSort={selectedSort}
              items={sortOptions}
            />
          )}
        </div>
      </div>
    </div>
  );
}
