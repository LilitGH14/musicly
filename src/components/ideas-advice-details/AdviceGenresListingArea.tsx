import genres_listing_data from '../../data/genres-listing-data';
import GetRatting from '@/hooks/GetRating';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AdviceGenresListingArea = () => {
    return (
        <>
            <div className="ms-genres-listing ms-bg-2 pt-130 pb-110">
                <div className="container">
                    <div className="row align-items-center mb-20">
                        <div className="col-lg-8">
                            <div className="section__title-wrapper mb-40">
                                <div id="msg-title">
                                    <h2 className="section__title">best wedding party band near you</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="trending-btn mb-40 d-flex justify-content-lg-end">
                                <Link className="border__btn" href="/genres">View All Genres</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            genres_listing_data.slice(35, 39).map((item) => (
                                <div className="col-xl-6" key={item.id}>
                                    <div className="ms-genres-item ms-genres-flex mb-25">
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
                                        <div className="ms-genres-content p-relative">
                                            <span className="ms-genres-star"><i className="fa-light fa-star"></i></span>
                                            <h4 className="ms-genres-title"><Link href={`/genres-details/${item.id}`}>{item.title}</Link></h4>
                                            <p className="mb-30">{item.description}</p>
                                            <div className="ms-fun-brand-bottom ms-genres-rating">
                                                <div className="ms-fun-brand-location">
                                                    <Link href={item.mapLink} target="_blank"> <i
                                                        className="flaticon-pin"></i>{item.location}</Link>
                                                </div>
                                                <div className="ms-fun-brand-rating">
                                                    <GetRatting
                                                        averageRating={item.ratings}
                                                    />
                                                    <span>({item.ratingNum})</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdviceGenresListingArea;