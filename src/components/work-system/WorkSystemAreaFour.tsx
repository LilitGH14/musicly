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

const work_future_data: TWorkFuture[] = [
  {
    id: 1,
    icon: <WorkFutureIconOne />,
    title: "How_it_works_feature1_title",
    description: "How_it_works_feature1_description",
  },
  {
    id: 2,
    icon: <WorkFutureSvgIconTwo />,
    title: "How_it_works_feature2_title",
    description: "How_it_works_feature2_description",
  },
  {
    id: 3,
    icon: <WorkFutureSvgIconThree />,
    title: "How_it_works_feature3_title",
    description: "How_it_works_feature3_description",
  },
  {
    id: 4,
    icon: <WorkFutureSvgIconThree />,
    title: "How_it_works_feature4_title",
    description: "How_it_works_feature4_description",
  },
];

const WorkSystemAreaFour = ({ dict }: { dict: any }) => {
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
                  <h4>{dict[item.title]}</h4>
                  <p>{dict[item.description]}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center mt-20">
            <div className="col-xl-10">
              <div className="ms-work-system-inner text-center">
                <p className="text-center">{dict.How_it_works_description}</p>
                <div className="work__features-bottom d-inline-block mt-45">
                  <div className="work__features-action">
                    <div className="work__features-btn">
                      <Link
                        className="unfill__btn feature-unfill_btn"
                        href="/songs"
                      >
                        {dict.Generate_song_btn}
                      </Link>
                    </div>
                    <div className="work__features-btn">
                      <Link
                        className="unfill__btn feature-unfill_btn"
                        href="/forum"
                      >
                        {dict.Leave_story_btn}
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
