import { envConfig } from "@/lib/envConfig";

export default function getGoogleOAuthUrl() {
  const baseUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const redirect_uri = `${envConfig.apiBaseUrl}/${envConfig.googleRedirectUrl}`;

  const options = {
    client_id: envConfig.googleClientId as string,
    redirect_uri: redirect_uri,
    access_type: "offline",
    response_type: "code",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  const qs = new URLSearchParams(options);

  return `${baseUrl}?${qs.toString()}`;
}
