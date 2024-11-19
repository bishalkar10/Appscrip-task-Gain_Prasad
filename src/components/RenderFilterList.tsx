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
    icon?.classList.toggle("toggle-icon");
    icon?.classList.toggle("rotated-icon");

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
    <li className="filter-sidebar">
      <div className="category-name">
        {label.charAt(0).toUpperCase() + label.slice(1)}
        <FontAwesomeIcon
          icon={faAngleRight}
          onClick={hideSubList}
          className="icon toggle-icon"
        />
      </div>
      <p className="selected-filters">{getAllLabel()}</p>

      {selectedCheckboxes.length > 0 && (
        <button onClick={handleUnselectAll} className="unselect-btn">
          Unselect All
        </button>
      )}

      <ul className="subList hidden">
        {options.map((option) => (
          <li key={option}>
            <label>
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
