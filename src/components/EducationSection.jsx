import { useState } from "react";
import BaseSection from "./BaseSection.jsx";
import EducationItem from "./EducationItem.jsx";

function EducationSection({ className }) {
  const initialContentList = [
    {
      name: "State University",
      title: "Bachelor of Science, Mechanical Engineering",
      date: "August 2019 - December 2022",
    },
  ];
  const [content, setContent] = useState(initialContentList);
  const [isEditable, setEditable] = useState(false);

  function handleToggle() {
    isEditable ? setEditable(false) : setEditable(true);
  }

  function handleAdd() {
    const newContentList = [...content];
    newContentList.push({ name: "", title: "", date: "" });
    setContent(newContentList);
  }

  function deleteFunction(index) {
    const newContentList = [...content];
    newContentList.splice(index, 1);
    setContent(newContentList);
  }

  return (
    <BaseSection
      className={`${className}`}
      title="Education"
      toggleFn={() => {
        handleToggle();
      }}
      addFn={() => {
        handleAdd();
      }}
      isEditable={isEditable}
    >
      {content.map((item, index) => {
        return (
          <EducationItem
            key={index}
            schoolName={item.name}
            studyTitle={item.title}
            studyDate={item.date}
            deleteFn={() => {
              deleteFunction(index);
            }}
            isEditable={isEditable}
            setStateFn={(newItem) => {
              const newContentList = content.map((item, idx) => {
                if (idx === index) {
                  return newItem;
                } else {
                  return item;
                }
              });
              setContent(newContentList);
            }}
          ></EducationItem>
        );
      })}
    </BaseSection>
  );
}

export default EducationSection;
