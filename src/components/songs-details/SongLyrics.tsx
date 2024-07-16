import React, { useEffect, useState } from "react";
import Modal from "../common/modal/Modal";
import song_playlist from "@/data/song-playlist-data";
import AudioPlayer from "react-h5-audio-player";
import { generateNewSong } from "@/services/songs";
import NewSongForm from "./NewSongForm";

type SongLyricsType = {
  dict: { [key: string]: string };
  content: { [key: string]: { [key: string]: string[] } } | undefined;
};
const SongLyrics = ({ dict, content }: SongLyricsType) => {
  const currentSong = song_playlist[0];

  const [modalIsOpen, setIsOpen] = useState(false);
  const [lyricsIsChanged, setLyricsIsChanged] = useState<boolean>(false);
  const [lyrics, setLyrics] = useState<{ [key: string]: string[] }>({});
  const [selectedVersion, setSelectedVersion] = useState<"default" | "en">(
    "default"
  );

  const generateSong = () => {
    generateNewSong(lyrics).then((res) => {
      if (res.ResponseCode === 200) {
        setIsOpen(true);
      }
    });
  };

  const changeLyrics = () => {
    setLyricsIsChanged(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const translateLyrics = () => {
    let version: "default" | "en" =
      selectedVersion === "default" ? "en" : "default";

    content && setLyrics(content[version]);
    setSelectedVersion(version);
  };

  useEffect(() => {
    if (content) {
      setLyrics(content.default);
      setSelectedVersion("default");
    }
  }, [content]);

  return (
    <>
      <div className="ms-genres-tab2-text ms-genres-tab2-padding ms-bg-2 ms-br-15">
        <div>
          {Object.keys(lyrics).map((m: any, i: number) => {
            return (
              <div key={i}>
                <div className="mt-10 mb-10">
                  <span className="ms-singer-couplet">
                    {m.replace("/editable/", "")}
                  </span>
                </div>
                {lyrics[m].map((row, j) => (
                  <React.Fragment key={j}>
                    {lyricsIsChanged ? (
                      !m.includes("editable") ? (
                        <span>
                          {row} <br />
                        </span>
                      ) : (
                        <div className="ms-input2-box editable">
                          <input style={{ minHeight: "40px" }} value={row} />
                        </div>
                      )
                    ) : (
                      <span>
                        {row} <br />
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            );
          })}
        </div>
        <div className="btns-wrapper">
          <button
            className="translation-btn mt-30 mb-30"
            onClick={translateLyrics}
          >
            {dict.See_translations}
          </button>
          <button
            className="generate-btn mt-30 mb-30"
            onClick={!lyricsIsChanged ? () => changeLyrics() : generateSong}
          >
            {!lyricsIsChanged ? dict?.Change_lyrics : dict?.Generate_now}
          </button>
        </div>
      </div>
      <Modal open={modalIsOpen} close={closeModal} title={dict?.Created_song}>
        <AudioPlayer
          className="audio_player"
          src={currentSong ? currentSong.mp3 : ""}
          autoPlayAfterSrcChange={true}
        />
        <NewSongForm dict={dict} close={closeModal} />
      </Modal>
    </>
  );
};

export default SongLyrics;
