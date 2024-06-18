import React from 'react';
import AboutVideoArea from './AboutVideoArea';
import ChooseUsArea from './ChooseUsArea';
import AboutWorkArea from './AboutWorkArea';
import AboutTeamArea from './AboutTeamArea';
import FaqArea from './FaqArea';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';

const AboutMainArea = () => {
    return (
        <>
            <AboutVideoArea />
            <ChooseUsArea />
            <AboutWorkArea />
            <AboutTeamArea />
            <FaqArea />
            <PartnerAreaMain borderWrapperClass='ms-border5' spacingClass='pt-130' />
        </>
    );
};

export default AboutMainArea;