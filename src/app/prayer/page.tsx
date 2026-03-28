"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, Sparkles, RefreshCw, Save } from "lucide-react";

interface Prayer {
  id: string;
  mood: string;
  content: string;
  createdAt: string;
}

const moodOptions = [
  { emoji: "😊", label: "感恩" },
  { emoji: "😢", label: "忧伤" },
  { emoji: "😤", label: "愤怒" },
  { emoji: "😰", label: "焦虑" },
  { emoji: "🤔", label: "困惑" },
  { emoji: "😴", label: "疲惫" },
  { emoji: "😌", label: "平安" },
  { emoji: "💪", label: "刚强" },
];

const samplePrayers: Record<string, string> = {
  "感恩": "亲爱的主，感谢祢今天的看顾和保守。求祢帮助我记住今天的恩典，在生活中荣耀祢的名。奉耶稣基督的名求，阿们。",
  "忧伤": "主啊，我的心充满忧愁，求祢安慰我。祢说'安慰丧胆的人'，求祢用祢的膀臂环绕我，让我感受到祢同在的平安。奉耶稣基督的名求，阿们。",
  "愤怒": "主啊，我今天心中有怒气，求祢帮助我放下。求圣灵在我心中动工，让我学会饶恕，如同祢饶恕我一样。求祢赐我温柔的心。奉耶稣基督的名求，阿们。",
  "焦虑": "主啊，我为明天忧虑，求祢帮助我不要为明天忧虑，因为今天的难处已经够我受的了。求祢加给我力量，信任祢的安排。奉耶稣基督的名求，阿们。",
  "困惑": "主啊，我目前很困惑，不知道前面的路怎么走。求祢指引我的方向，照亮我前面的路，让我知道该何去何从。奉耶稣基督的名求，阿们。",
  "疲惫": "主啊，我今天好累好疲惫，求祢让我在祢里面得安息。祢说'凡劳苦担重担的人，可以到我这里来，我就使你们得安息'。求祢帮助我放下一切重担。奉耶稣基督的名求，阿们。",
  "平安": "主啊，感谢祢赐给我平安。虽然外面有风浪，但里面有平安。求祢帮助我常常活在祢的平安中，不被环境所影响。奉耶稣基督的名求，阿们。",
  "刚强": "主啊，感谢祢使我刚强。求祢帮助我将这力量用于荣耀祢，帮助有需要的人。求祢使用我成为祢的器皿。奉耶稣基督的名求，阿们。",
};

export default function PrayerPage() {
  const router = useRouter();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [prayerContent, setPrayerContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const generatePrayer = async () => {
    if (!selectedMood) return;
    setIsGenerating(true);
    setPrayerContent("");
    setIsSaved(false);

    // 模拟 AI 生成延迟
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const prayer = samplePrayers[selectedMood] || "主啊，求祢帮助我。奉耶稣基督的名求，阿们。";
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
          <h1 className="text-2xl font-bold text-amber-800">🙏 祷告生成</h1>
          <p className="text-stone-500 text-sm mt-1">选择你的心情，生成专属祷告词</p>
        </div>

        {/* 心情选择 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-100">
          <p className="text-stone-600 font-medium mb-3">你今天的心情是？</p>
          <div className="grid grid-cols-4 gap-3">
            {moodOptions.map((mood) => (
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
              正在生成中...
            </>
          ) : (
            <>
              <Sparkles size={20} />
              {prayerContent ? "重新生成" : "生成祷告词"}
            </>
          )}
        </button>

        {/* 生成结果 */}
        {prayerContent && (
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center gap-2 text-amber-600 mb-4">
              <Heart size={18} fill="currentColor" />
              <span className="font-medium">生成的祷告词</span>
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
              {isSaved ? "已保存 ✓" : "保存到记录"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}