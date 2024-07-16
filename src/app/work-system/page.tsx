import WorkSystemMain from "@/components/work-system/WorkSystemMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <main className="ms-all-content ms-all-content-space">
        <WorkSystemMain />
      </main>
    </Wrapper>
  );
};

export default page;
