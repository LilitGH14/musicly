import SongsDetailsMainArea from "@/components/songs-details/SongsDetailsMainArea";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <div className="bb-all-content ms-all-content-space">
        <main>
          <SongsDetailsMainArea />
        </main>
      </div>
    </Wrapper>
  );
};

export default page;
