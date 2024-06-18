import Link from 'next/link';
import React from 'react';
import FooterLogo from '../../../public/assets/img/logo/footer-logo.png';
import FooterBg from '../../../public/assets/img/bg/sound-bg.png';
import Image from 'next/image';
import FooterSubscribe from './FooterSubscribe';

const FooterOne = () => {
    return (
        <>
            <footer>
                <div className="ms-footer-bg ms-footer-overlay zindex-1 include__bg pt-120"
                    style={{ backgroundImage: `url(${FooterBg.src})` }}>
                    <div className="ms-footer-top pt-130">
                        <div className="container">
                            <div className="ms-footer-border pb-10">
                                <div className="row">
                                    <div className="col-xxl-2 col-lg-3 col-md-6">
                                        <div className="ms-footer-widget mb-50">
                                            <h3 className="ms-footer-title">Local Band Group</h3>
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
                                        <div className="ms-footer-widget mb-50">
                                            <h3 className="ms-footer-title">Trending Genres</h3>
                                            <ul>
                                                <li><Link href="/genres">Wedding Bands</Link></li>
                                                <li><Link href="/genres">Jazz & Swing</Link></li>
                                                <li><Link href="/genres">Musician</Link></li>
                                                <li><Link href="/genres">Classical Musician</Link></li>
                                                <li><Link href="/genres">Corporate Party</Link></li>
                                                <li><Link href="/genres">Premiere Party Band</Link></li>
                                                <li><Link href="/genres">DJ Songs</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-2 col-lg-3 col-md-6">
                                        <div className="ms-footer-widget mb-50">
                                            <h3 className="ms-footer-title">Country We Serve</h3>
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
                                    <div className="col-xxl-2 col-lg-3 col-md-6">
                                        <div className="ms-footer-widget mb-50">
                                            <h3 className="ms-footer-title">Company</h3>
                                            <ul>
                                                <li><Link href="/about">About us</Link></li>
                                                <li><Link href="/contact">Contact us</Link></li>
                                                <li><Link href="/terms-policy">Terms & Policy</Link></li>
                                                <li><Link href="/contact">Help & Support</Link></li>
                                                <li><Link href="/faq">Faq</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-lg-5 col-md-6">
                                        <div className="ms-footer-widget mb-50">
                                            <h3 className="ms-footer-title">Subscribe Now</h3>
                                            <FooterSubscribe />
                                            <div className="ms-footer-warning mb-25">
                                                <p>You Don’t Get Any Spam Message !</p>
                                            </div>
                                            <div className="ms-footer-social">
                                                <Link href="https://www.linkedin.com/" title="Instagram" target="_blank">IN</Link>
                                                <Link href="https://twitter.com/" title="Twitter" target="_blank">TW</Link>
                                                <Link href="https://www.facebook.com/" title="Facebook" target="_blank">FB</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms-footer-bottom">
                        <div className="container">
                            <div
                                className="ms-footer-bottom-wrap align-items-center d-flex flex-wrap justify-content-between pt-35 pb-20">
                                <div className="ms-footer-logo mb-15">
                                    <Link href="#">
                                        <Image style={{ width: '100%', height: "auto" }} src={FooterLogo}
                                            alt="logo" />
                                    </Link>
                                </div>
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

export default FooterOne;