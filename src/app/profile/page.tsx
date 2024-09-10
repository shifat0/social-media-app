import React from "react";
import { getData } from "@/api/api";
import CoverPhoto from "@/components/profile/CoverPhoto";
import { userEndPoint } from "@/lib/endPoints";
import getUserInfo from "@/utils/decodedUserInfo";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getServerCookie } from "@/utils/getServerCookie";
import { IUserProfileResponse } from "@/types/response";
import { cookieNames } from "@/lib/cookieNames";

export default async function ProfilePage() {
  const accessToken = getServerCookie(cookieNames.accessToken);

  // Getting user info from jwt decoded token
  const { _id } = getUserInfo();

  // Fetch Profile endpoint
  const { getProfile } = userEndPoint(_id);

  // Prefetching Data
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [getProfile],
    queryFn: async () =>
      getData<IUserProfileResponse>(
        getProfile,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      ),
  });

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CoverPhoto userId={_id} />
        <div className="ml-[200px]">
          <div>Profile Information</div>
        </div>
        <div>Profile Tabs</div>
        <div>Tab Details</div>
      </HydrationBoundary>
    </main>
  );
}
