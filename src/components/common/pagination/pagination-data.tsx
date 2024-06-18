import React from "react";
import Link from 'next/link';

const PaginationData = () => {
  return (
    <>
      <div className="basic-pagination">
        <nav>
          <ul>
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
      </div>
    </>
  );
};

export default PaginationData;
