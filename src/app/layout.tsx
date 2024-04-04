import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { PostHogPageView } from "./posthog-page-view";
import { Providers } from "./providers";
import { cn } from "./utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "skyffel",
  description: "the command center for engineering teams",
  openGraph: {
    images: [
      {
        url: "https://skyffel.com/opengraph-image.png",
        width: 4800,
        height: 2520,
        alt: "skyffel",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Analytics />
      <Providers>
        <body
          className={cn(inter.className, "max-w-5xl w-full mx-auto p-6 md:p-8")}
        >
          <Suspense>
            <PostHogPageView />
          </Suspense>
          {children}
        </body>
      </Providers>
    </html>
  );
}
