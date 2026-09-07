---
doc_id: "payments.receive"
title: "Receive Bitcoin and Manage Addresses"
description: "Generate a Ginger receiving address, choose SegWit or Taproot where supported, label payments, and check confirmations."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Reading level: Start here. The essential steps come first; advanced references are optional follow-up.

Use a fresh receiving address for each payment. The address tells a payer where to send bitcoin; it does not reveal your recovery words. Reusing it, however, lets observers link payments to that same destination.

## Request a payment

1. Open the intended wallet and wait for recovery or synchronization to finish.
2. Choose **Receive**. Add a label describing the payer or purpose, such as “June invoice.” Use enough detail to recognize it later without recording unnecessary personal data.
3. Choose **Generate**. The normal action creates a native SegWit address. If the wallet supports Taproot, the alternative action offers **Taproot**, shown with **TR**; use it only when the payer supports that address type.
4. Copy the address or share the receiving QR code. For a hardware wallet, use **Show on the hardware wallet** and compare the complete address on the device before giving it to the payer.
5. Check the destination after pasting it into another application. Clipboard malware can substitute an address even when the original QR or wallet display was correct.

On Bitcoin mainnet, native SegWit receiving addresses normally begin with `bc1q`; Taproot addresses begin with `bc1p`. Test-network addresses differ. If a service rejects a supported Bitcoin address, check its network and address-type support with that service rather than altering characters in the address.

## Labels and unused addresses

**Addresses Awaiting Payment** shows receiving addresses that have not yet received a payment and are still offered in that list. You can inspect their QR codes, copy them, change their labels, or hide an address through the available actions.

Hiding an address does not revoke it on Bitcoin. A payment to a previously generated address still belongs to the wallet if you control its keys. Used addresses can disappear from the awaiting-payment list by design; this encourages fresh addresses rather than indicating that the old keys were deleted.

Labels are local wallet metadata, not messages written into the blockchain or automatically delivered to the payer. They can still be exposed through backups, logs, exports, or sharing your screen. Keep a file backup if labels are important to you: recovery words cannot reconstruct them.

## Know when you have been paid

The sender broadcasting a transaction, Ginger seeing it as unconfirmed, and a miner including it in a block are different events. Check the wallet history and transaction details. An unconfirmed payment can be replaced or fail to confirm; decide how much confirmation assurance the situation needs before providing something irreversible in return.

Ginger can receive while the application is closed. The payer needs a valid address, not an online wallet. When you reopen it, synchronization finds the transaction. A CoinJoin or a payment sent to a different loaded wallet will only appear in the wallet controlling its outputs.

## If the payment is missing

Ask the sender for the transaction ID and verify the destination through your existing communication channel. Check the selected wallet, mainnet versus testnet, synchronization status, and whether the sender actually broadcast a transaction. Avoid pasting every address into a public explorer: the explorer learns what you query.

If you restored from words and generated many unused addresses in the past, the recovery gap limit may matter. A new receive request alone does not repair an incomplete historical scan. Preserve backups before attempting a rescan or recovery.
