---
doc_id: "help.faq"
title: "Ginger Wallet FAQ: Start Here"
description: "Get short answers about missing funds, backups, recovery, CoinJoin waiting and fees, pending payments, hardware wallets and safe support."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Reading level: Start here. Short answers and first checks come before optional advanced follow-up.

Start with the question closest to what you see. These answers cover ordinary use and the first safe checks; the separate [advanced FAQ](/help/advanced-faq/) is optional follow-up for custom settings and special cases.

- [Start here](#start-here)
- [Recovery and missing funds](#recovery-and-missing-funds)
- [Connection and updates](#connection-and-updates)
- [CoinJoin basics](#coinjoin-basics)
- [Payments and hardware](#payments-and-hardware)
- [Getting help safely](#getting-help-safely)

## Start here

### What is Ginger, and does it hold my bitcoin?

Ginger is a desktop application for receiving and sending on-chain Bitcoin, with optional CoinJoin privacy features. You control the keys that authorize spending; a CoinJoin coordinator does not receive custody merely because you join a round. Protect the computer and recovery backup, because control of keys does not remove the possibility of theft, mistakes or lost access.

### Is there an official mobile or web wallet?

The v2.0.26 release provides desktop software for supported Windows, macOS and Linux computers. It does not provide an Android, iOS or browser wallet, Lightning payments, or other cryptocurrencies. Start at the [official Ginger website](https://gingerwallet.io/) and its release links; do not enter recovery words in an app or website merely because it uses the Ginger name.

### Do I need an account, my own node or a hardware wallet?

No. Normal software-wallet creation uses local recovery information and does not require a customer account, your own Bitcoin node or a hardware device. Optional 2FA uses a service, and buy/sell providers can require accounts or identity information, so those features have additional requirements.

### Do I have to use CoinJoin before receiving or sending?

No. Receiving, ordinary sending and CoinJoin are separate actions. Review **Automatically start coinjoin** in **Coinjoin Settings** if you do not want unattended participation while learning; if a round is already active, pause it and allow critical work to finish.

### Can I buy bitcoin in Ginger or receive an exchange withdrawal?

You can use a fresh address from **Receive** for an on-chain Bitcoin withdrawal, checking the address and network before authorizing it at the exchange. Ginger also has **Buy** and **Sell** provider flows where available. Check the selected provider's current terms, quote and order status; a provider's purchase confirmation is not the same as a confirmed Bitcoin receipt.

## Recovery and missing funds

### What do I need to back up?

Keep the recovery words in their original order and the exact original passphrase if you used one. Record that the passphrase was empty if the wallet was created without one. These recover access to the keys; labels and some other local records need a separate file backup.

### Is my passphrase just a password I can reset?

No. For a Ginger software wallet, the original passphrase helps determine which Bitcoin keys are recovered, as well as protecting the stored secret. Different words or a different passphrase can lead to a different, valid wallet. A wallet name, hardware PIN or authenticator code is not a substitute.

### I have the words but forgot the passphrase. Can Ginger reset it?

Ginger cannot reset the original passphrase and keep the same wallet keys. Check your private backup records and preserve any installation where spending access remains. If you can still spend but cannot establish a complete recovery backup, create and verify a fresh wallet backup and carefully transfer the funds; never send the words to a supposed recovery helper.

### Can Ginger show my recovery words again?

The creation flow warns that it will not show them again afterward. **Wallet Settings** → **Tools** → **Verify Recovery Words** checks the words you provide; it does not reveal a forgotten backup. If access remains but the backup is lost, establish and verify a new wallet backup before moving funds carefully.

### Why is my recovered wallet empty or missing transactions?

Check the selected wallet, the original words and exact passphrase, and whether synchronization and recovery have finished. A passphrase typo can open a different valid wallet without producing a wrong-password error. Preserve the old files and compare a known transaction before changing settings; [recovery troubleshooting](/help/troubleshooting/#balance-recovery-and-receiving) gives the first checks.

### The sender says paid. Why have I received nothing?

Ask for the Bitcoin transaction ID and check the intended receiving address and network. A service can mark an order paid before broadcasting its Bitcoin transaction, and Ginger also needs to synchronize before showing it. Check the transaction and local progress before asking the sender to pay again; see [receiving troubleshooting](/help/troubleshooting/#balance-recovery-and-receiving).

### Will changing the network make missing bitcoin appear?

Use Main for real on-chain Bitcoin. Another network has different coins; selecting it does not move or recover mainnet funds. Check the intended wallet and synchronization instead of changing networks to make a connection indicator look better.

### Why has a receiving address disappeared? Does it expire?

An address can leave the awaiting-payment list after payment or hiding; that does not invalidate its keys. An old address can still receive bitcoin, so preserve its backup. Use a fresh address for each new payment to avoid directly grouping receipts at one public address.

### Why are Receive or Send missing?

Recovery may still be scanning and can hide ordinary wallet actions until it finishes. A watch-only wallet also needs its signing device or another supported signing path to spend. Check the wallet type and progress before reinstalling or creating replacement words.

### I lost my authenticator or my 2FA code is rejected. What now?

Check the correct authenticator entry, phone time and Ginger's Tor/service connection. Preserve the existing wallet and 2FA files; reinstalling does not recreate a lost authenticator secret. Recovery words plus the exact original passphrase provide an independent key-recovery route; use [2FA troubleshooting](/help/troubleshooting/#2fa-and-hardware) before changing files.

## Connection and updates

### Do I need Tor Browser or a VPN to make Ginger work?

Ginger includes Tor for its ordinary wallet connections; you do not need to install Tor Browser merely to run the wallet. A separate browser or VPN does not automatically fix Ginger synchronization and does not hide information you send to a provider. Keep the normal Tor protection enabled while following [connection checks](/help/troubleshooting/#connection-or-synchronization).

### Why is Ginger still connecting or synchronizing?

A first scan or recovered wallet can need time, while a stalled scan can indicate a connection or local problem. Check Internet access, the computer clock, free storage and any node you configured; record the exact status if progress stops. Follow [connection troubleshooting](/help/troubleshooting/#connection-or-synchronization) rather than repeatedly restarting or deleting wallet data.

### Why did reinstalling not reset a broken setting?

Application files and wallet data are stored separately, so an ordinary reinstall can preserve the same configuration and wallets. Preserve backups and diagnose the actual error before changing data. Do not delete the whole data folder as a general repair for missing funds or a waiting status.

## CoinJoin basics

### Why is CoinJoin waiting instead of starting?

Read the status: the wallet may need confirmations, acceptable fees, other participants, a connection or eligible coins. Waiting does not by itself mean the funds are lost. The [CoinJoin troubleshooting table](/help/troubleshooting/#coinjoin-does-not-start) explains the released messages and the first action for each.

### What is the minimum amount, and why are some coins left behind?

There is no total wallet balance that guarantees participation. Each available coin must satisfy the round's conditions and the wallet's eligibility and cost checks; some small, unconfirmed or excluded coins can remain outside a round. Do not combine or top up funds just to match a minimum quoted in an old guide.

### How long will it take, and how many rounds do I need?

There is no guaranteed duration or universal number of rounds. Confirmations, fees, available participants, your coins and the selected privacy target all matter. Check the actual status and completed costs rather than treating a time preference as a promised deadline.

### Why did my balance decrease if CoinJoin was described as free?

An exemption from the coordinator fee does not remove Bitcoin mining fees, and repeated completed rounds can each cost money. Also check whether outputs went to another wallet and whether both wallets have synchronized. Pause and reconcile the completed transactions if the change is unexplained; do not assume every unexpected decrease is a normal fee.

### What coordinator fee does Ginger currently advertise?

Ginger advertises 0.3% on new inputs larger than 0.03 BTC, with coordinator-fee exemptions for smaller inputs and qualifying remixes. Mining fees remain separate, and the actual round determines eligibility. Recheck the [current Ginger fee explanation](https://gingerwallet.io/) before participating; this is not a quote for a future round.

### Can I stop CoinJoin or turn off the computer?

Use the player's pause control to stop further participation and let any critical phase finish. Sleep, lost connectivity or forced shutdown can interrupt an active round; use normal application exit and allow it to finish its shutdown procedure. A transaction already broadcast continues on Bitcoin after the application closes.

### Why is there a transaction when I never pressed Send?

Automatic CoinJoin can create shared transactions after you enable participation, without an ordinary payment through **Send** each time. Inspect the transaction, owned outputs, fees and any output-wallet selection rather than assuming an unexplained spend must be CoinJoin. If it remains unexplained or the keys may be exposed, preserve records and protect the remaining funds.

### Can I spend at 99%, and does 100% mean I am anonymous?

You can make an ordinary payment when the funds are spendable and the send workflow is available; the privacy percentage is not a Bitcoin spending requirement. It is Ginger's local estimate under the selected target, not a guarantee about what another person knows. A payment, reused address or identified exchange can still create a link.

### Why is the play control missing when all funds are private?

The ordinary manual player can hide play when all funds meet the wallet's privacy target. Normal startup also rejects a private-only set of available coins, so choosing another destination does not force another round. If you only want to move those funds, review an ordinary payment instead.

## Payments and hardware

### Why is a payment still pending after the estimated time?

The estimate is not a deadline: competing transactions and irregular block arrival affect confirmation. Inspect history; if Ginger offers **Speed Up Transaction**, review the additional fee before using it. A connection error or a delay is not a reason to send a second payment to the recipient.

### Can I cancel a payment or recover one sent to the wrong address?

A confirmed payment cannot be reversed by Ginger. Before confirmation, Ginger may offer **Cancel Transaction** for a suitable transaction, but that is an attempted replacement that can lose the race to confirmation. Do not promise a recipient that the original payment has been canceled until the outcome is established.

### Why are there insufficient funds when my balance looks large enough?

The displayed total is not always all available to spend: funds can be unconfirmed, temporarily involved in CoinJoin or insufficient after the fee. Check the selected wallet, amount and final preview. When sending the whole available amount, the fee can reduce what arrives, so compare the recipient amount with any fixed invoice.

### Why did my payment create another address or leave change?

A payment can spend a larger piece of bitcoin and return the leftover value to your own wallet as change. A fresh change address is normal and does not mean that money was sent to a stranger. You do not need to send it back manually; review the complete transaction if any amount remains unexplained.

### Can I use a hardware wallet, including after CoinJoin?

Ginger supports the documented receiving and signing workflows for compatible hardware wallets. Keep the hardware recovery words on the device's recovery path, not in the computer. A hardware wallet can receive eligible CoinJoin outputs but is not the signing source for ordinary Ginger CoinJoin; that optional routing is an [advanced question](/help/advanced-faq/#can-coinjoin-send-directly-to-my-hardware-wallet).

### Will an exchange accept my bitcoin after CoinJoin?

Ginger can prepare an ordinary Bitcoin payment, but it cannot guarantee a provider's acceptance or account policy. Check the intended exchange's current requirements before sending or selling. A high privacy score is not a certificate of acceptance, and no additional wallet operation can promise that result.

## Getting help safely

### What can I share with support, and where do I report a bug?

Use links from the [official Ginger repository](https://github.com/GingerPrivacy/GingerWallet/issues), and provide the version, operating system, exact error and non-secret steps. Review any log excerpt before sharing; never send recovery words, passphrases, authenticator codes or a complete wallet data folder. Support does not need a website-based wallet validation or an activation payment; see [how to report a useful issue](/help/troubleshooting/#report-a-useful-issue).

## About this manual

This English manual describes Ginger v2.0.26 and uses its English interface labels. Documentation and translations may contain errors. Ginger does not guarantee their accuracy; verify critical details in the application before proceeding. If you find an error, [report it in the documentation repository](https://github.com/GingerPrivacy/GingerDoc/issues) without including wallet secrets.
