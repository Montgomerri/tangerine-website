
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tangerine | Your files. One gesture. Done.",
  description:
    "Tangerine is a Windows desktop utility that makes everyday file operations easier. Compress files, create PDFs and convert images using one simple radial menu.",
  applicationName: "Tangerine",
  icons: {
    icon: "/tangerine.ico",
  },
  openGraph: {
    title: "Tangerine | Your files. One gesture. Done.",
    description:
      "Six everyday file operations. One simple gesture. Get Tangerine for Windows.",
    siteName: "Tangerine",
    type: "website",
  },
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
