import { Url } from "url";

export interface IUserProfile {
  _id: string;
  displayName: string;
  email: string;
  profilePicture?: string;
  coverPicture?: Url;
  twoFactorAuthentication?: boolean;
  verified?: boolean;
}
