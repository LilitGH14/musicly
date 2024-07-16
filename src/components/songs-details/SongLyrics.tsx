import React, { useEffect, useState } from "react";
import Modal from "../common/modal/Modal";
import song_playlist from "@/data/song-playlist-data";
import AudioPlayer from "react-h5-audio-player";
import { generateNewSong } from "@/services/songs";
import NewSongForm from "./NewSongForm";
import { AudioRecorder } from "react-audio-voice-recorder";

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

  const [recording, setRecording] = useState<any[]>([]);

  // logic start
  const addAudioElement = async (e: any) => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();

        mediaRecorder.addEventListener("dataavailable", (event) => {
          setRecording([...recording, event.data]);
        });

        let audioBuffer1: any,audioBuffer2: any;

        mediaRecorder.addEventListener("stop", async () => {
          const audioBlob = new Blob(recording);
          const audioUrl = URL.createObjectURL(audioBlob);

          const audioContext = new AudioContext();

          async function loadAudio(audioUrl:any) {
            const response = await fetch(audioUrl);
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
            return audioBuffer;
          }

           audioBuffer1 = await loadAudio(currentSong.mp3);
           audioBuffer2 = await loadAudio(audioUrl);
           mergeAudio(audioBuffer1, audioBuffer2);

          const a = document.createElement("a");
          document.body.appendChild(a);
          a.setAttribute("style", "display: none");
          a.setAttribute("download", "remix.mp3");
          a.href = audioUrl;
          a.click();
          window.URL.revokeObjectURL(audioUrl);
        });

        setTimeout(async () => {
          mediaRecorder.stop();

        }, 8000);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  };

  const mergeAudio = (audioBuffer1:any,audioBuffer2: any) => {
    const audioContext = new AudioContext();

    // Create source nodes
    const source1 = audioContext.createBufferSource();
    source1.buffer = audioBuffer1;

    const source2 = audioContext.createBufferSource();
    source2.buffer = audioBuffer2;

    // Create a gain node
    const gainNode = audioContext.createGain();

    // Connect sources to gain node
    source1.connect(gainNode);
    source2.connect(gainNode);

    // Create a destination node to render the merged audio
    const destination = audioContext.createMediaStreamDestination();
    gainNode.connect(destination);

    // Start playback
    source1.start();
    source2.start(audioBuffer1.duration); // Start second audio after the first finishes

    // Create a MediaRecorder to capture the merged audio
    const mediaRecorder = new MediaRecorder(destination.stream);
    const chunks: any[] = [];

    mediaRecorder.start();

    mediaRecorder.addEventListener("dataavailable", (event) => {
      chunks.push(event.data);
    });

    let mergedBlob: any;

    mediaRecorder.addEventListener("stop", () => {
      mergedBlob = new Blob(chunks, { type: "audio/webm" }); // Adjust type as needed
      console.log(mergedBlob, 555);
      // Do something with the merged audio blob, e.g., save it, play it, etc.
    });

    return new Promise((resolve, reject) => {
      mediaRecorder.addEventListener("stop", () => {
        resolve(mergedBlob);
      });
    });
  };

  // logic end

  const generateSong = () => {
    generateNewSong(lyrics).then((res) => {
      if (res.ResponseCode === 200) {
        setIsOpen(true);
      }
    });
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
        <audio id="audio" controls></audio>
        <AudioPlayer
          className="audio_player"
          src={currentSong ? currentSong.mp3 : ""}
          autoPlayAfterSrcChange={true}
          onPlay={(e) => addAudioElement(e)}
          onPause={(e) => console.log(recording, 123)}
        />

        <div className="btns-wrapper">
          <button
            className="translation-btn mt-30 mb-30"
            onClick={translateLyrics}
          >
            {dict.See_translations}
          </button>
          {/* <button onClick={isRecording ? stopRecording : startRecording}>
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button> */}
          <button
            className="generate-btn mt-30 mb-30"
            onClick={lyricsIsChanged ? () => {} : generateSong}
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
