"use client";

import React from "react";
import Icon from "@/lib/icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {};

const isLoggedIn = false;

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
  {
    name: isLoggedIn ? "Logout" : "Login",
    icon: isLoggedIn ? (
      <Icon name="log-out" className="text-destructive" />
    ) : (
      <Icon name="log-in" className="text-green-400" />
    ),
    link: "/login",
  },
];

export default function Navbar({}: Props) {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 bg-primary-foreground shadow-sm">
      <div className="container">
        {/* Left Side */}
        <div className="flex items-center justify-between gap-6 my-2 md:my-0">
          <h1>Social Media</h1>
          <div className="hidden md:flex items-center justify-between gap-3 w-1/2">
            {navData?.map((navItem, index) => (
              <Link
                key={index}
                href={navItem?.link}
                className={cn(
                  "w-full flex items-center justify-center gap-3 py-2 hover:bg-gray-300 hover:rounded-md transition-colors duration-500",
                  pathname === navItem?.link &&
                    "text-blue-500 border-b-2 border-b-blue-500 hover:bg-primary-foreground"
                )}
              >
                {React.cloneElement(navItem?.icon)}
              </Link>
            ))}
          </div>
          <Icon name="search" />
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
        </div>
      </div>
    </nav>
  );
}
