import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import { Suspense } from "react";
import { poppins } from "./fonts";
import "./globals.css";

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
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
