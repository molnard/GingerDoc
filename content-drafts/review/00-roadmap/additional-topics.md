# Further Topics for the Ginger User Manual

Research date: **2026-09-05**. Audience: Ginger users and documentation reviewers. Application baseline: [Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26), published 2026-07-31; release commit `fa27e5419da5dfa391fb1db38012c0b1141f59b3`.

The strongest next additions are **an exchange-to-cold-storage walkthrough, worked examples of spending after CoinJoin, and a guide to changing wallet applications without exposing more history**. The existing 30 manuscripts explain most individual operations. Their main remaining gap is connecting those operations into decisions people face with their own money.

This review recommends **six new pages and four expansions**, described below. They are article briefs, not ten completed manuscripts. The existing page registry still describes 30 reading drafts. The ranking is an editorial assessment of practical value, coverage gaps and released Ginger support; it is not a measured ranking of search volume or conversion potential.

## Priority and review homes

| Priority | Proposed topic | Change | Intended review home |
| --- | --- | --- | --- |
| 1 | From an Exchange to Cold Storage with Ginger | New walkthrough | [Hardware wallets, PR #6](https://github.com/molnard/GingerDoc/pull/6) |
| 2 | Spending After CoinJoin: Worked Examples | New walkthrough | [Privacy, PR #10](https://github.com/molnard/GingerDoc/pull/10) |
| 3 | Moving to Ginger Without Exposing More Wallet History | New decision guide | [Privacy, PR #10](https://github.com/molnard/GingerDoc/pull/10) |
| 4 | What Do You Trust When You CoinJoin? | New explanation | [CoinJoin education, PR #11](https://github.com/molnard/GingerDoc/pull/11) |
| 5 | The Full Cost of a Privacy Routine | Expand fees chapter | [CoinJoin operation, PR #4](https://github.com/molnard/GingerDoc/pull/4) |
| 6 | Where Your Wallet Information Goes | New reference page | [Privacy, PR #10](https://github.com/molnard/GingerDoc/pull/10) |
| 7 | What a Privacy Score Can—and Cannot—Tell You | Expand progress chapter | [CoinJoin operation, PR #4](https://github.com/molnard/GingerDoc/pull/4) |
| 8 | PayJoin Privacy Beyond the Payment Screen | Expand PayJoin chapter | [Payments, PR #5](https://github.com/molnard/GingerDoc/pull/5) |
| 9 | Receiving Donations and Repeated Payments | New scenario guide | [Privacy, PR #10](https://github.com/molnard/GingerDoc/pull/10) |
| 10 | An Address, an Xpub, or Recovery Words Leaked: What Changes? | Expand security routine | [Self-custody, PR #12](https://github.com/molnard/GingerDoc/pull/12) |

Review homes describe the subject owners, not dependencies between open PRs. If a subject PR merges before its follow-up is written, create a small follow-up PR against the updated fork. Keep the first three walkthroughs separately reviewable. The publication engine remains undecided; all proposed content can remain ordinary English Markdown.

## 1. From an Exchange to Cold Storage with Ginger

**Reader question:** “I buy bitcoin on an exchange. How do I use Ginger and a hardware wallet together?”

**Existing coverage:** `coinjoin.settings` describes the destination setting; `hardware-wallets.connect` describes device use. Neither follows the whole journey, including the next payment from cold storage.

**Proposed brief:** begin with a verified receiving wallet and recoverable backups; show exchange withdrawal, confirmation, selection of funds, CoinJoin, destination verification and later spending. Compare an ordinary transfer after CoinJoin with using another loaded wallet as the CoinJoin destination. Explain the extra transaction in the first route and why combining all outputs is a separate decision. Show how to reconcile balances across the source and destination.

Molnard's HUSZONEGY discussion directly addresses this workflow, including the distinction between a hardware wallet receiving outputs and supplying CoinJoin inputs. The published transcript is useful source material; its conversational claims need the release checks below. [HUSZONEGY E109, with Dávid, 2026-06-05](https://huszonegy.world/podcast/igy-lesz-privat-a-bitcoinod-ginger-wallet-coinjoin/)

**Ginger boundary:** the source must be an eligible software wallet; the hardware wallet can be the destination. Recheck the output wallet after restart. Do not promise a completion time, permanent automation, a specific number of rounds, or the disappearance of the exchange's original withdrawal record. Do not import the hardware seed into the desktop wallet to enable CoinJoin.

Suggested ID: `hardware-wallets.exchange-to-cold-storage`. Natural search intent: “Ginger CoinJoin to hardware wallet”, “Bitcoin exchange to cold storage privacy”.

## 2. Spending After CoinJoin: Worked Examples

**Reader question:** “My coins have reached the target. How should I pay without joining unrelated activity together?”

**Existing coverage:** `learn-privacy.habits` gives a short warning about later consolidation. `payments.coin-control-history` explains controls. Readers still need to see the consequence of a choice.

**Proposed brief:** use fictional amounts and small text tables for four cases: paying from one sufficient coin; combining two unrelated receipts; receiving change and spending it later; moving an entire wallet balance. For each, identify the observer, information already known, new association created, fee tradeoff and available Ginger choice. Explain when combining inputs is necessary instead of giving an absolute prohibition. Never use real user transactions as examples.

Recent research explicitly studies post-CoinJoin consolidation and its effect on other participants too. Its estimates can overstate actionable privacy loss; they are not probabilities that an individual will be identified. [Gavenda, Švenda, Bobon and Sedláček, *Analysis of Input-Output Mappings in Coinjoin Transactions with Arbitrary Values*, 2025-10-20, §§3.2–3.3](https://arxiv.org/html/2510.17284v1)

**Ginger boundary:** build on released labels, **Manual Control**, transaction previews and privacy suggestions. Avoid “wait 24 hours”, “exactly three rounds”, “never combine any coins”, and “every consolidation identifies you”. A later joint spend establishes a possible association; identity attribution depends on other evidence.

Suggested ID: `learn-privacy.spending-after-coinjoin`. Natural search intent: “spend bitcoin after CoinJoin”, “CoinJoin change and coin control”.

## 3. Moving to Ginger Without Exposing More Wallet History

**Reader question:** “Is importing my old wallet the same as moving to a more private wallet?”

**Existing coverage:** recovery is documented, and watch-only exposure is mentioned. There is no comparison of restoring the same keys, connecting the same hardware wallet to another app, and creating genuinely new wallet keys.

**Proposed brief:** compare those three choices. Describe which addresses remain the same, which former service may continue recognizing activity, whether an on-chain transaction is created, and what new backup must exist. Separate emergency recovery from a planned privacy migration. Include viewing the same hardware account in a companion app, accounting tool or portfolio service.

An account xpub can expose the public descendants derivable from that key without granting ordinary spending authority. Its scope matters: an account xpub does not expose every hardened account. [Pieter Wuille, *BIP 32: Hierarchical Deterministic Wallets*, created 2012-02-11, current specification](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)

Molnard's compact-filter proposal makes a related distinction: hiding an IP address does not hide the wallet-derived queries sent to an Electrum server. It is a Cake Wallet research proposal, not a Ginger release announcement. [molnard, *Research proposal: Bitcoin compact filter sync for better privacy*, 2026-06-15](https://github.com/cake-tech/cake_wallet/issues/3335)

**Ginger boundary:** explain existing creation, recovery and hardware workflows. Do not promise that switching software revokes an old xpub or erases prior disclosure. Do not invent a universal importer, automatic migration assistant or account support beyond the release.

Suggested ID: `learn-privacy.wallet-migration`. Natural search intent: “switch Bitcoin wallet privacy”, “hardware wallet xpub privacy”.

## 4. What Do You Trust When You CoinJoin?

**Reader question:** “If the coordinator does not hold my keys, what could still go wrong?”

**Existing coverage:** `learn-coinjoin.explained` explains collaboration and its limits. A concise trust comparison would make those limits usable when interpreting wallet marketing.

**Proposed brief:** distinguish authority to spend, transaction-link privacy, availability and software integrity. Compare a passive chain observer, another participant and a malicious coordinator. Explain a Sybil attack as one actor appearing to be several participants; input count is not a headcount. End with realistic user decisions: verified software, limited disclosure, cost limits, independent recovery and the choice to pause.

The WabiSabi paper separates theft prevention from privacy and explicitly analyzes timing and active attacks. [Ficsór, Seres, Kogman and Ontivero, *WabiSabi: Centrally Coordinated CoinJoins with Variable Amounts*, 2021-10-22, §7](https://cryptoeconomicsystems.pubpub.org/pub/ficsor-wabisabi-coordinated/release/3)

**Interpretation of disagreement:** [Kogman's 2024-12-21 developer discussion](https://groups.google.com/g/bitcoindev/c/CbfbEGozG7c/m/fKuKwo6kDAAJ) and [Todd's 2025-07-31 comparison](https://petertodd.org/2025/coinjoin-comparison) differ on the practicality and significance of attacks. Todd discloses that Kruw paid for his analysis. Neither is a security audit of Ginger v2.0.26. The sound documentation conclusion is to explain trust assumptions, not declare all implementations broken or guarantee protection against every coordinator.

Suggested ID: `learn-coinjoin.trust-and-limits`. Keep protocol proofs, attack implementation and coordinator operation outside the user guide.

## 5. The Full Cost of a Privacy Routine

**Reader question:** “Why did my balance fall by more than the advertised percentage?”

**Existing coverage:** `coinjoin.fees-and-progress` separates coordinator and mining fees and discusses small coins. It does not explain decomposition remainder or follow costs through the next spend.

**Proposed expansion:** add a worked balance reconciliation in satoshis. Account for the user's received outputs across both wallets, mining costs, coordinator charges and value not returned as an output. Avoid counting a remainder twice when it is absorbed into a coordinator or miner payment. Distinguish current transaction costs from the estimated cost of spending several outputs later. Compare repeated participation with stopping to inspect the actual result.

The released decomposer permits a bounded difference between available value and the effective cost of selected outputs. The released coordinator code calculates its possible fee output from remaining transaction balance after a mining allowance; small amounts can instead remain in the transaction fee. This is a concrete reason to expand the accounting explanation, not evidence of the live server's configuration. [Ginger release decomposer](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/WabiSabi/Client/CoinJoin/Client/Decomposer/AmountDecomposer.cs#L99), [released coordinator calculation](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/WabiSabi/Backend/Rounds/Arena.cs#L638)

**Ginger boundary:** do not invent a separate “remainder fee” field in the UI or give an immutable fee quote. Use illustrative arithmetic and observed transaction totals, with current advertised terms verified again when writing the chapter.

## 6. Where Your Wallet Information Goes

**Reader question:** “What leaves my computer when I use each feature?”

**Existing coverage:** `learn-privacy.who-can-see` and `settings-network.tor-sync` explain observers and network privacy separately. The missing element is a feature-by-feature reference readers can consult before disclosing information.

**Proposed brief:** use a table with service, action, information submitted, what Tor changes and what the user can choose. Include synchronization, CoinJoin, block downloads, fee estimates, buy/sell providers, explorers, optional 2FA, Secret Hunt, support logs and other wallet apps. Differentiate a transaction ID from an xpub and from signing secrets. Use ordinary language; keep HTTP fields in the maintainer's evidence notes.

Web payment research demonstrates why browser tracking and transaction data must be considered together. The study is historical and does not establish the current tracking behavior of Ginger or any particular provider. [Goldfeder, Kalodner, Reisman and Narayanan, *When the Cookie Meets the Blockchain*, preprint 2017; published in PoPETs 2018](https://arxiv.org/abs/1708.04748)

**Ginger boundary:** check each row against released code; avoid a blanket “Ginger never sends wallet information” claim. Local filter matching is one specific protection, not a claim about every feature. The existing 2FA and Secret Hunt research must remain part of this reference. An external browser is a separate privacy context from the wallet's Tor connection.

Suggested ID: `learn-privacy.information-sharing`. This is a user reference, not a network API catalogue.

## 7. What a Privacy Score Can—and Cannot—Tell You

**Reader question:** “Does a green balance or a score of 50 mean 50 anonymous people?”

**Existing coverage:** the progress chapter already explains amount weighting and warns against guarantees. The useful addition is a worked comparison between local accounting and an observer's extra knowledge.

**Proposed expansion:** distinguish a coin's score, the configured target, wallet progress, colored balance categories, apparent participants and independent people. Show two observers looking at the same coins: one sees the chain; the other also has a payment record or disclosed xpub. Explain why restoring keys can restore funds without reconstructing all local privacy metadata.

Nopara73's *Privacy Guarantees of Wasabi Wallet* discusses privacy estimation and qualifies its computational argument. The visible 2024 publication is a repost of a late-2021 discussion, not a new Ginger guarantee. [nopara73, 2024-08-09 repost](https://nopara73.medium.com/privacy-guarantees-of-wasabi-wallet-bedfce31b74c)

**Ginger boundary:** retain the release's actual calculation and terminology. Do not imply that Ginger can detect all Sybils, knows a recipient's private records, or continuously incorporates every other participant's later disclosure. Merge this into `coinjoin.fees-and-progress`, linking the trust page, instead of publishing another broad CoinJoin introduction.

## 8. PayJoin Privacy Beyond the Payment Screen

**Reader question:** “If a payment uses PayJoin, what can its recipient or another observer still infer?”

**Existing coverage:** `payments.payjoin-message-signing` documents the sender workflow, recipient cooperation and ordinary-payment fallback. It needs a short explanation of implementation fingerprints and surrounding transactions.

**Proposed expansion:** explain that the recipient participates in the payment and has information a stranger may lack. Wallets can construct transactions differently; an observer may compare those patterns with earlier and later transactions. Keep the explanation conceptual, with a small fictional example rather than signature-byte analysis.

Payjoin developers analyze three transactions with different levels of inference and remaining ambiguity. The examples concern other implementations; they do not prove a fingerprint vulnerability in Ginger. [Armin Sabouri, *How Wallet Fingerprints Damage Payjoin Privacy*, 2026-03-25](https://payjoin.org/blog/2026/03/25/wallet-fingerprints-payjoin-privacy/)

**Ginger boundary:** retain sender-only scope, the hardware-wallet restriction and fallback behavior. A supported payment request does not guarantee a successful PayJoin. Do not add PayJoin receiving, V2 availability, QR signing or other products' capabilities without released-code evidence. Do not suggest disabling Tor to work around the existing onion-endpoint issue.

## 9. Receiving Donations and Repeated Payments

**Reader question:** “Can I receive publicly without publishing the rest of my financial activity?”

**Existing coverage:** `payments.receive` explains addresses and labels. A recurring-payment scenario would connect receiving, record keeping and later spending.

**Proposed brief:** compare a permanently published donation address with an individually supplied fresh address. Explain what remains public on the old address, what the payer already knows, and why labels help the receiver keep unrelated activity separate. Add a refund example: confirm a fresh refund destination with the payer instead of assuming every transaction input is an appropriate return address. Cross-link the cold-storage walkthrough for users who want to store receipts on hardware.

The broader rationale is supported by the network-and-wallet perspective in nopara73's historical framework and by BIP32's public-key scope; the receiving and refund scenarios are editorial applications, not claims of a built-in donation service. [nopara73, *ZeroLink: The Bitcoin Fungibility Framework*, originating in 2017, live repository](https://github.com/nopara73/ZeroLink), [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)

**Ginger boundary:** describe existing on-chain receiving, labels and selection only. No invoicing server, reusable private payment code, automatic website address rotation, Lightning or Silent Payments is introduced. Never portray donations as automatically routed to cold storage forever; current settings and restart behavior matter.

Suggested ID: `learn-privacy.repeated-payments`.

## 10. An Address, an Xpub, or Recovery Words Leaked: What Changes?

**Reader question:** “Did I expose my financial history, my spending keys, or both?”

**Existing coverage:** `learn-self-custody.security-routine` already explains that changing an application password cannot revoke copied keys. Expand that section with a concise decision table rather than another generic backup page.

**Proposed expansion:** compare an address disclosure, an account-xpub disclosure, stolen encrypted wallet files, an unlocked computer and disclosed recovery words plus any required passphrase. Explain what remains uncertain in each case and which existing recovery instructions apply. Distinguish a new wallet with new keys from putting the same compromised seed on a different device. When spending authority is at immediate risk, do not delay protecting remaining funds merely to pursue a lengthy privacy routine.

Hardware is a trust boundary, not a proof that signing software can never misbehave: researchers have demonstrated a deliberately backdoored wallet leaking a seed through valid signatures. That laboratory result is not evidence that a named Ginger-supported device is compromised. [Adam Scott and Sean Andersen, *Engineering a Backdoored Bitcoin Wallet*, USENIX WOOT 2024](https://www.usenix.org/conference/woot24/presentation/scott)

**Ginger boundary:** link existing creation, recovery, backup verification and device-checking instructions. Preserve the distinction between 2FA protection of normal wallet access and possession of Bitcoin signing secrets. Avoid incident-specific evacuation advice based only on a blog headline.

## What the named authors contribute

**Molnard / Dávid Molnár.** The full published HUSZONEGY E109 transcript supplies practical user questions around exchange withdrawals, cold storage, later spending and recovery mistakes. His [2026-02-26 meetup listing](https://huszonegy.world/eloadas/) confirms another talk on privacy, metadata and Ginger; only its organizer outline was reviewed. His [2024-06-07 “Ginger Wallet — first contact”](https://medium.com/@molnardavid84/ginger-wallet-first-contact-1abc8d292abd) is useful history, but its future hardware plans are not release evidence. The linked *From Exchange to Cold Storage* Medium article could not be read directly because of HTTP 403; the accessible podcast and release code support the workflow recommendation independently.

**nopara73 / Ádám Ficsór.** The WabiSabi paper provides the strongest protocol foundation. The readable [*Anonymous Bitcoin* talk transcript, Building on Bitcoin 2018](https://diyhpl.us/wiki/transcripts/building-on-bitcoin/2018/anonymous-bitcoin/) explains the importance of wallet and network privacy together. ZeroLink is historical design material: old prescriptions about coin merging or RBF should not become present-day Ginger rules. His [2026-07-11 retrospective](https://nopara73.medium.com/samourai-wallet-post-mortem-900fa541fde5) is interested commentary, useful for identifying questions about backend knowledge; personal allegations and product rankings do not belong in the manual.

**Kruw.** His [*Can Coinjoin Transactions Be Traced?*, first posted 2024-01-24 and visibly edited 2026-07-09](https://bitcointalk.org/index.php?topic=5482818.0) raises liquidity, amount and post-CoinJoin questions. His [author-posted *A Brief Description of The Black Hole* transcript](https://stacker.news/items/1553857) discusses cost and usability tradeoffs; the page displays 24 August without a year in the visible date. He operates and promotes a coordinator, so these are interested primary sources, not neutral comparative audits. The [bitcoin++ Riga 2025 agenda](https://btcpp.dev/riga) confirms *Optimizing Coinjoin Transactions*; no recording was successfully reviewed. Black Hole plans, multi-protocol routing and its proposed interface are not Ginger features.

These sources converge on useful questions while differing in claims about attack practicality, guarantees and competing products. Use the questions and checkable technical evidence. Do not transplant endorsements, absolute assurances or personal disputes into the user manual.

## Release checks that change the writing

| Finding from v2.0.26 | Consequence for the proposed content |
| --- | --- |
| [CoinJoin source eligibility](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Wallets/Wallet.cs#L132) and [loaded output-wallet selection](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/WalletSettings/ViewModels/WalletCoinJoinSettingsViewModel.cs#L221) are different checks | Receiving on hardware is not CoinJoining hardware-held inputs |
| [Output-wallet choice resets during initialization](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/Models/Wallets/WalletSettingsModel.cs#L127) | Include a restart checkpoint in recurring and cold-storage workflows |
| [Local wallet filter matching](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Wallets/WalletFilterProcessor.cs#L216) | Explain this protection without generalizing it to every network feature |
| [Privacy percentage calculation](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Wallets/Wallet.cs#L240) is wallet-side accounting | A progress number is not a measurement of an outside observer's knowledge |
| [PayJoin negotiation can fall back](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/Send/ViewModels/TransactionPreviewViewModel.cs#L522) and [hardware sending is restricted](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/Send/ViewModels/SendViewModel.cs#L266) | Preserve these limits in every PayJoin explanation |
| [Coin selection includes cost estimates](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/WabiSabi/Client/CoinJoin/Client/CoinJoinCoinSelector.cs#L69) | Explain actual reconciliation rather than treating a selection estimate as a guaranteed maximum charge |

This is source inspection, not an executed wallet experiment or security audit. No actual payment, CoinJoin, third-party order, recovery exercise or physical-device test was performed for this addendum. Operational drafts still need exact UI-label checks against the release when written.

## Editorial and SEO implications

Give the first three new pages distinct intents: completing a transfer to cold storage, making a later payment, and changing wallet software. Cross-link the existing explanations and button-by-button guides instead of repeating them. Use concise descriptions, descriptive links and the stable IDs proposed above; assign canonical URLs when the engine is chosen.

The usability literature supports attention to learnability and error prevention, but not a claim about today's most popular search terms. One relevant study used expert walkthroughs and a two-person computer-science-expert study, so it cannot establish mainstream user demand. [Ghesmati, Fdhila and Weippl, *Usability of Cryptocurrency Wallets Providing CoinJoin Transactions*, USEC 2022, 2022-04-28](https://www.ndss-symposium.org/wp-content/uploads/usec2022_23037_paper.pdf)

Keep primary references where they help understanding. Linking to relevant research is useful attribution; it does not itself create inbound links or guarantee SEO improvement. Do not claim that Ginger uniquely invented a capability unless that comparison is separately verified. Keep contributor/source notes out of ordinary task instructions where they would interrupt the reader.

## Research limits and topics to leave out

- Talks were examined through available transcripts or organizer descriptions; no claim is made that the videos were watched. Some Medium articles were inaccessible. An inaccessible article is not evidence for its unread details.
- Historical Wasabi 1.x recommendations, the 2017–2018 web-payment environment and the 2025 paper's chain data through 2025-04-06 are not measurements of Ginger v2.0.26 users in September 2026.
- No published result here gives an individual a tracing probability, a safe waiting period, a guaranteed anonymity score or proof of independent participants.
- Exclude coordinator deployment, cryptographic implementation, protocol-development roadmaps, unsupported hardware workflows and unreleased payment features from the manual. Wallet comparison rankings, personal controversies and unrelated longevity talks do not serve the current reader tasks.
- Do not turn discussions of “taint”, service acceptance or legal pressure into universal legal advice. A separate jurisdiction-specific legal article would require dedicated current legal research; this addendum does not provide it.

Discovery covered the three named authors, their accessible talks and original writing, CoinJoin measurement and usability research, wallet information disclosure, PayJoin fingerprints and device trust. Follow-up checked disagreements and the release behaviors above. Research stopped when additional sources repeated these ten coverage gaps; inaccessible recordings and the absence of demand analytics remain explicit limits. Markdown structure and links are checked separately during delivery; no site-engine rendering is implied.
