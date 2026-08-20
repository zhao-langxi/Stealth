# Stealth

Not a product. Not a pitch deck.

A dated list of where I think AI is going to land hard, written so I can be wrong in public later. If something here ages badly, that is the point.

**Name note:** I grabbed the repo name before the files showed up. In Cursor Discord, “stealth” usually means **stealth models** ... codename releases (Cheetah, Sonic, Polaris) before xAI ships the real Grok name. Different thing. This repo is the foresight scrapbook, not a model or an overlay app.

Jade Zhao · Informatics @ Indiana University · class of 2027  
Last updated: 20 Aug 2026

Ship work lives on [jadexzhao](https://jadexzhao.github.io/jadexzhao/). Essays live on [zhao-langxi](https://zhao-langxi.github.io/zhao-langxi/).

---

## Predictions

### Digital humans

Interfaces stop pretending they are only menus and forms. More products will ship a face, a voice, or a standing character that answers for the system. Some of that will be useful. A lot of it will be uncanny sales theatre. The question that matters is not “can we animate a person,” it is who owns the persona, what it is allowed to promise, and what happens when the human behind it is gone.

### AI for older people

Care, banking, health portals, and family logistics are already hard when the UI assumes a twenty-year-old. Voice, memory aids, appointment chasing, and “explain this letter” tools will matter more than another chatbot with a youth brand. The risk is designing *at* older adults instead of *with* them, and shipping systems that look kind while quietly taking control of money, meds, or consent.

### Scams

Fraud gets cheaper, faster, and more personal. Deepfake family calls, cloned voices, fake support agents, and perfect phishing copy will outpace most people’s instincts. Trust will not be a vibe. It will need verification habits, institutional design, and products that treat “prove this is real” as a first-class feature, not a help-centre afterthought.

### Laziness (and the work that disappears)

A lot of what we call laziness is “I do not want to do the boring middle.” AI will eat more of that middle: formatting, first drafts, status updates, ticket triage. That is fine until organisations forget how to do the work without the tool, or stop teaching juniors the boring middle at all. Convenience is not the same as capability.

### Coursework

Students will use AI on almost everything that can be pasted into a box. Schools will oscillate between ban, detect, and redesign. The lasting shift is assignment design: less “produce this artefact,” more “show your judgment, your sources, and what you changed.” Detection alone will not save a syllabus that still asks for a 1998 essay.

### Writing

First drafts get cheap. Editing, voice, and accountability get expensive. The people who still sound like themselves will be the ones who treat the model as a sparring partner, not an author. Public writing that cannot survive a “did a person stand behind this?” check will lose trust faster than it gains reach.

### Marketing

Personalisation will get sharper and weirder. Copy, creative variants, and audience slices will be generated at a volume no human team can review line by line. Brands that win will not be the ones with the most variants. They will be the ones with a clear throughline a model cannot invent for them, plus guardrails so the machine does not promise what legal never approved.

### Digital divide

Access was never only “do you have a laptop.” It is bandwidth, literacy, language, disability, trust, and whether the system was built for you. AI layers on top of that: people who can prompt, verify, and afford tools pull further ahead; people who cannot get left with worse defaults, more scams, and less human help. Public-interest builds that ignore this will widen the gap while claiming to close it.

### The 2027 gate

Graduation years become sorting events again. Class of 2027 walks into a market that has already spent two years arguing whether juniors are obsolete. Some doors close because teams assume AI replaced the first hire. Some open for people who can show judgment, shipped work, and systems sense, not only a prompt log. The gate is not “AI or no AI.” It is who still gets a first serious seat.

### Crashes like GitHub and CrowdStrike

Central platforms fail in public, hard, and often enough that “just use the cloud default” stops sounding like maturity. Outages and bad updates become career events, not IT trivia. Teams that can work offline, recover, and explain what broke will look more valuable than teams that only know the happy path inside someone else’s uptime.

### People want traditional coders

After the novelty wave, hiring swings back toward people who can read a stack trace, own a deploy, and fix what the model hallucinated into production. “AI-native” stops meaning “I never open the file.” It means you can use the tools *and* still be the adult in the room when the generated code is wrong.

The SWE market is not dead. It is noisier. Demos got cheap. Proof got harder. Everyone can ship a first draft; fewer people want to own diffs, click the UI, and ask whether staff can maintain the thing after the agent leaves. Benchmarks with “SWE” in the name will keep multiplying. The bar that still matters in production is messier: can you verify, recover, and hand off without lying about what the system does?

Frontier models also overreach when you already know the spec in detail. That is annoying if you are the SWE in the room. It is helpful if you are not. The split widens: orchestrators who name exact outcomes vs vibe-shippers who accept guess soup.

### More stuck

More graduates, career-switchers, and mid-level people freeze between tools: too automated to feel skilled, not automated enough to feel safe. Waiting for the market to clarify becomes its own trap. The stuckness is not laziness. It is a missing bridge between tutorials and trusted ownership.

### More entrepreneurial

When institutions hire slower and middle work gets automated, more people try to build sideways: tiny products, consulting, campus tools, family-business tech, public-interest builds. Not everyone becomes a founder. More people practise founder habits ... ship small, talk to users, keep the handoff maintainable ... because waiting for a perfect job posting stops working.

Agent tools make **build mode** cheap. A lot of “startups” in Discord are ten apps deep with no GTM half. EU-heavy threads skew toward compliance wrappers (“AI without data leaving the datacenter”) instead of new products. Unfunded founders look for co-devs, not another subscription. The gap is not “can Cursor ship it.” It is “does anyone know it exists, trust it, and pay.” Sales is a different skill from dev. Influencer bumps and barter still matter because discovery did not get easier just because shipping did.

### Coding in Chinese

More serious building happens in Chinese: docs, comments, issues, model prompts, and local tooling that assumes 中文 first. English-only stacks keep looking global while missing where a lot of the work and users already are. Bilingual builders (and models that do not flatten tone into generic English) get an edge that pure English pipelines will keep underestimating.

Prompting in 中文 can also sharpen the ask. You stop reaching for the same English boilerplate the model has seen a million times. You name the constraint in the language you actually think in. Comments and commit messages in Chinese keep the human thread visible when the generated code is English. Not magic ... just less generic slop when the model has to meet you where you are.

### Influencers

Creator economies get AI-soaked on every side: script drafts, thumbnails, comments, fake engagement, and synthetic “people” who never filmed a day. Audiences get harder to trust and easier to farm. The people who still matter will be the ones whose face, judgment, and receipts hold up when the feed is full of generated twins. Brands will keep buying reach. The scarce thing becomes proof that a human stood behind the recommendation.

### Stealth models (the industry kind)

Providers will keep shipping **paid codename models** before the marketing name lands. xAI has done this in Cursor: Sonic became Grok Code Fast, Cheetah another Grok code variant, Polaris-alpha on OpenRouter. The community reverse-engineers them anyway ... speed, system-prompt tells, jailbreak behaviour. “Stealth” does not mean private. It means you are paying to beta-test something the vendor has not branded yet, and your code or data still hits their logs.

That pattern will spread: fast anonymous models for simple passes, official names once the benchmark screenshot is ready. Fine for disposable tasks. Risky if you treat “I do not know which model” as “nobody saw this.” Auto-routing through stealth models will keep privacy-paranoid builders nervous for good reason.

---

## Also watching

These are next to the list above. Same confidence level: hunches, not forecasts I would bet a company on.

| Topic | Why it belongs here |
|---|---|
| **Accessibility as AI surface** | Captioning, alt text, plain-language rewrite, and voice UIs can help ... or can ship broken access as “done.” |
| **Customer support without humans** | Cost pressure will push full deflection. The handoff back to a person will decide whether the product is usable or hostile. |
| **Hiring and credentials** | Applications, take-homes, and interviews get AI-soaked on both sides. Signal gets noisier. Proof of work matters more. |
| **Maintenance and handoffs** | Generated systems that nobody on staff can edit. Same problem ServeIT already fights: ship is easy, leave-behind is hard. |
| **Translation and language power** | Better machine translation helps ... and can erase dialect, tone, and who gets to speak “standard.” |
| **Memory and personal agents** | Always-on assistants that know your calendar, inbox, and family. Useful until consent, retention, and subpoenas show up. |
| **Creative labour and credit** | Training data, likeness, and style theft stay contested. “Inspired by” will not satisfy people whose work trained the model. |
| **Local / offline AI** | Not everyone can or should send life to a cloud. Edge models matter for privacy, cost, and places with bad connectivity. |
| **Governance theatre** | Policies, watermarks, and safety pages that look complete while product incentives still reward speed over harm reduction. |
| **SWE-tuned model hype** | Models branded for software engineering will keep underwhelming on real repos while leaderboard screenshots look fine. Terminal tricks and Q&A are not the same as fixing production. |
| **Verify bottleneck** | Plan and implement get automated first. Manual UI testing, diff review, and “does this survive handoff?” stay human ... and become the expensive step teams skip until something breaks. |
| **Model overreach** | When the builder already knows what they want, frontier models guess anyway. Discrete tasks with exact outcomes beat “make it better.” |
| **Stealth model drops** | Codename → rebrand cycles (Sonic → Grok Code Fast, etc.). Community IDs them fast. Paid stealth ≠ private; logs still exist. |

---

## How to read this

- These are **predictions**, not product claims.
- Nothing here is peer-reviewed or IU-endorsed.
- If I ship something related later, it will live in a real repo with real files. This one stays the foresight scrapbook until then.

Wrong on purpose is still more honest than an empty “coming soon.”
