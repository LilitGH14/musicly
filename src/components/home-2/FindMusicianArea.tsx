"use client"
import React from 'react';
import NiceSelect from '../common/NiceSelect';
import { bannerFormSelectOne, bannerFormSelectThree, bannerFormSelectTwo } from '@/data/nice-select-data';

const FindMusicianArea = () => {
    const selectHandler = () => { }
    return (
        <>
            <section className="ms-find-musician pt-70 pb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-10">
                            <div className="ms-find-musician-wrap">
                                <h2 className="ms-find-musician-title mb-65 text-center bd-title-anim">Hire a live <span
                                    className="ms-text-gradient1">band</span>
                                    <span className="ms-color-1">or</span> <span className="ms-text-gradient2">musician</span> for
                                    <br />
                                    your wed ding or
                                    party
                                </h2>
                                <div className="ms-banner__form two bdFadeUp">
                                    <form action="#">
                                        <div className="ms-banner__from-inner two ms-bg-2 wrapper-nice-select">
                                            <div className="ms-banner__form-select  m-nice-select-2">
                                                <NiceSelect
                                                    options={bannerFormSelectOne}
                                                    defaultCurrent={0}
                                                    onChange={selectHandler}
                                                    name=""
                                                    className=""
                                                />
                                            </div>
                                            <div className="ms-banner__form-select m-nice-select-2">
                                                <NiceSelect
                                                    options={bannerFormSelectTwo}
                                                    defaultCurrent={0}
                                                    onChange={selectHandler}
                                                    name=""
                                                    className=""
                                                />
                                            </div>
                                            <div className="ms-banner__form-select  ms-border-none m-nice-select-2">
                                                <NiceSelect
                                                    options={bannerFormSelectThree}
                                                    defaultCurrent={0}
                                                    onChange={selectHandler}
                                                    name=""
                                                    className=""
                                                />
                                            </div>
                                            <div className="banner__form-button">
                                                <button className="ms-white-bg"><i className="flaticon-loupe"></i> Find
                                                    Acts</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FindMusicianArea;