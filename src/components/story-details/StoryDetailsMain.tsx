"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { fetchStoryData } from "@/services/blog";
import { StoryDetailsType } from "@/types/types";
import PageHeader from "../common/page-header/PageHeader";
import EventBg from "../../../public/assets/img/event/event-bg-4.jpg";
import StoryDetailsSidebar from "./StoryDetailsSidebar";
import { useSelector } from "react-redux";

const StoryDetailsMain = () => {
  const pathname = usePathname();

  const dictSelector = useSelector(
    (store: any) => store.general.dictionary.StoriesPage
  );

  const [dict, setDict] = useState<{ [key: string]: string }>({});
  const [story, setStory] = useState<StoryDetailsType>({
    id: 0,
    title: "",
    username: "",
    date: "",
    category: [],
    description: "",
  });

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  useEffect(() => {
    const id = +pathname
      .split("/")
      [pathname.split("/").length - 1].replace("story_", "");

    fetchStoryData(id).then((res) => {
      if (res.ResponseCode == 200) {
        setStory(res.ResponseData);
      }
    });
  }, [pathname]);

  return (
    <main className="pt-90">
      <PageHeader imageSrc={EventBg.src} title={story?.title} dict={dict} />
      <section className="ms-event-details-area pt-70 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-12">
              <div className="ms-event-details-content mb-40">
                <p className="mb-25">{story.description}</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-8">
              <StoryDetailsSidebar dict={dict} story={story} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StoryDetailsMain;
