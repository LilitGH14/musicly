import EventMainArea from "@/components/event/EventMainArea";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <div className="ms-all-content ms-all-content-space">
        <main>
          <EventMainArea />
        </main>
      </div>
    </Wrapper>
  );
};

export default page;
