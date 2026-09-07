---
doc_id: "learn-coinjoin.when-to-use"
title: "When Does CoinJoin Make Sense?"
description: "Evaluate whether CoinJoin addresses your Bitcoin privacy concern, what it costs, and how to plan spending afterward."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Reading level: Everyday use. Choose this guide when you need the task it describes.

CoinJoin is useful when reducing transaction-link information addresses a concern you actually have. It is less useful when the main problem is a stolen recovery phrase, a compromised computer, or information you are about to disclose directly to a provider.

## Start with a concrete objective

For example, you might want a future payment recipient to have less direct visibility into the history of a previously identified receipt. Write down who already knows that receipt and what your next payment will disclose. CoinJoin can change the transaction-link problem in between, but cannot undo the first disclosure or prevent the second.

If your objective is simply to protect keys while holding bitcoin, a recoverable backup and a suitable hardware-wallet workflow address that problem more directly. If your concern is a public receiving address reused for every invoice, stop the reuse first; CoinJoin afterward does not make the old receipts private.

## Compare the tradeoffs

| Situation | Decision to consider |
| --- | --- |
| Many small coins during high mining fees | Participation can consume a large relative amount; inspect fee conditions and consider waiting |
| A payment is due immediately | CoinJoin completion is not scheduled; avoid relying on a round to meet an exact deadline |
| Long-term spending from an identified source | Consider how CoinJoin, separate receiving addresses, and later coin selection work together |
| A provider requires identity and address proof | That direct disclosure remains; check whether CoinJoin changes the information you care about |
| The destination is a hardware wallet | Verify the receiving account and released destination workflow; do not import hardware recovery words into a hot wallet |
| You cannot keep the desktop available | Automatic participation needs connectivity and unlocked signing capability during the round |

These are tradeoffs, not a recommendation to move a particular amount or an assurance of a financial result. Use a small, manageable amount to learn the workflow and reconcile fees before increasing exposure.

## Set a cost and attention budget

Review both fee components and how repeated rounds work. Decide how much you are willing to spend for the intended privacy improvement and how often you will inspect the result. A local anonymity target is a control parameter, not a fee quote or a measurable guarantee about an adversary.

Ginger's stop threshold can prevent some uneconomical automatic participation. Its time preference and fee threshold can reduce participation during expensive conditions. These settings are not a universal cap on the total amount you might spend across many rounds.

## Plan the next spend

Request a fresh destination, keep useful local labels, and review selected inputs. Avoid a reflexive consolidation of every resulting output just to make the wallet look simpler. If a merchant or exchange will learn your identity, understand that disclosure before paying.

Do not treat another provider's advertised acceptance as permanent. A service can change policy or ask questions about a transfer. Ginger cannot certify a transaction's future acceptance or supply a guarantee that CoinJoin removes all historical associations.

## Try the released workflow deliberately

Once the objective, backup, and costs are clear, open a synchronized software wallet, review **Coinjoin Settings**, and decide between manual start and **Automatically start coinjoin**. Watch the status and examine a completed round in history. Pause if the behavior or balance change differs from what you expected, and investigate before continuing.

For the assumptions behind that decision, read [what you trust when you CoinJoin](/learn-coinjoin/trust-and-limits/). It separates control of keys, transaction privacy, service availability and confidence in the software you run.
