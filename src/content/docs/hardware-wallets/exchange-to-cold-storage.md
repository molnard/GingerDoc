---
doc_id: "hardware-wallets.exchange-to-cold-storage"
title: "From an Exchange to Cold Storage with Ginger"
description: "Withdraw bitcoin, use Ginger CoinJoin, and move funds to a verified hardware wallet while accounting for fees and preserving privacy."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Reading level: Advanced guide. First establish a verified hardware wallet and its independent backup.

Ginger can help you separate future bitcoin activity from an exchange withdrawal before storing funds on a hardware wallet. The exchange retains its withdrawal record. The hardware wallet protects signing keys; the transactions and your later spending still determine what others can infer.

There are two different routes. Choose one before starting so you know where the outputs should appear.

| Route | What happens | Main consideration |
| --- | --- | --- |
| CoinJoin in the software wallet, then make an ordinary transfer | Outputs stay in Ginger's software wallet until you select funds and send them to hardware | You can review their privacy first; each later transfer costs a fee and exposes its input/output relationship |
| Receive CoinJoin outputs directly in the hardware wallet | An eligible software wallet signs the CoinJoin; its outputs go to the loaded hardware wallet | Avoids a separate transfer for those outputs, but they leave the source after that round, without a guarantee that they meet your target |

## Prepare both wallets

1. Use a verified Ginger installation. Create and back up the software wallet with its recovery words and original passphrase. Keep only the amount you intend to process in this wallet.
2. Initialize and back up the hardware wallet through its manufacturer's supported process. [Connect it to Ginger](/using-ginger/hardware-wallet/) and let the wallet synchronize.
3. In the hardware wallet, choose **Receive** and use **Show on the hardware wallet** when available. Compare the entire receiving address on the device and computer. Complete a small receiving and signing test before relying on a new setup for a larger amount.
4. Give the wallets distinct names so you can recognize the source and destination. Keep a recoverable backup for each; a backup of the software wallet does not recover a hardware wallet with different keys.

Never type the hardware wallet's recovery words into Ginger to make CoinJoin work. That would give the desktop access to the hardware wallet's signing keys.

## Withdraw from the exchange

In the software wallet, choose **Receive**, add a useful label and create a fresh address. Copy that address into the exchange's Bitcoin withdrawal flow and verify the complete address and network before authorizing the withdrawal there. Ginger uses on-chain Bitcoin; a Lightning invoice or another asset's network is not interchangeable.

Record the exchange withdrawal fee separately. The amount arriving in Ginger may be lower than the amount debited by the exchange. Wait for the wallet to synchronize and for the received funds to confirm before expecting them to participate in CoinJoin. A transaction ID is useful for reconciliation, but avoid publishing it or searching it repeatedly on public explorers.

## Route A: review CoinJoin results, then transfer

1. In the source wallet's **Coinjoin Settings**, leave **Coinjoin to this wallet** set to the source. Review the target, fee preferences and excluded coins before starting participation with the player's play control.
2. Monitor completed rounds and the coins' privacy information. You can pause to review fees and progress. If a round is in a critical phase, let Ginger finish the required work instead of terminating the application.
3. Obtain a fresh hardware receiving address and verify it on the device. In the software wallet, choose **Send** → **Manual Control** and select the funds you intend to move.
4. Review the actual selected inputs, destination, recipient amount, change and fee. Confirm the transfer only when these match your intention.
5. Check the hardware wallet's synchronized history and the source wallet's remaining coins. Wait for the transfer to confirm before treating it as completed.

Sending every output together creates a visible association between them. Moving individual coins avoids that particular multi-input association but costs additional fees and still reveals a transaction for each transfer. Amounts, timing and information held by an observer can provide other links. Choose a manageable transfer plan; do not assume either approach guarantees anonymity.

## Route B: choose hardware as the CoinJoin destination

Use this route while the software wallet still has eligible funds for CoinJoin. The normal v2.0.26 flow rejects participation when the wallet, or all available candidates, is already private under its target. Selecting another destination does not bypass that check. In particular, excluding every non-private coin is not a reliable way to force an extra round containing only completed coins. Use Route A for those funds instead of changing the target merely to defeat the stop condition.

1. Load and verify the hardware wallet in Ginger. Stop CoinJoin participation in the source and wait until the destination selector becomes available.
2. Open the source wallet's **Coinjoin Settings**. Set **Coinjoin to this wallet** to the intended hardware wallet. Select only a destination offered by Ginger.
3. Review **Exclude Coins** for funds that must remain outside CoinJoin. Exclusion applies to specific coins and does not reserve every future receipt from the same source.
4. Recheck the selected destination and start participation. Keep the application running while it completes the round.
5. After a successful round, inspect both wallets. Only selected inputs were spent, and the resulting outputs may be split across several coins. The remaining source balance is not necessarily a failure.

The destination receives the outputs of the completed round; this setting does not wait for a separate target-achievement event before forwarding them. Review their resulting privacy information. Hardware-held funds cannot subsequently supply CoinJoin inputs through this release's ordinary hardware-wallet flow.

The destination selection resets after Ginger restarts. Check it again before each session. You cannot change it while participation is active, and changing it after a transaction is signed cannot redirect that transaction. Verify any automatic-participation setting explicitly rather than assuming a permanent background transfer arrangement.

## Reconcile balances and plan the next spend

Compare the source decrease with the outputs received in hardware and the source's remaining funds. The difference can include CoinJoin costs. A source balance of zero does not mean the funds were lost if the intended destination received them. Conversely, a successful round does not mean every source coin moved or reached the target.

When you later spend from hardware, review coin selection again. Combining unrelated coins can reveal associations regardless of where their signing keys are stored. Use a fresh recipient address, inspect change and confirm the payment on the device. The [PSBT workflow](/hardware-wallets/psbt/) offers a supported file-based signing route for suitable hardware; it does not change the privacy consequences of the transaction you sign.

If you suspect the signing keys are already compromised, protecting remaining funds takes priority over waiting through a privacy workflow. A new device containing the same exposed seed does not revoke that seed.
