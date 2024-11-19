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
    <ul className="sortcard">
      {items.map((item: string, index: number) => (
        <li
          key={index}
          className={`${selectedSort === index ? "font-bold" : "font-normal"}`}
          onClick={() => setSelectedSort(index)}
        >
          {renderTickIcon(index)} {item}
        </li>
      ))}
    </ul>
  );
};

export default SortCard;
