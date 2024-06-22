"use client";
import React, { useEffect, useState } from "react";

const choose_data: TChooseData[] = [
  {
    id: 1,
    icon: "flaticon-dollar ",
    serialNum: "01",
    title: "Personalize Your Experience",
    text: "Modify the lyrics of any song to reflect your personal experiences, emotions, and milestones. Whether it's a love song, a motivational anthem, or a soulful ballad, make it yours",
  },
  {
    id: 2,
    icon: "flaticon-theater",
    serialNum: "02",
    title: "Share Your Story",
    text: "Along with your custom lyrics, share the story behind your inspiration. Whether it's a heartfelt dedication, a memory from a special moment, or an imaginative twist, your narrative adds depth and meaning.",
  },
  {
    id: 3,
    icon: "flaticon-verified",
    serialNum: "03",
    title: "Inspire Your Favorite Bands",
    text: "Your creative contributions have the potential to inspire the original artists. Bands and musicians often look to their fans for inspiration, and your stories could be the muse for their next big hit.",
  },
];

type TChooseData = {
  id: number;
  icon: string;
  serialNum: string;
  title: string;
  text: string;
};
const ChooseUsArea = () => {
  const [chooseData, setChooseData] = useState<TChooseData[]>([]);
  const [reviewsCount, setReviewsCount] = useState<number>(0);

  useEffect(() => {
    setChooseData(choose_data);
    setReviewsCount(1050);
  }, []);

  return (
    <section className="ms-choose-area pt-50">
      <div className="container">
        <div className="row align-items-end mb-25 bdFadeUp">
          <div className="col-lg-7">
            <div className="section__title-wrapper mb-40">
              <h2 className="section__title mb-35 bd-title-anim">
                {"Why_choose_us"}
              </h2>
              <p>{"Why_choose_us_text"}</p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="d-flex justify-content-lg-end">
              <div className="ms-review-part mb-40">
                <div className="ms-review-gap d-flex align-items-center">
                  <div className="ms-review-left">
                    <h3>{"Excellent"}:</h3>
                    <p>
                      {reviewsCount} {"Review_on"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-45 bdFadeUp">
          {chooseData.map((item) => (
            <div className="col-xl-4 col-md-6" key={item.id}>
              <div className="ms-choose-item mb-25">
                <div className="d-flex align-items-center">
                  <div className="ms-choose-icon d-inline-block p-relative">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="ms-choose-title">{item.title}</h3>
                </div>
                <h3 className="ms-choose-text">{item.text}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUsArea;
