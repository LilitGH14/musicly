"use client"
import Link from "next/link";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";
import NewsImg from '../../../public/assets/img/news/news-07.jpg';
import ContactForm from "@/form/contact-form";
import ContactMapArea from "./ContactMapArea";
import PartnerAreaMain from "../common/PartnerArea/PartnerAreaMain";

const ContactMainArea = () => {
    return (
        <>
            <Breadcrumb title="Contact Us" />
            <section className="ms-contact-area pb-60 pt-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="ms-contact-wrap ms-contact-space mb-70 ms-bg-2">
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="ms-contact-img-wrap mb-70 d-inline-block p-relative">
                                <div className="ms-contact-img m-img ms-br-15 fix p-relative zindex-1">
                                    <div className="ms-overlay ms-overlay11"></div>
                                    <Image src={NewsImg} loader={imageLoader} placeholder="blur" loading='lazy' width={356} height={433}
                                        alt="banner image" />
                                </div>
                                <div className="ms-contact-content text-center">
                                    <div className="ms-round-icon mx-auto mb-20">
                                        <i className="flaticon-phone-call"></i>
                                    </div>
                                    <h3 className="ms-title3 ms-text2 mb-15">Emergency Call</h3>
                                    <h2 className="ms-title5 white-text"><Link href="tel:+9102369032125">+91 0236 9032
                                        125</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactMapArea />
            <PartnerAreaMain spacingClass="pt-130" />
        </>
    )
};

export default ContactMainArea;