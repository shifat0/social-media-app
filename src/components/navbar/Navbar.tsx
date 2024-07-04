import Icon from "@/lib/icon";
import React from "react";

type Props = {};

const navData = [
  {
    name: "Home",
    iconName: <Icon name="house" />,
    link: "/",
  },
  {
    name: "Home",
    iconName: <Icon name="house" />,
    link: "/",
  },
  {
    name: "Home",
    iconName: <Icon name="house" />,
    link: "/",
  },
  {
    name: "Home",
    iconName: <Icon name="house" />,
    link: "/",
  },
];

export default function Navbar({}: Props) {
  return (
    <nav>
      <div className="flex items-center justify-between">
        {navData?.map((navItem, index) => (
          <>
            <span>{navItem?.name}</span>
            <span>{navItem?.iconName}</span>
          </>
        ))}
      </div>
    </nav>
  );
}
