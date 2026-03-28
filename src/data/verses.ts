export const bibleVerses = {
  zh: [
    { verse: "你们若爱我，就必遵守我的命令。", reference: "约翰福音 14:15" },
    { verse: "要常常喜乐，不住地祷告，凡事谢恩。", reference: "帖撒罗尼迦前书 5:16-18" },
    { verse: "我留下平安给你们；我将我的平安赐给你们。", reference: "约翰福音 14:27" },
    { verse: "不要忧虑吃什么、喝什么、穿什么。", reference: "马太福音 6:25" },
    { verse: "你们祈求，就给你们；寻找，就寻见；叩门，就给你们开门。", reference: "路加福音 11:9" },
    { verse: "我靠着那加给我力量的，凡事都能做。", reference: "腓立比书 4:13" },
    { verse: "神就是爱，住在爱里面的，就是住在神里面。", reference: "约翰一书 4:16" },
    { verse: "凡事仰望交托主，祂必保守你们的心怀意念。", reference: "腓立比书 4:6-7" },
    { verse: "压伤的芦苇，祂不折断；将残的灯火，祂不吹灭。", reference: "以赛亚书 42:3" },
    { verse: "我虽然行过死荫的幽谷，也不怕遭害，因为祢与我同在。", reference: "诗篇 23:4" },
    { verse: "天父爱你，祂的慈爱永远长存。", reference: "诗篇 107:1" },
    { verse: "在信的人，凡事都能。", reference: "马可福音 9:23" },
    { verse: "我已胜过世界。", reference: "约翰福音 16:33" },
    { verse: "你的日子如何，你的力量也必如何。", reference: "申命记 33:25" },
    { verse: "神能使你从软弱变为刚强。", reference: "哥林多后书 12:10" },
  ],
  en: [
    { verse: "If you love me, keep my commands.", reference: "John 14:15" },
    { verse: "Be joyful always, pray continually, give thanks in all circumstances.", reference: "1 Thess 5:16-18" },
    { verse: "Peace I leave with you; my peace I give to you.", reference: "John 14:27" },
    { verse: "Do not worry about your life, what you will eat or drink or wear.", reference: "Matt 6:25" },
    { verse: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.", reference: "Luke 11:9" },
    { verse: "I can do all things through him who gives me strength.", reference: "Phil 4:13" },
    { verse: "God is love. Whoever lives in love lives in God, and God in them.", reference: "1 John 4:16" },
    { verse: "Do not be anxious about anything, but in everything present your requests to God.", reference: "Phil 4:6-7" },
    { verse: "A bruised reed he will not break, and a dimly burning wick he will not quench.", reference: "Isa 42:3" },
    { verse: "Though I walk through the darkest valley, I will fear no evil, for you are with me.", reference: "Psalm 23:4" },
    { verse: "Give thanks to the LORD, for his love endures forever.", reference: "Psalm 107:1" },
    { verse: "Everything is possible for the one who believes.", reference: "Mark 9:23" },
    { verse: "I have overcome the world.", reference: "John 16:33" },
    { verse: "Your days will be as your strength.", reference: "Deut 33:25" },
    { verse: "When I am weak, then I am strong.", reference: "2 Cor 12:10" },
  ],
};

export function getDailyVerse(lang: "zh" | "en"): { verse: string; reference: string } {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  const verses = bibleVerses[lang];
  return verses[dayOfYear % verses.length];
}