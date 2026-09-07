---
doc_id: "learn-privacy.wallet-migration"
title: "Moving to Ginger Without Exposing More Wallet History"
description: "Compare restoring the same Bitcoin keys, connecting hardware to another wallet app, and moving funds to new keys without assuming past disclosures disappear."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Reading level: Advanced guide. First understand fresh receiving addresses and ordinary payment review.

Changing wallet software changes which application you use. It does not necessarily change the Bitcoin keys, addresses or information that a previous service already knows. Decide whether you are recovering access, changing software for convenience, or creating a new separation for future activity.

## Choose the kind of move

| Choice | What stays the same | What changes |
| --- | --- | --- |
| Restore the same recovery words, passphrase and supported account | The corresponding keys and addresses | The application scanning and managing them; local notes may be missing |
| Connect the same hardware account to Ginger | The hardware-held keys and that account's addresses | The desktop application holding its public account information |
| Create a new wallet with new keys and transfer funds | Existing history remains on the blockchain | Future keys and addresses; a separate backup and an on-chain transfer are needed |

Restoring the same wallet does not move its bitcoin, so there is no network fee merely for the restoration. An on-chain transfer to new keys does cost a fee and creates a visible transaction. These are different operations even if both end with a balance displayed in Ginger.

## Understand what an xpub exposes

An extended public key, often called an xpub, lets software derive a branch of public addresses without having their ordinary signing authority. An account xpub typically reveals more than one receiving address, including future addresses derived from that account. Its scope depends on where it sits in the key tree; it does not reveal every other hardened account. [BIP32: Hierarchical Deterministic Wallets](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)

A previous wallet app, portfolio service or accounting tool may have received an xpub or address queries. Removing that app does not revoke copies held elsewhere. Continuing to use the same account can allow that observer to recognize later activity too. Tor can hide a direct IP connection; it cannot make the receiving service forget the wallet information you submitted.

If you do not know what a service received, treat that as an uncertainty. Do not upload an xpub to an online “privacy checker” to investigate it.

## Restore access to an existing software wallet

1. Preserve the original backups and records before changing an installation. A migration is not a reason to delete your only working wallet files.
2. Use Ginger's recovery flow with the wallet's original words and exact original passphrase. Confirm that the wallet format, address types and account are supported. A valid mnemonic alone does not establish compatibility.
3. Let the scan finish. Compare known transactions or a receiving address from your private records before concluding that an empty display means the money is gone.
4. Review restored labels, CoinJoin settings and privacy information. Recovery words recover keys; they do not recreate every note or setting stored by the previous application.
5. Check automatic CoinJoin and the destination selection before leaving funds running unattended. Avoid using two applications to spend from the same coins at the same time.

An incorrect passphrase can produce a different, valid wallet. Do not cycle through random settings, send test funds to an unexplained empty account, or give a support stranger the recovery words to solve the mismatch.

## Use the same hardware wallet in Ginger

Add the device through **Hardware Wallet**, follow its supported PIN/passphrase prompts and verify a receiving address on its own screen. Confirm that Ginger is showing the intended account. Its normal device import in this release uses native SegWit; other software may have been showing another account or address type.

Connecting hardware allows Ginger to keep public wallet information while signing keys remain on the device. It does not undo information already shared by the manufacturer's companion app. Opening the same account in another watch-only app can disclose more history even if neither application can spend without the hardware.

Do not import the hardware recovery words into the computer as a workaround for an unsupported connection or account. Consult the device's supported workflow if the account cannot be represented correctly.

## Create a new separation for future activity

If your objective requires different keys, create and verify a new wallet and backup. Obtain a fresh destination and use a small test when the situation is not urgent. Confirm that the new wallet can receive and that you have a working signing or recovery path before moving the intended remainder.

Review the inputs for each transfer. Sending every old coin together can associate previously separate activity. An ordinary transfer also links its input and output transaction history. New keys alone do not conceal that link; a considered CoinJoin workflow can address some transaction-link privacy goals, subject to fees, eligibility and later spending.

Choose when and how to stop using old receiving addresses. Update payment instructions you control, keep enough records to recognize late payments, and do not assume that a previously shared address stops working because you removed it from a website. Keep recovery material for wallets that may still receive money.

## When the move is urgent

An exposed xpub primarily raises a privacy problem. Exposed signing secrets raise an immediate fund-control problem. If an attacker may already spend the funds, prioritize a trusted destination with new keys over waiting for an elaborate privacy process. Changing an application password or putting an exposed seed on a new hardware device does not revoke copied keys.

After the move, review [spending examples](/learn-privacy/spending-after-coinjoin/) and [information sharing](/learn-privacy/information-sharing/). The sustainable goal is to understand what remains known and avoid unnecessary new disclosures.
