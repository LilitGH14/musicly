"use client";
import { imageLoader } from "@/hooks/ImageLoader";
import WorkFutureIconOne from "../../../public/assets/img/svg/WorkFutureIconOne";
import WorkFutureSvgIconThree from "../../../public/assets/img/svg/WorkFutureSvgIconThree";
import WorkFutureSvgIconTwo from "../../../public/assets/img/svg/WorkFutureSvgIconTwo";
import arrowIcon from "../../../public/assets/img/work/arrow.png";
import { TWorkFuture } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkSystemAreaFour = () => {
  const work_future_data: TWorkFuture[] = [
    {
      id: 1,
      icon: <WorkFutureIconOne />,
      title: "Choose a Song",
      description: `Start by selecting your favorite track from our extensive library. 
        We've got everything from timeless classics to the latest chart-toppers.`,
    },
    {
      id: 2,
      icon: <WorkFutureSvgIconTwo />,
      title: "Rewrite the Lyrics",
      description:
        "Use our intuitive editor to tweak the lyrics. Change a few lines or transform the entire song—it's up to you!",
    },
    {
      id: 3,
      icon: <WorkFutureSvgIconThree />,
      title: "Share Your Story",
      description:
        "Tell us what inspired your version of the song. Your story can be as brief or as detailed as you like.",
    },
    {
      id: 4,
      icon: <WorkFutureSvgIconThree />,
      title: "Publish and Inspire",
      description: `Once you're happy with your lyrics and story, share your work with friends.
         Who knows? Your favorite band might just see it and be inspired!`,
    },
  ];

  return (
    <section className="ms-work-system-area pt-130 pb-130">
      <div className="container">
        <div className="ms-work-system-wrap">
          <div className="ms-work-system-grid mb-10">
            {work_future_data.map((item) => (
              <div className="work__features-item" key={item.id}>
                <div className="work__features-icon">
                  <span>{item.icon}</span>
                </div>
                <div className="work__features-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center mt-20">
            <div className="col-xl-10">
              <div className="ms-work-system-inner text-center">
                <p className="text-center">
                  At BeatSoul, we celebrate creativity, diversity, and the power
                  of music to bring people together. Join a community of music
                  lovers, writers, and dreamers who are all here to share their
                  unique voices. Explore others' lyrics and stories, leave
                  comments, and find inspiration in the creativity of fellow
                  fans.
                </p>
                <div className="work__features-bottom d-inline-block mt-45">
                  <div className="work__features-action">
                  <div className="work__features-btn">
                      <Link
                        className="unfill__btn feature-unfill_btn"
                        href="/contact"
                      >
                        Generate song
                      </Link>
                    </div>
                    <div className="work__features-btn">
                      <Link
                        className="unfill__btn feature-unfill_btn"
                        href="/contact"
                      >
                        Leave story
                      </Link>
                    </div>
                  </div>
                  <div className="work__features-arrow">
                    <Image
                      src={arrowIcon}
                      loader={imageLoader}
                      loading="lazy"
                      style={{ width: "auto", height: "auto" }}
                      alt="arrow-icon"
                    />
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

export default WorkSystemAreaFour;
