"use client"
import WorkFutureIconOne from '@/svg/WorkFutureIconOne';
import WorkFutureSvgIconThree from '@/svg/WorkFutureSvgIconThree';
import WorkFutureSvgIconTwo from '@/svg/WorkFutureSvgIconTwo';
import WorkThumb from '../../../public/assets/img/work/work-thumb-05.jpg';
import workArrowImg from '../../../public/assets/img/work/arrow.png';
import workIcon from '../../../public/assets/img/work/star.png';
import WorkBgImg from '../../../public/assets/img/bg/work-bg.jpg';
import { TWorkFuture } from '@/types/types';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';

const WorkAreaThree = () => {

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
            <section className="work__area work-overlay pt-130 pb-70 include__bg"
                style={{ backgroundImage: `url(${WorkBgImg.src})` }}>
                <div className="container">
                    <div className="row align-items-center bdFadeUp">

                        <div className="col-xl-6">
                            <div className="ms-work3-thumb-wrap d-inline-block p-relative mb-60">
                                <div className="ms-work3-inner">
                                    <div className="ms-work3-thumb m-img p-relative fix ms-br-20">
                                        <div className="ms-overlay ms-overlay3 p-absolute"></div>
                                        <Image src={WorkThumb} loader={imageLoader} placeholder="blur" loading='lazy' width={600} height={694}
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
                                            <Image src={workArrowImg} loader={imageLoader} loading='lazy' width={113} height={113}
                                                alt="image not found" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-10">
                            <div className="work__content-wrapper work__content-wrapper-space p-relative mb-60">
                                <div className="section__title-wrapper mb-50 bd-title-anim">
                                    <span className="section__subtitle">How it Works</span>
                                    <h2 className="section__title two">
                                        Welcome to the {`UK's`} leading
                                        live <span className="ms-text1">music booking</span> agency
                                    </h2>
                                </div>
                                <p className="mb-50">Our hand-picked acts will guarantee you fantastic wedding
                                    entertainment
                                    for
                                    each
                                    part. {`We'll`}
                                    provide help and support 24 hours a day, 7 days a week, right up until</p>
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
                                </div>
                                <div className="work__thumb-card ms-work3-card">
                                    <div className="work__card-content">
                                        <span>Excellent :</span>
                                        <p>1050 Review On</p>
                                    </div>
                                    <div className="card__button">
                                        <Link className="card__btn" href="#">
                                            <Image src={workIcon} loader={imageLoader} loading='lazy' width={20} height={20}
                                                alt="work icon" />
                                            <span>Trustpilot</span>
                                        </Link>
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

export default WorkAreaThree;