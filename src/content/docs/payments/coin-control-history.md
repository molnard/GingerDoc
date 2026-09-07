---
doc_id: "payments.coin-control-history"
title: "Coin Control, History, and Stuck Transactions"
description: "Inspect Ginger UTXOs and payment history, select coins deliberately, and understand when speeding up or cancelling is possible."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Reading level: Advanced guide. First understand the normal send preview, recipient amount and fee.

The total wallet balance can contain many separate coins with different origins, confirmation states, and privacy histories. Coin control helps you decide which of them to spend. It also makes it easier to accidentally link funds that were previously separate, so use it with a specific purpose.

## Inspect and select coins

Open the wallet's menu and choose **Wallet Coins**. Inspect the amount, labels, confirmation information, and privacy data of the coins you own. A transaction can create several coins, and one address can receive several separate payments; neither a row nor an address is necessarily a whole wallet.

Choose **Send** → **Manual Control** to work with individual coins in the payment flow. Select enough value for both payment and fee. Review the resulting inputs and change before confirming. Selecting coins makes them available to the transaction builder; review the final preview to see which are actually used.

Keep labels that explain where funds came from or who already knows about them. Paying from coins already associated with the same recipient can reveal less new information than combining unrelated sources. A label does not itself establish anonymity or block someone else's blockchain analysis.

## Consolidation and small coins

Consolidation spends multiple small coins into fewer outputs, usually to a wallet you control. It costs a fee now and may reduce the number of inputs needed for a later payment. It also publicly associates the selected inputs. Low fee conditions can make consolidation cheaper, but do not remove that privacy tradeoff.

Do not combine unrelated coins automatically just to produce a tidy coin list. Very small incoming outputs can be uneconomical to spend. Ginger's dust threshold and CoinJoin exclusions address different situations; excluding a coin from CoinJoin does not prevent you from selecting it for an ordinary payment.

Sending funds to your hardware wallet is an ordinary on-chain transaction if you use **Send**. Obtain and verify a fresh hardware receiving address, then review the software wallet's fee and selected coins. The transfer itself remains visible on the blockchain.

## Read transaction history

The wallet home screen shows incoming, outgoing, and CoinJoin activity. Expand grouped CoinJoin entries when you need to inspect individual rounds. Sorting controls help compare date, amount, labels, and status. Open transaction details to inspect the transaction ID and available confirmation or fee information.

Use **Copy Transaction ID** when you need to identify a specific transaction. Keep transaction IDs private where possible: sharing one can disclose addresses, amounts, and links to other activity. A public explorer also learns the queries you make. Ginger's local history is the first place to check your own payments.

You can inspect, sort and group history, and copy transaction IDs. This release does not offer a transaction-search or CSV-export control in this history workflow.

## Speed up an unconfirmed transaction

When Ginger offers **Speed Up Transaction** for a history item, open it and review the extra fee before confirming. Depending on the transaction and available outputs, fee acceleration can replace a transaction with a higher-fee version or spend an output in a child transaction that pays enough for both.

Not every transaction can be accelerated by your wallet. It needs a supported transaction structure and access to the relevant keys and funds. A higher fee improves the incentive for miners; it does not guarantee immediate confirmation. Replacement can change the transaction ID, so check the updated history when coordinating with a recipient.

## Cancel an unconfirmed transaction

**Cancel Transaction**, when offered, attempts to replace the pending payment with a transaction returning the relevant funds to your control and paying a fee. It is a race with confirmation of the original payment, not an undo command accepted by every node.

Read the cancellation dialog and fee, confirm only if that is your intention, and monitor what actually confirms. If the original transaction confirms first, the cancellation cannot reverse it. Once a payment is confirmed, ask the recipient for a separate refund if appropriate; Ginger cannot retrieve it.

Do not initiate a second payment or promise a refund until you understand which transaction has confirmed. An explorer and your wallet can temporarily show different mempool information because they see different nodes.
