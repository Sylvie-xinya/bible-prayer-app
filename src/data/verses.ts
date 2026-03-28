export const bibleVerses = [
  { verse: "你们若爱我，就必遵守我的命令。", reference: "约翰福音 14:15" },
  { verse: "要常常喜乐，不住地祷告，凡事谢恩。", reference: "帖撒罗尼迦前书 5:16-18" },
  { verse: " peace I leave with you; my peace I give to you.", reference: "约翰福音 14:27" },
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
];

export function getDailyVerse(): { verse: string; reference: string } {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % bibleVerses.length;
  return bibleVerses[index];
}