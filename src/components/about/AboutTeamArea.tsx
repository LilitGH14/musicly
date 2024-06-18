"use client"
import team_data from '@/data/team-data';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutTeamArea = () => {
    return (
        <>
            <section className="ms-team-area ms-bg-2 pt-125 pb-90">
                <div className="container">
                    <div className="row justify-content-center mb-25 bdFadeUp">
                        <div className="col-xl-6">
                            <div className="section__title-wrapper text-center mb-40">
                                <h2 className="section__title bd-title-anim">Our awesome team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row ms-team-inner bdFadeUp">
                        {
                            team_data.slice(0, 6).map((item) => (
                                <div className="col-xl-4 col-md-6" key={item.id}>
                                    <div className="ms-team-item-wrap">
                                        <div className="ms-team-item p-relative">
                                            <div className="ms-team-img">
                                                <Link href={`/team-details/${item.id}`}>
                                                    <Image src={item.image} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                                        alt="Team image" />
                                                </Link>
                                                <div className="ms-team-social">
                                                    {
                                                        item.socialIcon.map((icon, index) => (
                                                            <Link key={index} href={icon.url} title={icon.title} target="_blank">{icon.name}</Link>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <h3 className="ms-team-title"><Link className="ms-team-title" href={`/team-details/${item.id}`}>
                                                {item.name}</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutTeamArea;