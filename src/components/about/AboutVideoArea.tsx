"use client";
import React from "react";
import aboutBgImg from "../../../public/assets/img/about/about.jpg";

const AboutVideoArea = () => {
  return (
    <section className="ms-about-area fix">
      <div
        className="ms-about-bg include__bg p-relative zindex-1 pt-120 pb-130"
        style={{ backgroundImage: `url(${aboutBgImg.src})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-10">
              <div className="ms-about-content text-center">
                <h2 className="ms-title2 white-text mb-30 bd-title-anim">
                  {"About_title"}
                </h2>
                <p className="capitalize mb-65">{"About_text"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVideoArea;
