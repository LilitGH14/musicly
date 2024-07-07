import Link from "next/link";
import React, { useState } from "react";
import FooterLogo from "../../../public/assets/img/logo/logo.png";
import FooterBg from "../../../public/assets/img/bg/main-bg.jpg";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";
import { subscribeToNews } from "@/services/mails";
import { emailRegex } from "@/utils/validation-schema";

type FooterType = {
  dict: { [key: string]: string } | null;
};
const Footer = ({ dict }: FooterType) => {
  const [email, setEmail] = useState<string>("");
  const [emailErr, setEmailErr] = useState<string>("");

  const subscribeNow = () => {
    if (email.match(emailRegex)) {
      subscribeToNews(email);
    } else {
      setEmailErr(dict?.Email_is_not_valid as string);
    }
  };

  return (
    <footer>
      <div
        className="ms-footer2-top ms-footer-bg ms-br-15 
                two zindex-1 include__bg pt-30 pb-10 ms-maw-1810 mx-auto"
        style={{ backgroundImage: `url(${FooterBg.src})` }}
      >
        <div className="container">
          <div className="ms-footer2-top-inner ms-br-100 ms-bg-4 mb-65">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-3 col-md-4">
                <div className="ms-footer2-logo m-img">
                  <Link href="/home-2">
                    <Image
                      src={FooterLogo}
                      loader={imageLoader}
                      placeholder="blur"
                      loading="lazy"
                      style={{ width: "100%", height: "auto" }}
                      alt={dict?.logo_img as string}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3 col-md-6">
                <div className="ms-social-border two p-relative">
                  <div className="ms-footer-social mb-15">
                    <Link
                      href="https://www.linkedin.com/"
                      title="Instagram"
                      target="_blank"
                    >
                      {dict?.IN}
                    </Link>
                    <Link
                      href="https://twitter.com/"
                      title="Twitter"
                      target="_blank"
                    >
                      {dict?.TW}
                    </Link>
                    <Link
                      href="https://www.facebook.com/"
                      title="Facebook"
                      target="_blank"
                    >
                      {dict?.FB}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="ms-subscribe2-form p-relative mb-10 d-none d-sm-block">
                  <i className={`flaticon-mail ${emailErr ? "error" : ""}`}></i>
                  <input
                    type="text"
                    className={`${emailErr ? "error" : ""}`}
                    placeholder={dict?.Enter_your_mail}
                    value={email}
                    onChange={(ev: any) => setEmail(ev.target.value)}
                  />
                  <button
                    type="submit"
                    className="ms-subscribe2-btn"
                    onClick={() => subscribeNow()}
                  >
                    {dict?.Subscribe_now}
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-4 col-lg-5 col-md-6">
              <div className="ms-footer2-widget mb-50 pr-20">
                <h3 className="ms-footer2-title">{dict?.Get_in_touch}</h3>
                <div className="ms-footer2-contact pb-30">
                  <ul>
                    <li>
                      <i className="flaticon-pin"></i>
                      {dict?.Address}
                    </li>
                    <li>
                      <i className="flaticon-mail"></i>
                      <Link href="mailto:info@musiclycontact.com">
                        thebeats@beyond.contact.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-2 col-md-6">
              <div className="ms-footer2-widget ms-footer2-widget2 mb-50">
                <h3 className="ms-footer2-title">{dict?.Company}</h3>
                <ul>
                  <li>
                    <Link href="/about">{dict?.About_us}</Link>
                  </li>
                  <li>
                    <Link href="/contact">{dict?.Contact_us}</Link>
                  </li>
                  <li>
                    <Link href="/terms-condition">{dict?.Terms_Policy}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-2 col-md-6">
              <div className="ms-footer2-widget mb-50">
                <h3 className="ms-footer2-title">{dict?.Genres}</h3>
                <ul>
                  <li>
                    <Link href="/songs?category=New">{dict?.New}</Link>
                  </li>
                  <li>
                    <Link href="/songs?category=Group">{dict?.Group}</Link>
                  </li>
                  <li>
                    <Link href="/songs?category=Duet">{dict?.Duet}</Link>
                  </li>
                  <li>
                    <Link href="/songs?category=Solo">{dict?.Solo}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-md-6">
              <div className="ms-footer2-widget mb-50">
                <h3 className="ms-footer2-title">{dict?.Country_we_serve}</h3>
                <ul>
                  <li>{dict?.US}</li>
                  <li>{dict?.Canada}</li>
                  <li>{dict?.South_Korea}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ms-footer-bottom">
        <div className="container">
          <div className="ms-footer-bottom-wrap text-center pt-35 pb-20">
            <div className="ms-footer-copy">
              <p>© The Beats Beyond 2024, {dict?.All_Rights_Reserved}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
