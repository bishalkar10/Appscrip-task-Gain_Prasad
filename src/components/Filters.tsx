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
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void {
    event.stopPropagation();
    setShowFilter((prevState) => !prevState);
  }

  return (
    <div className="filter outer-container">
      <div className="inner-container">
        <div className="outer-div">
          {/*if showFilter is true then show how the quanitity of search results*/}

          <div className="inner-div">
            <p className="quantity">3325 Items</p>
            <div
              className="btn-wrapper"
              onClick={(event) => toggleFilter(event)}
            >
              <FontAwesomeIcon icon={faAngleRight} className="icon" />

              {showFilter ? (
                <button className="hide-btn">Hide Filters</button>
              ) : (
                <>
                  <button className="small-screen-btn">Filter</button>
                  <button className="large-screen-btn">Show Filters</button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="sort-btn" onClick={toggleSortCard}>
          {sortOptions[selectedSort]}
          <FontAwesomeIcon
            icon={faAngleRight}
            className={`icon ${showSortCard ? "rotated-icon" : "toggle-icon"}`}
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
