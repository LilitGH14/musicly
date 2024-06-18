"use client"
import genres_listing_data from '@/data/genres-listing-data';
import GetRatting from '@/hooks/GetRating';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";

const EnquiryListArea = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    return (
        <>
            <section className="ms-enquiry-area pt-130 pb-130 ms-date-picker-calander">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="ms-enquiry-filter text-center mb-45">
                                <form action="#">
                                    <div className="ms-enquiry-date p-relative d-inline-block mr-20 mb-20">
                                        <i className="fa-solid fa-calendar-days"></i>
                                        <DatePicker placeholderText='Select Event date' selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>
                                    <button type="submit" className="unfill__btn mb-20">Enquire Now</button>
                                </form>
                            </div>

                            <div className="ms-genres-item-box">
                                {
                                    genres_listing_data.slice(31, 35).map((item) => (
                                        <div className="ms-genres2-item ms-border2 ms-genres-grid mb-25" key={item.id}>
                                            <div className="ms-genres-img ms-br-15 fix w-img genres-img-214">
                                                <Link href={`/genres-details/${item.id}`}>
                                                    <Image src={item.image} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                                        alt="genres img" />
                                                </Link>
                                                {
                                                    item.videoUrl &&
                                                    <Link className="popup-video ms-genres-video"
                                                        href={item.videoUrl}><i
                                                            className="fa-sharp fa-solid fa-play"></i></Link>
                                                }
                                                <span className="ms-genres-price">From ${item.price}</span>
                                            </div>
                                            <div className="ms-genres2-content p-relative">
                                                <span className={`ms-genres-star ${item.activeClass}`}><i className="fa-light fa-star"></i></span>
                                                <h4 className="ms-genres2-title"><Link href={`/genres-details/${item.id}`}>{item.title}</Link></h4>
                                                <p className="ms-text2">{item.musicName}</p>
                                                <p className="mb-25">{item.description}</p>
                                                <div className="ms-fun-brand-bottom ms-genres-rating">
                                                    <div className="ms-fun-brand-location">
                                                        <Link href={item.mapLink} target="_blank"> <i
                                                            className="flaticon-pin"></i>{item.location}</Link>
                                                    </div>
                                                    <div className="ms-fun-brand-rating">
                                                        {
                                                            <GetRatting averageRating={item.ratings} />
                                                        }
                                                        <span>({item.ratingNum})</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EnquiryListArea;