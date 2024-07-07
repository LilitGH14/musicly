"use client";
import React, { useEffect, useState } from "react";
import Pagination from "../common/pagination/pagination-data";
import { fetchStoriesData } from "@/services/blog";
import { StoryType } from "@/types/types";
import PageHeader from "../common/page-header/PageHeader";
import EventBg from "../../../public/assets/img/event/event-bg-4.jpg";
import StoryItem from "./StoryItem";
import { useSelector } from "react-redux";

const StoriesMainArea = () => {
  const dictSelector = useSelector(
    (store: any) => store.general.dictionary.StoriesPage
  );

  const [storiesData, setStoriesData] = useState<StoryType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [slicedIndex, setSlicedIndex] = useState<number[]>([]);
  const [dict, setDict] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

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
    <main className="pt-90">
      <PageHeader
        dict={dict}
        imageSrc={EventBg.src}
        title="Stories_title"
        button={{ link: "/new-forum", title: dict["Stories_btn"] }}
      />
      <section className="ms-event3-area pt-30 pb-115">
        <div className="container">
          <div className="ms-border2 pb-40">
            <div className="row ms-event3-wrap">
              {storiesData.slice(...slicedIndex).map((item: StoryType) => (
                <div className="col-xl-4 col-md-6" key={item.id}>
                  <StoryItem
                    id={"story_" + item.id}
                    dict={dict}
                    date={item.date}
                    username={item.username}
                    title={item.title}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <Pagination
                pagesCount={Math.ceil(storiesData.length / 6)}
                currentPage={currentPage}
                changeCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StoriesMainArea;
