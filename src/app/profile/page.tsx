import CoverPhoto from "@/components/profile/CoverPhoto";
import getUserInfo from "@/utils/decodedUserInfo";
import React from "react";

export default function ProfilePage() {
  const { _id } = getUserInfo();

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
