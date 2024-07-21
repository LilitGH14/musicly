"use client";
import { imageLoader } from "@/hooks/ImageLoader";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Ratting from "../common/Rating";
import { SongType } from "@/types/types";
import { fetchSongsData } from "@/services/songs";
import image1 from "../../../public/assets/img/popular/popular-01.png";
import Pagination from "../common/pagination/pagination-data";

type SharedStoriesSectionType = {
  dict: { [key: string]: string } | null;
};
const SharedStoriesSection = ({ dict }: SharedStoriesSectionType) => {
  const [sharedSongs, setSharedSongs] = useState<SongType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [slicedIndex, setSlicedIndex] = useState<number[]>([]);

  useEffect(() => {
    setSlicedIndex([(currentPage - 1) * 6, currentPage * 6]);
  }, [currentPage]);

  useEffect(() => {
    fetchSongsData("shared").then((res) => {
      if (res.ResponseCode == 200) {
        setSharedSongs(res.ResponseData);
      }
    });
  }, []);

  return (
    <section className="bb-shared__area">
      <div className="row justify-content-center bdFadeUp">
        <div className="col-xl-7">
          <div className="section__title-wrapper mb-65 text-center bd-title-anim">
            <span className="section__subtitle">
              {dict?.Inspired_story_titile}
            </span>
            <h2 className="section__title">
              {dict?.Inspired_story_description}
            </h2>
          </div>
        </div>
      </div>
      <div className="bb-shared__content-space bdFadeUp">
        <div className="bb-shared__content-space-inner">
          {sharedSongs.slice(...slicedIndex).map((item) => (
            <div className="bb-shared__content-space-inner-item" key={item.id}>
              <Link href={`/song-details/${item.id}`} className="row">
                <div className="thumb">
                  <Image
                    loader={imageLoader}
                    placeholder="blur"
                    loading="lazy"
                    style={{ width: "100%", height: "auto" }}
                    src={image1}
                    alt={dict?.Avatar ?? ""}
                  />
                </div>
                <div className="content">
                  <h5 className="content-title">{item.songGivenName}</h5>
                  <span className="content-subtitle">{item.category}</span>
                  <div className="content-bottom">
                    <Ratting averageRating={item.rating} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <Pagination
          pagesCount={Math.ceil(sharedSongs.length / 5)}
          currentPage={currentPage}
          changeCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default SharedStoriesSection;
