"use client"
import { imageLoader } from '@/hooks/ImageLoader';
import WorkFutureIconOne from '../../../public/assets/img/svg/WorkFutureIconOne';
import WorkFutureSvgIconThree from '../../../public/assets/img/svg/WorkFutureSvgIconThree';
import WorkFutureSvgIconTwo from '../../../public/assets/img/svg/WorkFutureSvgIconTwo';
import workIcon from '../../../public/assets/img/banner/banner-thumb-01.jpg';
import arrowIcon from '../../../public/assets/img/work/arrow.png';
import { TWorkFuture } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WorkSystemAreaFour = () => {
    const work_future_data: TWorkFuture[] = [
        {
            id: 1,
            icon: <WorkFutureIconOne />,
            title: "Browse and compare.",
            description: "Booking through GigSalad ensures payment protection, amazing service."
        },
        {
            id: 2,
            icon: <WorkFutureSvgIconTwo />,
            title: "Book securely.",
            description: "Booking through GigSalad ensures payment protection, amazing service."
        },
        {
            id: 3,
            icon: <WorkFutureSvgIconThree />,
            title: "Enjoy your event.",
            description: "Sit back, relax, and watch your party come to life."
        },
    ]
    return (
        <>
            <section className="ms-work-system-area pt-130 pb-130">
                <div className="container">
                    <div className="ms-work-system-wrap">
                        <div className="ms-work-system-grid mb-10">
                            {
                                work_future_data.map((item) => (
                                    <div className="work__features-item" key={item.id}>
                                        <div className="work__features-icon">
                                            <span>
                                                {item.icon}
                                            </span>
                                        </div>
                                        <div className="work__features-content">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="ms-work-system-img d-inline-block fix m-img ms-br-15 mb-60">
                            <Image src={workIcon} loader={imageLoader} loading='lazy' style={{ width: 'auto', height: "auto" }}
                                alt="work system image" />
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="ms-work-system-inner text-center">
                                    <p className="text-center">Our hand-picked acts will guarantee you fantastic
                                        wedding entertainment
                                        for
                                        each part. {`We'll`} provide help and support 24
                                        hours a day, 7 days a week, right up until Outstanding wedding band
                                        playing
                                        chart, indie, rock anthems and Britpop and
                                        featuring guitars, keyboards. The group were fantastic, they made the
                                        evening go with a blast. Great choice of songs ,
                                        the dance floor was full the whole time. We would totally recommend
                                        them.
                                    </p>
                                    <div className="work__features-bottom d-inline-block mt-45">
                                        <div className="work__features-action">
                                            <div className="work__features-btn">
                                                <Link className="unfill__btn feature-unfill_btn" href="/contact">Get Started</Link>
                                            </div>
                                            <div className="features__btn-text">
                                                <span>Book something <br />awesome !</span>
                                            </div>
                                        </div>
                                        <div className="work__features-arrow">
                                            <Image src={arrowIcon} loader={imageLoader} loading='lazy' style={{ width: 'auto', height: "auto" }}
                                                alt="arrow-icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorkSystemAreaFour;