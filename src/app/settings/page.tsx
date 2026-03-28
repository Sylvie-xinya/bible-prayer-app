"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bell, Clock, Moon, Sun, ArrowLeft, Check } from "lucide-react";

export default function SettingsPage() {
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [reminderTime, setReminderTime] = useState("20:00");
  const [darkMode, setDarkMode] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("settings");
    if (saved) {
      const settings = JSON.parse(saved);
      setReminderEnabled(settings.reminderEnabled || false);
      setReminderTime(settings.reminderTime || "20:00");
      setDarkMode(settings.darkMode || false);
    }
  }, []);

  const saveSettings = () => {
    localStorage.setItem(
      "settings",
      JSON.stringify({
        reminderEnabled,
        reminderTime,
        darkMode,
      })
    );
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 1500);
  };

  const toggleSetting = (setter: (v: boolean) => void, value: boolean) => {
    setter(value);
    setTimeout(saveSettings, 100);
  };

  return (
    <div className="min-h-screen px-6 py-8">
      <div className="max-w-md mx-auto space-y-6">
        {/* 返回按钮 */}
        <Link href="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-amber-600">
          <ArrowLeft size={18} />
          <span>返回首页</span>
        </Link>

        {/* 标题 */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-amber-800">⚙️ 设置</h1>
          <p className="text-stone-500 text-sm mt-1">自定义你的使用体验</p>
        </div>

        {/* 提醒设置 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-100 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-amber-100 p-2 rounded-lg">
                <Bell size={20} className="text-amber-600" />
              </div>
              <div>
                <p className="font-medium text-stone-700">每日提醒</p>
                <p className="text-stone-400 text-sm">定时提醒你祷告</p>
              </div>
            </div>
            <button
              onClick={() => toggleSetting(setReminderEnabled, !reminderEnabled)}
              className={`w-12 h-7 rounded-full transition-all ${
                reminderEnabled ? "bg-amber-500" : "bg-stone-200"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  reminderEnabled ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {reminderEnabled && (
            <div className="flex items-center gap-3 pt-3 border-t border-stone-100">
              <Clock size={18} className="text-stone-400" />
              <span className="text-stone-600">提醒时间</span>
              <input
                type="time"
                value={reminderTime}
                onChange={(e) => {
                  setReminderTime(e.target.value);
                  setTimeout(saveSettings, 100);
                }}
                className="ml-auto px-3 py-2 bg-stone-50 rounded-lg text-stone-700"
              />
            </div>
          )}
        </div>

        {/* 外观设置 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-100 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-amber-100 p-2 rounded-lg">
                {darkMode ? <Moon size={20} className="text-amber-600" /> : <Sun size={20} className="text-amber-600" />}
              </div>
              <div>
                <p className="font-medium text-stone-700">深色模式</p>
                <p className="text-stone-400 text-sm">切换深色/浅色主题</p>
              </div>
            </div>
            <button
              onClick={() => toggleSetting(setDarkMode, !darkMode)}
              className={`w-12 h-7 rounded-full transition-all ${
                darkMode ? "bg-amber-500" : "bg-stone-200"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  darkMode ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* 关于 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-100">
          <p className="text-stone-500 text-sm text-center">
            圣经祷告词 v1.0.0
            <br />
            愿祢的旨意成就
          </p>
        </div>

        {/* 保存提示 */}
        {isSaved && (
          <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-in fade-in">
            <Check size={16} />
            <span>设置已保存</span>
          </div>
        )}
      </div>
    </div>
  );
}