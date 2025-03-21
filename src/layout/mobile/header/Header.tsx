"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";
import headerLogo from "../../../../public/assets/img/logo/big-logo.png";
import { useSelector } from "react-redux";
import Modal from "@/components/common/modal/Modal";
import UserSettings from "@/components/UserSettings/UsetSettings";

type HeaderType = {
  dict: { [key: string]: { [key: string]: string } } | null;
};
const MobileHeader = ({ dict }: HeaderType) => {
  const user = useSelector((store: any) => store.auth.user);

  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header>
        <div className="header__area_mobile">
          <Link href="/">
            <Image
              loader={imageLoader}
              priority
              width={143}
              height={45}
              src={headerLogo}
              alt={dict?.Header?.logo_img as string}
            />
          </Link>
          {!user && (
            <div className="auth-btns">
              <Link href="/login" className="signin">
                {dict?.Header?.Sign_in}
              </Link>
              <Link href="/signup" className="signup">
                {dict?.Header?.Sign_up}
              </Link>
            </div>
          )}
          {user && (
            <div className="header__action-inner d-flex align-items-center">
              <div className="user__acount d-none d-sm-inline-flex">
                <span role="button" onClick={() => setIsOpen(true)}>
                  <i className="flaticon-user"></i>
                </span>
              </div>
            </div>
          )}
        </div>
      </header>
      <Modal
        open={modalIsOpen}
        close={closeModal}
        title={dict?.UserSettings?.Title as string}
        className="user-settings"
      >
        <UserSettings policyActive="active" dict={dict?.UserSettings} />
      </Modal>
    </>
  );
};

export default MobileHeader;
