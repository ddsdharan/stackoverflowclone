import React from "react";
import LeftSidebar from "../../Components/LeftSideBar/LeftSideBar";
import RightSidebar from "../../Components/RightSideBar/RightSidebar";
import QuestionsDetails from "./QuestionsDetails";


const DisplayQuestion = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar  />
      <div className="home-container-2">
        <QuestionsDetails />
        <RightSidebar />
      </div>
    </div>
  );
};

export default DisplayQuestion;