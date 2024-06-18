"use client"
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import AdviceBg from '../../../public/assets/img/advice/adivce-bg-01.jpg';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';
import AdviceGenresListingArea from './AdviceGenresListingArea';
import { TIdeasAdvice, idType } from '@/types/types';
import ideas_advice_data from '../../data/ideas-advice-data';

const IdeasAdviceDetailsMain = ({ id }: idType) => {
    const advice: TIdeasAdvice | undefined = ideas_advice_data.find((item) => item.id == id)
    return (
        <>
            <Breadcrumb title={advice?.title} />
            <section className="ms-advice-details pb-90 pt-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="ms-advice-wrap">
                                <div className="ms-advice-img fix ms-br-15 m-img mb-30">
                                    <Image src={AdviceBg} loader={imageLoader} placeholder="blur" loading='lazy' style={{ width: '100%', height: "auto" }}
                                        alt="advice image" />
                                </div>
                                <h3 className="ms-title4 ms-border2 pb-30 mb-30">{advice?.title}</h3>
                                <p className="mb-30">Our hand-picked acts will guarantee you fantastic wedding
                                    entertainment for
                                    each part. {`We'll`} provide help and support 24
                                    hours a day, 7 days a week, right up until Outstanding wedding band playing
                                    chart, indie, rock anthems and Britpop and
                                    featuring guitars, keyboards.</p>
                                <p className="mb-30">Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                                    nihil
                                    expetendis in mei. Mei an pericula euripidis, hinc
                                    partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem
                                    tincidunt vix at, vel pertinax sensibus id,
                                    error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei
                                    rationibus definiebas, eu qui purto zril laoreet.
                                    Ex error omnium interpretaris pro, alia illum ea vim. Lorem ipsum dolor sit
                                    amet, te ridens. Grursus mal suada faci
                                    lisis Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at bulum
                                    nec odio aea the dumm ipsumm ipsum that
                                    dolocons rsus mal suada and fadolorit to the consectetur elit. All Lorem
                                    Ipsum generators on the Internet tend to repeat
                                    predefined chunks as necessary, making this the first true generator on the
                                    Internet. It uses a dictionary of over 200
                                    Latin words.</p>
                                <p className="mb-30">Our hand-picked acts will guarantee you fantastic wedding
                                    entertainment for
                                    each part. {`We'll`} provide help and support 24
                                    hours a day, 7 days a week, right up until Outstanding wedding band playing
                                    chart, indie, rock anthems and Britpop and
                                    featuring guitars, keyboards.</p>
                                <p className="mb-30">Our hand-picked acts will guarantee you fantastic wedding
                                    entertainment for
                                    each part. {`We'll`} provide help and support 24
                                    hours a day, 7 days a week, right up until Outstanding wedding band playing
                                    chart, indie, rock anthems and Britpop and
                                    featuring guitars, keyboards. detraxit periculis ex, nihil expetendis in
                                    mei. Mei an pericula euripidis, hinc partem ei
                                    est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix
                                    at, vel pertinax sensibus id, error
                                    epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus
                                    definiebas, eu qui purto zril laoreet. Ex
                                    error omnium interpretaris pro,
                                    alia illum ea vim. Lorem ipsum dolor sit amet, te ridens.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AdviceGenresListingArea />
            <PartnerAreaMain spacingClass='pt-130' />
        </>
    );
};

export default IdeasAdviceDetailsMain;