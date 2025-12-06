import HeaderSection from "./HeaderSection.jsx";
import EducationSection from "./EducationSection.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import PrintButton from "./PrintButton.jsx";
import "../css/Resume.css";

function Resume() {
  return (
    <div className="resume">
      <HeaderSection className="resume-header-section" />
      <EducationSection className="resume-education-section"></EducationSection>
      <ExperienceSection className="resume-experience-section"></ExperienceSection>
      <PrintButton className="resume-button resume-print-button">
        Print Resume
      </PrintButton>
    </div>
  );
}

export default Resume;
