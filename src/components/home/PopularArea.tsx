"use client";
import { imageLoader } from "@/hooks/ImageLoader";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import { CATEGORIES } from "@/constants/constants";
import { Category, PopularCategory } from "@/types/types";
import { fetchSongsByCategory } from "@/services/songs";
import image4 from "../../../public/assets/img/genres/4.jpg";

type PopularAreaType = {
  dict: { [key: string]: string } | null;
};
const PopularArea = ({ dict }: PopularAreaType) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("New");
  const [songs, setsSongs] = useState<PopularCategory[]>([]);

  const changeCategory = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetchSongsByCategory(selectedCategory).then((res) => {
      if (res.ResponseCode == 200) {
        setsSongs(res.ResponseData);
      }
    });
  }, [selectedCategory]);

  return (
    <section className="ms-popular__area pt-100 pb-30 fix">
      <div className="container-fluid ms-maw-1710">
        <div className="row align-items-end mb-25 bdFadeUp pl-20 pr-20">
          <div className="col-xl-6 col-lg-6">
            <div className="section__title-wrapper mb-40 bd-title-anim">
              <h2 className="section__title msg_title">
                <span className="active">{dict?.Categories}</span>
              </h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="ms-popular__tab ms-popular-flex mb-40">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  {CATEGORIES.map((category: Category) => {
                    return (
                      <button
                        className={`nav-link
                        ${selectedCategory === category.name ? "active" : ""}`}
                        id={`nav-popular-${category.id}-tab`}
                        data-bs-toggle="tab"
                        data-bs-target={`#nav-popular-${category.id}`}
                        type="button"
                        role="tab"
                        aria-controls={`nav-popular-${category.id}`}
                        aria-selected={selectedCategory === category.name}
                        onClick={() => changeCategory(category.name)}
                        key={category.id}
                      >
                        {dict?.[category.name]}
                      </button>
                    );
                  })}
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="row bdFadeUp">
          <div className="col-xxl-12">
            <div className="tab-content" id="nav-tabContent">
              {CATEGORIES.map((category: Category) => {
                return (
                  <div
                    key={category.id}
                    className={`tab-pane fade ${
                      selectedCategory === category.name ? "show active" : ""
                    }`}
                    id={`nav-popular-${category.id}`}
                    role="tabpanel"
                    aria-labelledby={`nav-popular-${category.id}-tab`}
                    tabIndex={0}
                  >
                    <div className="ms-popular-active fix">
                      <Swiper
                        modules={[Autoplay]}
                        loop={false}
                        spaceBetween={25}
                        autoplay={{
                          delay: 0,
                        }}
                        speed={6000}
                        observeParents={true}
                        observer={true}
                        breakpoints={{
                          1200: {
                            slidesPerView: 7,
                          },
                          992: {
                            slidesPerView: 3,
                          },
                          768: {
                            slidesPerView: 2,
                          },
                          576: {
                            slidesPerView: 2,
                          },
                          0: {
                            slidesPerView: 1,
                          },
                        }}
                      >
                        {songs.map((song: PopularCategory) => (
                          <SwiperSlide key={song.id}>
                            <Link
                              href={`/songs?category=${song.category?.toLowerCase()}`}
                            >
                              <div className="ms-popular__item p-relative mb-30">
                                <div className="ms-popular__thumb">
                                  <Image
                                    loader={imageLoader}
                                    placeholder="blur"
                                    loading="lazy"
                                    style={{ width: "100%", height: "auto" }}
                                    src={image4}
                                    alt={dict?.CategoryImage as string}
                                  />
                                </div>
                                <h4 className="ms-popular__title">
                                  {song.title}
                                </h4>
                              </div>
                            </Link>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularArea;
