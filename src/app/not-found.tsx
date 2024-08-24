import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2 text-center">
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/" className="text-linkText underline underline-offset-4">
        Return Home
      </Link>
    </div>
  );
}
