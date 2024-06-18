import Setting from '@/components/common/setting/Setting';
import JoinAreaMainArea from '@/components/join/JoinAreaMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <div className="ms-all-content ms-all-content-space">
                <main>
                    <JoinAreaMainArea />
                    <Setting />
                </main>
            </div>
        </Wrapper>
    );
};

export default page;