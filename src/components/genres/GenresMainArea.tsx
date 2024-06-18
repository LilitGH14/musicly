import React from 'react';
import GenresAboutArea from './GenresAboutArea';
import GenresListingArea from './GenresListingArea';
import FaqArea from '../about/FaqArea';
import PartnerAreaMain from '../common/PartnerArea/PartnerAreaMain';

const GenresMainArea = () => {
    return (
        <>
            <GenresAboutArea />
            <GenresListingArea />
            <FaqArea wrapperBgClass="ms-bg-2" />
            <PartnerAreaMain borderWrapperClass='ms-border5' spacingClass='pt-130' />
        </>
    );
};

export default GenresMainArea;