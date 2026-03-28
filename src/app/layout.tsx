import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Home, Heart, Clock, Settings } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "圣经祷告词",
  description: "AI 驱动的个性化祷告词生成应用",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
          <main className="pb-20">{children}</main>
          
          {/* 底部导航栏 */}
          <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-amber-100 px-6 py-3">
            <div className="max-w-md mx-auto flex justify-around items-center">
              <Link href="/" className="flex flex-col items-center gap-1 text-amber-700">
                <Home size={22} strokeWidth={1.5} />
                <span className="text-xs">首页</span>
              </Link>
              <Link href="/prayer" className="flex flex-col items-center gap-1 text-stone-400 hover:text-amber-700 transition-colors">
                <Heart size={22} strokeWidth={1.5} />
                <span className="text-xs">祷告</span>
              </Link>
              <Link href="/history" className="flex flex-col items-center gap-1 text-stone-400 hover:text-amber-700 transition-colors">
                <Clock size={22} strokeWidth={1.5} />
                <span className="text-xs">记录</span>
              </Link>
              <Link href="/settings" className="flex flex-col items-center gap-1 text-stone-400 hover:text-amber-700 transition-colors">
                <Settings size={22} strokeWidth={1.5} />
                <span className="text-xs">设置</span>
              </Link>
            </div>
          </nav>
        </div>
      </body>
    </html>
  );
}