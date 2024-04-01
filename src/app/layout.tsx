import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "./utils";
import { Analytics } from "@vercel/analytics/react";
import { PostHogPageView } from "./posthog-page-view";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "skyffel",
  description: "the command center for product and engineering teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <Providers>
        <body className={cn(inter.className, "max-w-5xl w-full mx-auto p-8")}>
          <PostHogPageView />
          {children}
        </body>
      </Providers>
    </html>
  );
}
