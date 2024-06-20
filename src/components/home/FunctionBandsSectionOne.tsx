"use client";
import popular_band_fuction_data from "../../data/popular-band-function-data";
import GetRatting from "@/hooks/GetRating";
import { imageLoader } from "@/hooks/ImageLoader";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const InspiredSongsSection = () => {
  return (
    <section className="ms-fun-brand ms-bg-2 pb-40 pt-20">
      <div className="container">
        <div className="row justify-content-center bdFadeUp">
          <div className="col-xl-7">
            <div className="section__title-wrapper mb-65 text-center bd-title-anim">
              <span className="section__subtitle">Inspired Songs</span>
              <h2 className="section__title">
                our
                <span className="animated-underline active">
                  most popular 12 inspired
                </span>
                songs
              </h2>
            </div>
          </div>
        </div>
        <div className="ms-fun-brand-wrap bdFadeUp">
          {popular_band_fuction_data.slice(0, 12).map((item) => (
            <div className="ms-fun-brand-item ms-fun-border" key={item.id}>
              <div className="ms-fun-brand-top mb-20">
                <div className="ms-fun-brand-thumb">
                  <Link href="/genres-details">
                    <Image
                      loader={imageLoader}
                      placeholder="blur"
                      loading="lazy"
                      style={{ width: "100%", height: "auto" }}
                      src={item.image}
                      alt="function brand"
                    />
                  </Link>
                </div>
                <div className="ms-fun-brand-content">
                  <h3 className="ms-fun-brand-title">
                    <Link href="/genres-details">{item.title}</Link>
                  </h3>
                  <span className="ms-fun-brand-subtitle">{item.subTitle}</span>
                </div>
              </div>
              <div className="ms-fun-brand-bottom">
                <GetRatting averageRating={item.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspiredSongsSection;
