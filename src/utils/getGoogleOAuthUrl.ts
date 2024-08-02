export default function getGoogleOAuthUrl() {
  const baseUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const redirect_uri = `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URI}`;

  const options = {
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
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
