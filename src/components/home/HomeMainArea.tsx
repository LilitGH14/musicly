"use client";
import React, { useEffect, useState } from "react";
import WorkArea from "./WorkArea";
import HomePageBanner from "./HomePageBanner";
import RunningLines from "./RunningLines";
import PopularArea from "./PopularArea";
import SharedSongsSection from "./SharedSongsSection";
import Comments from "./Comments";
import { useSelector } from "react-redux";

const HomeMainArea = () => {
  const dictSelector = useSelector(
    (store: any) => store.general.dictionary.HomePage
  );

  const [dict, setDict] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  return (
    <main className="mt-90">
      <HomePageBanner dict={dict} />
      <RunningLines dict={dict} />
      <PopularArea dict={dict} />
      <WorkArea dict={dict} />
      <SharedSongsSection dict={dict} />
      <Comments />
    </main>
  );
};

export default HomeMainArea;
