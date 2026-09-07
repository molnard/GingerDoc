---
doc_id: "buy-sell.sell-and-orders"
title: "Sell Bitcoin and Resolve Provider Orders"
description: "Complete a Ginger sell order with the provider exact amount and address, track status, and contact the right support service."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

<span id="how-it-works"></span>
<span id="step-1-selecting-your-country"></span>
<span id="step-2-entering-purchase-amount"></span>
<span id="step-3-choosing-an-offer"></span>
<span id="step-4-completing-the-transaction"></span>
<span id="step-5-viewing-transaction-history"></span>
<span id="bitcoin-purchase-faq"></span>
<span id="how-can-i-sell-bitcoin-through-ginger-wallet"></span>
<span id="do-i-need-to-select-my-country-before-selling-bitcoin"></span>
<span id="how-do-i-enter-the-amount-i-want-to-sell"></span>
<span id="are-there-minimum-and-maximum-limits-for-sales"></span>
<span id="how-do-i-choose-the-best-offer-for-my-sale"></span>
<span id="what-happens-after-i-accept-an-offer"></span>
<span id="how-do-i-complete-the-bitcoin-sale-transaction"></span>
<span id="can-i-view-my-past-sales"></span>
<span id="what-does-it-mean-if-a-transaction-is-on-hold"></span>
<span id="can-i-change-the-browser-used-for-redirection"></span>

> Reading level: Everyday use. Choose this guide when you need the task it describes.

A sale exchanges bitcoin for the payment method offered by a provider. Ginger helps obtain offers and prepare the on-chain payment, but the provider controls the fiat payout and order review. Read the provider's requirements before committing funds.

## Create and fund a sale

1. Open a synchronized wallet with spendable bitcoin and choose **Sell**. If the action is missing, check recovery progress and whether the wallet can send.
2. Select your country or region when requested. Enter the amount to sell and the currency in which you want to receive payment. Check the displayed units and limits.
3. Choose **Continue**, filter **Offers** by payment method, and compare the provider's net payout and charges.
4. Choose **Accept**. Complete the provider's browser steps until you receive its exact Bitcoin destination, amount, and any payment deadline.
5. Return to Ginger's sale dialog and choose **Send**. Enter or verify the destination and exact amount supplied by the provider. Do not assume the browser automatically filled every field correctly.
6. Review the transaction fee and recipient amount before confirming. The provider's requested amount must arrive after any fee subtraction; do not accidentally treat “send all” as payment of a fixed invoice.
7. Check the transaction history and **Previous Orders** for progress. Keep the provider order ID and transaction ID for your records.

The sale dialog preserves the provider context, but does not remove your responsibility to compare the payment request with the preview. If the quote expires before you send, obtain an updated instruction from the provider rather than paying an old address speculatively.

## Understand status

| Status in order details | What to do |
| --- | --- |
| **Created** | The order exists; check which provider steps remain before paying again. |
| **Pending** | Processing is still in progress. Compare provider status and wallet history. |
| **Your transaction is on hold. Please contact Support.** | Follow up with the selected provider using the order ID. Ginger cannot clear its review. |
| **Expired** | Do not assume an old quote or payment address remains usable. Ask the provider if funds were already sent. |
| **Failed** | Check whether payment or bitcoin was transferred before trying a new order. |
| **Refunded** | Confirm the refund method, destination, and settlement with the provider. |
| **Completed** | Verify the expected bitcoin receipt or fiat payout through the relevant wallet or payment account. |

Status labels reflect the provider integration's latest information and can lag behind events. A hold indicator on **Buy** or **Sell** points to an order that needs attention; it does not indicate a lost wallet key.

## Which support channel to use

For identity checks, payout delays, accepted payment methods, refund terms, or an order hold, contact the provider through its authenticated website. Provide the order ID and only the transaction information needed for that specific case. Keep private account details out of public GitHub issues.

For a Ginger crash, failure to open the browser, or an incorrectly displayed order, report the application version, operating system, error text, and steps through Ginger's official support links. Do not include recovery words, passphrases, 2FA secrets, wallet files, or complete logs without reviewing their contents.

## Privacy and fees

The provider can link its payment request to the identity or payment method you give it. Spending CoinJoined funds does not remove that record, and a provider can apply its own acceptance policy. Ginger cannot guarantee that every exchange will accept every transaction history.

Compare the quoted payout with the bitcoin amount, the provider's displayed fee, and the separate mining fee for your payment. Keep enough spendable value for the latter. A low wallet balance, a fee spike, or coins participating in a critical CoinJoin phase can prevent immediate payment of an otherwise valid order.
