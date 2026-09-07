---
doc_id: "learn-privacy.information-sharing"
title: "Where Your Wallet Information Goes"
description: "Understand what Ginger synchronization, CoinJoin, providers, explorers, 2FA, Secret Hunt, and other wallet apps can reveal and what Tor changes."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Reading level: Advanced guide. First understand fresh receiving addresses and ordinary payment review.

Different wallet actions disclose different information. Checking public block filters, submitting a CoinJoin input and opening a purchase page are not the same privacy event. Use this reference before sharing something you cannot take back.

Tor reduces direct IP exposure for connections routed through it. It does not hide a request from the service receiving it, remove a transaction from the blockchain, protect an unlocked computer, or automatically change your external browser. A configured local node is a separate connection to a machine you control.

## Synchronization and Bitcoin network activity

| Action and recipient | Information involved | What you can choose |
| --- | --- | --- |
| Download synchronization data from Ginger's backend | The client requests public filters from its current synchronization position. It matches wallet scripts locally rather than submitting an account xpub in this request. The service still observes requests and their timing. | Keep Tor enabled; allow synchronization to finish without treating the backend as blind to all usage. |
| Download a matched block from a block source | The source learns which full block was requested. A match can be a false positive; requesting a block is not proof that you own a particular transaction in it. | A properly configured own node can supply blocks. A node setting does not replace every other service Ginger uses. |
| Request fee estimates | The configured provider receives a request for public fee information. This request is different from looking up your transaction or wallet balance. | In **Fee Rate Provider**, choose among the released sources as appropriate; an own-node option requires a working configured node. |
| Broadcast a payment | A peer or fallback broadcast service receives the signed transaction. Its inputs, outputs and amounts become visible as it propagates. | Review before signing. Tor changes connection exposure, not the content of the payment. Ginger can use fallback broadcast paths if an earlier attempt fails. |

For a Bitcoin node you operate, protect access to its machine and any remote connection. Its operator can observe requests, so a server merely called “your node” is not necessarily private if someone else administers it. Normal Internet access, peer discovery and service availability still matter.

## CoinJoin and optional services

| Action and recipient | Information involved | What you can choose |
| --- | --- | --- |
| Participate with a CoinJoin coordinator | Submitted inputs and ownership proofs, output registrations, protocol messages and timing. WabiSabi aims to obscure the mapping between inputs and outputs, under its assumptions. | Review participation, costs and destination; keep Tor enabled. Do not equate non-custodial operation with protection from every active observer. |
| Request buy/sell offers and validate an address | Offer parameters include the chosen country, currency, amount and payment method where applicable. Address validation sends the proposed address to the buy/sell service before completion of an order. | Consider this disclosure before continuing, even if you later abandon the purchase or sale. |
| Create or continue a buy/sell order | The integration submits order details and a receiving or refund address, then opens the provider flow. A provider can request payment, contact or identity information under its own terms. | Read the selected provider's current terms and supply only what you intend. Ginger does not turn an identified purchase into an anonymous one. |
| Use optional Ginger 2FA | Normal startup verification sends an authenticator code with an installation identifier. The service returns the key used for the additional wallet-file encryption layer. | Decide whether that access protection and service dependency suit you. Keep recovery words and any original passphrase independently available. |
| Participate in Secret Hunt checks | Eligible event checks can submit a round ID, transaction ID, input outpoint and proof of control of the input. An outpoint identifies a particular output of a previous transaction. | Open **Secret Hunt** and review the switch described as **Enable/disable the use of this wallet for Secret Hunt.** It defaults to enabled, though relevant events need not be active. Turning it off does not retract earlier requests. |

Tor does not conceal an address submitted for validation, an order's details, a 2FA identifier or a Secret Hunt ownership proof from their receiving service. These observations also do not mean that the service receives recovery words or authority to spend simply because it sees a transaction identifier.

The 2FA identifier can associate normal startup attempts at that service. The returned encryption key is part of an additional local-file protection scheme, not a new Bitcoin key that replaces your recovery words and passphrase. Do not send either those secrets or authenticator codes to support contacts.

## Browsers, other applications and people

| Action | What may be disclosed | Useful habit |
| --- | --- | --- |
| Open a public explorer | The queried transaction/address and the browser's network and session information | Start with Ginger's local history; only open an explorer when its extra information is needed. |
| Use a provider website | Order details, login/payment information, cookies and site-specific browser observations | Treat the browser session separately from Ginger's Tor setting. |
| Import an xpub or use the same account in another app | A public address branch or wallet-derived queries, depending on that app | Check its synchronization and data-sharing behavior before importing. “Watch-only” describes spending authority, not confidentiality. |
| Share an address in a message or public post | A link between that address and the person or account sending it | Share a fresh address with the intended payer through a trusted channel. |
| Share logs, wallet files or screen contents | Depending on the material: paths, labels, addresses, transaction/round identifiers and possibly secrets | Share the smallest relevant, reviewed excerpt. Never send complete wallet data or recovery secrets merely because someone requests them. |

Web-payment research shows why browser observations and blockchain information should be considered together. It does not establish the current tracking policy of a particular Ginger provider. [Goldfeder and colleagues, When the Cookie Meets the Blockchain](https://arxiv.org/abs/1708.04748)

## Local information also needs protection

Labels, privacy accounting and provider-order records can live in wallet metadata. They are useful for later decisions and recovery, but are not all protected identically to signing keys. Protect the computer, backups and accounts that can access them. **Discreet Mode** helps with supported on-screen fields; the operating system's screen lock protects unattended access more broadly.

A restoration from words can recover spendable keys without restoring all private notes. Deleting those notes is not a way to erase information already held by a recipient or service. Before changing installations, read [wallet migration](/learn-privacy/wallet-migration/); before sending a payment, review [privacy habits](/using-ginger/address-reuse/).
