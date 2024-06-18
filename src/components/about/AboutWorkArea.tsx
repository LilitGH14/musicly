"use client"
import { imageLoader } from '@/hooks/ImageLoader';
import WorkFutureIconOne from '@/svg/WorkFutureIconOne';
import WorkFutureSvgIconThree from '@/svg/WorkFutureSvgIconThree';
import WorkFutureSvgIconTwo from '@/svg/WorkFutureSvgIconTwo';
import workThumb from "../../../public/assets/img/work/work-thumb-06.png";
import workArrow from "../../../public/assets/img/work/arrow.png";
import { TWorkFuture } from '@/types/types';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const AboutWorkArea = () => {
    const work_future_data: TWorkFuture[] = [
        {
            id: 1,
            icon: <WorkFutureIconOne />,
            title: "Browse and compare.",
            description: "Compare rates and availability of local entertainers and vendors."
        },
        {
            id: 2,
            icon: <WorkFutureSvgIconTwo />,
            title: "Book securely.",
            description: "Booking through GigSalad ensures payment protection."
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
            <section className="work__area pt-30 pb-70">
                <div className="container">
                    <div className="row align-items-center bdFadeUp">
                        <div className="col-xl-6">
                            <div className="ms-work3-thumb-wrap d-inline-block p-relative mb-60">
                                <div className="ms-work3-inner">
                                    <div className="ms-work3-thumb m-img p-relative fix ms-br-20">
                                        <div className="ms-overlay ms-overlay3 p-absolute"></div>
                                        <Image src={workThumb} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                            alt="work image" />
                                    </div>
                                    <div className="work__features-bottom ms-work3-features pb-0">
                                        <div className="work__features-action">
                                            <div className="work__features-btn ms-work3-feature-btn">
                                                <Link className="ms-fill-btn" href="/contact">Get Started</Link>
                                            </div>
                                            <div className="features__btn-text">
                                                <span>Book something <br /> awesome !</span>
                                            </div>
                                        </div>
                                        <div className="work__features-arrow">
                                            <Image src={workArrow} loader={imageLoader} loading='lazy' style={{ width: '100%', height: "auto" }}
                                                alt="image not found" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-10">
                            <div className="work__content-wrapper p-relative mb-60">
                                <div className="section__title-wrapper mb-50">
                                    <h2 className="section__title mb-40 bd-title-anim">How we works</h2>
                                    <p className="mb-55">Our hand-picked acts will guarantee you fantastic wedding
                                        <br />entertainment for each part. {`We'll`} provide help and support 24 hours a <br /> day, 7
                                        days a week, right up until
                                    </p>
                                </div>
                                <div className="work__features-inner">
                                    {
                                        work_future_data.map((item) => (
                                            <div className="work__features-item" key={item.id}>
                                                <div className="work__features-icon">
                                                    <span>{item.icon}</span>
                                                </div>
                                                <div className="work__features-content">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutWorkArea;