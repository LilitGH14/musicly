"use client";
import React, { useEffect, useState } from "react";
import WorkArea from "./WorkArea";
import HomePageBanner from "./HomePageBanner";
import ArtistsArea from "./ArtistsArea";
import { getDictionary } from "@/dictionaries/dictionaries";
import RunningLines from "./RunningLines";
import PopularArea from "./PopularArea";
import SharedSongsSection from "./SharedSongsSection";
import Comments from "./Comments";

const HomeMainArea = () => {
  const [dict, setDict] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    getDictionary("en").then((res) => {
      setDict(res);
    });
  }, []);

  return (
    <main className="mt-90">
      <ArtistsArea dict={dict} />
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
