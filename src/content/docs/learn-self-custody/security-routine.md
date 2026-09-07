---
doc_id: "learn-self-custody.security-routine"
title: "Build a Recoverable Bitcoin Security Routine"
description: "Build a recoverable Bitcoin security routine and respond appropriately to exposed addresses, xpubs, wallet files, recovery words or devices."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Reading level: Advanced guide. Keep the basic recovery backup available; use the incident steps that match the information exposed.

A useful security routine protects against unauthorized access while leaving an understandable path for legitimate recovery. Adding secrets without documenting their roles can make accidental loss more likely.

## Record the recovery plan

Keep a private inventory of your wallets, what kind of signer each uses, where the backups are, and whether a BIP39 passphrase is required. The inventory need not contain the secrets themselves. It should be useful after the computer or phone is gone, not only while you remember how everything was set up.

Preserve enough wallet-convention information to recognize the correct recovered account, especially when using hardware devices or several wallets. Keep labels and metadata backups when they are important for records; the blockchain cannot rebuild the private notes you wrote.

If you intend another person to recover funds after incapacity or death, arrange a clear, tested access plan appropriate to your circumstances. Avoid casually sharing all secrets now or assuming the person will guess which password you meant. Estate and access arrangements can have legal implications that require local professional advice; this page does not prescribe a legal structure.

## Check before funding and before signing

Verify the application download, confirm that the wallet opens, and check the backup. For a hardware wallet, compare receiving addresses on the device and inspect each payment's destination and amount before signing.

Use a small amount to learn a new workflow. Reconcile what was sent, what arrived, and what fees were paid. Increasing the amount does not make an unfamiliar workflow easier to diagnose.

Keep the computer and signing device updated through authenticated sources. An update notice in a private message is not proof that a file is legitimate. Never install “recovery software” or allow remote control merely because a stranger says your coins need synchronization.

## Understand Ginger 2FA

Ginger's optional 2FA adds local wallet-file encryption and a startup verification with a service. It can be useful against some forms of local-file access, but introduces a normal-startup dependency on the authenticator and service.

Keep recovery words and the original passphrase independently available. Do not assume `2fa_info.gws` is an offline master recovery key. Nor should you assume 2FA will stop an attacker who already has the words and passphrase, or prevent an authorized transaction from an unlocked application.

## First identify what was exposed

An address disclosure and a recovery-word disclosure need different responses. Avoid copying the suspect material into a public post or an unfamiliar “wallet checker” to diagnose it.

| Exposed item | What it can enable | First response |
| --- | --- | --- |
| One receiving address or transaction ID | Observing that address or transaction and following possible links; it does not supply signing keys | Stop unnecessary reuse and further disclosure; review which identities and payments were linked |
| Labels, order records or wallet-history export | Associating otherwise separate transactions with people, purposes or balances | Restrict access, preserve a private copy if needed, and change how records are shared |
| An extended public key, often called an xpub | Monitoring addresses in the derivation scope it covers, potentially including future ones; it does not normally authorize spending by itself | Identify the affected account or branch and consider a fresh wallet if continued monitoring is unacceptable |
| A wallet file or an entire application-data copy | Exposure depends on encryption, available passwords and the other files copied; it may include keys and private metadata | Treat uncertainty seriously and assess signing-key exposure from a trusted environment |
| Recovery words and any required passphrase, or usable private keys | Spending funds and deriving more keys in the compromised scope | Prepare a fresh wallet with new keys on a trusted device and move funds you still control |
| A stolen computer, unlocked application or remote-control session | Depending on its state, access to wallet data, signing operations and other accounts | End the unauthorized access and use a trusted device to assess and protect remaining funds |

An extended public key is not necessarily a view of every account on a device; its derivation scope matters. However, generating another receiving address under a disclosed public branch does not normally prevent continued monitoring of that branch. [BIP32 describes these public-key derivation boundaries](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki).

If only recovery words were disclosed and you used a separate passphrase, the risk also depends on whether that passphrase remains secret and how difficult it is to guess. Do not assume that an unknown or weak passphrase makes the exposed backup safe indefinitely. If the evidence is incomplete and the exposure could authorize spending, use the key-exposure response.

## Respond to exposed signing keys

Changing a computer password, disabling 2FA or reinstalling Ginger does not revoke copied Bitcoin keys. Changing the name of a wallet also leaves its keys unchanged. Bitcoin has no support process that cancels a copied recovery phrase.

1. Use a device you have reason to trust. If the original computer may be compromised, do not generate the replacement wallet there.
2. Create a wallet with fresh recovery information and secure its backup. Do not restore the exposed words and call the restored wallet a new security boundary.
3. Obtain and verify a receiving address. With hardware, verify it on the signing device; never enter its new recovery words into the suspect computer.
4. Transfer remaining funds you can still control, reviewing the destination and fee carefully. An attacker with the same keys can race you; avoid adding an optional CoinJoin wait before protecting the funds.
5. Check the result in the trusted wallet and monitor confirmation. Replace recurring deposit instructions and old public receiving details so future payments do not keep arriving at the compromised keys.

Moving funds may create an observable on-chain connection. Preserving control of funds takes priority during a key compromise; privacy can be considered again once the immediate access problem is contained. A fresh destination does not guarantee that the transfer is unlinkable.

Keep necessary records privately while investigating. Never give a supposed support agent recovery words, the passphrase, an unrestricted wallet-file copy or access to the replacement device. There is no need to “validate” new recovery words on a website.

## Respond to a privacy-only disclosure

For an exposed address, decide whether continued use is acceptable. You can receive future payments at fresh addresses and avoid publishing extra transaction details, but the observer keeps what they already learned. There is no automatic need to move every coin merely because an address became public.

For a disclosed xpub, first work out which account it covers. Continuing to use that account can expose future activity. A new wallet with independent keys establishes a different address set, although a direct transfer can visibly connect the old funds to it. Plan the move and later spending according to who is watching and what they know. Reinstalling a wallet application or importing the same account elsewhere does not remove that account's exposure.

For leaked records, restrict further access and assess what those records reveal together. A transaction ID paired with a customer name is more revealing than either alone. Do not publish the full leak to demonstrate the problem.

## Keep privacy separate from key protection

An observer knowing a transaction does not necessarily have the keys to spend it. Conversely, a thief with keys can spend funds whose transaction history was hard to analyze. Use recovery protection and device verification for the second problem, and address practices, Tor, coin selection, and considered CoinJoin use for the first.

Review the routine after adding a wallet, changing hardware, enabling 2FA, or moving backups. Verify the parts that changed rather than repeatedly exposing every secret for an unnecessary full recovery exercise.
