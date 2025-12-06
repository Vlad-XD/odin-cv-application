// ToggleButton: switches icons when clicked to indicate state of section's editability

import React, { useState } from "react";
import "../css/ToggleButton.css";

function ToggleButton({ onClick, className }) {
  const checkmarkSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="toggle-button-icon checkmark-icon"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
  const editSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 27 27"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="toggle-button-icon edit-icon"
    >
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
  );

  const [isToggled, setToggle] = useState(false);

  // handleToggle: activates onClick function and changes the toggle state
  function handleToggle() {
    onClick();
    isToggled ? setToggle(false) : setToggle(true);
  }

  if (isToggled) {
    return (
      <button
        className={`toggle-button ${className}`}
        onClick={() => {
          handleToggle();
        }}
      >
        {checkmarkSvg}
      </button>
    );
  } else {
    return (
      <button
        className={`toggle-button ${className}`}
        onClick={() => {
          handleToggle();
        }}
      >
        {editSvg}
      </button>
    );
  }
}

export default ToggleButton;
