"use client"
import EnquireFormList from '@/form/enquire-form';
import React from 'react';

const EnquireForm = () => {
    return (
        <>
            <section className="ms-enquire-form-area pb-130 pt-120 ms-date-picker-calander">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="section__title-wrapper mb-75 text-center">
                                <h2 className="section__title">
                                    Enquire now
                                </h2>
                            </div>
                            <div className="ms-enquire-form">
                                <EnquireFormList />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EnquireForm;