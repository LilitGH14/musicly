"use client";
import { imageLoader } from "@/hooks/ImageLoader";
import WorkFutureIconOne from "../../../public/assets/img/svg/WorkFutureIconOne";
import WorkFutureSvgIconThree from "../../../public/assets/img/svg/WorkFutureSvgIconThree";
import WorkFutureSvgIconTwo from "../../../public/assets/img/svg/WorkFutureSvgIconTwo";
import arrowIcon from "../../../public/assets/img/work/arrow.png";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchHowItWorksData } from "@/services/how-it-works";
import { InstructionType } from "@/types/types";
import WorkFutureSvgIconFour from "../../../public/assets/img/svg/WorkFutureSvgIconFour";

const work_future_icons: { [key: string]: JSX.Element } = {
  WorkFutureIconOne: <WorkFutureIconOne />,
  WorkFutureSvgIconTwo: <WorkFutureSvgIconTwo />,
  WorkFutureSvgIconThree: <WorkFutureSvgIconThree />,
  WorkFutureSvgIconFour: <WorkFutureSvgIconFour />,
};

const WorkSystemArea = ({ dict }: { dict: any }) => {
  const [instructions, setInstructions] = useState<InstructionType[]>([]);

  useEffect(() => {
    fetchHowItWorksData().then((res) => {
      if (res.ResponseCode == 200) {
        setInstructions(res.ResponseData);
      }
    });
  }, []);

  return (
    <section className="ms-work-system-area pt-50">
      <div className="container">
        <div className="ms-work-system-wrap">
          <div className="ms-work-system-grid mb-10">
            {instructions.map((item: InstructionType) => (
              <div className="work__features-item" key={item.id}>
                <div className="work__features-icon">
                  <span>{work_future_icons[item.icon]}</span>
                </div>
                <div className="work__features-content">
                  <h4>{dict?.[item.title] ?? item.title}</h4>
                  <p>{dict?.[item.description] ?? item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="ms-work-system-inner text-center">
                <p className="text-center">{dict?.How_it_works_description}</p>
                <div className="work__features-bottom d-inline-block">
                  <div className="work__features-action">
                    <div className="work__features-btn">
                      <Link
                        className="unfill__btn feature-unfill_btn"
                        href="/songs"
                      >
                        {dict?.Generate_song_btn ?? "Generate a song"}
                      </Link>
                    </div>
                    <div className="work__features-btn">
                      <Link
                        className="unfill__btn feature-unfill_btn"
                        href="/forum"
                      >
                        {dict?.Leave_story_btn ?? "Leave a story"}
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

export default WorkSystemArea;
