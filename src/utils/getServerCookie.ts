import { cookies } from "next/headers";

export function getServerCookie(cookieName: string) {
  return cookies().get(cookieName)?.value;
}
