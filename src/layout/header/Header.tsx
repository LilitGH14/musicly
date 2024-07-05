"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";
import headerLogo from "../../../public/assets/img/logo/big-logo.png";
import menu_data from "@/data/menu-data";
import Language from "@/components/common/Language/Language";

type HeaderType = {
  dict: { [key: string]: string } | null;
};
const Header = ({ dict }: HeaderType) => {
  return (
    <header>
      <div className="header__area header-1 ms-header-fixed ms-bg-body sticky">
        <div className="container-fluid ms-maw-1710">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="mega__menu-wrapper p-relative">
                <div className="header__main d-flex align-items-center justify-content-between">
                  <div className="header__left">
                    <div className="header__logo pt-25 pb-25">
                      <Link href="/">
                        <Image
                          loader={imageLoader}
                          priority
                          width={143}
                          height={45}
                          src={headerLogo}
                          alt={dict?.logo_img as string}
                        />
                      </Link>
                    </div>
                    <div className="mean__menu-wrapper">
                      <div className="main-menu main-menu-ff-space d-none d-lg-inline-block">
                        <nav>
                          <ul>
                            {menu_data.map((menu) => (
                              <li
                                key={menu.id}
                                className={`${
                                  menu.active ? "active has-dropdown" : ""
                                }`}
                              >
                                <Link href={menu.link}>
                                  {dict?.[menu.title]}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="header__right">
                    <Language />
                    <div className="auth-btns">
                      <Link href="/login" className="signin">
                        {dict?.Sign_in}
                      </Link>
                      <Link href="/signup" className="signup">
                        {dict?.Sign_up}
                      </Link>
                    </div>

                    {/* <div className="header__action-inner d-flex align-items-center">
                      <div className="user__acount d-none d-xxl-inline-flex">
                        <span>
                          <Link href="/login">
                            <i className="flaticon-user"></i>
                          </Link>
                        </span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
