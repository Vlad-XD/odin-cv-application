import { useState } from "react";
import BaseSection from "./BaseSection.jsx";
import ExperienceItem from "./ExperienceItem.jsx";

function ExperienceSection({ className }) {
  const initialContentList = [
    {
      name: "Company",
      title: "Mechanical Engineer",
      date: "January 2023 - Present",
      desc: "• Responsibilities included conducting calculations, designing plans, and collaborating with consultants.",
    },
  ];
  const [content, setContent] = useState(initialContentList);
  const [isEditable, setEditable] = useState(false);

  function handleToggle() {
    isEditable ? setEditable(false) : setEditable(true);
  }

  function handleAdd() {
    const newContentList = [...content];
    newContentList.push({ name: "", title: "", date: "", desc: "• " });
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
      title="Experience"
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
          <ExperienceItem
            key={index}
            companyName={item.name}
            positionTitle={item.title}
            workDate={item.date}
            responsibilityDesc={item.desc}
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
          ></ExperienceItem>
        );
      })}
    </BaseSection>
  );
}

export default ExperienceSection;
