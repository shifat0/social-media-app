import React from "react";
import Image from "next/image";
import { IUserProfile } from "@/types/data";

type Props = {
  profile: IUserProfile | undefined;
};

export default function ProfilePicture({ profile }: Props): JSX.Element {
  return (
    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 lg:left-10 lg:translate-x-0">
      <div className="relative w-[150px] h-[150px] rounded-full bg-secondary">
        <Image
          src={
            profile?.profilePicture
              ? (profile?.profilePicture as string)
              : "/assets/blank-profile-pic.jpg"
          }
          alt={`profile picture of ${profile?.displayName}`}
          fill
          sizes="100vw"
          quality="100"
          className="object-cover object-center rounded-full p-1"
        />
      </div>
    </div>
  );
}
