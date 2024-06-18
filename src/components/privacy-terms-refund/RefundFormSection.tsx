import RefundForm from '@/form/refund-form';
import React from 'react';

const RefundFormSection = () => {
    return (
        <div className="ms-refund-area pt-100">
            <div className="container">
                <div className="row">
                    <h2 className='section__title mb-40'>Request For Refund</h2>
                    <div className="col-xl-12">
                        <div className="ms-contact-wrap ms-contact-space ms-bg-2">
                            <RefundForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefundFormSection;