"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { Trash2, Heart, Calendar, ArrowLeft } from "lucide-react";
import { moodEmojis } from "@/data/prayers";

interface Prayer {
  id: string;
  mood: string;
  content: string;
  createdAt: string;
}

export default function HistoryPage() {
  const { language, t } = useLanguage();
  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("prayers") || "[]");
    setPrayers(saved);
  }, []);

  const deletePrayer = (id: string) => {
    setDeleteId(id);
    setTimeout(() => {
      const updated = prayers.filter((p) => p.id !== id);
      localStorage.setItem("prayers", JSON.stringify(updated));
      setPrayers(updated);
      setDeleteId(null);
    }, 300);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "zh" ? "zh-CN" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const emojis = moodEmojis[language];

  return (
    <div className="min-h-screen px-6 py-8">
      <div className="max-w-md mx-auto space-y-6">
        {/* 返回按钮 */}
        <Link href="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-amber-600">
          <ArrowLeft size={18} />
          <span>{t("history.back")}</span>
        </Link>

        {/* 标题 */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-amber-800">{t("history.title")}</h1>
          <p className="text-stone-500 text-sm mt-1">{t("history.subtitle")}</p>
        </div>

        {/* 记录列表 */}
        {prayers.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-stone-400">{t("history.empty")}</p>
            <Link href="/prayer" className="text-amber-600 hover:underline mt-2 inline-block">
              {t("history.startPrayer")}
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {prayers.map((prayer) => (
              <div
                key={prayer.id}
                className={`bg-white rounded-2xl p-5 shadow-sm border border-amber-100 transition-all ${
                  deleteId === prayer.id ? "opacity-0 scale-95" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{emojis[prayer.mood as keyof typeof emojis] || "🙏"}</span>
                      <span className="text-stone-600 font-medium">{prayer.mood}</span>
                    </div>
                    <p className="text-stone-700 leading-relaxed line-clamp-3">{prayer.content}</p>
                    <div className="flex items-center gap-1 mt-3 text-stone-400 text-sm">
                      <Calendar size={14} />
                      <span>{formatDate(prayer.createdAt)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => deletePrayer(prayer.id)}
                    className="text-stone-300 hover:text-red-400 p-2 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}