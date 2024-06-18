import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import WorkSystemAreaFour from './WorkSystemAreaFour';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';

const WorkSystemMain = () => {
    return (
        <>
            <Breadcrumb title='How It Works' />
            <WorkSystemAreaFour />
            <PartnerAreaMain borderWrapperClass='ms-border5' spacingClass='pt-130' />
        </>
    );
};

export default WorkSystemMain;