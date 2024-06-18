import Link from 'next/link';
import React, { useState } from 'react';
import FooterLogo from '../../../public/assets/img/logo/footer-logo.png';
import MenuDotImg from '../../../public/assets/img/header/menu-dot.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import OffcanvasArea from '@/components/common/offcanvas-area/OffcanvasArea';
import useStickyHeader from '@/hooks/sticky-header';

const HeaderThree = () => {
    const [isOpenInfoSidebar, setIsOpenInfoSidebar] = useState(false)
    const isSticky = useStickyHeader();
    const handleInfoToggle = () => {
        setIsOpenInfoSidebar(!isOpenInfoSidebar)
    }
    return (
        <>
            <header>
                <div className="ms-header3 ms-header3-space zindex-500 p-relative ms-header-fixed">
                    <div className="ms-header3-wrap d-flex align-items-center justify-content-between">
                        <div className="ms-header3-item">
                            <div className="d-flex align-items-center">
                                <div className="ms-header-search p-relative d-none d-xl-block mr-30">
                                    <form>
                                        <input type="text" placeholder="Search" />
                                        <button type="submit"><i className="flaticon-loupe"></i></button>
                                    </form>
                                </div>
                                <div className="ml-nl-logo ms-mw-142 d-xl-none m-img mr-50">
                                    <Link href="#">
                                        <Image src={FooterLogo} loader={imageLoader} loading='lazy' style={{ width: '100%', height: "auto" }}
                                            alt="logo" />
                                    </Link>
                                </div>
                                <div className="d-none d-xl-block">
                                    <div className="ms-header-social mb-10">
                                        <Link href="https://www.instagram.com/" target="_blank" title="Instagram">IN</Link>
                                        <Link href="https://twitter.com/" target="_blank" title="Twitter">TW</Link>
                                        <Link href="https://www.facebook.com/" target="_blank" title="Facebook">FB</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ms-header3-item d-flex align-items-center">
                            <Link className="ms-border-btn d-none d-xl-block" href="/join"><i className="fa-solid fa-plus"></i>
                                List Your Service</Link>
                            <Link className="ms-profile-btn ml-30 d-none d-xl-block" href="#"><i className="flaticon-user"></i></Link>
                            <button onClick={handleInfoToggle} className="ms-dot-toggle ml-30 ms-cp sidebar__toggle d-xl-none">
                                <Image src={MenuDotImg} loader={imageLoader} loading='lazy' width={40} height={38}
                                    alt="menu dot" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div
                className={`ms-header3 ms-header-fixed ms-header3-sticky ms-header-fixed ms-header4-space zindex-500 p-relative
                ${isSticky ? 'sticky' : ''}`}>
                <div className="ms-header3-wrap d-flex align-items-center justify-content-between">
                    <div className="ms-header3-item">
                        <div className="d-flex align-items-center">
                            <div className="ml-nl-logo ms-mw-142 m-img mr-50">
                                <Link href="#">
                                    <Image src={FooterLogo} loader={imageLoader} loading='lazy' style={{ width: '100%', height: "auto" }}
                                        alt="logo" />
                                </Link>
                            </div>
                            <div className="d-none d-xl-block">
                                <div className="ms-header-social mb-10">
                                    <Link href="https://www.instagram.com/" target="_blank" title="Instagram">IN</Link>
                                    <Link href="https://twitter.com/" target="_blank" title="Twitter">TW</Link>
                                    <Link href="https://www.facebook.com/" target="_blank" title="Facebook">FB</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms-header3-item d-flex align-items-center">
                        <Link className="ms-border-btn d-none d-xl-block" href="/join"><i className="fa-solid fa-plus"></i>
                            List Your Service</Link>
                        <Link className="ms-profile-btn ml-30 d-none d-xl-block" href="#"><i className="flaticon-user"></i></Link>
                        <button onClick={handleInfoToggle} className="ms-dot-toggle ml-30 ms-cp sidebar__toggle">
                            <Image src={MenuDotImg} loader={imageLoader} loading='lazy' width={40} height={38}
                                alt="menu dot" />
                        </button>
                    </div>
                </div>
            </div>
            <OffcanvasArea isOpenInfoSidebar={isOpenInfoSidebar} setIsOpenInfoSidebar={setIsOpenInfoSidebar} />
            <div onClick={() => setIsOpenInfoSidebar(false)}
                className={isOpenInfoSidebar ? "offcanvas__overlay overlay-open" : "offcanvas__overlay"}></div>
        </>
    );
};

export default HeaderThree;