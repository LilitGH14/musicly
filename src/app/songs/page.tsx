import SongsMainArea from "@/components/songs/SongsMainArea";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <main className="ms-all-content ms-content-mobile-space pt-125">
        <SongsMainArea />
      </main>
    </Wrapper>
  );
};

export default page;
