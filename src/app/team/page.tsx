import Setting from '@/components/common/setting/Setting';
import TeamMainArea from '@/components/team/TeamMainArea';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <>
            <Wrapper>
                <div className="ms-all-content ms-all-content-space">
                    <main>
                        <TeamMainArea />
                        <Setting />
                    </main>
                </div>
            </Wrapper>
        </>
    );
};

export default page;