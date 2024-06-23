import AboutMainArea from "@/components/about/AboutMainArea";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <main className="ms-all-content ms-content-mobile-space pt-120">
        <AboutMainArea />
      </main>
    </Wrapper>
  );
};

export default page;
