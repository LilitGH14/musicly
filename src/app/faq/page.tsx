import Setting from '@/components/common/setting/Setting';
import FaqMainArea from '@/components/faq/FaqMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <div className="ms-all-content ms-all-content-space">
                <main>
                    <FaqMainArea />
                    <Setting />
                </main>
            </div>
        </Wrapper>
    );
};

export default page;