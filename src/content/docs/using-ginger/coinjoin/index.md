---
doc_id: "coinjoin.use-coinjoin"
title: "Use CoinJoin in Ginger Wallet"
description: "Start, pause, and monitor Ginger CoinJoin, understand eligible funds, and avoid interrupting an active round."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

<span id="what-is-a-coinjoin"></span>
<span id="what-are-the-fees-for-coinjoins"></span>
<span id="do-i-need-to-trust-ginger-with-my-coins"></span>

> Reading level: Start here. The essential steps come first; advanced references are optional follow-up.

CoinJoin creates a Bitcoin transaction with other participants to make the relationship between its inputs and outputs harder to infer. Ginger signs only for your wallet's inputs; you do not send a deposit to a coordinator-controlled account. Successful rounds still cost fees and do not guarantee anonymity.

## Before starting

Open a backed-up software wallet and let it synchronize. Have confirmed bitcoin available, keep the computer connected, and review the expected cost before starting. Successful rounds have mining fees and can also have a coordinator fee; repeated rounds can add costs. The optional [advanced cost reference](/using-ginger/annonset/) explains the calculation. A hardware wallet can receive and send ordinary payments, but cannot be the signing source of Ginger's automatic CoinJoin process.

The wallet needs confirmed, usable funds and suitable round conditions. There is no balance or waiting time that guarantees an immediate start. Read the current status before changing settings.

## Start and pause

1. Open **Coinjoin Settings** from the CoinJoin player's menu, or find it with Ginger's search while the wallet is open.
2. Review the wallet's cost preferences and leave the output destination set to this wallet for the ordinary workflow. Custom targets and output routing are covered in the optional advanced settings guide.
3. Enable **Automatically start coinjoin** if you want unattended participation when conditions allow. To start manually, use the player's play control. The stopped player can display **Press Play to start**.
4. Watch the status below the player. The wallet may wait for confirmations, a suitable round, or cheaper fees before participating.
5. Use the player's pause control when you want to stop further participation. Allow any critical transaction phase to finish. Disabling automatic start changes future behavior; it does not reverse a transaction that has already been broadcast.

Do not send bitcoin to an address supplied by someone claiming to “activate” CoinJoin. There is no separate activation payment to a support agent.

## Read the status

| Message | Meaning and next step |
| --- | --- |
| **Awaiting auto-start of coinjoin** | The automatic-start delay is running. Keep the wallet open. |
| **Awaiting confirmed funds** | Wait for eligible incoming funds to confirm. |
| **Awaiting cheaper coinjoins** | Your cost preferences are keeping the wallet out of current rounds. Check the settings before relaxing them. |
| **Skipping a round for better privacy** | Random skipping is active. This is not a connection failure. |
| **Awaiting other participants** | Registration is under way. Other participants also need to complete their steps. |
| **Awaiting the blame round** | The previous attempt could not complete; the protocol is trying again with eligible participants. It is not a request for you to identify anyone. |
| **Insufficient participants, retrying...** | The attempt did not reach the required participation. Wait for another round. |
| **Awaiting closure of send dialog** | Finish or close the payment workflow before expecting CoinJoin to resume. |
| **Coinjoin may be uneconomical** | The stop threshold is relevant. Adding funds or manually overriding it is a choice with costs, not a required repair. |
| **Coinjoin successful! Continuing...** | A round succeeded. Further rounds can follow if the wallet still has work to do. |

For rejection, connection, and eligibility messages, preserve the exact error text. Reinstalling Ginger or creating new recovery words is not a normal response to a waiting status.

## Keep the wallet available

The wallet needs the keys available while it participates. A passphrase-protected software wallet must be opened before it can sign. Two-factor authentication protects startup; it does not ask your authenticator to approve every round.

Sleep, a lost internet connection, or a forced shutdown can interrupt a round. If a transaction was already broadcast, closing the application does not undo it. Reopen Ginger, let it synchronize, and check history before assuming a failure or repeating an action. Never send a second payment merely because the application closed during the first one.

The window can close while Ginger remains in the background, depending on general settings. For a full shutdown, use the normal exit action and allow any critical phase to finish.

## Spend after CoinJoin

After the resulting coins become usable, you can spend them like other bitcoin. The CoinJoin transaction remains public. Combining unrelated private and non-private coins, reusing an address, or disclosing a transaction to an identified service can create new links. Review the selected coins and change when making a payment; a previous CoinJoin does not make every future action private.

## You do not need to manage the protocol

Ginger handles registration, signing and retries. If the basic status checks do not explain what you see, use the optional advanced references: [round details](/coinjoin/round-details/), [custom settings](/coinjoin/settings/) and [fees and privacy progress](/using-ginger/annonset/).
