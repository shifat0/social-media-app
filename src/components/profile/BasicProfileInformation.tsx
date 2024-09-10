"use client";

import { useGetData } from "@/hooks/useApi";
import { userEndPoint } from "@/lib/endPoints";
import { IUserProfileResponse } from "@/types/response";
import React from "react";
import { Button } from "../ui/button";
import Icon from "@/lib/icon";

type Props = { userId: string };

export default function BasicProfileInformation({ userId }: Props) {
  // Fetch Profile Data endpoint
  const { getProfile } = userEndPoint(userId);

  // Fetch Data
  const { data } = useGetData<IUserProfileResponse>(getProfile);
  const profile = data?.data;

  return (
    <section className="py-4 border-b-2 border-primary-foreground">
      <div className="mt-[100px] lg:ml-[240px] flex flex-col gap-1 text-center">
        <h1 className="font-semibold">{profile?.displayName}</h1>

        <span>0 Friends</span>

        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-1">
          <div>Friends Images</div>

          <div className="flex items-center gap-3">
            <Button className="flex items-center gap-2">
              <Icon name="plus" />
              <span>Add to story</span>
            </Button>

            <Button className="flex items-center gap-2">
              <Icon name="pencil" />
              <span>Edit Profile</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
