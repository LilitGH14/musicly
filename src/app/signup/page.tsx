import SignupMainArea from "@/components/sign-up/SignupMainArea";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <main className="ms-all-content">
        <SignupMainArea />
      </main>
    </Wrapper>
  );
};

export default page;
