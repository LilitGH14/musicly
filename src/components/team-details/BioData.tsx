import Link from 'next/link';
import React from 'react';

const BioData = () => {
    return (
        <>
            <div className="ms-team-item-details mb-50">
                <h4>Biography:</h4>

                <p>Bresaola chicken tri-tip boudin pork belly, filet mignon andouille sausage
                    hamburger salami turducken. Jerky drumstick shoulder boudin, pork chop short
                    loin ham. Shoulder brisket beef burgdoggen meatloaf ham hock. Hamburger
                    venison
                    shoulder pig cow. Burgdoggen turkey brisket spare ribs ham sausage
                    frankfurter
                    porchetta rump.</p>
                <h4>Proffesional Life:</h4>

                <p>Sausage tail sirloin kielbasa. Short ribs salami alcatra flank pork belly.
                    Sausage pork loin doner meatball, hamburger andouille venison beef ribs pig
                    turkey. Ball tip shankle boudin ribeye.</p>

                <div className="ms-footer-social mb-15 d-flex align-items-center mt-30">
                    <div className="follow-text">Follow On :</div>
                    <Link href="https://www.instagram.com/" title="Instagram" target="_blank">IN</Link>
                    <Link href="https://twitter.com/" title="Twitter" target="_blank">TW</Link>
                    <Link href="https://www.facebook.com/" title="Facebook" target="_blank">FB</Link>
                </div>
            </div>
        </>
    );
};

export default BioData;