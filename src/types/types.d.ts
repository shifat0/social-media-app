import { JwtPayload } from "jwt-decode";

interface AccessTokenPayload extends JwtPayload {
  _id: string;
  email: string;
  displayName: string;
}
