import Link from 'next/link';
import React from 'react';
import WorkImgBg from '../../../public/assets/img/bg/work-bg.jpg';

const BookingArea = () => {
    return (
        <>
            <section className="ms-booking-area include__bg p-relative zindex-1 pt-120 pb-130"
                style={{ backgroundImage: `url(${WorkImgBg.src})` }}>
                <div className="ms-overlay ms-overlay1 p-absolute zindex--1"></div>
                <div className="container">
                    <div className="row align-items-end mb-25">
                        <div className="col-lg-8">
                            <div className="section__title-wrapper mb-40">
                                <h2 className="section__title mb-35">Booking options</h2>
                                <p> Our hand-picked acts will guarantee you fantastic wedding <br />entertainment
                                    for
                                    each part. {`We'll`} provide help and support 24 <br /> hours a day, 7 days a
                                    week,
                                    right up until</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="trending-btn mb-40 d-flex justify-content-lg-end">
                                <Link href="#" className="unfill__btn feature-unfill_btn">
                                    Download PDF <i className="flaticon-downloads"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-45">
                        <div className="col-lg-6">
                            <div className="ms-booking-item mb-25">
                                <h4>Song requests</h4>
                                <p>Booking Options Song Requests is a dynamic and interactive event experience that puts you in control of the playlist!</p>
                                <span className="ms-booking-price">Free</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ms-booking-item mb-25">
                                <h4>Add saxophone</h4>
                                <p>Booking Options with Saxophone Serenades is your ticket to an unforgettable event filled with soulful melodies and enchanting vibes!</p>
                                <span className="ms-booking-price">From $99</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ms-booking-item mb-25">
                                <h4>Add trumpet</h4>
                                <p>Booking Options with Trumpet Flourishes introduces a new dimension of musical brilliance to your special event </p>
                                <span className="ms-booking-price">From $59</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ms-booking-item mb-25">
                                <h4>Add trombone</h4>
                                <p>Booking Options with Trombone Brilliance invites you to amplify the sonic landscape of your event</p>
                                <span className="ms-booking-price">From $79</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ms-booking-item mb-25">
                                <h4>Add keyboards</h4>
                                <p>Booking Options with Keyboard Magic invites you to enhance the auditory landscape of your event with the enchanting tones</p>
                                <span className="ms-booking-price">From $99</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ms-booking-item mb-25">
                                <h4>Add female vocalist</h4>
                                <p>Booking Options with Female Vocalist Elegance introduces a touch of grace and enchantment to your event</p>
                                <span className="ms-booking-price">From $99</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="ms-booking-load-btn text-center">
                                <Link href="#" className="ms-load-btn">load more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BookingArea;