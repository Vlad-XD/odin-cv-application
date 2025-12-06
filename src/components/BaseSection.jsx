// BaseSection: base component for a (non-header) section of the resume
import ToggleButton from "./ToggleButton.jsx";
import "../css/BaseSection.css";

function BaseSection({
  title,
  toggleFn,
  addFn,
  isEditable,
  className,
  children,
}) {
  const addSvg = (
    <svg
      className="add-button-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="16"></line>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );

  return (
    <div className={`section ${className}`}>
      <div className="section-header-container">
        <h2 className="section-title">{title}</h2>
        <ToggleButton
          className="resume-button"
          onClick={() => {
            toggleFn();
          }}
        ></ToggleButton>
      </div>
      <div className="section-content">{children}</div>
      {isEditable && (
        <button
          className="resume-button add-button"
          type="button"
          onClick={() => {
            addFn();
          }}
        >
          {addSvg}
        </button>
      )}
    </div>
  );
}

export default BaseSection;
