"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageContext";
import { Heart, Sparkles, RefreshCw, Save } from "lucide-react";
import { samplePrayers, moodOptions } from "@/data/prayers";

interface Prayer {
  id: string;
  mood: string;
  content: string;
  createdAt: string;
}

export default function PrayerPage() {
  const router = useRouter();
  const { language, t } = useLanguage();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [prayerContent, setPrayerContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const moods = moodOptions[language];
  const prayers = samplePrayers[language];

  const generatePrayer = async () => {
    if (!selectedMood) return;
    setIsGenerating(true);
    setPrayerContent("");
    setIsSaved(false);

    // 模拟 AI 生成延迟
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const prayer = prayers[selectedMood as keyof typeof prayers] || "Lord, help me. In Jesus' name, Amen.";
    setPrayerContent(prayer);
    setIsGenerating(false);
  };

  const savePrayer = () => {
    if (!prayerContent || !selectedMood) return;

    const newPrayer: Prayer = {
      id: Date.now().toString(),
      mood: selectedMood,
      content: prayerContent,
      createdAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("prayers") || "[]");
    localStorage.setItem("prayers", JSON.stringify([newPrayer, ...existing]));

    setIsSaved(true);
    setTimeout(() => {
      router.push("/history");
    }, 1000);
  };

  return (
    <div className="min-h-screen px-6 py-8">
      <div className="max-w-md mx-auto space-y-6">
        {/* 标题 */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-amber-800">{t("prayer.title")}</h1>
          <p className="text-stone-500 text-sm mt-1">{t("prayer.subtitle")}</p>
        </div>

        {/* 心情选择 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-100">
          <p className="text-stone-600 font-medium mb-3">{t("prayer.selectMood")}</p>
          <div className="grid grid-cols-4 gap-3">
            {moods.map((mood) => (
              <button
                key={mood.label}
                onClick={() => {
                  setSelectedMood(mood.label);
                  setPrayerContent("");
                  setIsSaved(false);
                }}
                className={`p-3 rounded-xl text-center transition-all ${
                  selectedMood === mood.label
                    ? "bg-amber-100 ring-2 ring-amber-400"
                    : "bg-stone-50 hover:bg-amber-50"
                }`}
              >
                <span className="text-2xl block mb-1">{mood.emoji}</span>
                <span className="text-xs text-stone-600">{mood.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 生成按钮 */}
        <button
          onClick={generatePrayer}
          disabled={!selectedMood || isGenerating}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
            selectedMood && !isGenerating
              ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg hover:shadow-xl"
              : "bg-stone-200 text-stone-400 cursor-not-allowed"
          }`}
        >
          {isGenerating ? (
            <>
              <RefreshCw size={20} className="animate-spin" />
              {t("prayer.generating")}
            </>
          ) : (
            <>
              <Sparkles size={20} />
              {prayerContent ? t("prayer.regenerate") : t("prayer.generate")}
            </>
          )}
        </button>

        {/* 生成结果 */}
        {prayerContent && (
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center gap-2 text-amber-600 mb-4">
              <Heart size={18} fill="currentColor" />
              <span className="font-medium">{t("prayer.resultTitle")}</span>
            </div>
            <p className="text-stone-700 leading-relaxed whitespace-pre-wrap">{prayerContent}</p>

            {/* 保存按钮 */}
            <button
              onClick={savePrayer}
              disabled={isSaved}
              className={`mt-6 w-full py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                isSaved
                  ? "bg-green-500 text-white"
                  : "bg-amber-500 text-white hover:bg-amber-600"
              }`}
            >
              <Save size={18} />
              {isSaved ? t("prayer.saved") : t("prayer.save")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}