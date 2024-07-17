"use client";
import React from "react";
import WorkBgImg from "../../../public/assets/img/bg/main-bg.jpg";
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
      className="work__area work-overlay pt-50 include__bg"
      style={{ backgroundImage: `url(${WorkBgImg.src})` }}
    >
      <div className="container">
        <div className="row align-items-center bdFadeUp">
          <div className="col-xl-12">
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
              <div className="work__features-inner row">
                <div className="col-12">
                  <div className="row">
                    {WORFEATURES.map((item: TWorkFuture) => (
                      <div className="work__features-item col-lg-4 col-sm-12" key={item.id}>
                        <div className="work__features-icon">
                          <span>{item.icon}</span>
                        </div>
                        <div className="work__features-content">
                          <h4>{dict?.[item.title]}</h4>
                          <p>{dict?.[item.description]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="work__features-bottom col-12">
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
                      style={{ width: "90px" }}
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
