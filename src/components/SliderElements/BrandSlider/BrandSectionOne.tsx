"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import brand_data from "../../../data/brand-data";
import "swiper/css/bundle";
import { imageLoader } from "@/hooks/ImageLoader";

const BrandSectionOne = () => {
  return (
    <>
      <section className="ms-song-area pt-10 pb-20">
        <div className="container-fluid ms-maw-1710">
          <div className="ms-song-active fix">
            {brand_data.map((item) => (
              <div
                className="ms-song-item"
                key={item.id}
                style={{ width: `${100 / 11}%`, height: "auto" }}
              >
                <div className="ms-song-img p-relative">
                  <Link href={`/genres-details/${item.id}`}>
                    <Image
                      loader={imageLoader}
                      placeholder="blur"
                      loading="lazy"
                      style={{ width: "100%", height: "auto" }}
                      src={item.image}
                      alt="brand-song"
                    />
                  </Link>
                  <span className="ms-song-num">{item.songNum}</span>
                </div>
                <div className="ms-song-content">
                  <h3 className="ms-song-title">
                    <Link href={`/genres-details/${item.id}`}>
                      {item.songTitle}
                    </Link>
                  </h3>
                </div>
              </div>
            ))}
            <div className="ms-song-item">
              <div className="work__features-btn">
                <a className="unfill__btn feature-unfill_btn" href="/contact">
                  Generate song
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandSectionOne;
