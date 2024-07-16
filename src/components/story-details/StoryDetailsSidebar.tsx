import { StoryDetailsType } from "@/types/types";
import React from "react";

type StoryDetailsSidebarType = {
  story: StoryDetailsType;
  dict: { [key: string]: string };
};
const StoryDetailsSidebar = ({ story, dict }: StoryDetailsSidebarType) => {
  return (
    <div className="ms-event-sidebar mb-60">
      <h3 className="ms-event-sidebar-title">{dict.Story_details}</h3>
      <div className="ms-event-sidebar-item">
        <div className="ms-event-sidebar-inner">
          <h4 className="ms-event-title2">{dict.Author}</h4>
          <span className="ms-event-stext">{story?.username}</span>
        </div>
        <div className="ms-event-sidebar-inner">
          <h4 className="ms-event-title2">{dict.Date}</h4>
          <span className="ms-event-stext">{story?.date}</span>
        </div>
        <div className="ms-event-sidebar-inner">
          <h4 className="ms-event-title2">{dict.Category}</h4>
          <span className="ms-event-stext">
            {story?.tags.map((m: string) => m)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoryDetailsSidebar;
