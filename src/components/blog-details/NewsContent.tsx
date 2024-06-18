import Link from 'next/link';
import React from 'react';


const NewsContent = ({ news }: any) => {
    return (
        <>
            <div className="ms-news-content">
                <div className="ms-news-meta-wrap mb-20">
                    <span className="ms-news-by">By :</span>
                    <div className="ms-news-meta d-inline-block">
                        <span><Link href="news-details.html">Musicly</Link></span>
                        <span>Mar 15, 2023</span>
                        <span><Link href="news-details.html">{news?.comment} Comments</Link></span>
                    </div>
                </div>
                <h3 className="ms-news-title3 mb-30 ms-border2 pb-30">Joss
                    Stone
                    announces 2023 London Palladium gig, Joss Stone will
                    play the iconic London Palladium</h3>
                <p className="mb-25">Our hand-picked acts will guarantee you fantastic
                    wedding
                    entertainment for each
                    part. {`We'll`} provide help and support 24
                    hours a day, 7 days a week, right up until Outstanding wedding
                    band playing
                    chart, indie, rock anthems and Britpop and
                    featuring guitars, keyboards.</p>
                <p className="mb-35">Alienum phaedrum torquatos nec eu, vis detraxit
                    periculis ex,
                    nihil
                    expetendis in
                    mei. Mei an pericula euripidis, hinc
                    partem ei est. Eos ei nisl graecis, vix aperiri consequat an.
                    Eius lorem
                    tincidunt vix at, vel pertinax sensibus id,
                    error epicurei mea et. Mea facilisis urbanitas moderatius id.
                    Vis ei
                    rationibus
                    definiebas, eu qui purto zril laoreet.
                    Ex error omnium interpretaris pro, alia illum ea vim. Lorem
                    ipsum dolor sit
                    amet, te ridens.</p>
                <div className="ms-blockquote mb-35">
                    <blockquote>
                        <i className="flaticon-quotation"></i>
                        <h4>Music is an agreeable harmony for the honor of God and
                            the
                            permissible
                            delights of the soul.</h4>
                        <span>Johann Sebastian Bach</span>
                    </blockquote>
                </div>

                <p className="mb-25">Grursus mal suada faci lisis Lorem ipsum dolarorit
                    more a
                    ametion
                    consectetur
                    elit. Vesti at bulum nec odio aea the dumm
                    ipsumm ipsum that dolocons rsus mal suada and fadolorit to the
                    consectetur
                    elit.
                    All Lorem Ipsum generators on the
                    Internet tend to repeat predefined chunks as necessary, making
                    this the
                    first
                    true generator on the Internet. It uses a
                    dictionary of over 200 Latin words.</p>

                <p className="mb-25">Our hand-picked acts will guarantee you fantastic
                    wedding
                    entertainment for each
                    part. {`We'll`} provide help and support 24
                    hours a day, 7 days a week, right up until Outstanding wedding
                    band playing
                    chart, indie, rock anthems and Britpop and
                    featuring guitars, keyboards.</p>
                <div className="ms-border5 pt-30 mt-70">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="ms-tags-wrap d-flex mb-20">
                                <span className="ms-tag-title d-inline-block mr-20">Tags
                                    :</span>
                                <span className="ms-tags">
                                    <Link href="#">Music</Link>
                                    <Link href="#">Singer</Link>
                                    <Link href="#">Bands</Link>
                                </span>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div
                                className="ms-social2-wrap mb-20 d-flex justify-content-xl-end">
                                <span className="ms-social-text mr-20"><i
                                    className="flaticon-share"></i>
                                    {" "}  Share on : </span>
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
        </>
    );
};

export default NewsContent;