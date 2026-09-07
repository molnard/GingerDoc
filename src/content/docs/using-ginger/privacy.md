---
doc_id: "learn-privacy.who-can-see"
title: "Who Can See My Bitcoin Transactions?"
description: "Learn what a Bitcoin address reveals, how identity and transaction links combine, and where Ginger privacy tools can help."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Reading level: Start here. The essential steps come first; advanced references are optional follow-up.

Bitcoin transactions are public, but a wallet owner's name is not automatically written beside every address. The practical question is who can connect an address or transaction to you, and what else they can infer from that connection.

A customer may know the invoice address you gave them. An exchange may know your withdrawal address and verified identity. Someone following a public donation address can observe its receipts. These observers start with different information, so privacy is more useful to think about as controlled disclosure than as a single anonymous/not-anonymous switch.

## What the blockchain reveals

Transactions show inputs, outputs, values, and their relationships through spending. An output later spent by another transaction creates a public connection. This does not automatically prove who owns every output: a transaction might be a payment, a transfer between your own wallets, or a collaborative transaction with several owners. The original [Bitcoin paper's privacy section](https://bitcoin.org/bitcoin.pdf) discusses the separation between public transactions and identities, and the problem of linking keys.

Once someone associates an address with a person, they can investigate connected activity. Some associations are direct, such as repeated payments to one address. Others rely on assumptions about common input ownership or which output is change. Those assumptions can be wrong, but can still influence how services classify transactions.

## Who can learn what?

| Observer | Information they may start with | What you can control |
| --- | --- | --- |
| A payer | The address you supplied and their payment | Give a fresh address for each receipt |
| A payment recipient | Your payment transaction and information from the purchase | Review selected inputs and avoid unnecessary identity disclosure |
| An exchange or purchase provider | Account records, payment details, deposit/withdrawal addresses | Understand the provider's records before using it |
| A public blockchain analyst | Transaction data plus labels obtained elsewhere | Avoid creating easy links; assess CoinJoin and subsequent spending habits |
| A contacted network service | Request contents and potentially connection metadata | Keep Tor enabled where supported and understand feature-specific disclosures |
| Someone accessing your computer or backups | Wallet files, labels, addresses, logs, possibly keys | Protect the device, recovery backup, and local metadata |

No single wallet setting addresses every row. A hardware wallet helps protect keys but does not conceal a public address. Tor helps with connection metadata but does not conceal information typed into a provider's form.

## Why this matters in ordinary life

If you invoice several clients to the same address, each client can see receipts intended for that address, including other clients' payments. A fresh address avoids that direct shared identifier. It does not automatically prevent later links if you spend all the receipts together.

If you pay someone from funds associated with a public donation campaign, the transaction can reveal more context than the payment amount alone. Keeping records of which coins belong to which activity helps you make an informed choice before spending.

Financial privacy can protect customer confidentiality, commercial information, personal relationships, and physical safety. Wanting those boundaries does not require having done anything wrong. The relevant question is whether another person needs access to the information to complete the interaction.

## Privacy and fungibility

Fungibility means units can be exchanged on equivalent terms. Bitcoin's transaction rules account for values, but people and services can classify outputs differently based on their apparent histories. Those judgments can introduce friction even when an output is valid under Bitcoin's rules.

Privacy tools can make some historical classifications harder to establish with confidence. They cannot require a provider to accept a transfer or erase a record the provider already has. Treat claims about “clean” coins or guaranteed acceptance with care: a wallet's privacy estimate and a service's policy are different things.

## Where Ginger fits

Ginger offers fresh-address receiving, local labels, coin control, Tor integration, compact-filter wallet synchronization, and CoinJoin. These let you reduce particular disclosures and inspect a payment before authorizing it. The desktop also supports hardware-wallet workflows for key protection.

Start with receiving at a fresh address and understanding your existing coins. If transaction-link privacy is a concern, learn what CoinJoin can and cannot change before enabling automatic rounds. For everyday choices, continue with [Privacy habits before and after a payment](/using-ginger/address-reuse/).

The aim is a deliberate improvement for your situation. Ginger cannot erase information an exchange already collected, promise acceptance by every service, or prevent a later voluntary disclosure from creating a new link.
