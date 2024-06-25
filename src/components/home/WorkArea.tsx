"use client";
import React from "react";
import WorkBgImg from "../../../public/assets/img/bg/main-bg.jpg";
import thumb1 from "../../../public/assets/img/work/story.jpg";
import thumb2 from "../../../public/assets/img/work/generate.jpg";
import thumb3 from "../../../public/assets/img/work/share.jpg";
import vectorShape from "../../../public/assets/img/work/vactoe-shape.png";
import workArrowImg from "../../../public/assets/img/work/arrow.png";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";
import WorkFutureSvgIconOne from "../../../public/assets/img/svg/WorkFutureIconOne";
import WorkFutureSvgIconTwo from "../../../public/assets/img/svg/WorkFutureSvgIconTwo";
import WorkFutureSvgIconThree from "../../../public/assets/img/svg/WorkFutureSvgIconThree";
import Link from "next/link";
import { TWorkFuture } from "@/types/types";

const WorkArea = () => {
  const work_future_data: TWorkFuture[] = [
    {
      id: 1,
      icon: <WorkFutureSvgIconOne />,
      title: "Leave A Piece Of Inspiration",
      description:
        "Leave your own story to inspire your favorite band",
    },
    {
      id: 2,
      icon: <WorkFutureSvgIconThree />,
      title: "Craft New Songs Inspired By BTS",
      description: "Leave a short story, sit back, relax, and watch your song come to life",
    },
    {
      id: 3,
      icon: <WorkFutureSvgIconTwo />,
      title: "Share your art",
      description:
        "Share your art with friends and fans",
    },
  ];

  return (
    <section
      className="work__area work-overlay pt-125 pb-60 include__bg"
      style={{ backgroundImage: `url(${WorkBgImg.src})` }}
    >
      <Image
        className="work__vactor-shape d-none d-xl-block"
        loader={imageLoader}
        loading="lazy"
        style={{ width: "auto", height: "auto" }}
        src={vectorShape}
        alt="vactoe-shape.png"
      />
      <div className="container">
        <div className="row align-items-center bdFadeUp">
          <div className="col-xl-6">
            <div className="work__thumb-wrapper d-inline-block p-relative mb-60">
              <div className="work__thumb-inner">
                <div className="work__thumb">
                  <Image
                    loader={imageLoader}
                    placeholder="blur"
                    loading="lazy"
                    width={347}
                    height={456}
                    src={thumb1}
                    alt="work image"
                  />
                </div>
                <div className="work__small-thumb">
                  <div className="work__thumb">
                    <Image
                      loader={imageLoader}
                      placeholder="blur"
                      loading="lazy"
                      width={264}
                      height={202}
                      src={thumb2}
                      alt="work image"
                    />
                  </div>
                  <div className="work__thumb">
                    <Image
                      loader={imageLoader}
                      placeholder="blur"
                      loading="lazy"
                      style={{ width: "100%", height: "auto" }}
                      src={thumb3}
                      alt="work image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="work__content-wrapper work__content-space mb-70 pl-40">
              <div className="section__title-wrapper mb-50 bd-title-anim">
                <span className="section__subtitle">How it Works</span>
                <h2 className="section__title two">
                  Welcome to songs insiration
                  <span className="animated-underline active">platform</span>
                </h2>
              </div>
              <div className="work__features-inner">
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
                <div className="work__features-bottom">
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
                      loader={imageLoader}
                      loading="lazy"
                      style={{ width: "100%", height: "auto" }}
                      src={workArrowImg}
                      alt="image not found"
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

export default WorkArea;
