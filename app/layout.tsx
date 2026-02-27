import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Agentic26 — Automation Subscription",
  description:
    "AI automation subscription for small and medium-sized businesses. One flat monthly fee covers analysis, development, deployment, and ongoing optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-950 text-neutral-200 antialiased selection:bg-violet-500/30 selection:text-violet-200`}
      >
        {children}
      </body>
    </html>
  );
}
