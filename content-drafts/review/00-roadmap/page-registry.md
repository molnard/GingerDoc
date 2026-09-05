# Page registry and intended journeys

IDs are stable editorial identifiers. The paths below are planned locations across independent PRs; they are shown as code until those files are merged. They are not broken links awaiting another PR.

| Batch | Page ID | Title | Manuscript path |
| --- | --- | --- | --- |
| 01 | `getting-started.first-wallet` | Create and Open Your First Ginger Wallet | `en/getting-started/first-wallet.md` |
| 01 | `getting-started.install` | Install Ginger Wallet | `en/getting-started/install.md` |
| 01 | `getting-started.verify-download` | Verify a Ginger Wallet Download | `en/getting-started/verify-download.md` |
| 02 | `backup-recovery.backups` | Back Up Your Ginger Wallet | `en/backup-recovery/backups.md` |
| 02 | `backup-recovery.restore` | Recover a Wallet or Missing Balance | `en/backup-recovery/restore.md` |
| 02 | `backup-recovery.two-factor-authentication` | Use Two-Factor Authentication in Ginger | `en/backup-recovery/two-factor-authentication.md` |
| 03 | `coinjoin.fees-and-progress` | CoinJoin Fees and Privacy Progress | `en/coinjoin/fees-and-progress.md` |
| 03 | `coinjoin.settings` | Configure CoinJoin and Output Wallets | `en/coinjoin/settings.md` |
| 03 | `coinjoin.use-coinjoin` | Use CoinJoin in Ginger Wallet | `en/coinjoin/use-coinjoin.md` |
| 04 | `payments.coin-control-history` | Coin Control, History, and Stuck Transactions | `en/payments/coin-control-history.md` |
| 04 | `payments.payjoin-message-signing` | PayJoin and Message Signing | `en/payments/payjoin-message-signing.md` |
| 04 | `payments.receive` | Receive Bitcoin and Manage Addresses | `en/payments/receive.md` |
| 04 | `payments.send` | Send Bitcoin and Review Fees | `en/payments/send.md` |
| 05 | `hardware-wallets.connect` | Connect and Use a Hardware Wallet | `en/hardware-wallets/connect.md` |
| 05 | `hardware-wallets.exchange-to-cold-storage` | From an Exchange to Cold Storage with Ginger | `en/hardware-wallets/exchange-to-cold-storage.md` |
| 05 | `hardware-wallets.psbt` | Use the PSBT Workflow | `en/hardware-wallets/psbt.md` |
| 06 | `settings-network.full-node-fees` | Use Your Own Bitcoin Node and Choose Fee Estimates | `en/settings-network/full-node-fees.md` |
| 06 | `settings-network.preferences` | Appearance, Language, and Everyday Settings | `en/settings-network/preferences.md` |
| 06 | `settings-network.secret-hunt` | Secret Hunt in Ginger Wallet | `en/settings-network/secret-hunt.md` |
| 06 | `settings-network.tor-sync` | Tor, Synchronization, and Network Privacy | `en/settings-network/tor-sync.md` |
| 07 | `buy-sell.buy` | Buy Bitcoin Through Ginger Wallet | `en/buy-sell/buy.md` |
| 07 | `buy-sell.sell-and-orders` | Sell Bitcoin and Resolve Provider Orders | `en/buy-sell/sell-and-orders.md` |
| 08 | `help.faq` | Ginger Wallet Frequently Asked Questions | `en/help/faq.md` |
| 08 | `help.glossary` | Bitcoin and Ginger Wallet Glossary | `en/help/glossary.md` |
| 08 | `help.troubleshooting` | Troubleshoot Ginger Wallet | `en/help/troubleshooting.md` |
| 09 | `learn-privacy.habits` | Bitcoin Privacy Habits Before and After a Payment | `en/learn-privacy/habits.md` |
| 09 | `learn-privacy.information-sharing` | Where Your Wallet Information Goes | `en/learn-privacy/information-sharing.md` |
| 09 | `learn-privacy.repeated-payments` | Receiving Donations and Repeated Payments | `en/learn-privacy/repeated-payments.md` |
| 09 | `learn-privacy.spending-after-coinjoin` | Spending After CoinJoin: Worked Examples | `en/learn-privacy/spending-after-coinjoin.md` |
| 09 | `learn-privacy.wallet-migration` | Moving to Ginger Without Exposing More Wallet History | `en/learn-privacy/wallet-migration.md` |
| 09 | `learn-privacy.who-can-see` | Who Can See My Bitcoin Transactions? | `en/learn-privacy/who-can-see.md` |
| 10 | `learn-coinjoin.explained` | What Is CoinJoin? Benefits, Costs, and Limitations | `en/learn-coinjoin/explained.md` |
| 10 | `learn-coinjoin.trust-and-limits` | What Do You Trust When You CoinJoin? | `en/learn-coinjoin/trust-and-limits.md` |
| 10 | `learn-coinjoin.when-to-use` | When Does CoinJoin Make Sense? | `en/learn-coinjoin/when-to-use.md` |
| 11 | `learn-self-custody.basics` | Bitcoin Self-Custody: Backups, Passphrases, and Hardware Wallets | `en/learn-self-custody/basics.md` |
| 11 | `learn-self-custody.security-routine` | Build a Recoverable Bitcoin Security Routine | `en/learn-self-custody/security-routine.md` |

## Add these links at integration

- `learn-privacy.who-can-see` → `learn-privacy.habits` → `payments.receive` → `coinjoin.use-coinjoin`
- `learn-coinjoin.explained` → `learn-coinjoin.when-to-use` → `coinjoin.fees-and-progress` → `coinjoin.use-coinjoin`
- `learn-self-custody.basics` → `learn-self-custody.security-routine` → `backup-recovery.backups` → `hardware-wallets.connect`
- `getting-started.first-wallet` → `backup-recovery.backups` → `payments.receive` → `payments.send` → `coinjoin.use-coinjoin`
- `backup-recovery.restore` → `backup-recovery.backups` → `backup-recovery.two-factor-authentication` → `help.troubleshooting`
- `payments.send` → `payments.coin-control-history` → `coinjoin.fees-and-progress` → `hardware-wallets.psbt`
- `buy-sell.buy` → `buy-sell.sell-and-orders` → `payments.receive` → `learn-privacy.habits`

## Journeys added after the publication research

- `getting-started.verify-download` → `hardware-wallets.exchange-to-cold-storage` → `coinjoin.fees-and-progress` → `learn-privacy.spending-after-coinjoin`
- `learn-privacy.wallet-migration` → `backup-recovery.restore` → `learn-privacy.information-sharing`
- `learn-privacy.repeated-payments` → `payments.receive` → `learn-privacy.spending-after-coinjoin`
- `learn-coinjoin.trust-and-limits` → `coinjoin.fees-and-progress` → `coinjoin.settings`
- `learn-privacy.information-sharing` → `payments.payjoin-message-signing` → `learn-self-custody.security-routine`
