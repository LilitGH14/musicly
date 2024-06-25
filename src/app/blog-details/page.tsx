import BlogDetailsMain from "@/components/blog-details/BlogDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <main className="ms-all-content ms-all-content-space">
        <BlogDetailsMain />
      </main>
    </Wrapper>
  );
};

export default page;
