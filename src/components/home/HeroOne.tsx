"use client";
import Link from "next/link";
import React from "react";
import bannerBg from "../../../public/assets/img/banner/banner-thumb-01.jpg";
import bannerTitleBg2 from "../../../public/assets/img/banner/title-bg.jpg";

const HeroOne = () => {
  return (
    <section className="ms-banner-area p-relative">
      <Link className="ms-scroll-down" href="#">
        SCROLL DOWN
      </Link>
      <div className="ms-banner-social p-absolute">
        <div className="ms-footer-social">
          <Link
            href="https://www.instagram.com/"
            title="Instagram"
            target="_blank"
          >
            IN
          </Link>
          <Link href="https://twitter.com/" title="Twitter" target="_blank">
            TW
          </Link>
          <Link
            href="https://www.facebook.com/"
            title="Facebook"
            target="_blank"
          >
            FB
          </Link>
        </div>
      </div>
      <div className="container-fluid ms-maw-1710">
        <div
          className="ms-br-30 mx-auto include__bg z-index-1 ms-overlay-1 p-relative"
          style={{ backgroundImage: `url(${bannerBg.src})` }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-11">
                <div className="ms-banner__main-wrapper">
                  <div className="ms-banner__content text-center">
                    <h1
                      className="ms-banner__bg-title"
                      style={{
                        backgroundImage: `url(${bannerTitleBg2.src})`,
                      }}
                    >
                      BeaTSouL
                    </h1>
                    <h2 className="ms-banner__title msg_title bd-title-anim">
                      I can&quot;t stop the rain that pours in your heart, but I
                      can stand under it with you
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

export default HeroOne;
