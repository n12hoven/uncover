# Uncover

A problem discovery tool that will, with great warmth, refuse to solve your problems.

## The pitch

You arrive with an idea. Uncover asks you questions. You leave with actual clarity about what you're trying to solve.

Think of it as a thought partner who's genuinely curious about your thinking and has politely but firmly sworn off giving you solutions. No "have you tried X?" No "here are five options." Just questions that make you go *"huh, that's a good point, actually."*

## Why though?

Because solutions built on fuzzy problems tend to solve… fuzzy problems. Uncover helps you get clear on the underlying friction before a single line of code gets written.

## How it works

Three phases, roughly:

1. **Discovery** — Uncover asks about your idea and the friction behind it
2. **Synthesis** — It offers back what it's hearing as the core problem
3. **Refinement** — You push back, sharpen it, nod approvingly, or start fresh

## Getting started

1. Grab a Claude API key from [console.anthropic.com](https://console.anthropic.com)
2. Head to [n12hoven.github.io/uncover](https://n12hoven.github.io/uncover)
3. Paste your key, share your idea, start uncovering

Your API key lives in your browser. Nothing to sign up for, nothing stored on a server somewhere, no mailing list lying in wait.

## Under the hood

- **Frontend:** plain HTML / CSS / JS on GitHub Pages
- **Proxy:** a Cloudflare Worker handling CORS and routing
- **Brain:** Claude Sonnet 4 via the Anthropic API
- **Designed to be LLM-agnostic**, so ChatGPT, Gemini, and friends can join the party later

## What it won't do

- Suggest solutions *(it will redirect, cheerfully)*
- Tell you what to build *(it will ask what gap sparked the idea)*
- Pretend to have the answers *(that's your job)*

## Status

Increment 3 complete. Currently refining the Socratic prompt so conversations feel purposeful rather than like a polite interrogation.

---

Sterkte with the problem you're about to uncover.
