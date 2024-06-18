"use client"
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamForm from '@/form/team-form';
import BioData from './BioData';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import { TTeamData, idType } from '@/types/types';
import team_data from '@/data/team-data';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';

const TeamDetailsMain = ({ id }: idType) => {
    const team: TTeamData | undefined = team_data.find((item) => item.id == id)

    return (
        <>
            <Breadcrumb title={team?.name} />
            <section className="ms-team-details-area fix pt-130 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="ms-team-img-details mb-50">
                                {
                                    team?.image &&
                                    <Image src={team?.image} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                        alt="team image" />
                                }
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="ms-team-item-details mb-50">
                                <h4 className="ms-team-role mb-30">{team?.desination}</h4>
                                <p>Given the legendarily debauched life of the Rolling Stones guitarist, it’s a
                                    wonder that he can remember enough of it to fill a book.</p>
                                <p> Eye-watering in its
                                    candour, Life gleefully takes us through music, money, arrests, fallouts,
                                    makeups, drugs and “chicks”. It’s gossipy, spry and an absolute hoot from
                                    beginning to end.</p>
                                <p>Our hand-picked acts will guarantee you fantastic wedding entertainment for
                                    each part. {`We'll`} provide help and support 24 hours a day, 7 days a week,
                                    right up until Outstanding wedding band playing chart, indie, rock anthems
                                    and Britpop and featuring guitars, keyboards. </p>
                                <p> The group were fantastic, they
                                    made the evening go with a blast.</p>

                                <div className="bd-skill--content mt-50">
                                    <div className="bd-skill__wrapper mb-25">
                                        <div className="bd-skill--title__wrapper">
                                            <h5 className="bd-skill--title">Music</h5>
                                            <span>90%</span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "90%" }}
                                                aria-valuenow={90}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                data-wow-duration="1s"
                                                data-wow-delay=".2s"
                                            >
                                                <span>90%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bd-skill__wrapper mb-25">
                                        <div className="bd-skill--title__wrapper">
                                            <h5 className="bd-skill--title">Sound Recording</h5>
                                            <span>60%</span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "60%" }}
                                                aria-valuenow={60}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                data-wow-duration="1s"
                                                data-wow-delay=".2s"
                                            >
                                                <span>60%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bd-skill__wrapper mb-0">
                                        <div className="bd-skill--title__wrapper">
                                            <h5 className="bd-skill--title">Track Editing</h5>
                                            <span>70%</span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "70%" }}
                                                aria-valuenow={70}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                data-wow-duration="1s"
                                                data-wow-delay=".2s"
                                            >
                                                <span>70%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <BioData />
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className="ms-team-item-contact mb-50">
                                <TeamForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PartnerAreaMain borderWrapperClass='ms-border5' spacingClass='pt-130' />
        </>
    );
};

export default TeamDetailsMain;