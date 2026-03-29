"use client";

import Link from "next/link";
import { Home, Heart, Clock, Settings, Tag, LogIn } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useSession, signIn, signOut } from "next-auth/react";

export default function NavBar() {
  const { t } = useLanguage();
  const { data: session, status } = useSession();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-amber-100 px-6 py-3">
      <div className="max-w-md mx-auto flex justify-around items-center">
        <Link href="/" className="flex flex-col items-center gap-1 text-amber-700">
          <Home size={22} strokeWidth={1.5} />
          <span className="text-xs">{t("nav.home")}</span>
        </Link>
        <Link href="/prayer" className="flex flex-col items-center gap-1 text-stone-400 hover:text-amber-700 transition-colors">
          <Heart size={22} strokeWidth={1.5} />
          <span className="text-xs">{t("nav.prayer")}</span>
        </Link>
        <Link href="/history" className="flex flex-col items-center gap-1 text-stone-400 hover:text-amber-700 transition-colors">
          <Clock size={22} strokeWidth={1.5} />
          <span className="text-xs">{t("nav.history")}</span>
        </Link>
        <Link href="/settings" className="flex flex-col items-center gap-1 text-stone-400 hover:text-amber-700 transition-colors">
          <Settings size={22} strokeWidth={1.5} />
          <span className="text-xs">{t("nav.settings")}</span>
        </Link>
        {status === "loading" ? (
          <div className="flex flex-col items-center gap-1 text-stone-400">
            <span className="text-xs">...</span>
          </div>
        ) : session ? (
          <button onClick={() => signOut()} className="flex flex-col items-center gap-1 text-stone-400 hover:text-amber-700 transition-colors">
            {session.user?.image ? (
              <img src={session.user.image} alt="头像" className="w-6 h-6 rounded-full" />
            ) : (
              <span className="text-xs">{session.user?.name || "退出"}</span>
            )}
          </button>
        ) : (
          <button onClick={() => signIn("google")} className="flex flex-col items-center gap-1 text-amber-700 hover:text-amber-900 transition-colors">
            <LogIn size={22} strokeWidth={1.5} />
            <span className="text-xs">登录</span>
          </button>
        )}
      </div>
    </nav>
  );
}