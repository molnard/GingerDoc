---
doc_id: "help.glossary"
title: "Bitcoin and Ginger Wallet Glossary"
description: "Understand the terms used in Ginger: UTXO, change, passphrase, CoinJoin, anonymity score, Tor, PSBT, and more."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Reading level: Everyday use. Choose this guide when you need the task it describes.

## Amounts and transactions

| Term | Meaning for a wallet user |
| --- | --- |
| Bitcoin / BTC | The network and its monetary unit. A wallet manages keys and transactions rather than storing physical coins. |
| Satoshi / sat | One hundred-millionth of a bitcoin: 100,000,000 sats = 1 BTC. |
| Address | A payment destination derived from spending conditions. Use a fresh one for each receipt. |
| UTXO / coin | An unspent transaction output available to be spent as a whole input. |
| Input | A reference to a previous output being spent. Several inputs can fund one transaction. |
| Output | A new destination and value created by a transaction. |
| Change | Value returned to your wallet when selected inputs exceed the payment plus fee. |
| Transaction ID / txid | An identifier for a transaction. Sharing it reveals which public transaction you are discussing. |
| Mempool | A node's collection of unconfirmed transactions. Different nodes can have different views. |
| Confirmation | Inclusion in a block, followed by further blocks building on it. |
| Fee rate | Satoshis paid per virtual byte of transaction size; distinct from total fee. |
| vByte | The size unit used to compare fee rates across transactions with different witness data. |
| RBF | Replace-by-fee: a pending transaction may be replaced under node policy, commonly to increase its fee. |
| CPFP | Child-pays-for-parent: spending an output with a higher-fee child can encourage confirmation of its unconfirmed parent too. |
| Dust | An amount too small to be useful under a particular policy or cost assumption. A wallet threshold and network policy are not necessarily the same. |

## The network in context

| Term | Meaning for a wallet user |
| --- | --- |
| Block / blockchain | A batch of transactions and the chain of blocks building on earlier history. |
| Miner / proof of work | A participant assembling candidate blocks and performing the work used by Bitcoin's chain-selection rules. |
| Coinbase transaction | The first transaction of a block, creating its permitted mining reward; unrelated to a particular exchange account. Its outputs require maturity before spending. |
| Consensus rules | Rules a validating node applies to decide whether blocks and transactions are valid. |
| Difficulty | A measure governing the proof of work required for a block; it does not determine your wallet balance. |
| Mainnet / RegTest | The real Bitcoin network and a separate local testing mode, respectively. Coins do not move between them. |
| BIP | A Bitcoin Improvement Proposal, documenting a proposed standard or process. A published BIP does not mean every wallet implements it. |
| HD wallet | A hierarchical deterministic wallet deriving many keys from initial secret material and conventions. |
| Hash | A compact identifier calculated from data. A transaction ID identifies data, not a person's account name. |
| Fungibility | The practical interchangeability of units; third-party history classifications can affect their treatment even when they are valid bitcoin. |

Lightning, payment channels, multisignature construction, public testnet/Signet setup, and scripting internals are outside this release's documented end-user workflows. Their presence in a general Bitcoin glossary does not establish a Ginger feature.

## Keys and recovery

| Term | Meaning for a wallet user |
| --- | --- |
| Private key | Secret information that authorizes spending. Never share it with support. |
| Public key | Information used to verify signatures; it is not a spending secret, but can still be privacy-sensitive. |
| Recovery words / mnemonic / seed phrase | The ordered word backup from which wallet keys can be recreated with the correct passphrase and wallet conventions. |
| BIP39 passphrase | Additional text used with recovery words to derive a wallet. Every different passphrase selects different keys. |
| Device PIN | A hardware-wallet access control. It is not the same as a BIP39 passphrase. |
| 2FA | A second authentication factor. Ginger uses an authenticator and service-dependent local wallet-file encryption at startup. |
| xpub / extended public key | Information that can derive many related public addresses. It cannot directly sign, but can expose a wallet's activity. |
| Derivation path / account | A convention identifying a branch of a wallet's keys. Recovery tools need compatible conventions. |
| Gap limit | The run of unused addresses a recovery scan tolerates before stopping its search along a branch. |
| Watch-only wallet | A wallet record that can observe activity but lacks the local signing keys. A hardware device may supply signing separately. |
| Hardware wallet | A separate device designed to protect keys and approve supported transactions. |
| PSBT | A partially signed Bitcoin transaction file carrying a proposed transaction and signing information. |
| SegWit / Taproot | Bitcoin output and spending formats. Native mainnet receiving addresses commonly start `bc1q` and `bc1p`, respectively. |

## Privacy and Ginger

| Term | Meaning for a wallet user |
| --- | --- |
| CoinJoin | A collaborative transaction with inputs from multiple participants, intended to make ownership links harder to infer. |
| WabiSabi | The credential-based protocol used for Ginger's CoinJoin coordination. It does not erase the transaction from the blockchain. |
| Coordinator | A service organizing a round. It can affect availability and eligibility without normally holding the participants' private keys. |
| Remix | Further CoinJoin participation using funds meeting the service's remix conditions; mining fees can still apply. |
| Anonymity score | Ginger's local estimate used to classify coin privacy, not a verified headcount of independent people. |
| Anonymity set | A conceptual group of plausible alternatives. It is not automatically identical to the wallet's calculated score. |
| Cluster | Addresses or coins an observer infers belong together. Some associations are facts; others are fallible heuristics. |
| Address reuse | Receiving more than once at the same address, directly linking those receipts. |
| Coin control | Deliberate inspection and selection of coins for a payment. |
| Tor | A network relay system helping separate an application's connections from the user's IP address. |
| Block filter | A compact summary used to identify blocks that may contain wallet-relevant transactions before processing those blocks locally. |
| Full node | Software validating Bitcoin data against its consensus rules. It has a different role from a CoinJoin coordinator. |
| PayJoin | A collaborative payment in which the receiver can contribute an input. Ginger's released sending flow has fallback and compatibility limits. |
| Discreet Mode | Concealment of supported sensitive display fields, not encryption or a wallet lock. |
| KYC | A provider's identity-verification process. Tor does not hide information submitted directly to it. |
| Fiat | Government-issued currency, used for quotes or display estimates; distinct from the BTC settled on-chain. |

Terms such as “private” and “secure” describe different properties. Ask what is protected, from whom, and under which conditions rather than treating either word as an unconditional guarantee.
