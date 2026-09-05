---
doc_id: "getting-started.start-here"
title: "Start Here: Your First Steps with Ginger"
description: "Learn what Ginger does, protect your recovery backup, and follow a simple first receive-and-send path before exploring optional advanced features."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "beginner"
---

# Start Here: Your First Steps with Ginger

> Reading level: Start here. The essential steps come first; advanced references are optional follow-up.

Ginger is an application for receiving and sending bitcoin on your computer. You control the information that allows your bitcoin to be spent. Ginger can also help make payment history harder to follow through an optional feature called CoinJoin.

You can learn the ordinary wallet workflow first. You do not need your own Bitcoin node, a hardware device or advanced CoinJoin settings to create a software wallet.

## 1. Install the real application

Follow [Install Ginger Wallet](install.md) and use its official download links. Choose the download for your computer. Do not install a similarly named phone app or software sent by a stranger offering support.

Keep the download checks in that guide. The separate [advanced signature-verification reference](verify-download.md) explains the command-line checks when you need them.

## 2. Create a wallet and make its backup

Follow [Create your first wallet](first-wallet.md). Choose **New**, record the twelve **Recovery Words** in order, and complete **Confirm Recovery Words**. Keep the written backup private and available even if the computer is lost.

At **Add Passphrase**, understand the choice before continuing. If you use a passphrase, the original words and that exact passphrase are both needed for recovery. Ginger cannot reset it. Leaving the fields empty creates a wallet without that extra passphrase; record which choice you made.

Do not continue with a meaningful balance until the backup is readable and you can open the intended wallet. Never share the words or passphrase with support.

## 3. Receive a small first payment

Wait for the wallet to finish synchronizing: this means checking the Bitcoin network for your transactions. Choose **Receive**, add a useful label and generate a receiving address. Share it with the intended payer, or use it in an exchange's on-chain Bitcoin withdrawal flow.

Check the whole address and the network before the payment is authorized. Ginger receives on-chain Bitcoin; another asset's network or a Lightning invoice is not interchangeable. A confirmation means the transaction was included in a Bitcoin block. A payer's screenshot alone is not confirmation.

## 4. Make a small first payment

Choose **Send** and use **Automatic** selection for the ordinary workflow. Enter the recipient's address and amount, choose **Continue**, and review the destination, the amount the recipient will receive and the fee. Choose **Confirm** only when these are correct.

The fee pays for Bitcoin transaction space. If part of the selected money is left over, it returns to your wallet as change. You do not need to send that change back manually. A confirmed payment cannot be reversed by Ginger.

After a connection error, check history before trying to pay again. This helps avoid paying twice when the first transaction was already sent.

## 5. Decide whether to use CoinJoin

CoinJoin combines several people's activity into a shared Bitcoin transaction to make ownership links harder to infer. Your wallet keeps its signing keys. It costs fees, can take time, and cannot erase information a recipient or exchange already knows.

Review **Automatically start coinjoin** in **Coinjoin Settings** for the selected wallet. Turn automatic participation off while you learn if you do not want it to start unattended. If a round is already active, use the player's pause control and allow critical work to finish.

You can receive and make ordinary payments without waiting for a privacy indicator to reach 100%. You also do not need to tune every advanced setting to start using the wallet.

## You have finished the first-use path

Your essential checks are a recoverable backup, the intended wallet, the right payment network, the recipient and the actual fee. Keep using fresh receiving addresses and review each payment.

The manual's everyday guides explain individual tasks. Pages labelled Advanced guide cover optional custom settings, manual coin selection, detailed privacy accounting and special recovery cases. Read them when you have a particular reason; they are not a second setup checklist.
