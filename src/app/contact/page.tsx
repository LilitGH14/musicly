import ContactMainArea from "@/components/contact/ContactMainArea";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <main className="ms-all-content ms-all-content-space">
        <ContactMainArea />
      </main>
    </Wrapper>
  );
};

export default page;
