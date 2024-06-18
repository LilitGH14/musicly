import Setting from '@/components/common/setting/Setting';
import TeamDetailsMain from '@/components/team-details/TeamDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    const id = 1
    return (
        <Wrapper>
            <div className="ms-all-content ms-all-content-space">
                <main>
                    <TeamDetailsMain id={id} />
                    <Setting />
                </main>
            </div>
        </Wrapper>
    );
};

export default page;