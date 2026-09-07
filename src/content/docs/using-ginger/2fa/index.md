---
doc_id: "backup-recovery.two-factor-authentication"
title: "Use Two-Factor Authentication in Ginger"
description: "Set up Ginger two-factor authentication and understand its wallet-file encryption, Tor requirement, and recovery limits."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

<span id="what-is-the-default-2fa-state-of-gingerwallet"></span>
<span id="how-do-i-enable-2fa-in-gingerwallet"></span>
<span id="how-do-i-set-up-2fa-using-an-authenticator-app"></span>
<span id="what-is-the-purpose-of-the-2fagws-file"></span>
<span id="do-i-need-to-restart-the-application-after-enabling-2fa"></span>
<span id="how-does-the-login-process-change-after-enabling-2fa"></span>
<span id="how-do-i-disable-2fa"></span>
<span id="what-should-i-do-if-i-change-devices-or-lose-data"></span>
<span id="what-are-the-security-best-practices-for-using-gingerwallet"></span>
<span id="does-gingerwallet-store-any-personal-information"></span>
<span id="what-happens-if-i-lose-access-to-my-authenticator-app"></span>
<span id="how-does-gingerwallet-ensure-security-with-2fa"></span>
<span id="how-can-i-recover-my-labels-and-extra-options-for-my-wallet-if-ive-lost-the-2fa-key"></span>
<span id="why-does-ginger-wallet-require-an-8-digit-2fa-code"></span>
<span id="what-should-i-do-if-my-authenticator-app-only-provides-6-digit-codes"></span>

> Reading level: Advanced guide. Keep the original recovery information and wallet files before changing the recovery or file setup.

Ginger's optional two-factor authentication (2FA) adds an application-startup check and encryption of local wallet files. It is separate from each wallet's passphrase. It is not a Bitcoin rule requiring a second signature for every spend, and it does not protect a recovery-word backup from someone who also knows its passphrase.

## Understand the dependency first

Ginger verifies the authenticator code with its 2FA service and obtains the secret needed to decrypt the protected wallet files. A working connection to that service is therefore required for the normal 2FA startup flow. Tor must be enabled to use this feature.

The local `2fa_info.gws` file stores a client/server identifier. It is not an encrypted copy of your recovery words or a self-contained recovery key. Copying only that file will not recover a wallet. Neither a wallet passphrase nor enabling 2FA means that every label, log, or sidecar file receives the same encryption. Protect the entire data folder and its backups.

Before enabling 2FA, check that you have the recovery words and exact original passphrase for every software wallet you need to recover. Keep protected copies of wallet and metadata files as well.

## Enable 2FA

1. Open **Settings** → **Security**. Enable **Network anonymization (Tor)** if needed and restart when prompted so Tor is active.
2. Enable **Two-factor authentication**. The setup dialog displays a QR code for an authenticator.
3. Add that QR code to your authenticator privately. It contains a secret, so do not share it. Ginger's setup requires an authenticator compatible with SHA256 and eight-digit codes; a manually created default six-digit entry is not equivalent.
4. Enter the current code and choose **Verify**. If verification fails, check your phone's time synchronization and that the entry came from this setup.
5. Restart Ginger as instructed. Complete the 2FA startup prompt. On a successful authenticated startup, Ginger obtains the encryption secret and ensures that the wallet and automatic wallet-backup JSON files are encrypted.

Do not assume that files copied before setup or before the authenticated restart acquired the new protection. Keep those older backups protected independently. Enabling the switch is not a reason to erase your only known-good recovery material.

## Everyday use and disabling

At startup, enter the current authenticator code. Once the application has loaded, individual wallet passphrases and hardware-device approvals still have their own roles. An already unlocked computer remains a security concern.

To disable 2FA while you have access, open **Settings** → **Security** and switch **Two-factor authentication** off. Ginger removes the additional wallet-file encryption and its local 2FA association. Normal software-wallet passphrase protection is separate and remains relevant. Back up the resulting files if your backup procedure depends on their current encryption state.

## Lost phone, missing file, or unavailable service

A lost authenticator or a service outage can prevent normal startup. First preserve the existing data folder. Check time and connectivity for a rejected code; repeated installation over the same data does not recreate a lost authenticator secret.

For software-wallet funds, use a separate trusted installation or clean application environment to recover from the original words and passphrase. Verify known history and access before changing the old files. Recovered keys do not depend on retaining the old 2FA setup, but downloading and synchronizing Ginger still need its normal network services. Compatible recovery software can be an option if it supports the original account types.

Labels and other local attributes are not reconstructed from words. Preserve their `.attr` backups before investigating metadata recovery. Preserve the existing wallet data when setting up or troubleshooting 2FA.

If recovery material was exposed, creating a new wallet and transferring remaining funds changes which keys control them. Disabling 2FA or reinstalling the application does not invalidate old recovery words.
