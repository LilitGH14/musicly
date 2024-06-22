"use client";
import React from "react";
import GenresSidebar from "./GenresSidebar";
import NavContactTab from "./NavContactTab";
import NavProfileTab from "./NavProfileTab";
import GenresContent from "./GenresContent";
import { idType } from "@/types/types";
import genres_listing_data from "../../data/genres-listing-data";

const GenresDetailsMainArea = ({ id }: idType) => {
  const genreData: any = genres_listing_data.find((item) => item.id == id);

  return (
    <section className="ms-genres-area pt-130 pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="ms-genres-top text-center mb-50">
              <h2 className="ms-title2 white-text mb-20">{genreData.title}</h2>
              <p className="ms-text2">{genreData.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-7">
            <div className="ms-genres-left-wrap mb-60">
              <div className="ms-genres-tab2 mb-20">
                <nav>
                  <div
                    className="nav nav-tabs ms-tab-button border-0 ms-border2-btn ms-tab-prevent"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link prevent active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Lyrics
                    </button>
                    <button
                      className="nav-link prevent"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Listen
                    </button>
                    <button
                      className="nav-link prevent"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Reviews
                    </button>
                  </div>
                </nav>
              </div>
              <div className="ms-genres-tab2-content">
                <div className="tab-content" id="nav-tabContent2">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                    tabIndex={0}
                  >
                    <GenresContent />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                    tabIndex={0}
                  >
                    <NavProfileTab />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                    tabIndex={0}
                  >
                    <NavContactTab />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GenresSidebar />
        </div>
      </div>
    </section>
  );
};

export default GenresDetailsMainArea;
