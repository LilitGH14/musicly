import Link from 'next/link';
import React from 'react';
import EventBg from '../../../public/assets/img/event/event-bg-2.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';

const GenresSidebar = () => {
    return (
        <>
            <div className="col-xxl-4 col-xl-5">
                <div className="ms-genres-right-wrap mb-40">
                    <div className="ms-genres-btn-box mb-20">
                        <div className="d-flex justify-content-xl-end flex-wrap">
                            <div className="add-enquiry-btn mb-20 mr-20">
                                <button className="ms-border-btn ms-model-show"><i className="flaticon-star"></i>
                                    Add
                                    enquiry
                                    list</button>
                            </div>
                            <div className="ms-enquire-btn mb-20">
                                <Link href="#" className="unfill__btn feature-unfill_btn uppercase">Enquire Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="ms-genres-info-wrap d-inline-block p-relative mb-50 ms-br-15 fix">
                        <div className="ms-genres-info-img p-absolute w-img">
                            <Image src={EventBg} loader={imageLoader} placeholder="blur"
                                loading='lazy' style={{ width: '100%', height: "auto" }}
                                alt="event img" />
                        </div>
                        <div className="ms-genres-info">
                            <div className="ms-overlay ms-overlay7 zindex--1 p-absolute"></div>
                            <h5 className="ms-genres-info-title ms-title3 white-text">Performance info
                            </h5>
                            <div className="ms-genres-info-list-wrap">
                                <div className="ms-genres-info-list">
                                    <h6>Line-up</h6>
                                    <p>Male vocals/keyboards; drums /vocals; bass; guitar</p>
                                </div>
                                <div className="ms-genres-info-list">
                                    <h6>Event duration</h6>
                                    <p>2 x 60 minute sets</p>
                                </div>
                                <div className="ms-genres-info-list">
                                    <h6>Interval music</h6>
                                    <p>Included</p>
                                </div>
                                <div className="ms-genres-info-list">
                                    <h6>Lighting</h6>
                                    <p>Included</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms-genres-social d-flex align-items-center flex-wrap">
                        <span className="ms-social-text mr-30 mb-20"><i className="flaticon-share"></i>{" "} Share on</span>
                        <div className="ms-social mb-20">
                            <Link target="_blank" href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link>
                            <Link target="_blank" href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></Link>
                            <Link target="_blank" href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GenresSidebar;