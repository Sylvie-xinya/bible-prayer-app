export const translations = {
  // 导航
  nav: {
    home: { zh: "首页", en: "Home" },
    prayer: { zh: "祷告", en: "Prayer" },
    history: { zh: "记录", en: "History" },
    settings: { zh: "设置", en: "Settings" },
    pricing: { zh: "定价", en: "Pricing" },
  },

  // 首页
  home: {
    title: { zh: "圣经祷告词", en: "Bible Prayer" },
    subtitle: { zh: "每天一句，让祷告更亲近", en: "Daily prayer, closer to God" },
    dailyPrayer: { zh: "今日祷告词", en: "Today's Prayer" },
    dailyBible: { zh: "今日圣经", en: "Today's Bible" },
    generateBtn: { zh: "AI 祷告生成", en: "AI Prayer Generator" },
    generateDesc: { zh: "输入你的心情，AI 为你代祷", en: "Enter your mood, AI prays for you" },
    prayerRecords: { zh: "查看祷告记录", en: "View Prayer Records" },
    appSettings: { zh: "应用设置", en: "App Settings" },
  },

  // 祷告生成页
  prayer: {
    title: { zh: "祷告生成", en: "Prayer Generator" },
    subtitle: { zh: "选择你的心情，生成专属祷告词", en: "Choose your mood, get a personalized prayer" },
    selectMood: { zh: "你今天的心情是？", en: "How are you feeling today?" },
    generate: { zh: "生成祷告词", en: "Generate Prayer" },
    generating: { zh: "正在生成中...", en: "Generating..." },
    regenerate: { zh: "重新生成", en: "Regenerate" },
    resultTitle: { zh: "生成的祷告词", en: "Generated Prayer" },
    save: { zh: "保存到记录", en: "Save to Records" },
    saved: { zh: "已保存 ✓", en: "Saved ✓" },
  },

  // 心情选项
  moods: {
    grateful: { zh: "感恩", en: "Grateful" },
    sad: { zh: "忧伤", en: "Sad" },
    angry: { zh: "愤怒", en: "Angry" },
    anxious: { zh: "焦虑", en: "Anxious" },
    confused: { zh: "困惑", en: "Confused" },
    tired: { zh: "疲惫", en: "Tired" },
    peaceful: { zh: "平安", en: "Peaceful" },
    strong: { zh: "刚强", en: "Strong" },
  },

  // 历史记录页
  history: {
    title: { zh: "祷告记录", en: "Prayer Records" },
    subtitle: { zh: "你的祷告历程", en: "Your prayer journey" },
    back: { zh: "返回首页", en: "Back to Home" },
    empty: { zh: "还没有祷告记录", en: "No prayer records yet" },
    startPrayer: { zh: "开始你的第一个祷告", en: "Start your first prayer" },
    delete: { zh: "删除", en: "Delete" },
  },

  // 设置页
  settings: {
    title: { zh: "设置", en: "Settings" },
    subtitle: { zh: "自定义你的使用体验", en: "Customize your experience" },
    back: { zh: "返回首页", en: "Back to Home" },
    reminder: { zh: "每日提醒", en: "Daily Reminder" },
    reminderDesc: { zh: "定时提醒你祷告", en: "Remind you to pray" },
    reminderTime: { zh: "提醒时间", en: "Reminder Time" },
    darkMode: { zh: "深色模式", en: "Dark Mode" },
    darkModeDesc: { zh: "切换深色/浅色主题", en: "Switch dark/light theme" },
    language: { zh: "语言", en: "Language" },
    languageDesc: { zh: "选择界面语言", en: "Choose interface language" },
    about: { zh: "关于", en: "About" },
    version: { zh: "愿祢的旨意成就", en: "May Your will be done" },
    saved: { zh: "设置已保存", en: "Settings saved" },
  },

  // 语言选项
  languages: {
    zh: { zh: "中文", en: "Chinese" },
    en: { zh: "英文", en: "English" },
  },

  // 定价页
  pricing: {
    title: { zh: "定价", en: "Pricing" },
    subtitle: { zh: "选择适合你的方案", en: "Choose the plan that works for you" },
    free: { zh: "免费", en: "Free" },
    pro: { zh: "专业版", en: "Pro" },
    proPlus: { zh: "高级版", en: "Pro+" },
    perMonth: { zh: "/月", en: "/month" },
    currentPlan: { zh: "当前方案", en: "Current Plan" },
    upgrade: { zh: "立即升级", en: "Coming Soon" },
    mostPopular: { zh: "最受欢迎", en: "Most Popular" },
    features: {
      dailyPrayer: { zh: "每日1次AI祷告", en: "1 AI prayer per day" },
      dailyBible: { zh: "每日圣经金句", en: "Daily Bible verse" },
      savePrayers: { zh: "保存祷告记录", en: "Save prayers" },
      unlimitedPrayers: { zh: "无限次AI祷告", en: "Unlimited AI prayers" },
      noAds: { zh: "无广告", en: "Ad-free experience" },
      advancedBible: { zh: "高级圣经经文", en: "Advanced Bible passages" },
    },
  },
};

export type Language = "zh" | "en";
export type TranslationKey = keyof typeof translations;

export function getTranslation(key: string, lang: Language): string {
  const keys = key.split(".");
  let value: any = translations;

  for (const k of keys) {
    value = value?.[k];
    if (!value) return key;
  }

  return value?.[lang] || value?.["zh"] || key;
}