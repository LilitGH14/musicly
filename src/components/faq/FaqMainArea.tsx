import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FaqArea from './FaqArea';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';

const FaqMainArea = () => {
    return (
        <>
            <Breadcrumb title='Frequently Ask question' />
            <FaqArea />
            <PartnerAreaMain borderWrapperClass='ms-border5' spacingClass='pt-130' />
        </>
    );
};

export default FaqMainArea;