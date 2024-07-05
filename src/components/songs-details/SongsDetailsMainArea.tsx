"use client";
import React, { useEffect, useState } from "react";
import NavProfileTab from "./NavProfileTab";
import SongLyrics from "./SongLyrics";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { fetchSongDataById } from "@/services/songs";
import { LanguageProvider } from "@/app/dictionaries/dictionaries";

const SongsDetailsMainArea = () => {
  const pathname = usePathname();

  const [dict, setDict] = useState<{ [key: string]: string }>({});
  const [song, setSong] = useState<any>();

  useEffect(() => {
    const id = +pathname.split("/")[pathname.split("/").length - 1];

    fetchSongDataById(id).then((res) => {
      if (res.ResponseCode == 200) {
        setSong(res.ResponseData);
      }
    });
  }, [pathname]);

  useEffect(() => {
    LanguageProvider.getDictionary().then((res) => {
      setDict(res);
    });
  }, []);

  return (
    <section className="ms-genres-area pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="ms-genres-top text-center mb-50">
              <h2 className="ms-title2 white-text mb-20">
                {song?.songGivenName}
              </h2>
              <p className="ms-text2">{song?.description}</p>
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
                      {dict.Lyrics}
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
                      {dict.Listen}
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
                    <SongLyrics dict={dict} content={song?.lyrics} />
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
                </div>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default SongsDetailsMainArea;
