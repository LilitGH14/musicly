"use client"
import { imageLoader } from '@/hooks/ImageLoader';
import WorkFutureIconOne from '../../../public/assets/img/svg/WorkFutureIconOne';
import WorkFutureSvgIconThree from '../../../public/assets/img/svg/WorkFutureSvgIconThree';
import WorkFutureSvgIconTwo from '../../../public/assets/img/svg/WorkFutureSvgIconTwo';
import workArrowImg from '../../../public/assets/img/work/arrow.png';
import vectorShape from '../../../public/assets/img/work/vector-shape-2.png';
import thumb1 from '../../../public/assets/img/work/work-thumb-04.png';
import { TWorkFuture } from '@/types/types';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const WorkAreaTwo = () => {
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
            <section className="work__area ms-bg-2 pt-130 pb-60 p-relative">
                <Image className="work__vactor-shape d-none d-xl-block"
                    loader={imageLoader} loading='lazy'
                    style={{ width: 'auto', height: "auto" }} src={vectorShape}
                    alt="vactoe-shape.png" />
                <div className="container">
                    <div className="row align-items-center bdFadeUp">
                        <div className="col-xl-6">
                            <div className="work__thumb-wrapper zindex-1 p-relative mb-60 d-inline-block">
                                <div className="work__thumb-inner p-relative zindex-5">
                                    <div className="work__thumb m-img">
                                        <Image loader={imageLoader} placeholder="blur" loading='lazy' width={618} height={586} src={thumb1}
                                            alt="work image" />
                                    </div>
                                </div>
                                <div className="ms-work-round p-absolute zindex--1 d-none d-sm-block"></div>
                                <div className="ms-work-round p-absolute two zindex--1 d-none d-sm-block"></div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="work__content-wrapper work__content-wrapper-space mb-70">
                                <div className="section__title-wrapper mb-50 bd-title-anim">
                                    <span className="section__subtitle">How it Works</span>
                                    <h2 className="section__title two">
                                        Welcome to the {`UK's`} leading
                                        live music
                                        <span className="animated-underline active">booking agency</span>
                                    </h2>
                                </div>
                                <div className="work__features-inner">
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
                                    <div className="work__features-bottom">
                                        <div className="work__features-action">
                                            <div className="work__features-btn">
                                                <Link className="unfill__btn feature-unfill_btn" href="/contact">Get Started</Link>
                                            </div>
                                            <div className="features__btn-text">
                                                <span>Book something <br /> awesome !</span>
                                            </div>
                                        </div>
                                        <div className="work__features-arrow">
                                            <Image loader={imageLoader} loading='lazy' style={{ width: '100%', height: "auto" }} src={workArrowImg}
                                                alt="image not found" />
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

export default WorkAreaTwo;