import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import NavBar from "./NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bible Prayer | 圣经祷告词",
  description: "AI-powered personalized prayer generator | AI 驱动的个性化祷告词生成应用",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
            <main className="pb-20">{children}</main>
            <NavBar />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}