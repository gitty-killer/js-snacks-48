"use strict";
const fs = require("fs");

function tokenize(text) {
  const matches = text.toLowerCase().match(/[A-Za-z0-9]+/g);
  return matches ? matches : [];
}

function computeStats(text) {
  const lines = text.length === 0 ? 0 : text.split("\n").length;
  const words = tokenize(text);
  const counts = new Map();
  for (const w of words) {
    counts.set(w, (counts.get(w) || 0) + 1);
  }
  return { lines, words: words.length, chars: text.length, counts };
}

function parseArgs(argv) {
  const args = { top: 10, path: null };
  for (let i = 2; i < argv.length; i++) {
    const v = argv[i];
    if (v === "--top") {
      args.top = parseInt(argv[++i], 10);
    } else if (!args.path) {
      args.path = v;
    }
  }
  return args;
}

function main() {
  const args = parseArgs(process.argv);
  if (!args.path) {
    console.error("usage: node index.js <path> [--top N]");
    return 1;
  }
  const text = fs.readFileSync(args.path, "utf8");
  const stats = computeStats(text);

  console.log(`lines: ${stats.lines}`);
  console.log(`words: ${stats.words}`);
  console.log(`chars: ${stats.chars}`);
  console.log("top words:");

  const sorted = Array.from(stats.counts.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, args.top);

  for (const [word, count] of sorted) {
    console.log(`  ${word}: ${count}`);
  }
  return 0;
}

process.exit(main());
