"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons/faPhoneVolume";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";

export default function HomeNavbar() {
  const [navOpen, setNavOpen] = React.useState(false);
  const [dropDownOpen, setDropDownOpen] = React.useState(0);

  const dropDownHandler = (event: any) => {
    let targetId = event.currentTarget.id;
    if (targetId == dropDownOpen) {
      setDropDownOpen(0);
    } else {
      setDropDownOpen(targetId);
    }
  };

  function handleNavOpener() {
    if (navOpen) {
      setNavOpen(false);
    } else {
      setNavOpen(true);
    }
  }
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light  ">
      <div className="container ">
        <Image src="/dal-logo.png" alt="dalLogo" width={60} height={40} />
        <Link className="navbar-brand ms-auto" href="/">
          خانه فرهنگ دال
        </Link>
        <Link href="/" className="p-1">
          <FontAwesomeIcon className="text-dark" icon={faHome} />
        </Link>
        <button
          className="navbar-toggler"
          onClick={handleNavOpener}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div style={{ width: "20px", height: "20px" }}>
            <FontAwesomeIcon icon={navOpen ? faXmark : faBars} />
          </div>
        </button>
        <div
          className={`collapse navbar-collapse ${
            navOpen ? "show bg-navbar rounded-2" : "bg-navbar rounded-pill py-1"
          }`}
        >
          <ul className="navbar-nav me-2 mb-2 mb-lg-0">
            <li className="nav-item dropdown ">
              <button
                className={`px-1 mx-1 nav-link dropdown-toggle ${
                  dropDownOpen == 1
                    ? ""
                    : "show rounded-pill text-light shadow-choose border-1"
                }`}
                onClick={dropDownHandler}
                id="1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={`${dropDownOpen == 1 ? true : false}`}
              >
                دوره ها
              </button>
              <ul
                className={`dropdown-menu ${dropDownOpen == 1 ? "show" : ""} `}
                aria-labelledby="navbarDropdown"
                data-bs-popper={dropDownOpen == 1 ? "none" : ""}
              >
                <li dir="rtl">
                  <span className="dropdown-item d-flex" dir="rtl">
                    دوره های آنلاین
                  </span>
                </li>
                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    دوره های حضوری
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    دوره تربیت مدرس زبان آلمانی{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    دوره های آزمون های آزمایشی سطوح{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    {`دوره های آمادگی آزمون (TESTAF)`}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown ">
              <button
                className={`px-1 nav-link dropdown-toggle ${
                  dropDownOpen == 2
                    ? ""
                    : "show bg-choosed rounded-pill text-light shadow-choose"
                }`}
                onClick={dropDownHandler}
                id="2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={`${dropDownOpen == 2 ? true : false}`}
              >
                ثبت نام
              </button>
              <ul
                className={`dropdown-menu ${dropDownOpen == 2 ? "show" : ""} `}
                aria-labelledby="navbarDropdown"
                data-bs-popper={dropDownOpen == 2 ? "none" : ""}
              >
                <li dir="rtl">
                  <span className="dropdown-item d-flex" dir="rtl">
                    رهانمای ثبت نام{" "}
                  </span>
                </li>
                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    ثبت نام ترم اول{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    درخواست تعین سطح{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    درخواست کلاس خصوصی{" "}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown ">
              <button
                className={`px-1 mx-1 nav-link dropdown-toggle ${
                  dropDownOpen == 3
                    ? ""
                    : "show bg-choosed rounded-pill text-light shadow-choose"
                }`}
                onClick={dropDownHandler}
                id="3"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={`${dropDownOpen == 3 ? true : false}`}
              >
                تعین سطح{" "}
              </button>
              <ul
                className={`dropdown-menu ${dropDownOpen == 3 ? "show" : ""} `}
                aria-labelledby="navbarDropdown"
                data-bs-popper={dropDownOpen == 3 ? "none" : ""}
              >
                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    درخواست تعین سطح{" "}
                  </Link>
                </li>
                <li dir="rtl">
                  <span className="dropdown-item d-flex" dir="rtl">
                    ورود به اتاق تعین سطح 1{" "}
                  </span>
                </li>
                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    ورود به اتاق تعین سطح 2{" "}
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    ورود به اتاق تعین سطح شفاهی{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    {`دوره های آمادگی آزمون (TESTAF)`}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown ">
              <button
                className={`px-1 mx-1 nav-link dropdown-toggle ${
                  dropDownOpen == 4
                    ? ""
                    : "show bg-choosed rounded-pill text-light shadow-choose"
                }`}
                onClick={dropDownHandler}
                id="4"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={`${dropDownOpen == 4 ? true : false}`}
              >
                تقویم آموزشی{" "}
              </button>
              <ul
                className={`dropdown-menu ${dropDownOpen == 4 ? "show" : ""} `}
                aria-labelledby="navbarDropdown"
                data-bs-popper={dropDownOpen == 4 ? "none" : ""}
              >
                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    دوره های حضوری
                  </Link>
                </li>
                <li dir="rtl">
                  <span className="dropdown-item d-flex" dir="rtl">
                    دوره های آنلاین
                  </span>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown ">
              <button
                className={`px-1 mx-1 nav-link dropdown-toggle ${
                  dropDownOpen == 5
                    ? ""
                    : "show bg-choosed rounded-pill text-light shadow-choose"
                }`}
                onClick={dropDownHandler}
                id="5"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={`${dropDownOpen == 5 ? true : false}`}
              >
                درباره دال{" "}
              </button>
              <ul
                className={`dropdown-menu ${dropDownOpen == 5 ? "show" : ""} `}
                aria-labelledby="navbarDropdown"
                data-bs-popper={dropDownOpen == 5 ? "none" : ""}
              >
                <li dir="rtl">
                  <span className="dropdown-item d-flex" dir="rtl">
                    کلیات{" "}
                  </span>
                </li>
                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    خط مشی{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    کادر{" "}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown ">
              <button
                className={`px-1 mx-1 nav-link dropdown-toggle ${
                  dropDownOpen == 6
                    ? ""
                    : "show bg-choosed rounded-pill text-light shadow-choose"
                }`}
                onClick={dropDownHandler}
                id="6"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={`${dropDownOpen == 6 ? true : false}`}
              >
                ارتباط با دال{" "}
              </button>
              <ul
                className={`dropdown-menu ${dropDownOpen == 6 ? "show" : ""} `}
                aria-labelledby="navbarDropdown"
                data-bs-popper={dropDownOpen == 6 ? "none" : ""}
              >
                <li dir="rtl">
                  <span className="dropdown-item d-flex" dir="rtl">
                    تماس با موسسه زبان آلمانی دال{" "}
                  </span>
                </li>
                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    نقشه دسترسی{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    ثبت شکایات{" "}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown ">
              <button
                className={`px-1 mx-1 nav-link dropdown-toggle ${
                  dropDownOpen == 7
                    ? ""
                    : "show bg-choosed rounded-pill text-light shadow-choose"
                }`}
                onClick={dropDownHandler}
                id="7"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={`${dropDownOpen == 7 ? true : false}`}
              >
                پرتال{" "}
              </button>
              <ul
                className={`dropdown-menu ${dropDownOpen == 7 ? "show" : ""} `}
                aria-labelledby="navbarDropdown"
                data-bs-popper={dropDownOpen == 7 ? "none" : ""}
              >
                <li dir="rtl">
                  <span className="dropdown-item d-flex" dir="rtl">
                    پرتال زبان آموزی{" "}
                  </span>
                </li>
                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    پرتال اساتید{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex" href="#">
                    کادر{" "}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="container-fluid d-flex  ">
            <div className="text-white bg-danger rounded-pill mb-2 mb-lg-0 me-lg-auto d-flex py-1 px-2">
              <span>91691649</span>&nbsp;&nbsp;
              <span>
                <FontAwesomeIcon icon={faPhoneVolume} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
