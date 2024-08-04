import Auth from "@/components/home/Auth";
import getGoogleOAuthUrl from "@/utils/getGoogleOAuthUrl";

export default function HomePage() {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-4">
      <Auth />
      {/* <a href={getGoogleOAuthUrl()} className="underline underline-offset-4">
        Login with google
      </a> */}
    </section>
  );
}
