"use client";
import React, { useEffect, useState } from "react";
import BradcrumbThree from "../common/breadcrumb/BradcrumbThree";
import Link from "next/link";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";
import PaginationData from "../common/pagination/pagination-data";
import { fetchStoriesData } from "@/services/blog";
import { StoryType } from "@/types/types";
import blogBgImage from "../../../public/assets/img/blog/story.jpg";

const BlogMainArea = () => {
  const [storiesData, setStoriesData] = useState<StoryType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [slicedIndex, setSlicedIndex] = useState<number[]>([]);

  useEffect(() => {
    fetchStoriesData().then((res) => {
      if (res.ResponseCode == 200) {
        setStoriesData(res.ResponseData);
      }
    });
  }, []);

  useEffect(() => {
    setSlicedIndex([(currentPage - 1) * 6, currentPage * 6]);
  }, [currentPage]);

  return (
    <>
      <BradcrumbThree title="Stories" />
      <section className="ms-event3-area pt-130 pb-115">
        <div className="container">
          <div className="ms-border2 pb-40">
            <div className="row ms-event3-wrap">
              {storiesData.slice(...slicedIndex).map((item: StoryType) => (
                <div className="col-xl-4 col-md-6" key={item.id}>
                  <Link href={`/blog-details/${item.id}`}>
                    <div className="ms-event3-item mb-25">
                      <div className="ms-event3-img ms-overlay10 fix ms-br-15 p-relative zindex-10">
                        <Image
                          src={blogBgImage}
                          loader={imageLoader}
                          placeholder="blur"
                          loading="lazy"
                          style={{ width: "100%", height: "auto" }}
                          alt="event image"
                        />
                        <span className="ms-event3-date">{item.date}</span>
                        <div className="ms-event3-content">
                          <div className="ms-event3-location-wrap">
                            <div className="ms-event3-location">
                              {item.username}
                            </div>
                          </div>
                          <h3 className="ms-event3-title ms-title-border">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <PaginationData
                pagesCount={Math.ceil(storiesData.length / 6)}
                currentPage={currentPage}
                changeCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogMainArea;
