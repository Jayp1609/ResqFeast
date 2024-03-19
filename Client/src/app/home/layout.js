"use client";
import UserNavBar from "@/components/UserNavbar";
import DistributorNavbar from "@/components/DistributorNavbar";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [displayUserNav, setDisplayUserNav] = useState(false);
  const [displayDistributorNavbar, setDisplayDistributorNavbar] =
    useState(false);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      // Check if localStorage is available
      const userCategory = localStorage.getItem("web-user");
      if (userCategory === "User") {
        setDisplayUserNav(true);
      }
      if (userCategory === "Distributor") {
        setDisplayDistributorNavbar(true);
      }
    }
  }, []);

  return (
    <div>
      {displayUserNav && <UserNavBar />}
      {displayDistributorNavbar && <DistributorNavbar />}
      {children}
    </div>
  );
}
