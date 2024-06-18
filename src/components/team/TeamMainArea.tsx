import React from 'react';
import BradcrumbTwo from '../common/breadcrumb/BradcrumbTwo';
import TeamArea from './TeamArea';
import FaqArea from '../about/FaqArea';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';

const TeamMainArea = () => {
    return (
        <>
            <BradcrumbTwo teamTitle="Team Member" />
            <TeamArea />
            <FaqArea />
            <PartnerAreaMain borderWrapperClass='ms-border5' spacingClass='pt-130' />
        </>
    );
};

export default TeamMainArea;