"use client";
import popular_categories from "../../../data/popular-categories-data";
import { imageLoader } from "@/hooks/ImageLoader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
//swiper-slider
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";

const PopularAreaOne = () => {
  return (
    <>
      <section className="ms-popular__area pt-130 pb-100 fix">
        <div className="container">
          <div className="row align-items-end mb-25 bdFadeUp">
            <div className="col-xl-6 col-lg-6">
              <div className="section__title-wrapper mb-40 bd-title-anim">
                <span className="section__subtitle">Categories</span>
                <h2 className="section__title msg_title">
                  <span className="animated-underline active">
                    Handpicked party{" "}
                  </span>{" "}
                  bands for 2023
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ms-popular__tab ms-popular-flex mb-40">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                      className="nav-link active"
                      id="nav-popular-1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-popular-1"
                      type="button"
                      role="tab"
                      aria-controls="nav-popular-1"
                      aria-selected="true"
                    >
                     New
                    </button>
                    <button
                      className="nav-link"
                      id="nav-popular-2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-popular-2"
                      type="button"
                      role="tab"
                      aria-controls="nav-popular-2"
                      aria-selected="false"
                    >
                     BTS
                    </button>
                    <button
                      className="nav-link"
                      id="nav-popular-3-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-popular-3"
                      type="button"
                      role="tab"
                      aria-controls="nav-popular-3"
                      aria-selected="false"
                    >
                      Duets
                    </button>
                    <button
                      className="nav-link"
                      id="nav-popular-4-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-popular-4"
                      type="button"
                      role="tab"
                      aria-controls="nav-popular-4"
                      aria-selected="false"
                    >
                      Solo
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="row bdFadeUp">
            <div className="col-xxl-12">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-popular-1"
                  role="tabpanel"
                  aria-labelledby="nav-popular-1-tab"
                  tabIndex={0}
                >
                  <div className="ms-popular-active fix">
                    <div>
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
                            slidesPerView: 4,
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
                        {popular_categories.slice(0, 8).map((item) => (
                          <SwiperSlide key={item.id}>
                            <div className="ms-popular__item p-relative mb-30">
                              <div className="ms-popular__thumb">
                                {/* <div className="ms-popular-overlay"></div> */}
                                <Link href={`/genres-details/${item.id}`}>
                                  <Image
                                    loader={imageLoader}
                                    placeholder="blur"
                                    loading="lazy"
                                    style={{ width: "100%", height: "auto" }}
                                    src={item.image}
                                    alt="popular band"
                                  />
                                </Link>
                              </div>
                              <h4 className="ms-popular__title">
                                <Link href={`/genres-details/${item.id}`}>
                                  {item.title}
                                </Link>
                              </h4>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-popular-2"
                  role="tabpanel"
                  aria-labelledby="nav-popular-2-tab"
                  tabIndex={0}
                >
                  <div className="ms-popular-active fix">
                    <div>
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
                            slidesPerView: 4,
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
                        {popular_categories.slice(0, 8).map((item) => (
                          <SwiperSlide key={item.id}>
                            <div className="ms-popular__item p-relative mb-30">
                              <div className="ms-popular__thumb">
                                <div className="ms-popular-overlay"></div>
                                <Link href={`/genres-details/${item.id}`}>
                                  <Image
                                    loader={imageLoader}
                                    placeholder="blur"
                                    loading="lazy"
                                    style={{ width: "100%", height: "auto" }}
                                    src={item.image}
                                    alt="popular band"
                                  />
                                </Link>
                                <Link
                                  href={`/genres-details/${item.id}`}
                                  className="ms-popular__link"
                                >
                                  <span className="ms-popular-icon">
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                  </span>
                                </Link>
                              </div>
                              <h4 className="ms-popular__title">
                                <Link href={`/genres-details/${item.id}`}>
                                  {item.title}
                                </Link>
                              </h4>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-popular-3"
                  role="tabpanel"
                  aria-labelledby="nav-popular-3-tab"
                  tabIndex={0}
                >
                  <div className="ms-popular-active fix">
                    <div>
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
                            slidesPerView: 4,
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
                        {popular_categories.slice(0, 8).map((item) => (
                          <SwiperSlide key={item.id}>
                            <div className="ms-popular__item p-relative mb-30">
                              <div className="ms-popular__thumb">
                                <div className="ms-popular-overlay"></div>
                                <Link href={`/genres-details/${item.id}`}>
                                  <Image
                                    loader={imageLoader}
                                    placeholder="blur"
                                    loading="lazy"
                                    style={{ width: "100%", height: "auto" }}
                                    src={item.image}
                                    alt="popular band"
                                  />
                                </Link>
                                <Link
                                  href={`/genres-details/${item.id}`}
                                  className="ms-popular__link"
                                >
                                  <span className="ms-popular-icon">
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                  </span>
                                </Link>
                              </div>
                              <h4 className="ms-popular__title">
                                <Link href={`/genres-details/${item.id}`}>
                                  {item.title}
                                </Link>
                              </h4>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularAreaOne;
