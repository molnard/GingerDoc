---
doc_id: "help.advanced-faq"
title: "Advanced Ginger Wallet FAQ"
description: "Find released Ginger answers about recovery scanning, wallet metadata, xpubs, coin control, privacy progress, full CoinJoin costs, output wallets and data sharing."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Reading level: Advanced guide. Start with the basic FAQ if you are setting up or using a wallet for the first time.

These questions cover custom settings, deeper privacy choices and special recovery cases. For the ordinary first-use questions, return to the [basic FAQ](/help/).

- [Recovery and local data](#recovery-and-local-data)
- [Coin selection and spending](#coin-selection-and-spending)
- [CoinJoin costs and progress](#coinjoin-costs-and-progress)
- [Hardware and privacy boundaries](#hardware-and-privacy-boundaries)

## Recovery and local data

### Why can the same words produce a different wallet?

The original passphrase participates in deriving the keys, and another wallet application can use a different account or address type. A valid word set alone does not establish that the applications are showing the same account. First check the original passphrase and scan progress; investigate account compatibility only after the ordinary recovery checks.

### When should I increase the recovery gap limit?

Consider it when you have evidence of many unused addresses before a paid address, such as addresses generated in another application. **Advanced Recovery Options** → **Minimum Gap Limit:** extends the scan and can increase its work and duration; v2.0.26 starts the recovery screen at 114. It does not repair wrong words, a wrong passphrase or an incompatible account.

### Why did labels or privacy information change after recovery?

Words restore the keys, not every private note or item of local transaction analysis. Wallet JSON and matching ATTR data have different roles; preserve the original files and use copies during investigation. Missing labels or a changed local score do not by themselves prove that a Bitcoin transaction or its public history changed.

### Can I use the same recovery words in two wallet applications?

Compatible applications can control the same keys, but that does not create a fresh wallet or revoke information shared with the earlier application. The second app may disclose addresses or an extended public key to its services, and concurrent spending can cause confusion about which coins remain available. Do not type hardware recovery words into the desktop merely to connect a device.

### What does an exposed address or xpub allow someone to do?

An address points to a particular part of public transaction history. An extended public key can reveal many addresses, including future ones within its derivation scope, but is not normally spending authority by itself. Fresh addresses under the same exposed branch do not revoke that monitoring; exposed signing secrets require a different response with fresh keys.

### Does the 2FA file recover the wallet without the service?

Do not treat `2fa_info.gws` as an independent offline recovery key. Normal 2FA startup uses an installation identifier and authenticator verification with a service to obtain the additional file-encryption secret. Preserve the words and original passphrase independently; a copied key is not revoked by enabling 2FA.

### How do I delete a local wallet without confusing deletion with revocation?

Back up first, then use **Wallet Settings** → **Tools** → **Delete Wallet** and read the confirmation. Removing local data does not erase Bitcoin transactions or invalidate copies of the recovery words. If the signing keys were exposed, simply deleting the wallet does not prevent someone else from spending with them.

## Coin selection and spending

### What is the difference between a coin, an address and a wallet?

A coin, or UTXO, is one unspent output from an earlier Bitcoin transaction. One address can have received several coins, and a wallet can manage many addresses and coins. Decisions about spending and CoinJoin concern the available coins, not just the total wallet balance; the [glossary](/help/glossary/) explains the terms.

### Does combining CoinJoined coins always destroy all privacy?

No single rule describes every observer or payment. An ordinary joint spend can associate its inputs, especially if one was already linked to an identity, but it does not automatically reveal every earlier ownership link. Review the inputs and change for the payment you actually need rather than treating either always combine or never combine as a guarantee.

### Does a reused address automatically publish my entire wallet?

No, but receipts to that address can be inspected together and linked to whoever published or supplied it. Later joint spending and information held elsewhere can reveal more. Labels help your local decisions; they do not impose a public separation or prove that automatic coin selection will preserve your intended boundary.

### Does Manual Control force exactly those inputs into the final payment?

**Manual Control** selects candidate coins for an ordinary payment. Review the inputs actually used in the final preview, the recipient amount, change and fee before authorizing. This is separate from CoinJoin input selection and does not set an exact list for a future round.

### Should I consolidate many small coins while fees are low?

Consolidation can reduce the number of inputs needed later, but the combining transaction costs a fee and can associate previously separate activity. A lower fee rate changes that cost, not the disclosure. Consider the purpose, value and known history of the coins before combining them.

### Why is a tiny payment missing, and does Exclude Coins freeze it?

Check synchronization and the configured dust threshold before concluding that a tiny output was lost. **Exclude Coins** affects CoinJoin participation, not ordinary spending, and does not freeze a coin. Unexpected tiny receipts need no immediate response; evaluate their spending cost and possible associations before including them in a payment.

### Can I set any custom fee rate or guarantee a confirmation time?

No. The released manual fee editor rejects rates below 1 sat/vByte, and network policy can require more than that minimum. A custom rate still competes with other transactions and cannot reserve a confirmation deadline. Review the total fee, not only the rate, before confirming.

## CoinJoin costs and progress

### Why can the private balance percentage differ from overall progress?

They are different local measurements. Overall progress weights each coin's score toward the target by its value, while the colored private balance counts the value already meeting that target. Neither is a measured probability that an outside observer can identify you. The two displays can differ even when both balances are correct.

### Why can progress fall, or change when I adjust the target?

Receiving funds, spending coins together, restoring without local analysis or changing the target can change the wallet's display. Lowering a target can reclassify coins without changing their published history. Investigate the transactions and settings involved instead of assuming a score change proves theft or guarantees a new privacy result.

### Can I choose exactly which coins join a round?

The client selects eligible inputs using the released CoinJoin settings. You can exclude particular coins and adjust available preferences, but ordinary send-side manual selection does not force a CoinJoin input list. Exclusion is attached to those coins; it is not a rule reserving every future receipt from the same address.

### What do rejected coins or a blame round mean?

A blame round is a protocol retry after the earlier attempt could not complete; it is not an instruction to identify or accuse another user. A rejection or temporary unavailability needs its exact reason and current status examined. Neither message by itself transfers control of the funds to the coordinator; see the [released status table](/help/troubleshooting/#coinjoin-does-not-start).

### How do I reconcile the full cost of a round?

Sum the value of your spent inputs and subtract all outputs you own from that transaction, including outputs sent to a different wallet. The difference can include coordinator charges, mining costs and a remaining output-allocation difference. Do not count another participant's outputs as yours or treat one fee label as necessarily covering the entire difference.

### Is a remix exemption permanent or applied to my entire balance?

No. It is an input eligibility rule under the offered round policy, not a perpetual entitlement for every transaction in a wallet. Ginger's advertised policy includes qualifying remixes and a direct spend through one transaction; mining fees remain payable. Recheck the current terms instead of splitting or moving coins solely to chase an assumed exemption.

## Hardware and privacy boundaries

### Can CoinJoin send directly to my hardware wallet?

An eligible software wallet can select an offered, loaded hardware wallet in **Coinjoin to this wallet**. The destination receives that round's outputs without waiting for a separate target-achievement event; normal startup does not force a round of already-private candidates. Check the destination after every restart, because the selection resets, and never import the hardware seed into the computer to make this work.

### Does an own node replace every Ginger service or make Tor unnecessary?

No. A configured node can fill particular roles such as supplying blocks or fee estimates, while CoinJoin and optional provider or 2FA flows can still contact their services. Tor addresses connection exposure, whereas a recipient service still sees the content of the request sent to it. Review the specific data flow rather than assuming that the node setting means no external requests.

### Does PayJoin hide my payment from its recipient?

No. The recipient already knows its payment request and can see the proposed payment during negotiation. Successful collaboration can weaken an outside observer's ownership assumptions, but transaction patterns and other information can limit that benefit. Ginger can fall back to an ordinary payment if construction fails, so authorization alone is not a guarantee that the final transaction used PayJoin.

### How do I prove control of an address without paying?

Use **Sign Message** for an address in the wallet, read the exact statement, and share the resulting signature only with the intended verifier. Device, address-type and verifier compatibility still matter. Signing does not transfer bitcoin or prove ownership of every wallet address; it can link the signed address with the identity known to the verifier.

### What information do Secret Hunt and buy/sell services receive?

Relevant Secret Hunt checks can submit round and transaction identifiers, an input outpoint and a proof of control. Buy/sell address validation and orders send their required address and order details; provider websites have their own identity and browser disclosures. These are separate optional flows, so the privacy of ordinary synchronization should not be generalized to all of them.
