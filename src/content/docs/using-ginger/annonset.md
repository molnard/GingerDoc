---
doc_id: "coinjoin.fees-and-progress"
title: "CoinJoin Fees and Privacy Progress"
description: "Budget the full cost of CoinJoin, distinguish fee exemptions from free transactions, and interpret Ginger privacy scores with worked examples."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Reading level: Advanced guide. First understand the ordinary start-and-pause controls and the fact that completed rounds cost fees.

CoinJoin has a cost and a privacy objective. Review both before starting: a coordinator-fee exemption does not make a round free, and a progress indicator cannot measure everything another person knows about you.

## Coordinator fee versus mining fee

Ginger currently advertises a 0.3% coordinator fee on new inputs larger than 0.03 BTC. Inputs of 0.03 BTC or less and qualifying remixes are advertised as exempt; the advertised exemption also covers the direct spend of CoinJoined funds through one transaction. This is an input-based policy, not a threshold on your total wallet balance. Round parameters and eligibility checks determine what the client can actually use. Recheck the [current Ginger fee explanation](https://gingerwallet.io/) before relying on these terms.

A chargeable input of 0.04 BTC at 0.3% has a coordinator fee of 0.00012 BTC, or 12,000 satoshis, before mining fees. An eligible 0.02 BTC input under the advertised policy has no coordinator fee, but still contributes mining fees. These examples describe the arithmetic, not a quote for a particular round.

Mining fees compensate miners for transaction space. They depend on the fee rate and the transaction's inputs and outputs. A small-value coin can cost a large percentage of its value to spend. Repeated CoinJoins can each create further mining costs even if they qualify for a coordinator-fee exemption.

Do not split coins solely to chase an exemption without understanding the extra transactions, fees and public links this creates.

## Account for the complete cost

There can be more to the amount you spend than the advertised coordinator percentage. A CoinJoin also needs transaction space, and its output amounts may leave a small remainder after the client allocates the available value. That remainder can contribute to the coordinator's proceeds or the transaction's mining fee; it is not necessarily a separate fee item displayed in the wallet.

For one completed CoinJoin, compare the total value of your inputs with the total value of all outputs you own from that transaction. Include outputs sent to a different output wallet. Do not subtract every output in the shared transaction from just your inputs: the other participants own some of those outputs.

The following is an illustrative accounting example, not a prediction of Ginger's output amounts or a screen from the application:

| Item | Satoshis |
| --- | ---: |
| Your chargeable input | 5,000,000 |
| Your outputs, summed across both of your wallets | 4,980,800 |
| Difference in value | 19,200 |
| Coordinator fee assumed for this example: 0.3% of the input | 15,000 |
| Mining costs attributed to your participation in this example | 3,600 |
| Remaining allocation difference in this example | 600 |

Here, 15,000 + 3,600 + 600 = 19,200 satoshis. The last three rows explain the same difference; do not add that difference again as another charge. The round-wide mining fee is also not a fee each participant pays in full. An individual fee field or a log line should not be assumed to represent every component of your value difference.

If the outputs went to a hardware wallet, their disappearance from the software wallet's balance is a transfer of value you still own. Wait for both wallets to synchronize before reconciling it. Unconfirmed transactions, concurrent payments and incoming funds can make a simple before-and-after wallet balance comparison misleading.

## Budget for the whole journey

Include the steps around CoinJoin when deciding whether the result is worth the cost:

| Step | Cost to consider |
| --- | --- |
| Withdraw from an exchange | Its withdrawal charge, which may differ from the mining fee of its transaction |
| Join one or more rounds | The actual value difference for each completed participation |
| Move funds to another wallet | Another mining fee if you make an ordinary transfer |
| Spend the resulting coins later | Fees for the inputs and outputs of that later payment |

For example, one participation costing 19,200 satoshis followed by a 1,200-satoshi transfer costs 20,400 satoshis for those two steps. A later payment is a separate expense. More outputs can give you smaller pieces to spend separately, but spending those pieces also consumes transaction space. That future cost has not already been paid by creating the outputs.

Choose an amount you can afford to use for learning and review the first completed result before letting repeated rounds continue. Keep a personal cost budget; a CoinJoin time preference or coin-selection setting is not a guaranteed cap on the total cost of the whole journey.

## When Ginger waits or refuses a round

The client checks proposed conditions before participating. It can show **Mining fee rate was too high**, **Coordination fee rate was too high**, **Min input count was too low**, or **Server did not give remix fee exemption**. Investigate the offered conditions rather than blindly raising limits.

Fee preferences can also cause **Awaiting cheaper coinjoins**. A time preference means waiting for relatively cheaper conditions, not a reservation guaranteeing completion within a day or a week. A failed pre-broadcast round does not itself create a new confirmed Bitcoin transaction.

Normal CoinJoin startup in this release also refuses a wallet whose funds already meet its privacy target, or a selection containing only coins that meet that target. Choosing another output wallet does not bypass this check. If the purpose is to move already-private funds, review an ordinary transfer instead of expecting that destination selection will force another round.

## What the privacy score can tell you

Ginger tracks privacy information for coins and compares it with the wallet's anonymity-score target. The score is a local estimate based on the wallet's transaction knowledge. It is not a count of independently verified people, nor the probability that an observer can identify you.

The overall progress uses an amount-weighted calculation of scores toward the target. The separate colored balance breakdown represents amounts in privacy categories. These are different measurements.

For a simplified example, suppose the target is 5 and the wallet has only these two coins:

| Coin | Value | Local score | Meets the target? |
| --- | ---: | ---: | --- |
| A | 1,000,000 satoshis | 5 | Yes |
| B | 3,000,000 satoshis | 3 | No |

Only 25% of the value meets the target. For overall progress, this release weights the progress above score 1: coin A contributes 1,000,000 × 4 and coin B contributes 3,000,000 × 2, against a maximum of 4,000,000 × 4. That is 62.5%, displayed as the whole-number value 62%. Seeing different percentages in these two views is therefore not, by itself, an error.

The message **Hurray! All your funds are private!** means that the wallet considers the funds private under its current target and accounting. It does not mean the history vanished, that you are anonymous on the internet, or that a later payment cannot create a link.

## Decide when you have achieved your objective

Lowering a target may change which coins qualify without changing anything already published on the blockchain. Raising it may require more participation and fees; it does not buy a guaranteed number of anonymous people. Receiving new funds, combining coins, or recovering a wallet without its local metadata can also change the displayed result.

Decide whose knowledge you want to limit: an exchange, a particular recipient, or someone following a disclosed address. They may know amounts, times and identities that Ginger cannot see. Evaluate the next payment as well as the current score.

Pause to review completed rounds, reconcile your coins and consider how you will spend them. Preserve local metadata when moving installations if you want to retain more of that context. See [CoinJoin settings](/coinjoin/settings/) for the target, fee preferences and destination controls.
