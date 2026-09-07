---
doc_id: "learn-privacy.habits"
title: "Bitcoin Privacy Habits Before and After a Payment"
description: "Apply practical habits around receiving addresses, labels, coin selection, browsers, and support requests when using Ginger Wallet."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Reading level: Start here. The essential steps come first; advanced references are optional follow-up.

Privacy improvements are easiest to keep when they fit the way you actually use bitcoin. Before changing a setting, identify the information you want to disclose less widely and the person or service that could see it.

## Before receiving

Generate a fresh address for the specific payment and use a local label that will make sense later. Avoid a single reusable public address for unrelated receipts when you can provide individual payment requests. Verify hardware-wallet addresses on the device.

Think about the communication channel too. If you send a receiving address from an identified account, that recipient can associate the address with you even though the blockchain itself has no name field. A fresh address reduces reuse; it does not erase the conversation in which you shared it.

## Before sending

Review where the available coins came from. Combining payments from separate activities can disclose that their inputs were spent together. In Ginger, **Manual Control** can help you inspect and choose coins, while automatic selection and privacy suggestions can assist with ordinary payments. Always review the resulting preview.

Ask for a fresh destination and confirm the amount and address. If a suggestion avoids change by modifying the recipient amount, make sure the recipient actually accepts the revised amount. Privacy is not improved by sending a payment to the wrong person or underpaying an invoice.

## After CoinJoin

Treat resulting coins as funds whose future handling still matters. Combining all outputs into one subsequent transaction can create a new association. Reusing an identified address or spending through an identified provider creates further information, regardless of the score Ginger displayed before the payment.

An analyst may also compare timing and amounts across transactions. There is no universal waiting period that guarantees safety. Plan how you intend to spend instead of expecting one round or a fixed delay to solve every form of observation.

## On the network and computer

Keep Tor enabled for the wallet's intended private network use. It routes connections through relays to reduce direct IP exposure; the [Tor Project's explanation](https://support.torproject.org/about-tor/introduction/what-is-tor/) describes its role. Tor does not conceal what you explicitly submit to the service at the other end.

Check the browser used for provider and explorer links. Your usual browser can carry logged-in accounts and identifying cookies. Ginger's browser preference and its own Tor setting are separate. Prefer local wallet history over repeated public explorer searches for your own addresses.

Use **Discreet Mode** for supported on-screen fields when someone can see your display, and the operating system's lock when stepping away. Protect backup media and local labels. A watch-only wallet can leak financial activity even without exposing signing keys.

## When asking for help

Describe the version, operating system, error, and non-secret reproduction steps. Share only the smallest relevant, reviewed log excerpt. Do not post an xpub, entire wallet data folder, recovery words, or authenticator QR code. A support volunteer cannot repair a missing passphrase by receiving your secrets safely in a public channel.

## Choose a sustainable routine

For an occasional payment, fresh addresses, careful previews, protected backups, and Tor may be the first improvements to establish. If you need stronger transaction-link privacy, assess CoinJoin's fees, service conditions, and post-CoinJoin spending behavior. A complicated routine you cannot recover or consistently follow can create different risks from the ones you hoped to reduce.

For donations or installments, see the everyday guide to [repeated payments](/learn-privacy/repeated-payments/). Optional advanced guides cover [spending after CoinJoin](/learn-privacy/spending-after-coinjoin/), [wallet migration](/learn-privacy/wallet-migration/) and [where wallet information goes](/learn-privacy/information-sharing/). Choose one when you need that specific decision; they are not required steps for your first payment.
