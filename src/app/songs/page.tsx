import GenresMainArea from "@/components/songs/GenresMainArea";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <div className="ms-all-content ms-content-mobile-space pt-125">
        <main>
          <GenresMainArea />
        </main>
      </div>
    </Wrapper>
  );
};

export default page;
