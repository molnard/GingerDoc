---
doc_id: "buy-sell.buy"
title: "Buy Bitcoin Through Ginger Wallet"
description: "Compare provider offers in Ginger, complete a purchase in the provider browser flow, and track delivery to your wallet."
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
<span id="bitcoin-purchase-faq"></span>
<span id="how-can-i-purchase-bitcoin-through-ginger-wallet"></span>
<span id="do-i-need-to-select-my-country-before-purchasing-bitcoin"></span>
<span id="how-do-i-enter-the-amount-i-want-to-purchase"></span>
<span id="are-there-minimum-and-maximum-limits-for-purchases"></span>
<span id="can-i-view-my-past-purchases"></span>
<span id="what-happens-if-i-started-a-transaction-but-did-not-complete-it"></span>
<span id="what-does-it-mean-if-a-transaction-is-on-hold"></span>
<span id="how-do-i-choose-the-best-offer-for-my-purchase"></span>
<span id="are-there-additional-fees-when-purchasing-bitcoin"></span>
<span id="how-do-i-proceed-with-a-selected-offer"></span>
<span id="can-i-change-the-browser-used-for-redirection"></span>

> Reading level: Everyday use. Choose this guide when you need the task it describes.

**Buy** connects you to third-party offers for purchasing bitcoin. Ginger supplies the wallet interface and a receiving address; the selected provider handles its payment, eligibility, identity checks, and delivery process. Using a non-custodial wallet does not make a provider purchase anonymous.

## Request and compare offers

1. Open the wallet that should receive the bitcoin and finish any recovery scan. Choose **Buy**. The action can be available even when the wallet has no balance, including for a hardware wallet.
2. Select your country and, where requested, state or region. Availability is determined by the service, so use accurate information rather than assuming a country choice is only a currency preference.
3. In **Buy Bitcoin**, enter the purchase amount in the selected currency. Check the currency symbol and the minimum or maximum shown for the actual offer.
4. Choose **Continue** to see **Offers**. Filter by payment method if needed. Compare the estimated bitcoin received, total fiat cost, fees, provider, and payment method.
5. Choose **Accept** for the offer you intend to use. Ginger creates an order using a receiving address from the selected wallet and opens the provider's page in the configured browser.

Offers and limits are live service information, not permanent features of a release. A fixed maximum copied from an old article may no longer apply. A prominently placed offer is not a guarantee that it is best for your circumstances.

## Complete the provider steps

Check that the browser page belongs to the selected provider. Read the final amount, rate, charges, delivery terms, and any identity requirements before paying. The estimate displayed in Ginger may change before an order is finalized.

Ginger's offer tooltip describes its displayed fee as included in the quoted total. Check the provider's final checkout and your payment institution's terms for any other charges; do not assume the wallet can guarantee every bank or card fee.

The provider receives the purchase destination and order information. It may associate these with your payment instrument or identity. Even an offer labelled as not requiring document upload does not establish that the provider collects no data or can never ask for verification. Treat the actual checkout policy as authoritative for that order.

Do not send recovery words, private keys, or your wallet passphrase to complete a purchase. A provider needs a receiving address to deliver bitcoin, not access to the wallet that will receive it.

## Track the result

Open **Buy** → **Previous Orders** to inspect order status. Available actions depend on the order's state. Use **Order Details** to record the provider and **Order ID** if you need help.

A completed payment in your bank account is not the same event as Bitcoin confirmation. After the provider sends the transaction, let Ginger synchronize and check the wallet history. Verify the amount received and transaction status rather than relying solely on a browser success page.

If an order is on hold, expired, failed, or refunded, consult [Order status and selling](/using-ginger/sell/). Avoid starting another purchase just because a status update is slow; first establish whether the original payment was collected.

## Browser privacy

**Settings** → **General** → **Browser used by Ginger** controls how external links open. The browser has its own cookies, IP exposure, and account logins. Ginger's Tor setting does not automatically make an ordinary browser private. Tor also cannot hide identity details you submit directly to a provider.
