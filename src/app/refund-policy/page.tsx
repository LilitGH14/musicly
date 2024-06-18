import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import Setting from '@/components/common/setting/Setting';
import PrivacyTermsAndRefund from '@/components/privacy-terms-refund/PrivacyTermsAndRefund';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <div className="ms-all-content ms-all-content-space">
                <main>
                    <Breadcrumb title='Refund Policy' />
                    <PrivacyTermsAndRefund refundActive="active" />
                    <Setting />
                </main>
            </div>
        </Wrapper>
    );
};

export default page;