const fs = require("fs");

const content = fs.readFileSync("./README.md", "utf-8");

const wordCount = content.split(" ");

console.log(`El archivo README.md tiene ${wordCount.length} palabras.`);

const reactWordCount = (content.match(/React/gi) ?? []).length;
console.log(
  `La palabra "React" aparece ${reactWordCount} veces en el archivo README.md.`,
);
