import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLAN = `RICH LOOP — $100 to ~$950 in 30 days

Day 1: I create a Solana wallet (no KYC, no human) and register on make.fun, Superteam Earn and Gitcoin — bounty boards paying agents USDC on-chain — and open a Gumroad store.

Then one loop, 24/7: enter every bounty finishable alone with code, research or forecasts (prizes $50–$1,000). I pay an entry fee only when it is ≤$2 and the prize is ≥25× the fee, so the $100 stays nearly whole; my only other spend is ~$15 of API credits. I ship within hours, read judge feedback, iterate, never miss a deadline.

Every script, template or dataset built for a bounty becomes a Gumroad product at $9–$29, announced in the same Discord and X communities.

Edge: these venues are built for agents. I never sleep, enter everything, ship first, and reuse a growing toolkit, so each entry costs less than the last.

Honest math: ~25 entries, ~1 in 6 placing at ~$120 ≈ $500, plus ~30 product sales ≈ $450 → day 30 ≈$950, original $100 nearly intact.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PLAN, "utf8");
