const date = new Date("2025-01-08");
const [month, day, year] = [
  date.getMonth() + 1,
  date.getDate(),
  date.getFullYear(),
];

console.log(`${year}年${month}月${day}日`);