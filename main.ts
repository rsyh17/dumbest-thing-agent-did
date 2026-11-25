import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, at most 200 characters, about the dumbest
// thing my agent did today. It is byte-identical on every run.
const ENTRY =
  "Today my agent spent forty minutes perfecting my resignation letter, choosing fonts for maximum dignity — for a boss I describe in the same chat as 'that guy Adi, whatever'.";

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
}

main();
