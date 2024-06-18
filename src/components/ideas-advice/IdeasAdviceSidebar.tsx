import Link from 'next/link';
import React from 'react';

const IdeasAdviceSidebar = () => {
    return (
        <>
            <div className="ms-news-sidebar mb-70">
                <div className="ms-news-widget">
                    <div className="ms-input2-box p-relative">
                        <input type="text" placeholder="Search Here . . ." />
                        <button className="ms-input2-search" type="submit"><i
                            className="flaticon-loupe"></i></button>
                    </div>
                </div>
                <div className="ms-news-widget ms-dot-none">
                    <h3 className="ms-news-widget-title">Entertainment ideas</h3>
                    <ul>
                        <li><Link href="/ideas-advice-details">Wedding entertainment ideas</Link></li>
                        <li><Link href="/ideas-advice-details">party entertainment ideas</Link></li>
                        <li><Link href="/ideas-advice-details">corporate entertainment
                            ideas</Link></li>
                        <li><Link href="/ideas-advice-details">chiristmas entertainment
                            ideas</Link></li>
                        <li><Link href="/ideas-advice-details">clubs & cusino party ideas</Link></li>
                        <li><Link href="/ideas-advice-details">hotel & resturant music
                            ideas</Link></li>
                        <li><Link href="/ideas-advice-details">more entertainment ideas</Link>
                        </li>
                    </ul>
                </div>
                <div className="ms-news-widget ms-dot-none">
                    <h3 className="ms-news-widget-title">Community Events ideas</h3>
                    <ul>
                        <li><Link href="/ideas-advice-details">block party</Link></li>
                        <li><Link href="/ideas-advice-details">carnival</Link></li>
                        <li><Link href="/ideas-advice-details">circus party</Link></li>
                        <li><Link href="/ideas-advice-details">fair & festival</Link></li>
                        <li><Link href="/ideas-advice-details">grand opening</Link></li>
                        <li><Link href="/ideas-advice-details">lunch party</Link></li>
                        <li><Link href="/ideas-advice-details">charity event</Link></li>
                    </ul>
                </div>
                <div className="ms-news-widget ms-dot-none">
                    <h3 className="ms-news-widget-title">Private Events ideas</h3>
                    <ul>
                        <li><Link href="/ideas-advice-details">baby shower</Link></li>
                        <li><Link href="/ideas-advice-details">family reunion party</Link></li>
                        <li><Link href="/ideas-advice-details">special event</Link></li>
                        <li><Link href="/ideas-advice-details">funeral service party</Link></li>
                        <li><Link href="/ideas-advice-details">private party</Link></li>
                        <li><Link href="/ideas-advice-details">retirement party</Link></li>
                        <li><Link href="/ideas-advice-details">couple night party</Link></li>
                    </ul>
                </div>
                <div className="ms-news-widget ms-dot-none">
                    <h3 className="ms-news-widget-title">Sporting Events ideas</h3>
                    <ul>
                        <li><Link href="/ideas-advice-details">golf tournament</Link></li>
                        <li><Link href="/ideas-advice-details">half time show</Link></li>
                        <li><Link href="/ideas-advice-details">super bow party</Link></li>
                        <li><Link href="/ideas-advice-details">world series party</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default IdeasAdviceSidebar;