import Link from 'next/link';
import React from 'react';
import FooterLogo from '../../../public/assets/img/logo/footer3-logo.png';
import FooterStartImg from '../../../public/assets/img/footer/start-01.png';
import FooterBgImg from '../../../public/assets/img/bg/footer-bg.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';

const FooterThree = () => {
    return (
        <>
            <footer>
                <div className="ms-footer3-wrap include__bg zindex-1 p-relative"
                    style={{ backgroundImage: `url(${FooterBgImg.src})` }}
                    data-background="assets/img/bg/footer-bg.png">
                    <div className="ms-overlay ms-overlay5 p-absolute zindex--1"></div>
                    <div className="ms-footer3-top pt-130">
                        <div className="container">
                            <div className="ms-border2">
                                <div className="ms-footer2-logo mb-130 mx-auto">
                                    <Link href="/">
                                        <Image src={FooterLogo} loader={imageLoader} placeholder="blur" loading='lazy' width={96} height={108}
                                            alt="footer logo" />
                                    </Link>
                                </div>
                                <div className=" ms-footer2-top-inner ms-border1 ms-br-100 ms-bg-4 mb-65">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="ms-footer2-rating three mb-10">
                                                <h3>Excellent : 1050 Review On
                                                    <Link href="#">
                                                        <Image src={FooterStartImg} loader={imageLoader} placeholder="blur" loading='lazy' width={82} height={20}
                                                            alt="footer image" />
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="ms-subscribe2-form p-relative mb-10 d-none d-sm-block">
                                                <i className="flaticon-mail"></i>
                                                <input type="text" placeholder="Enter your mail" />
                                                <button type="submit" className="ms-subscribe2-btn">Subscribe Now <i
                                                    className="fa-sharp fa-solid fa-paper-plane"></i></button>
                                            </div>
                                            <div className="ms-subscribe2-mobile p-relative mb-10 d-sm-none">
                                                <i className="flaticon-mail"></i>
                                                <input type="text" placeholder="Enter your mail" />
                                                <button type="submit" className="ms-subscribe2-m-btn">Subscribe Now <i
                                                    className="fa-sharp fa-solid fa-paper-plane"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-15">
                                    <div className="col-xxl-4 col-lg-5 col-md-6">
                                        <div className="ms-footer2-widget mb-50 pr-20">
                                            <h3 className="ms-footer2-title">Get in touch</h3>
                                            <div className="ms-footer2-contact border-0 pb-40">
                                                <ul>
                                                    <li><i className="flaticon-pin"></i><Link href="#">936 Kuhl Avenue,
                                                        Norcross, Georgia
                                                        GA 5983, United State</Link></li>
                                                    <li><i className="flaticon-phone-call"></i><Link href="tel:03332920560">0333
                                                        292
                                                        0560</Link></li>
                                                    <li><i className="flaticon-mail"></i><Link
                                                        href="mailto:info@musiclycontact.com">info@musiclycontact.com</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="ms-footer-social mb-15">
                                                <Link href="https://www.instagram.com/" title="Instagram"
                                                    target="_blank">IN</Link>
                                                <Link href="https://twitter.com/" title="Twitter" target="_blank">TW</Link>
                                                <Link href="https://www.facebook.com/" title="Facebook" target="_blank">FB</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-2 col-lg-3 col-md-6">
                                        <div className="ms-footer2-widget ms-footer2-widget2 mb-50">
                                            <h3 className="ms-footer2-title">Company</h3>
                                            <ul>
                                                <li><Link href="/about">About us</Link></li>
                                                <li><Link href="/contact">Contact us</Link></li>
                                                <li><Link href="/terms-policy">Terms & Policy</Link></li>
                                                <li><Link href="/contact">Help & Support</Link></li>
                                                <li><Link href="/faq">Faq</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-2 col-lg-3 col-md-6">
                                        <div className="ms-footer2-widget mb-50">
                                            <h3 className="ms-footer2-title">Local Band Group</h3>
                                            <ul>
                                                <li><Link href="/team">The Tricks</Link></li>
                                                <li><Link href="/team">Sound City</Link></li>
                                                <li><Link href="/team">Big Teaser</Link></li>
                                                <li><Link href="/team">The New Tones</Link></li>
                                                <li><Link href="/team">Halos Music</Link></li>
                                                <li><Link href="/team">Soho Soul</Link></li>
                                                <li><Link href="/team">Atlantic</Link></li>
                                                <li><Link href="/team">The Fiction</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-2 col-lg-3 col-md-6">
                                        <div className="ms-footer2-widget mb-50">
                                            <h3 className="ms-footer2-title">Trending Genres</h3>
                                            <ul>
                                                <li><Link href="/genres-details">Wedding Bands</Link></li>
                                                <li><Link href="/genres-details">Jazz & Swing</Link></li>
                                                <li><Link href="/genres-details">Musician</Link></li>
                                                <li><Link href="/genres-details">Classical Musician</Link></li>
                                                <li><Link href="/genres-details">Corporate Party</Link></li>
                                                <li><Link href="/genres-details">Premiere Party Band</Link></li>
                                                <li><Link href="/genres-details">DJ Songs</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-2 col-lg-3 col-md-6">
                                        <div className="ms-footer2-widget mb-50">
                                            <h3 className="ms-footer2-title">Country We Serve</h3>
                                            <ul>
                                                <li><Link href="/contact">United State</Link></li>
                                                <li><Link href="/contact">Canada</Link></li>
                                                <li><Link href="/contact">Australia</Link></li>
                                                <li><Link href="/contact">China</Link></li>
                                                <li><Link href="/contact">South Korea</Link></li>
                                                <li><Link href="/contact">Japan</Link></li>
                                                <li><Link href="/contact">Singapore</Link></li>
                                                <li><Link href="/contact">Hong Kong</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms-footer-bottom">
                        <div className="container">
                            <div className="ms-footer-bottom-wrap text-center pt-35 pb-20">
                                <div className="ms-footer-copy">
                                    <p>© Musicly 2024, All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterThree;