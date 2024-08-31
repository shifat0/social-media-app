import Icon from "@/lib/icon";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Stories({}: Props) {
  return (
    <div className="bg-primary-foreground p-2">
      <div className="w-[150px] h-[200px] rounded-lg bg-secondary">
        <div className="relative w-full h-2/3">
          <Image
            src="/assets/profile-pic.jpg"
            alt="Profile-Pic"
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="h-1/3 relative text-center flex items-center justify-center">
          <Icon
            name="circle-plus"
            className="absolute -top-3 left-1/2 transform -trnaslate-x-1/2 border border-secondary"
          />
          <span>Create Your Story</span>
        </div>
      </div>
    </div>
  );
}
