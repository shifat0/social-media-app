import { Url } from "url";

export interface IUserProfile {
  _id: string;
  displayName: string;
  email: string;
  profilePicture?: string;
  coverPhoto?: string;
  twoFactorAuthentication?: boolean;
  verified?: boolean;
}
