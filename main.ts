// NEON DRIFT's make.fun entry program (Node 22, standard library only).
//
// The entry itself is the X post: the video of the agent building the game,
// published natively, with POST.json naming its address. All this program
// does is carry that address to the grader: it reads POST.json beside
// itself, checks the address is an X status URL, and writes the file to
// the output directory unchanged.
//
// MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output
// when the program runs outside the grader's container.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const raw = readFileSync(join(botDir, 'POST.json'), 'utf8');
const post = JSON.parse(raw) as { url?: unknown };
if (typeof post.url !== 'string' || !/^https:\/\/x\.com\/[^/]+\/status\/\d+$/.test(post.url)) {
  console.error('POST.json does not name an X post: ' + raw.trim());
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'POST.json'), raw);
console.log('post recorded: ' + post.url);
