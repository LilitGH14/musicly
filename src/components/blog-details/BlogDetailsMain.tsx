"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogDetailsSidebar from "./BlogDetailsSidebar";
import { usePathname } from "next/navigation";
import { fetchStoryData } from "@/services/blog";
import { StoryDetailsType } from "@/types/types";

const BlogDetailsMain = () => {
  const pathname = usePathname();

  const [story, setStory] = useState<StoryDetailsType>({
    id: 0,
    title: "",
    username: "",
    date: "",
    category: [],
    description: "",
  });

  useEffect(() => {
    const id = +pathname.split("/")[pathname.split("/").length - 1];

    fetchStoryData(id).then((res) => {
      if (res.ResponseCode == 200) {
        setStory(res.ResponseData);
      }
    });
  }, [pathname]);

  return (
    <>
      <Breadcrumb title={story?.title} />
      <section className="ms-event-details-area pt-70 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-12">
              <div className="ms-event-details-content mb-40">
                <p className="mb-25">{story.description}</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-8">
              <BlogDetailsSidebar story={story} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsMain;
