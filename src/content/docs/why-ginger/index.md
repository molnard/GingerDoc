---
title: "Why Use Ginger Wallet?"
description: "Choose Ginger's Bitcoin privacy tools for the information you want to protect, while understanding their limits."
doc_id: "learn-privacy.why-ginger"
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger is an open-source desktop wallet for on-chain Bitcoin. You control the keys, can receive at fresh addresses and review payments before signing. Optional CoinJoin helps make transaction ownership links harder to infer, while built-in Tor helps reduce direct IP exposure for the connections routed through it.

## Start with what you want to protect

- **Your spending keys:** keep a complete recovery backup and protect the signing computer. A supported hardware wallet can keep signing keys on a separate device.
- **Your payment history:** use fresh receiving addresses, keep useful local labels and review which coins a payment spends. [See what a Bitcoin transaction reveals](/using-ginger/privacy/).
- **Your connections:** keep Ginger's normal Tor protection enabled. An external browser has its own network behavior, cookies and accounts.

Receiving, sending and CoinJoin are separate actions. You can learn ordinary payments first and decide later whether CoinJoin addresses a privacy concern you have. Completed rounds cost fees and have no guaranteed completion time.

## Understand the limits

Bitcoin transactions remain public. Tor does not hide information submitted to the service receiving it. A purchase provider can associate an order with your identity, and a wallet's privacy score cannot guarantee anonymity or acceptance by an exchange.

Optional services also have specific data flows: buy/sell orders disclose their required details, 2FA uses a service during normal startup, and Secret Hunt can submit transaction references and ownership proofs. [Where your wallet information goes](/learn-privacy/information-sharing/) is an optional advanced reference for these choices.

Start with [everyday privacy habits](/using-ginger/address-reuse/) and keep a routine you can understand and recover. Open source makes inspection possible; it does not guarantee that every installation is free of bugs or that a compromised computer is safe.
