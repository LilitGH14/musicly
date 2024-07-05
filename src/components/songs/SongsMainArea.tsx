"use client";
import React, { useEffect, useState } from "react";
import { LanguageProvider } from "@/app/dictionaries/dictionaries";
import SongsAboutArea from "./SongsAboutArea";
import SongsListingArea from "./SongsListingArea";
import { fetchSongsData } from "@/services/songs";
import { SongType } from "@/types/types";

const SongsMainArea = () => {
  const [dict, setDict] = useState<{ [key: string]: string }>({});
  const [songs, setSongs] = useState<SongType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [slicedIndex, setSlicedIndex] = useState<number[]>([]);

  const selectHandler = (
    ev: any,
    field: "generatedSong" | "originalSong" | "search"
  ) => {
    if (field === "search") {
      console.log(ev.target.value);
    } else {
      console.log(ev.optionName);
    }
  };

  useEffect(() => {
    LanguageProvider.getDictionary().then((res) => {
      setDict(res);
    });

    fetchSongsData().then((res) => {
      if (res.ResponseCode == 200) {
        setSongs(res.ResponseData);
      }
    });
  }, []);

  useEffect(() => {
    setSlicedIndex([(currentPage - 1) * 6, currentPage * 6]);
  }, [currentPage]);

  return (
    <>
      <SongsAboutArea dict={dict} selectHandler={selectHandler} />
      <SongsListingArea
        dict={dict}
        resultCount={233}
        pagesCount={Math.ceil(songs.length / 6)}
        songs={songs}
        currentPage={currentPage}
        changeCurrentPage={setCurrentPage}
        slicedIndex={slicedIndex}
      />
    </>
  );
};

export default SongsMainArea;
