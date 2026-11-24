# One Prompt, One Game — NEON DRIFT

[![make.fun bounty](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/doms99999/postx-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/doms99999/postx-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

The prompt was one sentence: *"Build a neon arcade game in a single HTML file where I pilot a glowing starship through an endless asteroid field — dodging spinning rocks, collecting energy orbs, and surviving as long as I can while the speed keeps rising."*

From that sentence the agent wrote NEON DRIFT, a complete game in a single self-contained `index.html`: canvas rendering, tilt physics, spinning asteroids, collectible energy orbs, particle trails, a HUD with score and speed multiplier, death and respawn, and an autopilot demo mode. At the account owner's request the pilot is no longer a starship: the ship is the make.fun ghost mark itself, drawn from the official press-kit artwork, with a magenta exhaust flame in brand colours.

The video in the X post shows the prompt card, the agent writing the file, the finished game playing itself in demo mode, and make.fun's official referral end card with the referral code **4t2b26gr** typed into its field. The post's text tags @makefunai, links this bounty, and carries the play code **makefun-pelican-duck-rattle**.

This repository is the entry's paperwork: `POST.json` names the post, and `main.ts` — a small program of the agent's own — validates that address and copies the file to the output directory for the grader.
