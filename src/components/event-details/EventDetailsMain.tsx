'use client'
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import EventDetailsSidebar from './EventDetailsSidebar';
import Link from 'next/link';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import chooseBgImg from '../../../public/assets/img/choose/choose-bg.png'
import EventMapArea from './EventMapArea';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';
import { TLetestNews, idType } from '@/types/types';
import latest_news_data from '../../data/latest-news-data';

const EventDetailsMain = ({ id }: idType) => {
    const event: TLetestNews | undefined = latest_news_data.find((item) => item.id == id)
    return (
        <>
            <Breadcrumb title={event?.title} />
            <section className="ms-event-details-area pt-130 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-12">
                            <div className="ms-event-details-content mb-40">
                                <div className="ms-event-dimg m-img d-inline-block fix ms-br-15 mb-30">
                                    <Image src={chooseBgImg} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                        alt="event image" />
                                </div>
                                <span className="ms-event-ddate d-inline-block mb-30">Nov 15, 2022</span>
                                <div className="ms-border2 pb-20 mb-30">
                                    <h2 className="ms-event-dtitle">{event?.title}</h2>
                                </div>
                                <p className="mb-25">Our hand-picked acts will guarantee you fantastic wedding
                                    entertainment for each
                                    part. {`We'll`} provide help and support 24
                                    hours a day, 7 days a week, right up until Outstanding wedding band playing
                                    chart, indie, rock anthems and Britpop and
                                    featuring guitars, keyboards.</p>
                                <p className="mb-35">Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                                    nihil
                                    expetendis in
                                    mei. Mei an pericula euripidis, hinc
                                    partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem
                                    tincidunt vix at, vel pertinax sensibus id,
                                    error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei
                                    rationibus
                                    definiebas, eu qui purto zril laoreet.
                                    Ex error omnium interpretaris pro, alia illum ea vim. Lorem ipsum dolor sit
                                    amet, te ridens.</p>
                                <div className="ms-blockquote mb-35">
                                    <blockquote>
                                        <i className="flaticon-quotation"></i>
                                        <h4>Music is an agreeable harmony for the honor of God and the
                                            permissible
                                            delights of the soul.</h4>
                                        <span>Johann Sebastian Bach</span>
                                    </blockquote>
                                </div>

                                <p className="mb-25">Grursus mal suada faci lisis Lorem ipsum dolarorit more a
                                    ametion
                                    consectetur
                                    elit. Vesti at bulum nec odio aea the dumm
                                    ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur
                                    elit.
                                    All Lorem Ipsum generators on the
                                    Internet tend to repeat predefined chunks as necessary, making this the
                                    first
                                    true generator on the Internet. It uses a
                                    dictionary of over 200 Latin words.</p>

                                <p className="mb-25">Our hand-picked acts will guarantee you fantastic wedding
                                    entertainment for each
                                    part. {`We'll`} provide help and support 24
                                    hours a day, 7 days a week, right up until Outstanding wedding band playing
                                    chart, indie, rock anthems and Britpop and
                                    featuring guitars, keyboards.</p>
                                <div className="ms-border5 pt-30 mt-70">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="ms-tags-wrap d-flex mb-20">
                                                <span className="ms-tag-title d-inline-block mr-20">Tags :</span>
                                                <span className="ms-tags">
                                                    <Link href="#">Music</Link>
                                                    <Link href="#">Singer</Link>
                                                    <Link href="#">Bands</Link>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="ms-social2-wrap mb-20 d-flex justify-content-lg-end">
                                                <span className="ms-social-text mr-20"><i className="flaticon-share"></i>
                                                    {" "} Share on: </span>
                                                <span className="ms-social2">
                                                    <Link target="_blank" href="https://www.facebook.com/"><i
                                                        className="fa-brands fa-facebook-f"></i></Link>
                                                    <Link target="_blank" href="https://twitter.com/"><i
                                                        className="fa-brands fa-twitter"></i></Link>
                                                    <Link target="_blank" href="https://www.youtube.com/"><i
                                                        className="fa-brands fa-youtube"></i></Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-8">
                            <EventDetailsSidebar />
                        </div>
                    </div>
                </div>
            </section>
            <EventMapArea />
            <PartnerAreaMain spacingClass='pt-130' />
        </>
    );
};

export default EventDetailsMain;