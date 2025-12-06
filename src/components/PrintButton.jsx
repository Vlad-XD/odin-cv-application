import "../css/PrintButton.css";

function PrintButton({ className, children }) {
  function print() {
    window.print();
  }

  return (
    <button
      className={`print-button ${className}`}
      type="button"
      onClick={print}
    >
      {children}
    </button>
  );
}

export default PrintButton;
