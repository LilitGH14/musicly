import React, { useEffect, useState } from "react";

type SongLyricsType = {
  dict: { [key: string]: string };
  content: { [key: string]: { [key: string]: string[] } };
};
const SongLyrics = ({ dict, content }: SongLyricsType) => {
  const [lyrics, setLyrics] = useState<{ [key: string]: string[] }>({});
  const [selectedVersion, setSelectedVersion] = useState<"default" | "en">(
    "default"
  );

  const translateLyrics = () => {
    let version: "default" | "en" =
      selectedVersion === "default" ? "en" : "default";

    setLyrics(content[version]);
    setSelectedVersion(version);
  };

  useEffect(() => {
    if (content) {
      setLyrics(content.default);
      setSelectedVersion("default");
    }
  }, [content]);

  return (
    <div className="ms-genres-tab2-text ms-genres-tab2-padding ms-bg-2 ms-br-15">
      <div>
        {Object.keys(lyrics).map((m: any, i: number) => {
          return (
            <div key={i}>
              <div className="mt-30">
                <span className="ms-singer-couplet">{m}</span>
              </div>
              {lyrics[m].map((row, j) => (
                <div key={j}>
                  {selectedVersion === "default" ? (
                    <span>{row}</span>
                  ) : (
                    <textarea>{row}</textarea>
                  )}
                  <br />
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <button className="translation-btn mt-30 mb-30" onClick={translateLyrics}>
        {dict.See_translations}
      </button>
    </div>
  );
};

export default SongLyrics;
