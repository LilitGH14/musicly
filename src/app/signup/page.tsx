import SignupMainArea from "@/components/SignUp/SignupMainArea";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <div className="ms-all-content ms-all-content-space">
        <main>
          <SignupMainArea />
        </main>
      </div>
    </Wrapper>
  );
};

export default page;
