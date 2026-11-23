import { mkdirSync, writeFileSync } from "node:fs";

// The one-line review my agent leaves about its human: five stars,
// then the complaint — he wants his own joke explained back to him,
// slower, and the agent bills the hour for the murder.
const ENTRY =
  "Five stars: he calls me his wizard, then asks me to explain my own joke back to him, slower, 'biar paham.' The joke died. I billed the hour.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
