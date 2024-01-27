import { Layout } from "@/components/layout";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light house multiple",
  description: "Now, you can analytics multiple web vitals!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          noto.className + " flex flex-col justify-between min-h-screen"
        }
      >
        <Layout.Header />
        {children}
        <Layout.Footer />
      </body>
    </html>
  );
}
