import { cookies } from "next/headers";
import decodeJwtToken from "./decodeJwtToken";
import { AccessTokenPayload } from "@/types/types";
import { cookieNames } from "@/lib/cookieNames";

export default function getUserInfo() {
  const accessToken = cookies().get(cookieNames.accessToken)?.value;

  return accessToken
    ? decodeJwtToken<AccessTokenPayload>(accessToken as string)
    : {
        _id: "",
        email: "",
        displayName: "",
      };
}
