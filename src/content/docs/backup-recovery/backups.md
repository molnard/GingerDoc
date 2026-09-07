---
doc_id: "backup-recovery.backups"
title: "Back Up Your Ginger Wallet"
description: "Keep and verify the recovery words and original passphrase needed to recover a Ginger software wallet after losing the computer."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Reading level: Start here. The essential steps come first; advanced references are optional follow-up.

For a Ginger software wallet, keep the recovery words and the exact original passphrase, if you used one. These let you recover access after losing the computer. A hardware wallet uses its own device backup process; keep its words off the computer.

## The backup you need first

1. Write the words in the displayed order and keep them private.
2. Record the exact passphrase, or record that the wallet was created without one. It cannot be reset by Ginger.
3. Keep the backup somewhere you can reach after losing the computer, while preventing others from reading it.
4. Verify the backup while the wallet is still accessible.

The wallet's name is not a recovery secret. An authenticator code or hardware PIN does not replace the words and original passphrase.

## Store recovery information safely

Write the words clearly and in their original order. Store them where you can recover them after losing your computer, while preventing other people from reading them. Consider more than one durable copy if fire, water, or a single inaccessible location would defeat your backup. Keep an inventory of where copies are, without listing the words in an ordinary cloud note.

Keep a non-empty passphrase recoverable too. Memorization alone can fail. Separate storage reduces the chance that one discovery exposes everything, but the arrangement must still be understandable to you or someone you intentionally authorize. Do not invent a homemade scheme that splits words into fragments without knowing how to recover it.

An application password, a device PIN, an authenticator code, and a BIP39 passphrase are not interchangeable. Label your backup instructions clearly without revealing the secrets to an unintended reader.

## Choose something durable and readable

Paper can be damaged by fire, water or fading. Metal can resist some damage but still needs protection from people reading it. Check that your backup remains legible and accessible.

Avoid photographs, ordinary cloud notes and printers for recovery words: they can leave copies you do not control. If you keep more than one copy, protect and keep track of each one. Do not split words into an improvised puzzle that you might be unable to reconstruct.

## Check the backup before you need it

For an open software wallet, use **Wallet Settings** → **Tools** → **Verify Recovery Words**, then **Verify**. Enter the words from the backup. A successful check is useful evidence that the words belong to that wallet. Also make sure the passphrase record is correct and that you can find the files you intend to preserve.

If the words do not verify, check spelling and order privately. If you still have spending access but cannot establish a usable recovery backup, create a new wallet with a verified backup and transfer funds carefully. Do not delete the old wallet while investigating.

Back up local metadata again after important label or settings changes. Receiving more bitcoin does not normally require a new set of recovery words, but a new wallet or a different passphrase does.

## What about labels and computer files?

Recovery words do not bring back every label, setting or provider-order record. Local automatic backups are on the same computer, so they do not protect against losing that whole computer.

Optional advanced reference: [wallet files, metadata and passphrase details](/backup-recovery/backup-files/). It explains file copies and 2FA-related files separately from the essential word backup.
