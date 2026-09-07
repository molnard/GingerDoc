---
doc_id: "learn-coinjoin.trust-and-limits"
title: "What Do You Trust When You CoinJoin?"
description: "Distinguish control of Bitcoin keys, CoinJoin privacy assumptions, coordinator availability, participant independence, and software verification."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Reading level: Advanced guide. First read the simple CoinJoin explanation.

With Ginger, you retain Bitcoin signing authority instead of depositing funds into a mixer-controlled balance. That answers an important question about custody. Privacy, availability and software integrity involve additional questions.

Before participating, identify your objective: perhaps you want a recipient to learn less about your other payments, or want to reduce links between future spending and a publicly known receipt. CoinJoin can help with transaction-link privacy, but it cannot remove information the recipient already obtained from you.

## Four separate questions

| Question | Protection and assumption | What it does not establish |
| --- | --- | --- |
| Who can spend? | Your wallet signs its inputs after checking the proposed transaction. The coordinator does not need your recovery words. | Protection against stolen keys, malware or a transaction you knowingly authorize to the wrong destination |
| Who can link the inputs and outputs? | WabiSabi uses anonymous credentials to obscure relationships between registrations. Public transaction data and other observations still exist. | An unconditional guarantee against a malicious coordinator, colluding participants or outside information |
| Who can stop progress? | Successful participation needs the coordinator, network and sufficient cooperating participants to complete the round. | A reserved completion time or a right to participate in every offered round |
| Which software am I running? | Open source permits inspection; download verification helps establish the origin and integrity of the file you obtained. | Proof that every build is bug-free, your computer is uncompromised or a remote service runs exactly the published code |

The [WabiSabi paper, section 7](https://cryptoeconomicsystems.pubpub.org/pub/ficsor-wabisabi-coordinated/release/3) treats privacy, active attacks and theft prevention separately. This guide applies that distinction to user decisions; it is not a security audit of an installed wallet or coordinator.

## Consider the observer

A passive blockchain observer sees transaction inputs, outputs, amounts and later spending. It can apply heuristics and combine that data with information obtained elsewhere. A merchant has additional knowledge of its own invoice and customer. An exchange knows the withdrawal or deposit it processed.

A participant also knows its own inputs and outputs, which rules out some possibilities. A coordinator handles registrations and can observe protocol timing; an actively malicious coordinator can influence who participates or whether rounds complete. These are different capabilities, so a claim that addresses only public-chain observation should not be read as protection against every one of them.

## Apparent participants are not independent people

A Sybil attack means one actor appears as multiple participants. If an attacker controls most of the activity around a target, the attacker can exclude its own coins from the possibilities it considers. A transaction can look busy while providing less uncertainty for that observer than an uninformed observer would see.

Real inputs and mining costs create economic constraints. They do not let a normal user verify the independent identity of each participant. Input counts, output counts, transaction volume and a wallet's anonymity score are therefore not a census of independent people.

Larger rounds can provide more possibilities, but the amounts, participants' knowledge and later transactions still matter. There is no round count or target value that proves an attacker has learned nothing.

## When the coordinator or connection is unavailable

Coins already controlled by your keys do not become a balance owed to you by the coordinator. An unsuccessful attempt before broadcast does not itself transfer them to the coordinator. During an active round, however, Ginger may need to complete critical work before the coins are available for another action; use the player's pause control and follow its current status.

If CoinJoin cannot continue, pause and inspect the reason. Ordinary sending still requires an available signing path, spendable coins, synchronized information and a way to broadcast. A coordinator outage alone is not a reason to discard backups or upload recovery words to a replacement service. Optional Ginger 2FA has its own normal-startup service dependency, so keep the words and original passphrase independently recoverable.

A rejection or failed round is not, by itself, evidence of an attack or a judgment about your identity. Conversely, a successful round does not certify the coordinator's honesty. Preserve relevant private records if a concrete problem requires investigation.

## Decisions you can make

1. Obtain Ginger from its official distribution and verify the download. Use authenticated updates and protect the machine that signs.
2. Keep Tor enabled for the intended wallet network privacy. It does not hide information you explicitly submit to the service receiving it.
3. Review the selected wallet, output destination, eligible coins and cost preferences. Do not raise limits merely to silence an unexplained error.
4. Keep independent recovery material. Never give a coordinator or support contact your words, passphrase or private keys to “unlock” a round.
5. Review the result and your later spending. A fresh address and a high score cannot undo a new disclosure to an identified recipient.

An own Bitcoin node is useful for the roles it actually performs, such as supplying blocks or fee estimates when configured. It does not replace the CoinJoin coordinator or establish that participants are independent. A hardware wallet isolates keys but does not make the transaction graph private.

For the basic transaction model, read [CoinJoin explained](/learn-coinjoin/explained/). To decide whether it fits a particular purpose, read [when CoinJoin is useful](/learn-coinjoin/when-to-use/). Treat strong product claims as questions to investigate: what observer, what assumptions, what software version, and what evidence?
