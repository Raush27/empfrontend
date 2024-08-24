"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import Cookies from "js-cookie";

const TopNabbar = () => {
  const router = useRouter();
  const role = Cookies.get("role");
console.log(role,"role")
  const handleLogout = async () => {
    Cookies.remove("token");
    Cookies.remove("role");
    router.replace("/login");
  };
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <li className="nav-item dropdown pe-3">
          <a
            id="userProfile"
            className="nav-link nav-profile d-flex align-items-center pe-0"
            href="#"
            data-bs-toggle="dropdown"
          >
            {/* <Icon iconName="PersonCircle"  /> */}
            <span className="d-none d-md-block dropdown-toggle ps-2">
              {role === 0 ? "emp": "Hr Admin"}
            </span>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"
            id="userProfileShow"
          >
            <li>
              <Link
                className="dropdown-item d-flex align-items-center"
                href="/admin/account"
              >
                {/* <Icon iconName="Person" /> */}
                <span>Account</span>
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item d-flex align-items-center"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                {/* <Icon iconName="BoxArrowRight" /> */}
                <span>Sign Out</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default TopNabbar;
