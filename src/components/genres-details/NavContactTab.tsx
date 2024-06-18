import genres_listing_data from '@/data/genres-listing-data';
import GetRatting from '@/hooks/GetRating';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavContactTab = () => {
    return (
        <>
            <div className="ms-genres-tab2-text ms-genres-tab2-padding ms-bg-2 ms-br-15">
                <div className="ms-border2">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h4 className="ms-title3 white-text mb-30">Happy –
                                Pharrell
                                Williams</h4>
                        </div>
                        <div className="col-lg-6">
                            <div className="ms-genres-review-btn text-lg-end">
                                <Link href="#"
                                    className="ms-border-btn ms-model2-show mb-30"><i
                                        className="fa-regular fa-pen-to-square"></i>
                                    Write A
                                    Review</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ms-genres-review-content">
                    {
                        genres_listing_data.slice(23, 26).map((item) => (
                            <div className={`ms-genres-review-list pt-30 ms-genres-review-grid ${item.wrapperBorderClass}`} key={item.id}>
                                <div className="ms-genres-review-img">
                                    <Image src={item.image} loader={imageLoader} placeholder="blur"
                                        loading='lazy' style={{ width: '100%', height: "100%" }}
                                        alt="Review image" />
                                </div>
                                <div className="ms-genres-review-content">
                                    <h5 className="ms-genres-review-title">{item.title}</h5>
                                    <p>{item.description}</p>
                                    <div className="ms-fun-brand-bottom mb-30">
                                        <div className="ms-fun-brand-text lh-1">
                                            <span>{item.date}</span>
                                        </div>
                                        <div className="ms-fun-brand-rating">
                                            <GetRatting
                                                averageRating={item.ratings}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default NavContactTab;