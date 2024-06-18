import Setting from '@/components/common/setting/Setting';
import WorkSystemMain from '@/components/work-system/WorkSystemMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <Wrapper>
            <div className="ms-all-content ms-all-content-space">
                <main>
                    <WorkSystemMain />
                    <Setting />
                </main>
            </div>
        </Wrapper>
    );
};

export default page;