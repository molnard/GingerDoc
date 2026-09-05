---
doc_id: "getting-started.first-wallet"
title: "Create and Open Your First Ginger Wallet"
description: "Create a Bitcoin wallet, record its recovery words and passphrase, and understand the first synchronization and CoinJoin settings."
lang: "en-US"
verified_release: "v2.0.26"
---

# Create and Open Your First Ginger Wallet

A Ginger wallet contains the information needed to recognize and spend your bitcoin. The bitcoin itself is recorded on the Bitcoin network. Losing your computer is recoverable if you have the right backup; losing both the wallet and its recovery information may not be.

## Create a software wallet

1. Open the add-wallet screen and choose **New**. If prompted for **Wallet Name**, choose a name that distinguishes this wallet from others. The first wallet can receive an automatically generated name without showing that step.
2. Ginger displays twelve English **Recovery Words**. Write them in the displayed order and keep them offline. Do not photograph them, put them in email, or share them with support. Ginger will not display them again after creation.
3. Continue to **Confirm Recovery Words** and select the requested words from your written backup. This checks that you recorded the sequence rather than only recognizing the words on the screen.
4. At **Add Passphrase**, enter and confirm a passphrase, or leave both fields empty if you deliberately choose a wallet without one. Record whether a passphrase was used. A non-empty passphrase is required for recovery as well as for opening the protected wallet; it is not a password that Ginger can reset.
5. Complete any service-terms prompt. Allow the wallet to connect and synchronize before relying on its balance.

Your wallet name is a local label. It is not a recovery credential and does not change the keys. Renaming a wallet is not the same as creating a new one.

## Decide how to use CoinJoin

Ginger can show a prompt inviting you to personalize CoinJoin settings. Review the settings and fees before leaving funds available for automatic CoinJoin. In **Coinjoin Settings**, **Automatically start coinjoin** determines whether the wallet starts without pressing the player's play control. Check the actual switch for your wallet; an imported wallet or a previously configured wallet can have different settings.

CoinJoin spends transaction fees and can take time. Receiving bitcoin, sending a normal payment, and using CoinJoin are separate actions. You can first learn the receive and send workflow with a small amount whose loss would be manageable.

## Open an existing wallet

Select its name in Ginger's wallet list. Enter the original passphrase if requested. If you enabled application two-factor authentication, complete that startup prompt before opening individual wallets. A hardware wallet uses its device authorization workflow instead of a desktop software-wallet secret.

To add a wallet from its recovery words, choose **Recover** in the add-wallet screen. To load a compatible wallet JSON backup or supported hardware export, choose **Import File**. Do not paste recovery words into an import-file dialog, and do not import a hardware wallet's recovery words merely to connect the device.

## Know when the wallet is ready

Synchronization finds transactions belonging to your wallet. Until it completes, balances or history can be incomplete. A recovered wallet may hide normal receive or send actions while it searches. An unconfirmed incoming payment has been seen but has not yet been included in a block.

Before receiving a substantial amount, check that the wallet opens, that your recovery backup is legible, and that you understand your passphrase choice. Use **Wallet Settings** → **Tools** → **Verify Recovery Words** with the **Verify** button to check the words for an accessible software wallet. This verifies a backup; it does not reveal forgotten words.

## Close safely

Closing the window may leave Ginger running if **Run in background when window closed** is enabled under **Settings** → **General**. Use the application's normal exit action when you need it to stop. During a critical CoinJoin phase, allow Ginger to finish its shutdown procedure. Forcing it closed can interrupt participation.
