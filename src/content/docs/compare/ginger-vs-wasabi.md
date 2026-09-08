---
title: "Ginger Wallet vs Wasabi Wallet: Setup, Fees, and Trade-offs"
description: "Compare Ginger and Wasabi coordinator setup, CoinJoin costs, hardware-wallet workflows, and privacy limits to choose the right fit."
doc_id: "compare.ginger-vs-wasabi"
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

Ginger Wallet and Wasabi Wallet are open-source Bitcoin desktop wallets that let you hold your own keys and use CoinJoin. The main practical differences for someone starting CoinJoin are coordinator setup and coordinator fees.

**Ginger comes with its coordinator connection configured. Wasabi requires you to configure a coordinator before starting CoinJoin.** Ginger's coordinator normally charges 0.3% on eligible inputs above 0.03 BTC, with exemptions described below. Current Wasabi accepts only rounds without a coordinator fee. Both have mining costs.

Last checked: **7 September 2026**. Version scope: [Ginger v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26) and [Wasabi v2.8.2](https://github.com/WalletWasabi/WalletWasabi/releases/tag/v2.8.2). This comparison covers their documented workflows, not a benchmark of speed, reliability, or anonymity.

## At a glance

| Question | Ginger Wallet | Wasabi Wallet |
| --- | --- | --- |
| Who controls the signing keys? | You; the coordinator does not hold a custodial wallet balance for you. | You; CoinJoin is a self-custodial workflow. |
| What must I set up for CoinJoin? | The coordinator connection is included; review wallet settings before starting. | Choose and configure a compatible coordinator, then review wallet settings. |
| Is there a coordinator fee? | Normally 0.3% of each chargeable input's full value; inputs at or below 0.03 BTC and qualifying remixes are exempt. | The current client accepts rounds with no coordinator fee. |
| Can there still be other costs? | Yes: mining fees and possible unreturned small remainders. | Yes: mining fees and possible unreturned small remainders. |
| Can hardware-held keys sign CoinJoin inputs? | Not through the ordinary hardware-wallet workflow in this release. | Not through the current hardware-wallet workflow. |
| Can CoinJoin outputs go to hardware storage? | Yes, through a supported hardware wallet loaded as the output destination. | Yes, through the CoinJoin-to-wallet feature with a supported loaded wallet. |

The sections below explain the conditions behind these differences and link to the relevant documentation.

## Coordinator setup: one less decision with Ginger

A coordinator organizes a CoinJoin round between participating wallets. It is a separate service from the wallet application, and it does not need your recovery words or private keys.

Ginger's [released configuration](https://github.com/GingerPrivacy/GingerWallet/blob/v2.0.26/WalletWasabi.Daemon/PersistentConfig.cs) supplies a coordinator connection. After creating and backing up a software wallet, you can review the CoinJoin settings and start without first finding a coordinator address. See [using CoinJoin in Ginger](/using-ginger/coinjoin/).

Wasabi's [CoinJoin guide](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html) requires a configured coordinator before participation. It supports manual starting and optional automatic participation. Choosing a coordinator also means reviewing that operator's availability and policies.

Ginger's practical advantage here is a shorter setup path. A supplied connection does not guarantee an immediate round: confirmed funds, acceptable fees, an available service, and enough participating inputs are still needed.

## Privacy with future use in mind

You may want to improve your Bitcoin privacy today and use an exchange later. In a CoinJoin, your coins share a transaction with inputs from other participants. Those connections can matter when a custodial service reviews your deposit.

Ginger's coordinator screens participating inputs and excludes those that fail its risk checks. The aim is to limit exposure to flagged inputs from other participants—one potential source of additional scrutiny when you later use your bitcoin.

With Wasabi, whether comparable screening is applied depends on the coordinator you choose. Each receiving service still makes its own acceptance decisions.

## Fees: compare the complete cost

### Ginger's coordinator fee

The exemption threshold is **per input**, also called a coin or UTXO. It is not a limit on your wallet balance or the combined amount you register.

Under the current coordinator settings:

- An input worth **0.03 BTC or less** pays no coordinator fee.
- A larger input normally pays **0.3% of its full value**.
- Qualifying remixes can also be exempt, subject to the input's eligibility and the offered round.

For an input without another exemption:

| Input value | Coordinator fee | Mining fee |
| --- | --- | --- |
| 0.03 BTC | 0 satoshis | Additional |
| 0.10 BTC | 0.0003 BTC, or 30,000 satoshis | Additional |

These examples explain the calculation; they are not quotes for future rounds. The full rules and further examples are in [CoinJoin fees and privacy progress](/using-ginger/annonset/).

### Wasabi's coordinator-fee policy

Wasabi has accepted only rounds without a coordinator fee since version 2.2.0.0. Mining fees remain payable. Its documentation also describes rare output-allocation leftovers of up to 10,000 satoshis per CoinJoin that go to the coordinator. See [Wasabi's fee explanation](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html#fees).

### Budget beyond the headline percentage

Ginger can also leave a small remainder when allocating output amounts. For either wallet, compare the value of your participating inputs with **all outputs you own** from the completed transaction, including outputs received in another wallet. Repeated rounds and later transfers can add costs.

A zero coordinator fee is one component of the comparison. Transaction size, mining fee rates, output allocation, and the number of completed rounds affect what you ultimately spend. Ginger's [cost guide](/using-ginger/annonset/) explains how to reconcile those amounts.

## Hardware wallets: signing inputs and receiving outputs are different

Both applications support hardware wallets for ordinary receiving and signing payments. Their documented CoinJoin workflows require a software wallet to sign the participating inputs; the hardware device cannot serve as that signing source. See [Ginger hardware-wallet support](/using-ginger/hardware-wallet/) and [Wasabi's hardware-wallet guide](https://docs.wasabiwallet.io/using-wasabi/ColdWasabi.html).

Receiving the resulting coins is a separate operation. Both let you select another supported, loaded wallet as the CoinJoin output destination, including a hardware wallet. That can avoid a separate transfer after the round. It does **not** mean the hardware device signed the CoinJoin inputs, or that the outputs necessarily reached your intended privacy target before arriving there.

In Ginger, review the destination again after restarting because the selection resets. Keep separate backups for the software source and hardware destination. Never enter hardware-wallet recovery words into the desktop application to enable CoinJoin.

Follow [Ginger's cold-storage guide](/hardware-wallets/exchange-to-cold-storage/) or [Wasabi's CoinJoin-to-wallet explanation](https://docs.wasabiwallet.io/FAQ/FAQ-UseWasabi.html#can-i-coinjoin-to-another-wallet) for the supported workflow and its conditions.

## Privacy and service policies

Self-custody answers who can authorize spending. It does not settle every question about privacy or service availability. CoinJoin makes some ownership links harder to infer, but transactions remain public. An exchange retains its own records; later coin combinations, address reuse, or disclosures to a recipient can create new links. A wallet's privacy score is not a guarantee of anonymity or exchange acceptance. See [CoinJoin trust and limits](/learn-coinjoin/trust-and-limits/).

Ginger's operator, InvisibleBit LLC, publishes service restrictions, including restrictions concerning US locations and nationality. Its terms also allow third-party checks and refusal of particular inputs. Review the [current Ginger terms](https://github.com/GingerPrivacy/GingerWallet/blob/master/WalletWasabi/Legal/Assets/LegalDocumentsGingerWallet.txt) before using the service. With Wasabi, review the policies of the coordinator you configure; the wallet's fee policy does not establish that operator's admission or data-handling practices.

## Which fits your needs?

**Ginger is worth considering if you want a supplied coordinator connection** and its fee structure and service policies fit your needs. Start with [getting started](/getting-started/), establish your backup, and review the [CoinJoin controls](/using-ginger/coinjoin/) before participating.

**Wasabi is worth considering if you prefer to choose a coordinator and require rounds without a coordinator fee.** Check the operator and the full transaction costs before starting.

If you mainly need to receive, hold, and send bitcoin with a hardware wallet, compare the supported devices and ordinary payment workflows first. CoinJoin is optional; whether it helps depends on what information you want to protect and how you will spend the resulting coins.
