import { cookies } from "next/headers";
import decodeJwtToken from "./decodeJwtToken";
import { AccessTokenPayload } from "@/types/types";

export default function getUserInfo() {
  const accessToken = cookies().get("accessToken")?.value;

  return accessToken
    ? decodeJwtToken<AccessTokenPayload>(accessToken as string)
    : {
        _id: "",
        email: "",
        displayName: "",
      };
}
