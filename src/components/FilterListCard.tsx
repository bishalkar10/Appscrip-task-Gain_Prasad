import React, { useState } from "react";
import RenderFilterList from "./RenderFilterList";

export default function FilterListCard() {
  // filters list to be rendered
  const filters = [
    { label: "Ideal For", options: ["Men", "Women", "Baby & Kids"] },
    { label: "Occasion", options: ["Casual", "Formal", "Party"] },
    { label: "Work", options: ["Office", "Casual", "Party"] },
    { label: "Fabric", options: ["Cotton", "Silk", "Denim"] },
    { label: "Segment", options: ["Segment1", "Segment2", "Segment3"] },
    { label: "Suitable For", options: ["Option1", "Option2", "Option3"] },
    {
      label: "Raw Materials",
      options: ["Material1", "Material2", "Material3"],
    },
    { label: "Patterns", options: ["Pattern1", "Pattern2", "Pattern3"] },
  ];

  return (
    <div className="filterList w-full absolute sm:static bg-white pr-8 sm:p-0">
      <label className="relative flex gap-2 items-center uppercase font-bold text-primary text-sm sm:text-base md:text-lg">
        <input type="checkbox" className="custom-checkbox" />
        Customizable
      </label>
      <ul>
        {filters.map((item) => (
          <RenderFilterList
            key={item.label}
            label={item.label}
            options={item.options}
          />
        ))}
      </ul>
    </div>
  );
}
