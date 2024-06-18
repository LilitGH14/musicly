import Setting from '@/components/common/setting/Setting';
import ContactMainArea from '@/components/contact/ContactMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <div className="ms-all-content ms-all-content-space">
                <main>
                    <ContactMainArea />
                    <Setting />
                </main>
            </div>
        </Wrapper>
    );
};

export default page;