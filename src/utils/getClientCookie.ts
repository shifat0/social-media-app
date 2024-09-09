import Cookies from "js-cookie";

export function getClientCookie(cookieName: string) {
  return Cookies.get(cookieName);
}
