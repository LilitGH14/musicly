"use client";
import React from "react";
import bannerBg from "../../../public/assets/img/banner/banner-thumb-01.jpg";

type HomePageBannerType = {
  dict: { [key: string]: string };
};
const HomePageBanner = ({ dict }: HomePageBannerType) => {
  return (
    <section className="ms-banner-area p-relative">
      <div className="container-fluid ms-maw-1710">
        <div
          className="mx-auto include__bg z-index-1 ms-overlay-1 ms-br-30"
          style={{ backgroundImage: `url(${bannerBg.src})`, height: "710px" }}
        >
          <div className="container ms-br-30">
            <div
              className="row justify-content-center align-items-center"
              style={{ height: "710px" }}
            >
              <div className="col-xl-11">
                <div className="ms-banner__main-wrapper">
                  <div className="ms-banner__content text-center">
                    <h1 className="ms-banner__bg-title">
                      {dict.Home_page_title}
                    </h1>
                    <h2 className="ms-banner__title msg_title bd-title-anim">
                      {dict.Home_page_description}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageBanner;
