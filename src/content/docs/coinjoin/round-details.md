---
doc_id: "coinjoin.round-details"
title: "CoinJoin Rounds and Input Eligibility"
description: "Understand Ginger CoinJoin phases, input eligibility and retry behavior when ordinary start, pause and waiting-state checks do not explain the result."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Reading level: Advanced guide. First understand the ordinary start-and-pause controls and the fact that completed rounds cost fees.

Start with [the ordinary CoinJoin guide](/using-ginger/coinjoin/). Ginger manages the protocol automatically; this reference is for understanding a specific status or limitation.

## Why a balance may not be eligible

There is no fixed waiting time or universal minimum balance that guarantees participation. Eligibility depends on the round's parameters, coin sizes, confirmation status, fees, exclusions, and your wallet settings. A balance can be larger than the minimum input value while still containing no economical eligible coin.

## What happens during a round

| Phase | What your wallet is waiting for |
| --- | --- |
| Input registration | Eligible coins are proposed for the shared transaction. |
| Connection confirmation | Registered participants confirm that they remain available. |
| Output registration | Participants arrange the outputs they should receive through the protocol. |
| Signing | Wallets check the proposal and sign their own inputs. Keep Ginger available through this critical phase. |
| Blame round, when needed | A retry excludes participants that did not complete required steps. |
| Broadcast | The completed transaction is submitted to Bitcoin nodes, then awaits confirmation. |

These phases are managed by the application; you do not need to exchange keys or coordinate manually with strangers. The number of accepted inputs and resulting outputs is determined by the round and coin selection. There is no fixed input count or output count that you should expect for every wallet, and a wallet's total balance is not a promise that it can all join one round.

## Private coins and another output wallet

Normal v2.0.26 startup refuses a wallet or available candidate set whose coins already meet its privacy target. Selecting another output wallet does not force a private-only round. Check [the output-wallet settings](/coinjoin/settings/) before relying on a forwarding routine.

For score calculations and complete value reconciliation, use [fees and privacy progress](/using-ginger/annonset/).
