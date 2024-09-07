import { jwtDecode, JwtPayload } from "jwt-decode";

export default function decodeJwtToken<T extends JwtPayload>(token: string): T {
  const decodedToken = jwtDecode<T>(token);
  return decodedToken;
}
