"use client"
import { imageLoader } from '@/hooks/ImageLoader';
import reviewImg from '../../../public/assets/img/footer/start-01.png';
import chooseImg from '../../../public/assets/img/choose/choose-bg.png';
import Image from 'next/image';
import React from 'react';
type TChooseData = {
    id: number;
    icon: string;
    serialNum: string;
    title: string
}
const ChooseUsArea = () => {
    const choose_data: TChooseData[] = [
        { id: 1, icon: "flaticon-dollar ", serialNum: "01", title: "Pay no more than booking direct" },
        { id: 2, icon: "flaticon-theater", serialNum: "02", title: "Our acts are vetted and road-tested" },
        { id: 3, icon: "flaticon-verified", serialNum: "03", title: "Your booking is secure in our site" },
        { id: 4, icon: "flaticon-appointment", serialNum: "04", title: "Booking is just the begin night" }
    ]
    return (
        <>
            <section className="ms-choose-area pt-125 pb-105">
                <div className="container">
                    <div className="row align-items-end mb-25 bdFadeUp">
                        <div className="col-lg-7">
                            <div className="section__title-wrapper mb-40">
                                <h2 className="section__title mb-35 bd-title-anim">Why choose us?</h2>
                                <p> Our hand-picked acts will guarantee you fantastic wedding <br /> entertainment
                                    for each part. {`We'll`} provide help and support 24 hours a <br /> day, 7 days a week, right up
                                    until
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="d-flex justify-content-lg-end">
                                <div className="ms-review-part mb-40">
                                    <div className="ms-review-gap d-flex align-items-center">
                                        <div className="ms-review-left">
                                            <h3>Excellent :</h3>
                                            <p>1050 Review On</p>
                                        </div>
                                        <div className="ms-review-right">
                                            <Image src={reviewImg} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: 'auto', height: "auto" }}
                                                alt="review img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-45 bdFadeUp">
                        {
                            choose_data.map((item) => (
                                <div className="col-xl-3 col-md-6" key={item.id}>
                                    <div className="ms-choose-item mb-25">
                                        <div className="ms-choose-icon d-inline-block p-relative">
                                            <i className={item.icon}></i>
                                            <span>{item.serialNum}</span>
                                        </div>
                                        <h3 className="ms-choose-title">{item.title}</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="ms-border2 pb-130">
                        <div className="row bdFadeUp">
                            <div className="col-xl-12">
                                <div className="ms-choose-bg m-img ms-br-15 fix">
                                    <Image src={chooseImg} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                        alt="choose img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChooseUsArea;