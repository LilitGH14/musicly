import React from "react";

const EventDetailsSidebar = () => {
  return (
    <div className="ms-event-sidebar mb-60">
      <h3 className="ms-event-sidebar-title">Story Details</h3>
      <div className="ms-event-sidebar-item">
        <div className="ms-event-sidebar-inner">
          <h4 className="ms-event-title2">Author</h4>
          <span className="ms-event-stext">User 01</span>
        </div>
        <div className="ms-event-sidebar-inner">
          <h4 className="ms-event-title2">Date</h4>
          <span className="ms-event-stext">November 8 @ 11:00 am</span>
        </div>
        <div className="ms-event-sidebar-inner">
          <h4 className="ms-event-title2">Category</h4>
          <span className="ms-event-stext">Sad, Emotional</span>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsSidebar;
