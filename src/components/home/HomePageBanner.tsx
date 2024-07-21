"use client";
import React from "react";
import bannerBg from "../../../public/assets/img/banner/banner-thumb-01.jpg";
import Link from "next/link";

type HomePageBannerType = {
  dict: { [key: string]: string } | null;
};
const HomePageBanner = ({ dict }: HomePageBannerType) => {
  return (
    <section className="bb-banner-area p-relative">
      <div className="container-fluid ms-maw-1710">
        <div
          className="mx-auto include__bg z-index-1 ms-overlay-1 bb-br-30"
          style={{ backgroundImage: `url(${bannerBg.src})`, height: "560px" }}
        >
          <div className="container">
            <div
              className="row justify-content-center align-items-center"
              style={{ height: "560px" }}
            >
              <div className="col-xl-11">
                <div className="bb-banner__main-wrapper">
                  <div className="bb-banner__content text-center">
                    <h1 className="bb-banner__bg-title">
                      {dict?.Home_page_title}
                    </h1>
                    <h2 className="bb-banner__title msg_title bd-title-anim">
                      {dict?.Home_page_description}
                    </h2>
                    <div className="bb-banner_btns_wrapper">
                      <Link
                        className="unfill__btn feature-unfill_btn"
                        href="/blog"
                      >
                        {dict?.Leave_story_btn}
                      </Link>
                    </div>
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
