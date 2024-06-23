"use client";
import React from "react";
import NiceSelect from "../common/NiceSelect";
import {
  bannerFormSelectOne,
  bannerFormSelectTwo,
} from "../../data/nice-select-data";
import genresBg from "../../../public/assets/img/genres/genres-bg.jpg";

const GenresAboutArea = () => {
  const selectHandler = () => {};

  return (
    <section className="ms-genres-area">
      <div
        className="ms-about-bg include__bg p-relative zindex-1 pt-130 pb-130"
        style={{ backgroundImage: `url(${genresBg.src})` }}
      >
        <div className="ms-overlay ms-overlay5 p-absolute zindex--1"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-10">
              <div className="ms-about-content text-center">
                <h2 className="ms-title2 white-text mb-30">
                  Most popular genres
                </h2>
                <p className="capitalize mb-65">
                  Our collection of award-winning Popular bands for hire perform
                  floor-filling songs in all genres, that <br /> everyone loves.
                  But {`don't`} leave it too late – the best bands book up
                  early!
                </p>
                <div className="ms-genres-search">
                  <div className="ms-banner__form two">
                    <form action="#">
                      <div className="ms-banner__from-inner two ms-bg-2 wrapper-nice-select">
                        <div className="ms-banner__form-select m-nice-select-2">
                          <NiceSelect
                            options={bannerFormSelectOne}
                            defaultCurrent={0}
                            onChange={selectHandler}
                            name=""
                            className=""
                            placeholder="Select generated song type"
                          />
                        </div>
                        <div className="ms-banner__form-select m-nice-select-2">
                          <NiceSelect
                            options={bannerFormSelectTwo}
                            defaultCurrent={0}
                            onChange={selectHandler}
                            name=""
                            className=""
                            placeholder="Select original song type"
                          />
                        </div>
                        <div className="banner__form-button">
                          <i className="flaticon-loupe"></i>
                          <input placeholder="Song | user name" />
                        </div>
                      </div>
                    </form>
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

export default GenresAboutArea;
