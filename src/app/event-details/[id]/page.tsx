import EventDetailsMain from "@/components/event-details/EventDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <Wrapper>
      <div className="ms-all-content ms-all-content-space">
        <main>
          <EventDetailsMain id={id} />
        </main>
      </div>
    </Wrapper>
  );
};

export default page;
