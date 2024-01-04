// SortCard.js
"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface SortCardProps {
  setSelectedSort: React.Dispatch<React.SetStateAction<number>>;
  selectedSort: number;
  items: string[];
}

const SortCard = ({ setSelectedSort, selectedSort, items }: SortCardProps) => {
  const renderTickIcon = (index: number) => {
    return selectedSort === index && <FontAwesomeIcon icon={faCheck} />;
  };

  return (
    <ul className="py-6 px-4 sm:px-6 md:px-10 absolute right-4 md:right-0 top-full bg-white flex flex-col gap-[18px] items-end">
      {items.map((item: string, index: number) => (
        <li
          key={index}
          className={`flex gap-2 text-sm sm:text-normal text-primary md:text-lg uppercase ${
            selectedSort === index ? "font-bold" : "font-normal"
          }`}
          onClick={() => setSelectedSort(index)}
        >
          {renderTickIcon(index)} {item}
        </li>
      ))}
    </ul>
  );
};

export default SortCard;
