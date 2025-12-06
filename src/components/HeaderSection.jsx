import { useState } from "react";
import ToggleButton from "./ToggleButton.jsx";
import "../css/HeaderSection.css";

function HeaderSection({ className }) {
  const [isEditable, setEditable] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("example@domain.com");
  const [phone, setPhone] = useState("(123) 456-7890");

  if (isEditable) {
    return (
      <div className={`section header-section ${className}`}>
        <ToggleButton
          className="toggle-button"
          onClick={() => {
            setEditable(false);
          }}
        ></ToggleButton>
        <input
          className="field input-field name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Full Name..."
          value={name}
        />
        <input
          className="field input-field email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="Email address..."
          value={email}
        />
        <input
          className="field input-field phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type="text"
          placeholder="Phone Number..."
          value={phone}
        />
      </div>
    );
  } else {
    return (
      <div className="section header-section">
        <ToggleButton
          className="toggle-button"
          onClick={() => {
            setEditable(true);
          }}
        ></ToggleButton>
        <h1 className="field display-field name">{name}</h1>
        <p className="field display-field email">{email}</p>
        <p className="field display-field phone">{phone}</p>
      </div>
    );
  }
}

export default HeaderSection;
