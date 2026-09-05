# Implementation of the Additional Research Topics

All ten proposals from the [publication and talk research](additional-topics.md) have been developed into complete English user-manual drafts. Six new pages increase the manuscript count from 30 to 36. Four expansions appear in three existing pages, with costs and privacy progress sharing a chapter. The CoinJoin settings chapter also records a consequential release check.

## Review mapping

The IDs below are stable editorial references. Open the corresponding PR's reading links to review each rendered manuscript without waiting for the other topics to merge.

| Research item | Topic | Completed page ID | Review home | Delivered coverage |
| --- | --- | --- | --- | --- |
| 1 | Exchange to cold storage | `hardware-wallets.exchange-to-cold-storage` | [PR #6](https://github.com/molnard/GingerDoc/pull/6) | New page: two routes, verification, eligibility, restart check, reconciliation and later spending |
| 2 | Spending after CoinJoin | `learn-privacy.spending-after-coinjoin` | [PR #10](https://github.com/molnard/GingerDoc/pull/10) | New page: four balanced examples for a purchase, joint spend, change and hardware consolidation |
| 3 | Moving wallet applications | `learn-privacy.wallet-migration` | [PR #10](https://github.com/molnard/GingerDoc/pull/10) | New page: same keys, hardware account or fresh keys; xpub scope and earlier disclosures |
| 4 | CoinJoin trust and limits | `learn-coinjoin.trust-and-limits` | [PR #11](https://github.com/molnard/GingerDoc/pull/11) | New page: custody, privacy, availability, software, observers and Sybil assumptions |
| 5 | Complete privacy costs | `coinjoin.fees-and-progress` | [PR #4](https://github.com/molnard/GingerDoc/pull/4) | Expanded: coordinator/mining fees, remainders, repeated rounds, later transfers and reconciliation |
| 6 | Where information goes | `learn-privacy.information-sharing` | [PR #10](https://github.com/molnard/GingerDoc/pull/10) | New page: sync, blocks, fees, broadcast, CoinJoin, providers, 2FA, Secret Hunt, browsers and files |
| 7 | Privacy scores | `coinjoin.fees-and-progress` | [PR #4](https://github.com/molnard/GingerDoc/pull/4) | Expanded: target-based local estimate, 62% progress versus 25% private balance, observer limits |
| 8 | PayJoin privacy | `payments.payjoin-message-signing` | [PR #5](https://github.com/molnard/GingerDoc/pull/5) | Expanded: recipient knowledge, public observers, fingerprints and ordinary-payment fallback |
| 9 | Donations and repeated payments | `learn-privacy.repeated-payments` | [PR #10](https://github.com/molnard/GingerDoc/pull/10) | New page: permanent/fresh addresses, records, late receipts, verified refunds and tiny inputs |
| 10 | Exposed addresses, xpubs or keys | `learn-self-custody.security-routine` | [PR #12](https://github.com/molnard/GingerDoc/pull/12) | Expanded: decision table, privacy-only response, trusted replacement and copied-key revocation limits |

## A release finding changes the cold-storage instructions

The June 2026 discussion suggested mixing funds to the target, excluding unfinished coins and using another CoinJoin to forward the private coins. Source inspection found that the ordinary v2.0.26 start path rejects an all-private wallet or an all-private candidate set. Choosing a different output destination does not bypass that guard. The internal pending-payment exception has no documented released user flow here and is not offered as a workaround.

The finished walkthrough therefore offers two supported forms: eligible participation can send outputs directly to the loaded hardware wallet, or already-private funds can be transferred with an ordinary transaction after review. Direct destination selection does not wait for an additional privacy-target event before delivering the round's outputs. Destination choice resets when the wallet settings model is initialized after restart.

- Startup checks: [CoinJoinManager.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/WabiSabi/Client/CoinJoin/Manager/CoinJoinManager.cs#L208).
- Player visibility: [CoinjoinPlayerViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/CoinjoinPlayer/ViewModel/CoinjoinPlayerViewModel.cs#L299).
- Destination initialization: [WalletSettingsModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/Models/Wallets/WalletSettingsModel.cs#L72).
- Selected destination passed to participation: [WalletCoinjoinModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/Models/Wallets/WalletCoinjoinModel.cs#L96).

## Validation and scope

Every page has a stable ID, English title and description, one visible title, and the v2.0.26 baseline. Buttons and menu terms were checked against released resources and views. New source notes distinguish a request's actual fields from a general claim that the service learns nothing. Numerical examples use fictional amounts and balance exactly; score progress was checked against the released calculation.

Primary research is linked where it helps a reader understand a limitation. Historical measurements, interested-operator statements, proposals for other wallets and unavailable recordings are not presented as current Ginger performance or released features. The source-access and attribution limits remain in the research record. No measured search-volume ranking is claimed.

Reader pages have only same-topic relative links. The updated page registry lists cross-topic journeys for later integration. Content remains portable Markdown, with no screenshots, dependencies, runtime components or deployment changes. English review and merging precede translation; the existing localization contract and nine released UI languages remain the integration baseline.

These checks cover manuscripts and source evidence. No live-funds payment, CoinJoin, provider order, 2FA setup, recovery exercise or physical-device test was performed. The maintainer's review and representative application walkthroughs remain necessary before public integration.
