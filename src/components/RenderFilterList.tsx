import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface RenderFilterListProps {
  label: string;
  options: string[];
}

export default function RenderFilterList({
  label,
  options,
}: RenderFilterListProps) {
  // State to track the selected checkboxes in the sublist
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
  function hideSubList(
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ): void {
    const icon: SVGSVGElement | null = (event.target as Element).closest("svg");
    const closestDiv: HTMLDivElement | null = (event.target as Element).closest(
      "div",
    );

    // Find the closest parent that contains the ul as its descendant
    const parentContainer = closestDiv?.parentElement;
    const ulElement = parentContainer?.querySelector(".subList");
    icon?.classList.toggle("rotate-90");
    icon?.classList.toggle("rotate-270");

    if (ulElement && ulElement.tagName === "UL") {
      // Toggle between hidden and flex
      ulElement.classList.toggle("hidden");
      ulElement.classList.toggle("flex");
    }
  }

  // Function to handle unselecting all checkboxes
  const handleUnselectAll = (): void => {
    setSelectedCheckboxes([]);
  };

  // Function to handle checkbox changes in the sublist
  const handleCheckboxChange = (value: string): void => {
    setSelectedCheckboxes((prevCheckboxes: string[]) => {
      const updatedCheckboxes = [...prevCheckboxes];

      // Toggle the selected checkbox
      if (updatedCheckboxes.includes(value)) {
        updatedCheckboxes.splice(updatedCheckboxes.indexOf(value), 1);
      } else {
        updatedCheckboxes.push(value);
      }

      return updatedCheckboxes;
    });
  };

  // Function to determine the "All" label based on the selection status
  const getAllLabel = (): string => {
    if (
      selectedCheckboxes.length === 0 ||
      selectedCheckboxes.length === options.length
    ) {
      return "All";
    } else {
      return selectedCheckboxes.join(", ");
    }
  };

  return (
    <li className="border-b border-solid border-[-#E5E5E5] py-3 sm:py-6">
      <div className="flex items-center justify-between font-bold text-primary text-base sm:text-lg">
        {label.charAt(0).toUpperCase() + label.slice(1)}
        <FontAwesomeIcon
          icon={faAngleRight}
          onClick={hideSubList}
          className="transition-transform transform rotate-90 h-4"
        />
      </div>
      <p className="sm:text-lg text-primary pt-2 pb-2 sm:pb-6">
        {getAllLabel()}
      </p>

      {selectedCheckboxes.length > 0 && (
        <button
          onClick={handleUnselectAll}
          className="text-[#BFC8CD] underline pt-2 sm:pt-6"
        >
          Unselect All
        </button>
      )}

      <ul className="subList flex flex-col gap-y-2 sm:gap-y-6 text-primary">
        {options.map((option) => (
          <li key={option}>
            <label className="relative flex gap-2 items-center text-sm sm:text-base">
              <input
                className="custom-checkbox"
                type="checkbox"
                checked={selectedCheckboxes.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </li>
  );
}
