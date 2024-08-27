"use client";

import React from "react";
import Icon from "@/lib/icon";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { modernAntique } from "@/app/fonts";
import Cookies from "js-cookie";
import { NavDropdown } from "./NavDropDown";

const navData = [
  {
    name: "Home",
    icon: <Icon name="house" />,
    link: "/",
  },
  {
    name: "Friends",
    icon: <Icon name="users" />,
    link: "/friends",
  },
  {
    name: "Notification",
    icon: <Icon name="bell" />,
    link: "/notification",
  },
  {
    name: "Profile",
    icon: <Icon name="user" />,
    link: "/profile",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const logOut = () => {
    Cookies.remove("accessToken");
    router.push("/auth");
  };

  return (
    <nav
      className={cn(
        pathname.startsWith("/auth")
          ? "hidden"
          : "sticky top-0 bg-primary-foreground shadow-sm"
      )}
    >
      <div className="container">
        {/* Left Side */}
        <div className="flex items-center gap-6 my-2 md:my-0">
          <h1
            className={`${modernAntique.className} basis-1/2 md:basis-1/4 text-nowrap`}
          >
            Social Media
          </h1>

          {/* NavigationItem */}
          <div className="hidden md:flex items-center justify-between gap-3 basis-1/2">
            {navData?.map((navItem, index) => (
              <Link
                key={index}
                href={navItem?.link}
                className={cn(
                  "w-full flex items-center justify-center gap-3 py-2 hover:bg-gray-300 hover:text-blue-500 hover:rounded-md transition-colors duration-500",
                  pathname === navItem?.link &&
                    "text-blue-500 border-b-2 border-b-blue-500 hover:bg-primary-foreground"
                )}
              >
                {React.cloneElement(navItem?.icon)}
              </Link>
            ))}

            <NavDropdown logOut={logOut} />
          </div>

          {/* Search Icon */}
          <div className="basis-1/2 md:basis-1/4 flex justify-end">
            <Icon name="search" />
          </div>
        </div>

        <div className="flex items-center justify-between md:hidden">
          {navData?.map((navItem, index) => (
            <Link
              key={index}
              href={navItem?.link}
              className={cn(
                "w-full flex items-center justify-center gap-3",
                pathname === navItem?.link &&
                  "text-blue-500 border-b-2 border-b-blue-500 py-2"
              )}
            >
              {React.cloneElement(navItem?.icon)}
            </Link>
          ))}

          <NavDropdown logOut={logOut} />
        </div>
      </div>
    </nav>
  );
}
