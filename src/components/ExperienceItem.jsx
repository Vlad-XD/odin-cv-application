import TextareaAutosize from "react-textarea-autosize";
import BaseItem from "./BaseItem.jsx";
import BulletList from "./BulletList.jsx";
import "../css/ExperienceItem.css";

function ExperienceItem({
  companyName,
  positionTitle,
  workDate,
  responsibilityDesc,
  deleteFn,
  isEditable,
  setStateFn,
}) {
  if (!isEditable) {
    return (
      <BaseItem
        title={companyName}
        deleteFn={deleteFn}
        isEditable={isEditable}
        setStateFn={setStateFn}
      >
        <p className="field display-field">{positionTitle}</p>
        <p className="field display-field">{workDate}</p>
        <TextareaAutosize
          className="description-field description-display-field"
          value={responsibilityDesc}
          readOnly
        ></TextareaAutosize>
      </BaseItem>
    );
  } else {
    return (
      <BaseItem
        title={companyName}
        titlePlaceholder="Company name..."
        deleteFn={deleteFn}
        isEditable={isEditable}
        setStateFn={(name) => {
          setStateFn({ name: name, title: positionTitle, date: workDate });
        }}
      >
        <input
          type="text"
          placeholder="Title of position..."
          className="field input-field"
          onChange={(e) => {
            setStateFn({
              name: companyName,
              title: e.target.value,
              date: workDate,
              desc: responsibilityDesc,
            });
          }}
          value={positionTitle}
        ></input>
        <input
          type="text"
          placeholder="Date of work..."
          className="field input-field"
          onChange={(e) => {
            setStateFn({
              name: companyName,
              title: positionTitle,
              date: e.target.value,
              desc: responsibilityDesc,
            });
          }}
          value={workDate}
        ></input>
        <BulletList
          placeholder="Job responsibilities..."
          className="description-field description-input-field"
          onChange={(e) => {
            setStateFn({
              name: companyName,
              title: positionTitle,
              date: workDate,
              desc: e.target.value,
            });
          }}
          value={responsibilityDesc}
        ></BulletList>
      </BaseItem>
    );
  }
}

export default ExperienceItem;
