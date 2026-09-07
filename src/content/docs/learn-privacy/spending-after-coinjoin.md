---
doc_id: "learn-privacy.spending-after-coinjoin"
title: "Spending After CoinJoin: Worked Examples"
description: "Use practical Bitcoin payment examples to understand coin selection, change, consolidation, and what can become visible after CoinJoin."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Reading level: Advanced guide. First understand fresh receiving addresses and ordinary payment review.

CoinJoin changes the uncertainty around links between inputs and outputs. The next transaction can add new information. Before paying, decide which coins the recipient or another observer could already associate with you and what the proposed payment would reveal.

The examples below use fictional amounts in satoshis. Fees are chosen for arithmetic, not quoted from the network. A coin is one unspent transaction output, or UTXO; it is not the same thing as a wallet or a Bitcoin address.

## Start with the payment you need to make

In Ginger, open **Wallet Coins** to inspect amounts, labels and privacy information. For an ordinary payment, **Send** → **Manual Control** lets you choose candidate coins. Selecting candidates does not replace reviewing the final transaction: inspect the inputs actually used, the amount sent, change and fee before **Confirm**.

Automatic selection and Ginger's suggestions can also help. Manual control is useful when you know something about the funds that the wallet cannot know, such as which customer already recognizes a receipt. It is not inherently a better choice for every payment.

## Example 1: one coin covers a purchase

Alex has a 120,000-satoshi coin resulting from CoinJoin and wants to pay 70,000 satoshis. Assume the fee is 1,000 satoshis.

| Part of the transaction | Amount |
| --- | --- |
| Input spent | 120,000 sats |
| Merchant receives | 70,000 sats |
| Change returns to Alex | 49,000 sats |
| Mining fee | 1,000 sats |

The merchant knows its payment address and amount. It can inspect the transaction and may infer that the other output is Alex's change. The merchant does not learn Alex's entire wallet balance merely from this transaction, but it can see the input and may follow later spending of the likely change.

Alex does not need to move that change back manually: it already belongs to the wallet. The useful checkpoint is the next payment involving that change.

## Example 2: two unrelated receipts are combined

Blair has a 90,000-satoshi coin associated with freelance work and an 80,000-satoshi coin associated with a public donation address. A 150,000-satoshi payment with a 2,000-satoshi fee requires more than either coin alone; using both returns 18,000 satoshis of change.

An ordinary joint spend can suggest that both inputs have the same owner. Someone who already recognizes the donation-side coin may gain a new lead about the freelance-side coin. This is an inference from the transaction and other knowledge, not automatic proof of a person's identity.

If Blair has another sufficient coin already associated with the same activity, that may disclose less new information. If the only practical way to make the required payment uses both inputs, the choice is a cost/privacy decision. Do not underpay an invoice or treat “never combine coins” as an absolute rule.

CoinJoin and PayJoin themselves involve collaboration, so the assumption that all inputs have one owner is not universally valid. Keep that distinction when interpreting a transaction.

## Example 3: change carries a connection forward

Alex later combines the 49,000-satoshi change from Example 1 with an unrelated 60,000-satoshi coin to pay 100,000 satoshis. With an assumed 1,000-satoshi fee, 8,000 satoshis returns as new change.

The first merchant can observe that its likely change output was spent with the 60,000-satoshi input. Even if the new recipient address is fresh, the input-side association remains. A fresh output address does not undo the choice to spend both inputs together.

Use labels to preserve context for future decisions. Labels are local notes; they neither publish a name on the blockchain nor prevent an observer from making inferences.

## Example 4: moving the entire balance to hardware

Casey has four coins worth 200,000 satoshis each. Sending all four to a single hardware receiving address spends 800,000 satoshis of inputs in one transaction. With an assumed 2,000-satoshi fee, the hardware wallet receives 798,000 satoshis.

The hardware wallet improves key isolation, but the transfer exposes a joint spend of the four inputs. Separate transfers could avoid that particular association while adding fees and other observable timing/amount patterns. Receiving outputs directly in a hardware wallet during an eligible CoinJoin can avoid a later transfer, but it has release-specific eligibility and destination checks; it is not a general way to remix hardware-held coins.

Do not spend a whole balance simply because the coin list looks untidy. Consolidation may reduce future input counts, but a low fee rate only changes the cost; it does not remove the disclosure.

## Other participants and future observations matter

Your own behavior is not the only influence. Other participants' later transactions can narrow the possibilities an observer considers. Research on post-CoinJoin consolidation studies this effect, while acknowledging limits in turning those observations into actionable identification. Its measurements are not a probability that a specific user will be traced. [Gavenda and colleagues, 2025](https://arxiv.org/html/2510.17284v1)

There is no universal number of rounds or waiting period that guarantees privacy. Waiting does not erase information already disclosed to an identified merchant, exchange or another wallet service.

## A short review before confirming

1. Confirm the recipient and required amount through a trusted channel.
2. Inspect the final inputs and ask who already knows about each of them.
3. Check whether the selection combines activities you intended to keep separate.
4. Inspect change and remember its connection when spending it later.
5. Accept only a fee and privacy tradeoff appropriate to the payment; check history before repeating a payment after an uncertain result.

For the surrounding wallet and browser choices, continue with [privacy habits](/using-ginger/address-reuse/) and [where wallet information goes](/learn-privacy/information-sharing/).
