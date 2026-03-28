import { getDailyVerse } from "@/data/verses";
import Link from "next/link";
import { Sparkles, Heart, ArrowRight } from "lucide-react";

export default function Home() {
  const dailyVerse = getDailyVerse();

  return (
    <div className="min-h-screen px-6 py-8">
      <div className="max-w-md mx-auto space-y-8">
        {/* 标题 */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-amber-800">🏠 圣经祷告词</h1>
          <p className="text-stone-500">每天一句，让祷告更亲近</p>
        </div>

        {/* 每日金句卡片 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
          <div className="flex items-center gap-2 text-amber-600 mb-4">
            <Sparkles size={18} />
            <span className="text-sm font-medium">今日金句</span>
          </div>
          <p className="text-xl text-stone-800 font-serif leading-relaxed mb-4">
            "{dailyVerse.verse}"
          </p>
          <p className="text-right text-stone-400 text-sm">— {dailyVerse.reference}</p>
        </div>

        {/* 祷告按钮 */}
        <Link
          href="/prayer"
          className="block bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Heart size={28} fill="white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">生成祷告词</h2>
                <p className="text-white/80 text-sm">输入你的心情，AI 为你代祷</p>
              </div>
            </div>
            <ArrowRight size={24} />
          </div>
        </Link>

        {/* 快捷操作 */}
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/history"
            className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <p className="text-stone-700 font-medium">📖 查看祷告记录</p>
          </Link>
          <Link
            href="/settings"
            className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <p className="text-stone-700 font-medium">⚙️ 应用设置</p>
          </Link>
        </div>
      </div>
    </div>
  );
}