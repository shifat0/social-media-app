import getGoogleOAuthUrl from "@/utils/getGoogleOAuthUrl";

export default function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-4 text-3xl">
      Hello, Welcome to Social Media Application
      <a href={getGoogleOAuthUrl()} className="underline underline-offset-4">
        Login with google
      </a>
    </section>
  );
}
