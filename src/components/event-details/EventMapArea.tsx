import React from 'react';

const EventMapArea = () => {

    return (
        <>
            {/* -- Map Area Start Here  -- */}
            <div className="ms-map-area">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29195.13820380151!2d90.36759040000001!3d23.840200300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sbd!4v1678779447377!5m2!1sen!2sbd"
                    style={{ border: 0 }} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* -- Map Area End Here  -- */}
        </>
    );
};

export default EventMapArea;