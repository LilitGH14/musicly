import Link from 'next/link';
import React from 'react';

const PaginationTwo = () => {
    return (
        <>
            <nav>
                <ul className="justify-content-start">
                    <li>
                        <Link href="#">
                            <i className="fas fa-long-arrow-left"></i>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">01</Link>
                    </li>
                    <li>
                        <span className="current">02</span>
                    </li>
                    <li>
                        <Link href="#">03</Link>
                    </li>
                    <li>
                        <Link href="#">...</Link>
                    </li>
                    <li>
                        <Link href="#">
                            <i className="fas fa-long-arrow-right"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default PaginationTwo;