import ContactMainArea from "@/components/contact/ContactMainArea";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <main className="ms-all-content">
        <ContactMainArea />
      </main>
    </Wrapper>
  );
};

export default page;
