export const dailyPrayers = {
  zh: [
    "主啊，求祢保守我今天的心，赐我力量面对一切挑战。愿我的言语和行为都能荣耀祢。奉耶稣基督的名求，阿们。",
    "天父，感谢祢赐给我新的一天。求祢引导我今天的每一步，让我成为祢和平的使者。奉耶稣基督的名求，阿们。",
    "主啊，当我今天遇到困难时，求祢帮助我记得祢的应许：'在世上我有苦难，但祢已胜了世界'。奉耶稣基督的名求，阿们。",
    "父啊，求祢今天使用我，让我的生命成为别人的祝福。帮助我看见身边人的需要，并用实际行动去关爱。奉耶稣基督的名求，阿们。",
    "主啊，今天我要为我的家人祷告。求祢保守他们平平安安，赐福他们所做的每件事。奉耶稣基督的名求，阿们。",
    "天父，求祢给我智慧分辨是非，勇敢做对的事。即使环境艰难，让我也不动摇对祢的信心。奉耶稣基督的名求，阿们。",
    "主啊，帮助我今天能够饶恕那些伤害我的人，如同祢饶恕我一样。让我心得释放，不再被怨恨捆绑。奉耶稣基督的名求，阿们。",
    "父啊，求祢今天提醒我常常感恩，数算祢的恩典。即使在困难中，也能看见祢的祝福。奉耶稣基督的名求，阿们。",
    "主啊，赐我耐心和爱心去对待身边的每一个人。帮助我学会倾听，尊重他人的感受。奉耶稣基督的名求，阿们。",
    "天父，今天我要把所有的忧虑卸给祢，因为祢顾念我。求祢赐我平安喜乐的心。奉耶稣基督的名求，阿们。",
    "主啊，求祢使用我今天能荣耀祢的名。无论做什么，都以服事祢的心态去做。奉耶稣基督的名求，阿们。",
    "父啊，保护我今天不受试探，救我脱离凶恶。让我时刻警醒，住在祢的保护中。奉耶稣基督的名求，阿们。",
    "主啊，帮助我今天能够诚实正直，不占便宜，不说谎话。让我活出基督徒的品格。奉耶稣基督的名求，阿们。",
    "天父，求祢赐我谦卑的心，让我不要自高自大，愿意学习，愿意服事人。奉耶稣基督的名求，阿们。",
    "主啊，今天当我疲惫时，求祢让我在祢里面得安息。祢是力量的源泉，是我随时的帮助。奉耶稣基督的名求，阿们。",
  ],
  en: [
    "Lord, guard my heart today and give me strength to face every challenge. May my words and actions glorify You. In Jesus' name, Amen.",
    "Father, thank You for this new day. Guide my steps today and use me as Your messenger of peace. In Jesus' name, Amen.",
    "Lord, when I face difficulties today, help me remember Your promise: 'In this world you will have trouble, but take heart, I have overcome the world.' In Jesus' name, Amen.",
    "Father, use me today to bless others. Help me see the needs of those around me and act in love. In Jesus' name, Amen.",
    "Lord, I pray for my family today. Keep them safe and bless everything they do. In Jesus' name, Amen.",
    "Father, give me wisdom to discern right from wrong and courage to do what is right. Even in hard times, keep my faith firm. In Jesus' name, Amen.",
    "Lord, help me forgive those who have hurt me, as You have forgiven me. Set my heart free from bitterness. In Jesus' name, Amen.",
    "Father, remind me today to always be grateful and count Your blessings. Even in difficulties, I can see Your goodness. In Jesus' name, Amen.",
    "Lord, grant me patience and love for everyone around me. Help me listen and respect others' feelings. In Jesus' name, Amen.",
    "Father, I give You all my worries today because You care for me. Grant me a heart of peace and joy. In Jesus' name, Amen.",
    "Lord, use me today to honor Your name. Whatever I do, do it as serving You. In Jesus' name, Amen.",
    "Father, protect me from temptation and deliver me from evil. Keep me alert and in Your protection. In Jesus' name, Amen.",
    "Lord, help me be honest and upright today, not taking shortcuts or telling lies. Help me live out a Christian character. In Jesus' name, Amen.",
    "Father, grant me a humble heart, not proud or arrogant, willing to learn and serve others. In Jesus' name, Amen.",
    "Lord, when I am tired today, let me rest in You. You are my source of strength, my ever-present help. In Jesus' name, Amen.",
  ],
};

export function getDailyPrayer(lang: "zh" | "en"): string {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  const prayers = dailyPrayers[lang];
  return prayers[dayOfYear % prayers.length];
}