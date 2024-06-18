import Link from 'next/link';
import React from 'react';

const EventDetailsSidebar = () => {
    return (
        <>
            <div className="ms-event-sidebar mb-60">
                <h3 className="ms-event-sidebar-title">Event Details Information</h3>
                <div className="ms-event-sidebar-item">
                    <div className="ms-event-sidebar-inner">
                        <h4 className="ms-event-title2">Event Start Date</h4>
                        <span className="ms-event-stext">November 8 @ 11:00 am</span>
                    </div>
                    <div className="ms-event-sidebar-inner">
                        <h4 className="ms-event-title2">Event End</h4>
                        <span className="ms-event-stext">Nov 8, 2023 @ 11:00 am</span>
                    </div>
                    <div className="ms-event-sidebar-inner">
                        <h4 className="ms-event-title2">Event Category</h4>
                        <span className="ms-event-stext">Festival</span>
                    </div>
                    <div className="ms-event-sidebar-inner">
                        <h4 className="ms-event-title2">Cost</h4>
                        <span className="ms-event-stext">$580</span>
                    </div>
                </div>
                <div className="ms-event-sidebar-item">
                    <div className="ms-event-sidebar-inner">
                        <h4 className="ms-event-title2">Organizer</h4>
                        <span className="ms-event-stext">NAshton Porter</span>
                    </div>
                    <div className="ms-event-sidebar-inner">
                        <h4 className="ms-event-title2">Phone Number</h4>
                        <span className="ms-event-stext"><Link href="tel:+9103625968302">+91 036
                            25968 302</Link></span>
                    </div>
                    <div className="ms-event-sidebar-inner">
                        <h4 className="ms-event-title2">Email Address</h4>
                        <span className="ms-event-stext"><Link
                            href="mailto:info@example.com">info@example.com</Link></span>
                    </div>
                </div>
                <div className="ms-event-sidebar-item">
                    <div className="ms-event-sidebar-inner">
                        <h4 className="ms-event-title2">Venue</h4>
                        <span className="ms-event-stext">Manhattan Club</span>
                        <span className="ms-event-stext"><Link href="#">350 5th Ave New York, NY 10118
                            United States</Link></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventDetailsSidebar;