import AboutMainArea from "@/components/about/AboutMainArea";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <main className="bb-all-content">
        <AboutMainArea />
      </main>
    </Wrapper>
  );
};

export default page;
