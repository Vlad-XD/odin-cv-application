import TextareaAutosize from "react-textarea-autosize";
import "../css/BulletList.css";

function BulletList({ placeholder, onChange, value, className }) {
  // when enter is pressed, a new bullet is added
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const { selectionStart, selectionEnd, value } = e.target;
      const before = value.slice(0, selectionStart);
      const after = value.slice(selectionEnd);

      // Insert a bullet after a new line
      const newValue = `${before}\n• ${after}`;
      e.target.value = newValue;

      // Move cursor to right after the bullet is inserted
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = before.length + 3;
      });
    }
  };

  return (
    <TextareaAutosize
      className={`bulletlist-textarea ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onKeyDown={handleKeyDown}
    />
  );
}

export default BulletList;
