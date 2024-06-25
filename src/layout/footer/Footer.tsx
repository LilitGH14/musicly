import Link from "next/link";
import React from "react";
import FooterLogo from "../../../public/assets/img/logo/logo.png";
import FooterBg from "../../../public/assets/img/bg/main-bg.jpg";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="ms-footer2-top ms-footer-bg ms-br-15 fix ms-footer-overlay 
                two zindex-1 include__bg pt-130 pb-10 ms-maw-1810 mx-auto"
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
                        alt="footer logo"
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
                        IN
                      </Link>
                      <Link
                        href="https://twitter.com/"
                        title="Twitter"
                        target="_blank"
                      >
                        TW
                      </Link>
                      <Link
                        href="https://www.facebook.com/"
                        title="Facebook"
                        target="_blank"
                      >
                        FB
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="ms-subscribe2-form p-relative mb-10 d-none d-sm-block">
                    <i className="flaticon-mail"></i>
                    <input type="text" placeholder="Enter your mail" />
                    <button type="submit" className="ms-subscribe2-btn">
                      Subscribe Now{" "}
                      <i className="fa-sharp fa-solid fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-4 col-lg-5 col-md-6">
                <div className="ms-footer2-widget mb-50 pr-20">
                  <h3 className="ms-footer2-title">Get in touch</h3>
                  <div className="ms-footer2-contact pb-30">
                    <ul>
                      <li>
                        <i className="flaticon-pin"></i>
                        <Link href="#">
                          936 Kuhl Avenue, Norcross, Georgia GA 5983, United
                          State
                        </Link>
                      </li>
                      <li>
                        <i className="flaticon-phone-call"></i>
                        <Link href="tel:03332920560">0333 292 0560</Link>
                      </li>
                      <li>
                        <i className="flaticon-mail"></i>
                        <Link href="mailto:info@musiclycontact.com">
                          info@musiclycontact.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-2 col-md-6">
                <div className="ms-footer2-widget ms-footer2-widget2 mb-50">
                  <h3 className="ms-footer2-title">Company</h3>
                  <ul>
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact us</Link>
                    </li>
                    <li>
                      <Link href="/terms-policy">Terms & Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-2 col-md-6">
                <div className="ms-footer2-widget mb-50">
                  <h3 className="ms-footer2-title">Genres</h3>
                  <ul>
                    <li>
                      <Link href="/genres">New</Link>
                    </li>
                    <li>
                      <Link href="/genres">Band</Link>
                    </li>
                    <li>
                      <Link href="/genres">Duet</Link>
                    </li>
                    <li>
                      <Link href="/genres">Solo</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-6">
                <div className="ms-footer2-widget mb-50">
                  <h3 className="ms-footer2-title">Country We Serve</h3>
                  <ul>
                    <li>
                      <Link href="/contact">United State</Link>
                    </li>
                    <li>
                      <Link href="/contact">Canada</Link>
                    </li>
                    <li>
                      <Link href="/contact">Australia</Link>
                    </li>
                    <li>
                      <Link href="/contact">China</Link>
                    </li>
                    <li>
                      <Link href="/contact">South Korea</Link>
                    </li>
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
                <p>© BeatSoul 2024, All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
