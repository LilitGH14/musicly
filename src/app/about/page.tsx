import AboutMainArea from "@/components/about/AboutMainArea";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <div className="ms-all-content ms-content-mobile-space pt-120">
        <main>
          <AboutMainArea />
        </main>
      </div>
    </Wrapper>
  );
};

export default page;
