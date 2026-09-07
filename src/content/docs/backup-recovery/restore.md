---
doc_id: "backup-recovery.restore"
title: "Recover a Wallet or Missing Balance"
description: "Recover a Ginger wallet with its original words and passphrase, then check the selected wallet and scan progress before investigating special recovery cases."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Reading level: Everyday use. Choose this guide when you need the task it describes.

Recovery is a search for keys and their transaction history. Before starting, preserve the old computer's wallet files if you can access them. Work on copies and keep the originals until you have verified the recovered wallet.

## Recover from words

1. Install and verify Ginger on a trusted computer. In the add-wallet screen, choose **Recover**.
2. Provide a **Wallet Name** if requested. Use a distinct name to avoid confusing it with an existing wallet.
3. Enter the original recovery words in order. Use the actual backup, not a newly generated set of words.
4. At **Enter Passphrase**, enter the passphrase used to create the original wallet. Leave it empty only if the original had no passphrase. You are not setting a replacement password.
5. Let synchronization and recovery finish. Check known transactions and receiving addresses, not only the displayed fiat value. Some normal wallet actions are hidden during recovery.

Different passphrases derive different valid wallets. A typing mistake can therefore produce an empty wallet without a “wrong passphrase” error during seed recovery. Check capitalization, spaces, keyboard layout, and the original backup before concluding that funds disappeared.

## An apparently empty recovered wallet

First check that you selected the intended wallet and network. Mainnet and test networks have separate coins. Then check connection and recovery progress. If the application is still searching, an incomplete balance is not a final result.

If those checks are correct but known transactions remain missing, stop changing settings at random. A wallet created with another application, or a large number of unused addresses, can need a more specific investigation.

Optional advanced reference: [accounts, address scanning and file import](/backup-recovery/recovery-options/). It covers those cases without making custom recovery settings part of the normal word-recovery steps.

Recovery from words restores access to the corresponding keys. Private labels and other local records may need a separate file backup.

## If something is missing

| What you still have | Practical next step |
| --- | --- |
| Words and the original passphrase | Recover on a trusted installation |
| Accessible wallet, but missing or invalid words | Create a new backed-up wallet and transfer funds while access remains |
| Wallet file and its original credentials | Try importing a copy; preserve all accompanying files |
| Words but a forgotten non-empty passphrase | Ginger cannot reset it; do not confuse an empty recovered wallet with recovery success |
| Hardware device but no reliable backup | Follow the device maker's backup-check process before risking the device |
| Neither spending access nor usable recovery information | Support cannot manufacture the missing keys |

Never give a “recovery helper” your words, passphrase, private keys, or wallet file. A legitimate diagnosis starts with non-secret details such as application version, network, and error text.
