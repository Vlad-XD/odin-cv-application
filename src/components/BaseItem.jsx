// BaseItem: base component for items in a section
import "../css/BaseItem.css";

function BaseItem({
  title,
  titlePlaceholder,
  deleteFn,
  isEditable,
  setStateFn,
  children,
}) {
  const deleteSvg = (
    <svg
      className="delete-button-icon"
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
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  if (!isEditable) {
    return (
      <div className="section-item">
        <div className="section-title-container">
          <h3 className="section-item-title display-field">{title}</h3>
        </div>
        <div className="section-item-content">{children}</div>
      </div>
    );
  } else {
    return (
      <div className="section-item">
        <div className="section-title-container">
          <input
            type="text"
            placeholder={titlePlaceholder}
            className="section-item-title input-field"
            onChange={(e) => {
              setStateFn(e.target.value);
            }}
            value={title}
          ></input>
          <button
            className="resume-button delete-button"
            type="button"
            onClick={() => {
              deleteFn();
            }}
          >
            {deleteSvg}
          </button>
        </div>
        <div className="section-item-content">{children}</div>
      </div>
    );
  }
}

export default BaseItem;
