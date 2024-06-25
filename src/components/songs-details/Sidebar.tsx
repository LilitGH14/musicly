import React, { useState } from "react";
import Modal from "../common/modal/Modal";
import song_playlist from "@/data/song-playlist-data";
import AudioPlayer from "react-h5-audio-player";

const Sidebar = ({}: any) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const currentSong = song_playlist[0];

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <div className="col-xxl-4 col-xl-5">
        <div className="ms-genres-right-wrap mb-40">
          <div className="ms-genres-btn-box mb-20">
            <div className="d-flex justify-content-xl-end flex-wrap">
              <div className="ms-enquire-btn mb-20">
                <button
                  onClick={openModal}
                  className="unfill__btn feature-unfill_btn uppercase"
                >
                  Generate Now
                </button>
              </div>
            </div>
          </div>
          <div className="ms-genres-info-wrap d-inline-block p-relative mb-50 ms-br-15 fix">
            <div className="ms-genres-info">
              <div className="ms-overlay ms-overlay7 zindex--1 p-absolute"></div>
              <h5 className="ms-genres-info-title ms-title3 white-text">
                Performance info
              </h5>
              <div className="ms-genres-info-list-wrap">
                <div className="ms-genres-info-list">
                  <h6>Line-up</h6>
                  <p>Male vocals/keyboards; drums /vocals; bass; guitar</p>
                </div>
                <div className="ms-genres-info-list">
                  <h6>Event duration</h6>
                  <p>2 x 60 minute sets</p>
                </div>
                <div className="ms-genres-info-list">
                  <h6> RM – Wild Flower</h6>
                  <p>Duet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={modalIsOpen} close={closeModal} title="Created song">
        <>
          <AudioPlayer
            className="audio_player"
            src={currentSong ? currentSong.mp3 : ""}
            autoPlayAfterSrcChange={true}
            onPlaying={handlePlay}
            onPause={handlePause}
          />
          <div className="d-flex align-items-center mt-20">
            <span className="ms-social-text mr-30 mb-20">
              <i className="flaticon-share"></i> Share on
            </span>
            <div className="ms-social mb-20">
              <button className="public-btn">Public</button>
              <button className="private-btn">Private</button>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
};

export default Sidebar;
