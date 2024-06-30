"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import brand_data from "../../data/brand-data";
import "swiper/css/bundle";
import { imageLoader } from "@/hooks/ImageLoader";

type ArtistsAreaType = {
  dict: { [key: string]: string };
};
const ArtistsArea = ({ dict }: ArtistsAreaType) => {
  return (
    <section className="ms-song-area">
      <div className="container-fluid ms-maw-1710 p-0">
        <div className="ms-song-active fix">
          {brand_data.map((item) => (
            <div
              className="ms-song-item"
              key={item.id}
              style={{ width: `${100 / 11}%`, height: "auto" }}
            >
              <Link href={`/genres-details/${item.id}`}>
                <div className="ms-song-img p-relative">
                  <Image
                    loader={imageLoader}
                    placeholder="blur"
                    loading="lazy"
                    style={{ width: "100%", height: "auto" }}
                    src={item.image}
                    alt="brand-song"
                  />
                  <span className="ms-song-num">{item.songNum}</span>
                </div>
                <div className="ms-song-content">
                  <h3 className="ms-song-title">{item.songTitle}</h3>
                </div>
              </Link>
            </div>
          ))}
          <div className="ms-song-item">
            <div className="work__features-btn">
              <Link className="unfill__btn feature-unfill_btn" href="/contact">
                {dict.Generate_song}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistsArea;
