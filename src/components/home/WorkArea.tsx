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
import Link from "next/link";
import { TWorkFuture } from "@/types/types";
import { WORFEATURES } from "@/constants/constants";

type WorkAreaType = {
  dict: { [key: string]: string } | null;
};
const WorkArea = ({ dict }: WorkAreaType) => {
  return (
    <section
      className="work__area work-overlay pt-50 pb-30 include__bg"
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
                <div className="work__thumb left">
                  <Image
                    loader={imageLoader}
                    placeholder="blur"
                    loading="lazy"
                    width={347}
                    height={456}
                    src={thumb1}
                    alt={dict?.How_it_works_feature_1_title ?? ""}
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
                      alt={dict?.How_it_works_feature_2_title ?? ""}
                    />
                  </div>
                  <div className="work__thumb">
                    <Image
                      loader={imageLoader}
                      placeholder="blur"
                      loading="lazy"
                      style={{ width: "100%", height: "auto" }}
                      src={thumb3}
                      alt={dict?.How_it_works_feature_3_title ?? ""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="work__content-wrapper work__content-space mb-70 pl-40">
              <div className="section__title-wrapper mb-50 bd-title-anim">
                <span className="section__subtitle">
                  {dict?.How_it_works_section_title}
                </span>
                <h2 className="section__title two">
                  {dict?.How_it_works_section_description_1}
                  <span className="animated-underline active">
                    {dict?.How_it_works_section_description_2}
                  </span>
                </h2>
              </div>
              <div className="work__features-inner">
                {WORFEATURES.map((item: TWorkFuture) => (
                  <div className="work__features-item" key={item.id}>
                    <div className="work__features-icon">
                      <span>{item.icon}</span>
                    </div>
                    <div className="work__features-content">
                      <h4>{dict?.[item.title]}</h4>
                      <p>{dict?.[item.description]}</p>
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
                        {dict?.Generate_song_btn}
                      </Link>
                    </div>
                    <div className="work__features-btn">
                      <Link
                        className="unfill__btn feature-unfill_btn"
                        href="/contact"
                      >
                        {dict?.Leave_story_btn}
                      </Link>
                    </div>
                  </div>
                  <div className="work__features-arrow">
                    <Image
                      loader={imageLoader}
                      loading="lazy"
                      style={{ width: "100%", height: "auto" }}
                      src={workArrowImg}
                      alt={dict?.Alt_arrow ?? ""}
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
