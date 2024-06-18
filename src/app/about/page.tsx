import AboutMainArea from '@/components/about/AboutMainArea';
import Setting from '@/components/common/setting/Setting';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <div className="ms-all-content ms-content-mobile-space pt-130">
                <main>
                    <AboutMainArea />
                    <Setting />
                </main>
            </div>
        </Wrapper>
    );
};

export default page;