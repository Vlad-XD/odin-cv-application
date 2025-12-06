import BaseItem from "./BaseItem.jsx";

function EducationItem({
  schoolName,
  studyTitle,
  studyDate,
  deleteFn,
  isEditable,
  setStateFn,
}) {
  if (!isEditable) {
    return (
      <BaseItem
        title={schoolName}
        deleteFn={deleteFn}
        isEditable={isEditable}
        setStateFn={setStateFn}
      >
        <p className="field display-field">{studyTitle}</p>
        <p className="field display-field">{studyDate}</p>
      </BaseItem>
    );
  } else {
    return (
      <BaseItem
        title={schoolName}
        titlePlaceholder="School name..."
        deleteFn={deleteFn}
        isEditable={isEditable}
        setStateFn={(name) => {
          setStateFn({ name: name, title: studyTitle, date: studyDate });
        }}
      >
        <input
          type="text"
          placeholder="Title of study..."
          className="field input-field"
          onChange={(e) => {
            setStateFn({
              name: schoolName,
              title: e.target.value,
              date: studyDate,
            });
          }}
          value={studyTitle}
        ></input>
        <input
          type="text"
          placeholder="Date of study..."
          className="field input-field"
          onChange={(e) => {
            setStateFn({
              name: schoolName,
              title: studyTitle,
              date: e.target.value,
            });
          }}
          value={studyDate}
        ></input>
      </BaseItem>
    );
  }
}

export default EducationItem;
