"use client";
import { imageLoader } from "@/hooks/ImageLoader";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Ratting from "./Rating";
import { SongType } from "@/types/types";
import { fetchSongsData } from "@/services/songs";
import image1 from "../../../public/assets/img/avatars/suga.jpg";
import Pagination from "../common/pagination/pagination-data";

type SharedSongsSectionType = {
  dict: { [key: string]: string } | null;
};
const SharedSongsSection = ({ dict }: SharedSongsSectionType) => {
  const [sharedSongs, setSharedSongs] = useState<SongType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [slicedIndex, setSlicedIndex] = useState<number[]>([]);

  useEffect(() => {
    setSlicedIndex([(currentPage - 1) * 5, currentPage * 5]);
  }, [currentPage]);

  useEffect(() => {
    fetchSongsData("shared").then((res) => {
      if (res.ResponseCode == 200) {
        setSharedSongs(res.ResponseData);
      }
    });
  }, []);

  return (
    <section className="ms-fun-brand ms-bg-2 pb-40 pt-20">
      <div className="container">
        <div className="row justify-content-center bdFadeUp">
          <div className="col-xl-7">
            <div className="section__title-wrapper mb-65 text-center bd-title-anim">
              <span className="section__subtitle">
                {dict?.Inspired_songs_titile}
              </span>
              <h2 className="section__title">
                {dict?.Inspired_songs_description}
              </h2>
            </div>
          </div>
        </div>
        <div className="ms-fun-brand-wrap bdFadeUp">
          <div className="inner-container">
            {sharedSongs.slice(...slicedIndex).map((item) => (
              <div className="ms-fun-brand-item ms-fun-border" key={item.id}>
                <Link href={`/song-details/${item.id}`}>
                  <div className="ms-fun-brand-top mb-10">
                    <div className="ms-fun-brand-thumb">
                      <Image
                        loader={imageLoader}
                        placeholder="blur"
                        loading="lazy"
                        style={{ width: "100%", height: "auto" }}
                        src={image1}
                        alt={dict?.Avatar ?? ""}
                      />
                    </div>
                    <div className="ms-fun-brand-content">
                      <h5 className="ms-fun-brand-title">
                        {item.songGivenName}
                      </h5>
                      <span className="ms-fun-brand-subtitle">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="ms-fun-brand-bottom">
                    <Ratting averageRating={item.rating} />
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
      </div>
    </section>
  );
};

export default SharedSongsSection;
