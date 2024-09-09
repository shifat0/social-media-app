import { IUserProfile } from "./data";

// Common Response Interface
interface Response {
  success: boolean;
  message: string;
}

interface IUserProfileResponse extends Response {
  data: IUserProfile;
}
