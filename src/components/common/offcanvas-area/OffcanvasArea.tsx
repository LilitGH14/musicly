import Link from 'next/link';
import React from 'react';
import Logo from '../../../../public/assets/img/logo/logo.svg';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import MobileMenu from '@/layout/mobile-menu/MobileMenu';

type TSideInfoProps = {
    isOpenInfoSidebar: boolean;
    setIsOpenInfoSidebar: React.Dispatch<React.SetStateAction<boolean>>
}
const OffcanvasArea = ({ isOpenInfoSidebar, setIsOpenInfoSidebar }: TSideInfoProps) => {
    return (
        <>
            <div className="fix">
                <div className={`offcanvas__info ${isOpenInfoSidebar ? "info-open" : ""}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link href="/">
                                        <Image loader={imageLoader} priority style={{ width: "100%", height: "auto" }} src={Logo} alt="logo" />
                                    </Link>
                                </div>
                                <div className="offcanvas__close">
                                    <button onClick={() => setIsOpenInfoSidebar(!isOpenInfoSidebar)}>
                                        <i className="fal fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="offcanvas__user mb-30 d-xxl-none">
                                <div className="user__acount">
                                    <span>
                                        <Link href="#"><i className="flaticon-user"></i></Link>
                                    </span>
                                    <div className="user__name-mail">
                                        <h4 className="user__name"><Link href="#">Johnson</Link></h4>
                                        <p className="user__mail">johnson@webmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="offcanvas__search mb-30">
                                <form action="#">
                                    <input type="text" placeholder="Search Here" />
                                    <button type="submit"><i className="far fa-search"></i></button>
                                </form>
                            </div>
                            <div className="hr-1 mt-30 mb-30 d-xl-block"></div>
                            <div className="mobile-menu2 fix mb-30 mobile-menu mean-container d-xl-block">
                                <nav className='mean-nav'>
                                    <ul className='menu-list'>
                                        <MobileMenu />
                                    </ul>
                                </nav>
                            </div>
                            <div className="hr-1 mt-30 mb-30 d-xl-block"></div>
                            <div className="offcanvas__btn mb-30">
                                <Link className="ms-border-btn" href="/services">
                                    <i className="fa-solid fa-plus"></i> List Your
                                    Service</Link>
                            </div>
                            <div className="offcanvas__social">
                                <div className="ms-footer-social mb-0">
                                    <Link href="https://www.linkedin.com/" title="Instagram" target="_blank">IN</Link>
                                    <Link href="https://twitter.com/" title="Twitter" target="_blank">TW</Link>
                                    <Link href="https://www.facebook.com/" title="Facebook" target="_blank">FB</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OffcanvasArea;