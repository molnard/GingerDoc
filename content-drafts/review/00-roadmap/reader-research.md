# A Beginner-Friendly Ginger Manual and Research-Based FAQ

Audience: Ginger users and documentation reviewers. Date: 2026-09-05. Scope: the English manual and existing fork PRs; ordinary Markdown, no engine selection, deployment or translation. Application baseline: the latest stable release checked on this date, v2.0.26 (2026-07-31), commit `fa27e5419da5dfa391fb1db38012c0b1141f59b3`.

## Decision and delivered structure

The manual now separates Start here, Privacy explained simply, Everyday use and Advanced use. There are 42 reader pages. The basic FAQ has 34 short answers; a separate advanced FAQ has 25. All 25 historical question families below map to an answer, with Ginger-only wording and released-source checks.

The first-use route keeps backup, original passphrase, address/network verification, fees and confirmation limits in view. Detailed file backups, special recovery options, custom fee accounting and protocol phases moved to separate advanced pages. Every reader page has a visible level and machine-readable metadata. Research provenance is editorial and excluded from the public navigation.

## What other documentation actually does

| Project evidence | Observed pattern | Application to Ginger |
| --- | --- | --- |
| [BTCPay user guide](https://docs.btcpayserver.org/Guide/) and [navigation source](https://github.com/btcpayserver/btcpayserver-doc/blob/c8d6a1d2987d589f78e8c3b60c49d73dc87283d8/docs/.vuepress/config.js#L21) | Numbered onboarding separate from features; user, deployment and developer entrances | A first-use route inside a user manual; operator/developer material stays outside |
| [BTCPay FAQ](https://docs.btcpayserver.org/FAQ/) | Separate FAQ entrance with question groups | Group the short answers by task or symptom |
| [Electrum documentation](https://electrum.readthedocs.io/en/latest/) | Explicit beginner, advanced, command-line and developer groups | Visible audience labels; do not rely on a label alone when a page still contains dense material |
| [Sparrow Best Practices](https://sparrowwallet.com/docs/best-practices.html) | Beginner, intermediate and expert stages in one guide | Let readers choose when to go deeper; do not import its wallet-specific configurations or thresholds |

These are observed navigation patterns, not proof that each project has a universal ELI5/advanced switch or that the proposed layout has been usability-tested with Ginger beginners. The implementation is an editorial inference from those patterns and the question sample.

## Questions collected over seven years

Period: 2019-09-05 through 2026-09-05. Original issues, discussions and public posts are evidence of what users asked, not authoritative answers for Ginger. The targeted sample includes early, middle and recent parts of the period. It is not a frequency census or measured ranking of popularity.

| Family | Question need | Dated original example | Ginger answer location |
| --- | --- | --- | --- |
| 1 | Empty or incomplete recovery | [2021-04-04: original question](https://github.com/WalletWasabi/WalletWasabi/issues/5530) | `help.advanced-faq`, `help.faq` |
| 2 | Forgotten passphrase | [2026-05-03: original question](https://github.com/orgs/WalletWasabi/discussions/14560) | `help.advanced-faq`, `help.faq` |
| 3 | Backup and local privacy metadata | [2021-10-27: original question](https://github.com/WalletWasabi/WalletWasabi/issues/6589) | `help.advanced-faq`, `help.faq` |
| 4 | Authentic downloads and mobile impostors | [2021-06-03: original question](https://www.reddit.com/r/WasabiWallet/comments/nr0446) | `help.faq` |
| 5 | Paid at a service but not received | [2025-12-05: original question](https://github.com/orgs/WalletWasabi/discussions/14180) | `help.faq` |
| 6 | Wrong network and missing coins | [2020-07-20: original question](https://www.reddit.com/r/WasabiWallet/comments/hucvj5) | `help.faq` |
| 7 | Connection, synchronization and Tor | [2021-02-08: original question](https://github.com/WalletWasabi/WalletWasabi/issues/5159) | `help.advanced-faq`, `help.faq` |
| 8 | Own-node roles and dependencies | [2020-03-04: original question](https://www.reddit.com/r/WasabiWallet/comments/fdg0j5) | `help.advanced-faq`, `help.faq` |
| 9 | Reinstalling preserves configuration | [2026-02-25: original question](https://github.com/orgs/WalletWasabi/discussions/14370) | `help.advanced-faq`, `help.faq` |
| 10 | CoinJoin waiting states | [2022-11-23: original question](https://www.reddit.com/r/WasabiWallet/comments/z33fxo) | `help.advanced-faq`, `help.faq` |
| 11 | Minimum, small coins and incomplete progress | [2020-11-14: original question](https://www.reddit.com/r/WasabiWallet/comments/ju1rzr) | `help.advanced-faq`, `help.faq` |
| 12 | Full costs and meaning of free | [2026-02-05: original question](https://github.com/orgs/WalletWasabi/discussions/14308) | `help.advanced-faq`, `help.faq` |
| 13 | Duration, rounds and percentage | [2020-01-15: original question](https://www.reddit.com/r/WasabiWallet/comments/eowfrt) | `help.advanced-faq`, `help.faq` |
| 14 | Sleep, close and interrupted participation | [2022-01-01: original question](https://www.reddit.com/r/WasabiWallet/comments/rtrfpa) | `help.advanced-faq`, `help.faq` |
| 15 | Unexpected transaction and automatic CoinJoin | [2026-06-19: original question](https://github.com/orgs/WalletWasabi/discussions/14694) | `help.faq` |
| 16 | Later spending, combining coins and change | [2019-11-27: original question](https://www.reddit.com/r/WasabiWallet/comments/e2p1j5) | `help.advanced-faq`, `help.faq` |
| 17 | Hardware storage after CoinJoin | [2019-10-03: original question](https://github.com/WalletWasabi/WalletWasabi/issues/2394) | `help.advanced-faq`, `help.faq` |
| 18 | Same keys in different applications | [2026-08-19: original question](https://github.com/orgs/WalletWasabi/discussions/14952) | `help.advanced-faq`, `help.faq` |
| 19 | Reused addresses and multi-coin selection | [2025-09-17: original question](https://github.com/orgs/WalletWasabi/discussions/14093) | `help.advanced-faq`, `help.faq` |
| 20 | Pending payments and time estimates | [2020-10-21: original question](https://www.reddit.com/r/WasabiWallet/comments/jffdb3) | `help.advanced-faq`, `help.faq` |
| 21 | Cancellation and replacement | [2022-04-01: original question](https://www.reddit.com/r/WasabiWallet/comments/tu4fkj) | `help.faq` |
| 22 | Spendable balance and sending everything | [2021-12-15: original question](https://github.com/WalletWasabi/WalletWasabi/issues/6878) | `help.advanced-faq`, `help.faq` |
| 23 | Safe support and wallet validation scams | [2024-08-09: original question](https://www.reddit.com/r/WasabiWallet/comments/1emvntp) | `help.advanced-faq`, `help.faq` |
| 24 | Exchange acceptance | [2023-07-01: original question](https://bitcointalk.org/index.php?topic=5458193.0) | `help.faq` |
| 25 | Proving control with a signed message | [2025-10-25: original question](https://github.com/orgs/WalletWasabi/discussions/14132) | `help.advanced-faq` |

The underlying question records preserve original titles, dates, URLs and access notes. The same records distinguish a feature request from an existing function, a user's suspected loss from a verified diagnosis, and the date of a report from the date of an event it describes. Public reader answers do not repeat those product names or historical claims.

## Reconciliation against released Ginger

The answers use the released recovery flow, original-passphrase behavior, metadata files, Tor startup, input eligibility, payment preview, speed-up/cancel actions, hardware restrictions, message signing and optional service data flows. Topic review records contain exact source lines and UI labels. Forum answers are not copied as configuration instructions.

Several old answers would mislead current readers: fixed CoinJoin minima or input counts, claims that transaction acceleration is unavailable, public-testnet troubleshooting recipes, and workflows belonging only to another application. They were excluded. A mobile-app report does not establish an official Ginger mobile product. A hardware-destination feature request does not establish current support; the Ginger destination selector and private-only startup guard govern that answer.

Current fee wording follows [Ginger's advertised policy](https://gingerwallet.io/) and is marked time-dependent. The existing public CoinJoin page still contains an older threshold; that page is not used to override the current website and release-aware cost explanation. Neither marketing nor community replies establish guaranteed anonymity, guaranteed provider acceptance or a guaranteed completion time.

## Limits and stopping decision

GitHub issues/discussions were read from original API records, with independent spot checks of high-impact recovery, hardware and spend-all questions. Some direct web opens returned cache misses; the API supplied the original 2026 discussion text. Reddit evidence comes from indexed original-post text, so deleted, private and unindexed material may be absent. No exact question-frequency or keyword-demand claim is made.

Three official documentation projects establish the useful navigation patterns, and the 25 question families are covered by completed answers. Further broad searching is unlikely to change the structure. This work checks content and release evidence; it is not a wallet audit, live-funds experiment, physical-device test or novice usability study. Site navigation and search behavior still require verification when the engine is integrated.
