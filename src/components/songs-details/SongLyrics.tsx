import React, { useEffect, useState } from "react";
import Modal from "../common/modal/Modal";
import song_playlist from "@/data/song-playlist-data";
import AudioPlayer from "react-h5-audio-player";
import { generateNewSong } from "@/services/songs";
import NewSongForm from "./NewSongForm";
import { useFormik } from "formik";

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

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {},
    onSubmit: (values, { resetForm }) => {
      //check validation, set scheme
      generateSong(values);
      resetForm();
    },
  });

  const generateSong = (_lyrics: any) => {
    generateNewSong(_lyrics).then((res) => {
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

      Object.keys(content.default).map((m: any, i: number) => {
        if (m.includes("editable")) {
          content.default[m].map((row, i) => {
            setFieldValue(m.toLowerCase().replaceAll(" ", "") + i, row);
          });
        }
      });

      setSelectedVersion("default");
    }
  }, [content, setFieldValue]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bb-genres-tab2-text ms-genres-tab2-padding ms-bg-2 ms-br-15"
      >
        <div>
          {Object.keys(lyrics).map((m: string, i: number) => {
            return (
              <div key={i}>
                <div className="mt-10 mb-10">
                  <span className="bb-singer-couplet">
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
                        <div className="bb-input2-box editable">
                          <input
                            style={{ minHeight: "40px" }}
                            value={
                              (values as any)[
                                m.toLowerCase().replaceAll(" ", "") + j
                              ]
                            }
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name={m.toLowerCase().replaceAll(" ", "") + j}
                          />
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
          {lyricsIsChanged ? (
            <button className="generate-btn mt-30 mb-30" type="submit">
              {dict?.Generate_now}
            </button>
          ) : (
            <button
              className="generate-btn mt-30 mb-30"
              type="submit"
              onClick={() => changeLyrics()}
            >
              {dict?.Change_lyrics}
            </button>
          )}
        </div>
      </form>
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
