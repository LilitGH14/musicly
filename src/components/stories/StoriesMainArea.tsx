"use client";
import React, { useEffect, useState } from "react";
import Pagination from "../common/pagination/pagination-data";
import { StoryType } from "@/types/types";
import PageHeader from "../common/page-header/PageHeader";
import EventBg from "../../../public/assets/img/event/event-bg-4.jpg";
import StoryItem from "./StoryItem";
import { useSelector } from "react-redux";
import { fetchStoriesData } from "@/services/stories";

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
    setSlicedIndex([(currentPage - 1) * 12, currentPage * 12]);
  }, [currentPage]);

  return (
    <main>
      <PageHeader
        dict={dict}
        imageSrc={EventBg.src}
        title="Stories_title"
        button={{ link: "/new-story", title: dict["Stories_btn"] }}
      />
      <section className="bb-story-area container">
        <div className="bb-border2 pb-20">
          <div className="row ms-story3-wrap">
            {storiesData.slice(...slicedIndex).map((item: StoryType) => (
              <div className="col-xl-3 col-md-6" key={item.id}>
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
      </section>
    </main>
  );
};

export default StoriesMainArea;
