import Link from 'next/link';
import React from 'react';
import ContactBg from '../../../public/assets/img/bg/contact-bg.jpg';
import flagImg1 from '../../../public/assets/img/contact/flag-01.jpg';
import flagImg2 from '../../../public/assets/img/contact/flag-02.jpg';
import flagImg3 from '../../../public/assets/img/contact/flag-03.jpg';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';

const ContactMapArea = () => {
    const contactData = [
        {
            id: 1,
            image: flagImg1,
            title: "United state of america",
            addess: "936 Kuhl Avenue, Norcross, Georgia GA 5983, United State",
            phone: "0333 292  0560",
            email: "info@musiclycontact.com"
        },
        {
            id: 2,
            image: flagImg2,
            title: "Singapure",
            addess: "936 Kuhl Avenue, Norcross, Georgia GA 5983, United State",
            phone: "5476 223  0560",
            email: "info@musiclycontact.com"
        },
        {
            id: 3,
            image: flagImg3,
            title: "South Africa",
            addess: "936 Kuhl Avenue, Norcross, Georgia GA 5983, United State",
            phone: "5476 223  0560",
            email: "info@musiclycontact.com"
        },
    ]
    return (
        <>
            <section className="ms-contact-map-area">
                <div className="ms-contact-img w-img">
                    <Image src={ContactBg} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                        alt="contact bg" />
                </div>
                <div className="ms-bg-2 ms-contact-map-space">
                    <div className="container">
                        <div className="ms-contact-map-grid">
                            {
                                contactData.map((item) => (
                                    <div className="ms-contact-map-item-wrapper" key={item.id}>
                                        <div className="ms-contact-map-item ms-bg-6">
                                            <div className="ms-contact-flag">
                                                <Image src={item.image} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                                    alt="flag image" />
                                            </div>
                                            <h3 className="ms-title3 white-text mb-40">{item.title}</h3>
                                            <div className="ms-contact-map-content ms-footer2-contact border-0">
                                                <ul>
                                                    <li><i className="flaticon-pin"></i><Link href="#">{item.addess}</Link></li>
                                                    <li><i className="flaticon-phone-call"></i><Link href="tel:03332920560">{item.phone}</Link></li>
                                                    <li><i className="flaticon-mail"></i><Link
                                                        href={`mailto:${item.email}`}>{item.email}</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactMapArea;