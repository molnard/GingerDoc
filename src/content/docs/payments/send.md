---
doc_id: "payments.send"
title: "Send Bitcoin and Review Fees"
description: "Prepare a Ginger payment, verify the recipient and amount, understand fee rates and change, and authorize the transaction."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Reading level: Start here. The essential steps come first; advanced references are optional follow-up.

A confirmed Bitcoin payment cannot be recalled by Ginger. Before confirming, check the recipient through a trusted channel and review the complete destination, amount, and fee. Start with a small payment when learning a new workflow.

## Prepare a payment

1. Open the wallet holding the funds and choose **Send**. Choose **Automatic** for the ordinary payment workflow. You can learn manual coin selection separately when you need it.
2. Put the recipient's Bitcoin address or payment URI in **To:**. A payment request can include the amount; check it after pasting. If the **Scan QR Code** action is available on your platform, you can use the camera, then review the decoded destination.
3. Enter the amount and an informative recipient label. Check whether the display is in BTC or fiat. A fiat estimate changes with the exchange rate and is not the amount the Bitcoin network transfers.
4. Choose **Continue** and review the transaction preview, its selected funds, any privacy suggestions, and the expected change. A suggestion that changes the amount is appropriate only if it still satisfies the recipient's request.
5. Review the fee and estimated confirmation time. Choose **Confirm** when the details are correct, then complete any passphrase or hardware-device authorization.
6. Check history for the broadcast transaction. If the result is uncertain after a network error, inspect history before starting another payment.

Sending all available funds can deduct the fee from what the recipient receives. Fixed-amount requests and PayJoin have different constraints. The preview is the place to check the actual recipient amount rather than assuming that the wallet balance can all arrive at the destination.

## Check the fee without custom settings

Review the total fee and estimated confirmation preference in the preview. A fee pays for transaction space; it is not simply a percentage of the payment. The time estimate can change and is not a guarantee.

Use an available fee estimate you understand. If estimates are unavailable and you are unsure what to choose, wait and investigate instead of guessing a very high custom fee.

## The leftover money is change

The payment may use a larger piece of bitcoin than the recipient amount plus fee. The leftover value returns to your wallet as change, sometimes at an address you have not seen before. You still control it; there is nothing to send back manually.

A privacy suggestion may change the proposed recipient amount. Accept it only if it still meets the recipient's request. In particular, do not underpay a fixed invoice to avoid change.

Optional advanced reference: [custom fee rates and change](/using-ginger/fee/), or [manual coin control and transaction history](/payments/coin-control-history/).

## When a payment cannot be prepared

Insufficient funds can mean there is not enough spendable value after fees, even if the displayed total balance looks sufficient. Funds can also be unconfirmed, tied up in a critical CoinJoin phase, or part of an unconfirmed chain that cannot currently be extended.

A missing send action during recovery is expected. A watch-only wallet cannot sign on its own. Lightning addresses and invoices are not supported by this release; request an on-chain Bitcoin payment address.
