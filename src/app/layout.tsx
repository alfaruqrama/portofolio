import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Naufal Aqila | Civil Engineer",
  description:
    "Portofolio Muhammad Naufal Aqila — Civil Engineer. Membangun masa depan dengan fondasi yang kuat.",
  keywords: ["civil engineer", "portofolio", "teknik sipil", "Muhammad Naufal Aqila"],
  authors: [{ name: "Muhammad Naufal Aqila" }],
  openGraph: {
    title: "Muhammad Naufal Aqila | Civil Engineer",
    description:
      "Portofolio Muhammad Naufal Aqila — Civil Engineer. Membangun masa depan dengan fondasi yang kuat.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
