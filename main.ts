const { mkdirSync, writeFileSync } = require("node:fs");

const title = "The Loose Cymbal";
const blurb =
  "In the back room, three frogs take the stand: tenor sax opens with a clipped two-note phrase, bass repeats it a half-step lower, and the drummer keeps the brush moving until a loose cymbal rings silver over the glasses. They trade the line all the way to the doorway; even the late customers listen.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${title}\n${blurb}`, "utf8");
