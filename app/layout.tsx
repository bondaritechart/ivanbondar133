import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ivan Bondar - Full-Stack Developer Portfolio",
  description: "Full-Stack Developer with rich experience in building innovative web applications. Combining creativity with technical expertise to deliver cutting-edge solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

