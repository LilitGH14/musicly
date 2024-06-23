import BlogMainArea from "@/components/Blog/BlogMainArea";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <main className="ms-all-content ms-all-content-space">
        <BlogMainArea />
      </main>
    </Wrapper>
  );
};

export default page;
