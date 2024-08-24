import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import { poppins } from "./fonts";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Social Media App",
  description: "Created by Shifat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-secondary text-secondary-foreground dark:bg-primary dark:text-primary-foreground  ${poppins.className}`}
      >
        <Navbar />

        <main className="container my-2">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
