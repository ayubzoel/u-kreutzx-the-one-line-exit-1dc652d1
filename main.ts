// The One-Line Exit — a single-line resignation letter.
// The program writes exactly one line of text to entry.txt and nothing else.
// It is fully deterministic: no clock, no randomness, no network, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I resign effective immediately: the fire drill taught me the fastest way out, and I have decided to take it permanently.";

// Where the grader expects the text: $MAKEFUN_OUTPUT_DIR/entry.txt.
// A plain local run falls back to the current directory.
function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  return fromEnv !== undefined && fromEnv !== "" ? fromEnv : ".";
}

// Create the output directory when it does not exist yet, then write the
// resignation line as UTF-8 text. No trailing newline is added: the gate
// counts characters, and the line itself is the whole artifact.
function emitResignation(): void {
  const dir = resolveOutputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
}

emitResignation();
