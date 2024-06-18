"use client"
import special_event_data from '@/data/special-event-data';
import EventBgImg from '../../../public/assets/img/event/event-bg-3.png'
import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const SpecialEventThree = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen)
    return (
        <>
            <section className="ms-event2-area include__bg zindex-1 p-relative pt-140 pb-105"
                style={{ backgroundImage: `url(${EventBgImg.src})` }}
            >
                <div className="ms-overlay ms-overlay1 zindex--1"></div>
                <div className="container">
                    <div className="row justify-content-center mb-25 bdFadeUp">
                        <div className="col-xl-6">
                            <div className="ms-event2-top text-center">
                                <div className="ms-event2 mb-40">
                                    <button onClick={toggleOpen}
                                        className="ms-round2-btn popup-video"><i className="fa-sharp fa-solid fa-play"></i></button>
                                </div>
                                <div className="section__title-wrapper mb-40 bd-title-anim">
                                    <span className="section__subtitle">Special Events</span>
                                    <h2 className="section__title">Special <span className="animated-underline active">
                                        event
                                        coming</span> {" "}
                                        up
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row bdFadeUp">
                        {
                            special_event_data.slice(10, 14).map((item) => (
                                <div className="col-lg-6" key={item.id}>
                                    <div className="ms-event2-item mb-25">
                                        <h3 className="ms-event-title"><Link href="/event-details">{item.title}</Link></h3>
                                        <p className="ms-event-text">{item.description}</p>
                                        <div className="ms-event-inner">
                                            <div className="ms-event-location">
                                                <Link href="https://www.google.com/maps" target="_blank" tabIndex={0}><i
                                                    className="flaticon-pin"></i>{item.locationName}</Link>
                                            </div>
                                            <div className="ms-event-date">
                                                <span>{item.eventDate}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='Rf9flQISwok' onClose={() => setIsOpen(false)} />
        </>
    );
};

export default SpecialEventThree;