'use client'
import React from 'react';
import BradcrumbThree from '../common/breadcrumb/BradcrumbThree';
import Link from 'next/link';
import latest_news_data from '@/data/latest-news-data';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import PaginationData from '../common/pagination/pagination-data';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';

const EventMainArea = () => {
    return (
        <>
            <BradcrumbThree title='Special Event' />
            <section className="ms-event3-area pt-130 pb-115">
                <div className="container">
                    <div className="ms-border2 pb-40">
                        <div className="row ms-event3-wrap">
                            {
                                latest_news_data.slice(15, 24).map((item) => (
                                    <div className="col-xl-4 col-md-6" key={item.id}>
                                        <div className="ms-event3-item mb-25">
                                            <div className="ms-event3-img ms-overlay10 fix ms-br-15 p-relative zindex-10">
                                                <Link href={`/event-details/${item.id}`}>
                                                    <Image src={item.image} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                                        alt="event image" />
                                                </Link>
                                                <span className="ms-event3-date">{item.month} <br />{item.date}</span>
                                                <div className="ms-event3-content">
                                                    <div className="ms-event3-location-wrap">
                                                        <Link href="#" className="ms-event3-location"><i className="flaticon-pin"></i>
                                                            {item.locationName}</Link>
                                                    </div>
                                                    <h3 className="ms-event3-title ms-title-border"><Link
                                                        href={`/event-details/${item.id}`}>{item.title}</Link>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <PaginationData />
                        </div>
                    </div>
                </div>
            </section>
            <PartnerAreaMain />
        </>
    );
};

export default EventMainArea;