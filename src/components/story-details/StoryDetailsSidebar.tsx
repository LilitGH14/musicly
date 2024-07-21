import { StoryDetailsType } from "@/types/types";
import React from "react";

type StoryDetailsSidebarType = {
  story: StoryDetailsType;
  dict: { [key: string]: string };
};
const StoryDetailsSidebar = ({ story, dict }: StoryDetailsSidebarType) => {
  return (
    <div className="bb-story-sidebar mb-60">
      <h3 className="bb-story-sidebar-title">{dict.Story_details}</h3>
      <div className="bb-story-sidebar-item">
        <div className="bb-story-sidebar-inner">
          <h4 className="bb-story-title2">{dict.Author}</h4>
          <span className="bb-story-stext">{story?.username}</span>
        </div>
        <div className="bb-story-sidebar-inner">
          <h4 className="bb-story-title2">{dict.Date}</h4>
          <span className="bb-story-stext">{story?.date}</span>
        </div>
        <div className="bb-story-sidebar-inner">
          <h4 className="bb-story-title2">{dict.Category}</h4>
          <span className="bb-story-stext">
            {story?.tags.map((m: string) => m)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoryDetailsSidebar;
