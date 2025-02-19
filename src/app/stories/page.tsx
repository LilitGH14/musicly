import StoriesMainArea from "@/components/stories/StoriesMainArea";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <main className="bb-all-content">
        <StoriesMainArea />
      </main>
    </Wrapper>
  );
};

export default page;
