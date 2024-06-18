import Setting from '@/components/common/setting/Setting';
import EventDetailsMain from '@/components/event-details/EventDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    const id = 1;
    return (
        <Wrapper>
            <div className="ms-all-content ms-all-content-space">
                <main>
                    <EventDetailsMain id={id} />
                    <Setting />
                </main>
            </div>
        </Wrapper>
    );
};

export default page;