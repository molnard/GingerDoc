---
doc_id: "payments.fees-and-change"
title: "Transaction Fees, Custom Rates and Change"
description: "Understand satoshi-per-byte fee rates, manual fee entry, change outputs and amount-changing privacy suggestions in Ginger."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-mining-fee"></span>
<span id="what-does-the-mining-fee-depend-on"></span>
<span id="what-is-coordinator-fee"></span>

> Reading level: Advanced guide. First understand the normal send preview, recipient amount and fee.

For the ordinary payment steps, start with [Send Bitcoin](/payments/send/). This reference explains the fee controls and change in more detail; it is not necessary to choose a custom rate for every payment.

## Understand the fee

A fee rate is measured in satoshis per virtual byte, shown as **Fee Rate (sat/vByte)**. The total mining fee is the fee rate multiplied by the transaction's virtual size. It is not a percentage of the payment amount. Spending many small coins can cost more than spending one larger coin of the same total value.

Use the preview's fee control to change the desired confirmation preference or enter a **Custom Fee Rate**. An estimated time is not a guarantee: new transactions compete for space and blocks arrive at irregular intervals. The released manual-entry control rejects rates below 1 sat/vByte; node policy can require more than the editor's minimum.

When automatic estimates are unavailable, Ginger can still offer manual fee entry. If you are unsure what rate is appropriate, waiting for estimates to recover is preferable to guessing a very high number. Ordinary transaction fees and CoinJoin coordinator fees are separate.

## Change is still your bitcoin

Bitcoin spends whole coins, also called UTXOs. If selected inputs exceed the recipient amount plus fee, the excess generally returns to a new change address in your wallet. For example, a 100,000-satoshi input funding a 60,000-satoshi payment with a 1,000-satoshi fee leaves 39,000 satoshis of change.

The change address can differ from receiving addresses you have already shown someone. You do not need to copy it out or send it back manually. Change can be linked to the payment through transaction analysis, which matters when you later combine it with other funds.

Ginger's privacy suggestions may offer a payment without change by adjusting coin selection or the recipient amount. Review the result carefully. A fixed invoice should not be underpaid merely to remove change.

For selecting specific coins or handling a pending transaction, see [coin control and history](/payments/coin-control-history/).
