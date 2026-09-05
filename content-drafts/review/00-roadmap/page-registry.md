# Reader paths and page registry

The default entrance is Start here. These are editorial routes for the future site; topic PRs remain independently reviewable. Paths are code until all relevant files have merged. The machine-readable navigation also maps each FAQ question to its intended follow-up guide.

## Start here

The first-wallet route and short answers. No custom configuration is a prerequisite.

| Batch | Page | Reading level | Stable ID |
| --- | --- | --- | --- |
| 01 | Start Here: Your First Steps with Ginger | beginner | `getting-started.start-here` |
| 01 | Install Ginger Wallet | beginner | `getting-started.install` |
| 01 | Create and Open Your First Ginger Wallet | beginner | `getting-started.first-wallet` |
| 02 | Back Up Your Ginger Wallet | beginner | `backup-recovery.backups` |
| 04 | Receive Bitcoin and Manage Addresses | beginner | `payments.receive` |
| 04 | Send Bitcoin and Review Fees | beginner | `payments.send` |
| 03 | Use CoinJoin in Ginger Wallet | beginner | `coinjoin.use-coinjoin` |
| 08 | Ginger Wallet FAQ: Start Here | beginner | `help.faq` |

## Privacy explained simply

Plain-language explanations for decisions before changing settings.

| Batch | Page | Reading level | Stable ID |
| --- | --- | --- | --- |
| 09 | Who Can See My Bitcoin Transactions? | beginner | `learn-privacy.who-can-see` |
| 09 | Bitcoin Privacy Habits Before and After a Payment | beginner | `learn-privacy.habits` |
| 10 | What Is CoinJoin? A Simple Explanation | beginner | `learn-coinjoin.explained` |
| 11 | Bitcoin Self-Custody: Backups, Passphrases, and Hardware Wallets | beginner | `learn-self-custody.basics` |

## Everyday use

Choose the task you need; these are not extra steps required to finish setup.

| Batch | Page | Reading level | Stable ID |
| --- | --- | --- | --- |
| 02 | Recover a Wallet or Missing Balance | everyday | `backup-recovery.restore` |
| 05 | Connect and Use a Hardware Wallet | everyday | `hardware-wallets.connect` |
| 06 | Appearance, Language, and Everyday Settings | everyday | `settings-network.preferences` |
| 06 | Secret Hunt in Ginger Wallet | everyday | `settings-network.secret-hunt` |
| 06 | Tor, Synchronization, and Network Privacy | everyday | `settings-network.tor-sync` |
| 07 | Buy Bitcoin Through Ginger Wallet | everyday | `buy-sell.buy` |
| 07 | Sell Bitcoin and Resolve Provider Orders | everyday | `buy-sell.sell-and-orders` |
| 08 | Bitcoin and Ginger Wallet Glossary | everyday | `help.glossary` |
| 08 | Troubleshoot Ginger Wallet | everyday | `help.troubleshooting` |
| 09 | Receiving Donations and Repeated Payments | everyday | `learn-privacy.repeated-payments` |
| 10 | When Does CoinJoin Make Sense? | everyday | `learn-coinjoin.when-to-use` |

## Advanced use

Optional reference for a specific need. Each page states prerequisites and its reading level.

| Batch | Page | Reading level | Stable ID |
| --- | --- | --- | --- |
| 01 | Verify a Ginger Wallet Download | advanced | `getting-started.verify-download` |
| 02 | Wallet Files, Metadata and Passphrase Details | advanced | `backup-recovery.backup-files` |
| 02 | Advanced Recovery: Accounts, Address Scanning and Files | advanced | `backup-recovery.recovery-options` |
| 02 | Use Two-Factor Authentication in Ginger | advanced | `backup-recovery.two-factor-authentication` |
| 03 | CoinJoin Fees and Privacy Progress | advanced | `coinjoin.fees-and-progress` |
| 03 | CoinJoin Rounds and Input Eligibility | advanced | `coinjoin.round-details` |
| 03 | Configure CoinJoin and Output Wallets | advanced | `coinjoin.settings` |
| 04 | Coin Control, History, and Stuck Transactions | advanced | `payments.coin-control-history` |
| 04 | Transaction Fees, Custom Rates and Change | advanced | `payments.fees-and-change` |
| 04 | PayJoin and Message Signing | advanced | `payments.payjoin-message-signing` |
| 05 | From an Exchange to Cold Storage with Ginger | advanced | `hardware-wallets.exchange-to-cold-storage` |
| 05 | Use the PSBT Workflow | advanced | `hardware-wallets.psbt` |
| 06 | Use Your Own Bitcoin Node and Choose Fee Estimates | advanced | `settings-network.full-node-fees` |
| 08 | Advanced Ginger Wallet FAQ | advanced | `help.advanced-faq` |
| 09 | Where Your Wallet Information Goes | advanced | `learn-privacy.information-sharing` |
| 09 | Spending After CoinJoin: Worked Examples | advanced | `learn-privacy.spending-after-coinjoin` |
| 09 | Moving to Ginger Without Exposing More Wallet History | advanced | `learn-privacy.wallet-migration` |
| 10 | What Do You Trust When You CoinJoin? | advanced | `learn-coinjoin.trust-and-limits` |
| 11 | Build a Recoverable Bitcoin Security Routine | advanced | `learn-self-custody.security-routine` |

## Integration rules

Beginner next-page buttons stay inside the first-use path. A link to custom configuration must say Advanced or optional. Keep recovery backups, payment verification, actual fees and irreversible-payment limits in the basic instructions. The site must display reading levels before users open search results.

Use `page-registry.json` for exact manuscript paths and `navigation.json` for the route order, search behavior and FAQ follow-up links. Keep `review/` outside public navigation and indexing.
