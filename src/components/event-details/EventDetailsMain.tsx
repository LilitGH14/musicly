"use client";
import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import EventDetailsSidebar from "./EventDetailsSidebar";
import { TLetestNews, idType } from "@/types/types";
import latest_news_data from "../../data/latest-news-data";

const EventDetailsMain = ({ id }: idType) => {
  const event: TLetestNews | undefined = latest_news_data.find(
    (item) => item.id == id
  );

  return (
    <>
      <Breadcrumb title={event?.title} />
      <section className="ms-event-details-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-12">
              <div className="ms-event-details-content mb-40">
                <div className="ms-border2 pb-20 mb-30">
                  <h2 className="ms-event-dtitle">{event?.title}</h2>
                </div>
                <p className="mb-25">
                  Our hand-picked acts will guarantee you fantastic wedding
                  entertainment for each part. {`We'll`} provide help and
                  support 24 hours a day, 7 days a week, right up until
                  Outstanding wedding band playing chart, indie, rock anthems
                  and Britpop and featuring guitars, keyboards.
                </p>
                <p className="mb-35">
                  Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                  nihil expetendis in mei. Mei an pericula euripidis, hinc
                  partem ei est. Eos ei nisl graecis, vix aperiri consequat an.
                  Eius lorem tincidunt vix at, vel pertinax sensibus id, error
                  epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei
                  rationibus definiebas, eu qui purto zril laoreet. Ex error
                  omnium interpretaris pro, alia illum ea vim. Lorem ipsum dolor
                  sit amet, te ridens.
                </p>
                <p className="mb-25">
                  Grursus mal suada faci lisis Lorem ipsum dolarorit more a
                  ametion consectetur elit. Vesti at bulum nec odio aea the dumm
                  ipsumm ipsum that dolocons rsus mal suada and fadolorit to the
                  consectetur elit. All Lorem Ipsum generators on the Internet
                  tend to repeat predefined chunks as necessary, making this the
                  first true generator on the Internet. It uses a dictionary of
                  over 200 Latin words.
                </p>
                <p className="mb-25">
                  Our hand-picked acts will guarantee you fantastic wedding
                  entertainment for each part. {`We'll`} provide help and
                  support 24 hours a day, 7 days a week, right up until
                  Outstanding wedding band playing chart, indie, rock anthems
                  and Britpop and featuring guitars, keyboards.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-8">
              <EventDetailsSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetailsMain;
