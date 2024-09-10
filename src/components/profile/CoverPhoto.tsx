"use client";

import React from "react";
import { useGetData } from "@/hooks/useApi";
import { userEndPoint } from "@/lib/endPoints";
import { IUserProfileResponse } from "@/types/response";
import Image from "next/image";

type Props = {
  userId: string;
};

export default function CoverPhoto({ userId }: Props): JSX.Element {
  // Fetch Profile Data endpoint
  const { getProfile } = userEndPoint(userId);

  // Fetch Data
  const { data } = useGetData<IUserProfileResponse>(getProfile);
  const profile = data?.data;

  return (
    <section>
      <div className="relative w-full h-[300px]">
        <Image
          src={
            profile?.coverPhoto
              ? (profile?.coverPhoto as string)
              : "/assets/blank-cover-photo.jpg"
          }
          alt={`cover photo of ${profile?.displayName}`}
          fill
          sizes="100vw"
          className="object-cover object-center rounded-lg"
        />
      </div>
    </section>
  );
}
