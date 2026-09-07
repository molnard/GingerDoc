---
doc_id: "backup-recovery.recovery-options"
title: "Advanced Recovery: Accounts, Address Scanning and Files"
description: "Investigate Ginger recovery compatibility, the gap limit, wallet JSON imports and missing metadata after checking the original recovery words and passphrase."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Reading level: Advanced guide. Keep the original recovery information and wallet files before changing the recovery or file setup.

First complete [the normal recovery checks](/backup-recovery/restore/): the intended wallet, exact original words and passphrase, connection and scan progress. This page covers specific reasons why those checks may not be enough.

## Address scanning and account compatibility

The recovery screen accepts valid English recovery-word sets of 12, 15, 18, 21 or 24 words and checks their checksum. Valid words alone do not establish that another application's account is compatible.

If you used an unusually large number of unused receiving addresses before a paid address, **Advanced Recovery Options** offers **Minimum Gap Limit:**. The released recovery screen defaults to 114. Increasing it can extend the search, at the cost of more work and time; it does not repair wrong words, a wrong passphrase, or an incompatible wallet format. Use a larger value only when your address history gives a reason.

A wallet originally created by another application can use different address types, accounts, or derivation paths. BIP39 words alone do not guarantee that every wallet will discover every account. For Ginger's standard mainnet accounts, native SegWit uses `m/84'/0'/0'` and Taproot uses `m/86'/0'/0'`. Advanced recovery in another application must support the relevant account and address type. Keep hardware recovery on a hardware device whenever possible.

Ginger does not offer SLIP39 share recovery in this release. Do not enter a collection of recovery shares as if it were one BIP39 word list.

## Import a file

Choose **Import File** in the add-wallet screen and select a compatible `.json` file. Ginger may ask for a different name when one is already in use. A random JSON file, a transaction PSBT, or an arbitrary xpub pasted into a text file is not a compatible wallet backup.

Use the original passphrase to open a protected imported software wallet. A file encrypted through 2FA is not equivalent to an unencrypted portable backup. Preserve its related files and credentials, or recover from words and the original passphrase instead. Importing a hardware export creates a wallet that still depends on the device for signing.

## What recovery does not restore

The blockchain cannot restore private labels, all application settings, or provider order metadata. Preserve the matching `.attr` file when those matter. Do not overwrite newly recovered files with old metadata while Ginger is running. If you need help restoring sidecar data, work from copies and describe the file names and version without sharing their contents publicly.

Keep the originals and work from copies. See [wallet-file backups](/backup-recovery/backup-files/) before manipulating local data.
