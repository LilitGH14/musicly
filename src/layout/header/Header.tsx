"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";
import headerLogo from "../../../public/assets/img/logo/big-logo.png";
import menu_data from "@/data/menu-data";

const Header = () => {
  return (
    <header>
      <div className="header__area header-1 ms-header-fixed ms-bg-body sticky">
        <div className="container-fluid ms-maw-1710">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="mega__menu-wrapper p-relative">
                <div className="header__main d-flex align-items-center justify-content-between">
                  <div className="header__logo pt-25 pb-25">
                    <Link href="/">
                      <Image
                        loader={imageLoader}
                        priority
                        width={143}
                        height={45}
                        src={headerLogo}
                        alt="logo not found"
                      />
                    </Link>
                  </div>
                  <div className="header__right">
                    <div className="mean__menu-wrapper">
                      <div className="main-menu main-menu-ff-space d-none d-lg-inline-block">
                        <nav>
                          <ul>
                            {menu_data.map((menu, i) => (
                              <li
                                key={i}
                                className={` 
                                  ${menu.active ? "active has-dropdown" : ""} 
                                  ${
                                    menu.megaMenu
                                      ? "has-dropdown has-mega-menu"
                                      : ""
                                  } 
                                  ${menu.hasDropdown ? "has-dropdown" : ""}`}
                              >
                                <Link href={menu.link}> {menu.title}</Link>
                                {menu.submenus && (
                                  <ul className="submenu">
                                    {menu?.submenus.map((sub, i) => (
                                      <li key={i}>
                                        <Link href={sub.link}>{sub.title}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                                {menu.mega_menus && (
                                  <ul className="mega-menu">
                                    {menu.mega_menus.map((mega, i) => (
                                      <li key={i}>
                                        <Link
                                          href={mega.link}
                                          className="mega-menu-title"
                                        >
                                          {mega.title}
                                        </Link>
                                        <ul>
                                          {mega.submenus.map((sub_mega, i) => (
                                            <li key={i}>
                                              <Link href={sub_mega.link}>
                                                {sub_mega.title}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="auth-btns">
                      <Link href="/login" className="signin">
                        Sign in
                      </Link>
                      <Link href="/signup" className="signup">
                        Sign up
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
