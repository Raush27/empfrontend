"use client";
import { NextPage } from "next";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import Cookies from "js-cookie";

interface Props {
  children: React.ReactNode;
}

const EmployeeRootLayout: NextPage<Props> = async ({ children }) => {
  useEffect(() => {
    const token = Cookies.get("token");
    const role = Cookies.get("role");
    if (!token || role === '1') redirect("/login");
  }, []);

  return <>{children}</>;
};

export default EmployeeRootLayout;
