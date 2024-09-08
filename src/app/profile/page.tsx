import CoverPhoto from "@/components/profile/CoverPhoto";
import { useGetData } from "@/hooks/useApi";
import { userEndPoint } from "@/lib/endPoints";
import getUserInfo from "@/utils/decodedUserInfo";
import { cookies, headers } from "next/headers";
import React from "react";

interface UserProfileResponse extends Response {
  data: any;
}

export default async function ProfilePage() {
  const accessToken = cookies().get("accessToken")?.value;
  // Getting user info from jwt decoded token
  const { _id } = getUserInfo();

  // const { getProfile } = userEndPoint(_id);
  // const { data, error } = useGetData<UserProfileResponse>(
  //   getProfile,
  //   {},
  //   {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   },
  //   { queryKey: ["user"] }
  // );

  // console.log({ error });

  return (
    <main>
      <CoverPhoto userId={_id} />
      <div>
        <div>Profile Photo</div>
        <div>Profile Information</div>
      </div>
      <div>Profile Tabs</div>
      <div>Tab Details</div>
    </main>
  );
}
