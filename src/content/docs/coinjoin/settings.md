---
doc_id: "coinjoin.settings"
title: "Configure CoinJoin and Output Wallets"
description: "Understand Ginger CoinJoin privacy and cost settings, excluded coins, and sending CoinJoin outputs to another loaded wallet."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Reading level: Advanced guide. First understand the ordinary start-and-pause controls and the fact that completed rounds cost fees.

**Coinjoin Settings** applies to the selected wallet. Change one setting at a time and observe its effect. More aggressive settings can increase fees or waiting time without improving the privacy that matters in your situation.

## Automatic participation and cost preferences

| Setting | What it controls |
| --- | --- |
| **Automatically start coinjoin** | Starts participation when the wallet and suitable funds are available. |
| **Stop coinjoin threshold** | Stops automatic CoinJoin when the wallet balance is below the selected BTC amount. It is a wallet-level stop rule, not the coordinator's minimum accepted input. |
| **Coinjoin time preference** | Compares current mining fees with the median over the selected period. It influences when to participate, not a promised completion deadline. |
| **Ignore coinjoin time preference below** | Allows participation below this fee-rate threshold even when the time-preference comparison would otherwise wait. |
| **Random Skip** | Selects how often suitable rounds are skipped. The choices are **Disabled**, **Rarely**, **Sometimes**, and **Often**. More skipping generally means more waiting. |

When the player reports an uneconomical balance, pressing play can bypass the stop threshold. That does not remove transaction fees. Consider the size of the available coins and the expected costs before overriding it.

## Privacy settings

**Anonymity score target** is the minimum internal score for Ginger to consider a coin private. The released editor accepts whole numbers from 2 to 1000. Raising the target can lead to more CoinJoin activity; it does not purchase a guarantee that exactly that many independent people could own the coin.

**Single non-private coin restriction** permits only one coin with anonymity score 1 in a registration. This can reduce the direct association created by registering several previously non-private coins together, but can also slow progress through a wallet with many such coins.

Lowering the target can immediately change what the interface calls private without changing the blockchain. Treat privacy indicators as estimates and policy settings, not evidence that an outside observer lost all information.

## Exclude specific coins

Open **Exclude Coins** from the CoinJoin player's menu. Review the coin list and mark the coins you want excluded from CoinJoin. Revisit this list to make them eligible again. Exclusion applies to those coins; it is not a permanent rule for every future payment to the same address.

Excluding a coin from CoinJoin does not lock it against ordinary spending and is not a substitute for hardware storage. If every available coin is excluded, the player can display **Only excluded funds are available**. Check this list before changing fee or privacy settings.

## Receive outputs in another wallet

**Coinjoin to this wallet** chooses where the source wallet's CoinJoin outputs are received. By default, this is the source wallet itself.

1. Load the intended destination wallet in Ginger. Back it up and verify that you control its receiving addresses.
2. With no CoinJoin in progress, open the source wallet's **Coinjoin Settings** and choose the destination in **Coinjoin to this wallet**.
3. Check the selected name before starting. Only loaded, eligible wallets appear; do not assume that a wallet merely listed on disk is loaded.
4. After a successful transaction, check the destination wallet's synchronized history as well as the source's balance.

The destination cannot be changed during an active CoinJoin. **This selection resets after Ginger restarts**, so check it again before every session in which the destination matters. Avoid configuring two wallets to send CoinJoin outputs back to one another; the available choices restrict recursive arrangements.

The released destination selection can include a loaded hardware wallet. The source is still the software wallet that signs the CoinJoin; a hardware destination does not make that source a cold wallet or enable the hardware wallet to run CoinJoin itself. Use only a destination actually offered by the application, and verify its backup and address control before relying on this route.

## Experimental coin selection

The release exposes **(EXPERIMENTAL) Improved Coin Selection**. Its configuration is an advanced tuning interface, not a prerequisite for CoinJoin. The available controls are:

| Control | Intended effect |
| --- | --- |
| **Force to use low privacy coins** | Requires selection to include a coin from the lowest-privacy group. |
| **Can select already private coins** | Allows the selector to use coins already above the privacy target. Such participation can still incur mining fees. |
| **Coin privacy difference normalization for score calculation** | Lower values favor selections whose privacy scores are closer together. |
| **Amount loss normalization for score calculation** | Lower values favor selections with a lower relative amount loss. |
| **Target coin number per wallet bucket** | Influences selection from overrepresented groups of coin sizes. |
| **Use the Old Coin Selector for fallback** | Compares the old and new selection results and chooses between them. |

Keep the initial values unless you understand the tradeoff you are changing. These are selection preferences; they are not an exact total-fee cap or a promise about the number of outputs a round will produce.

## When another round cannot start

In this release, normal CoinJoin startup rejects a wallet whose funds already meet its privacy target, and also rejects an available selection consisting only of private coins. Selecting a different output wallet does not bypass this rule. The player may hide the manual play control when all funds are private. Do not rely on excluding every non-private coin and then forcing a round solely to forward the remaining private coins.

Choose the destination before starting eligible participation, or review an ordinary transfer of already-private funds. Lowering privacy requirements or including unrelated funds just to make a round start can change the privacy result and cost.
