# Review 01: Installation and first wallet

Complete English user-manual manuscripts, outside the live site build. Each topic branch starts at the same fork base and can be reviewed independently.

- Application baseline: [v2.0.26](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26), commit `fa27e5419da5dfa391fb1db38012c0b1141f59b3`.
- Source checked: 2026-09-05. Source/UI inspection; no real payment, CoinJoin, provider order, or physical-device test was performed.
- Target: `molnard/GingerDoc:master`. No upstream PR, deployment, engine change, or translation is part of this topic.

## Read the manuscripts

- [Create and Open Your First Ginger Wallet](../en/getting-started/first-wallet.md) — beginner; `getting-started.first-wallet`
- [Install Ginger Wallet](../en/getting-started/install.md) — beginner; `getting-started.install`
- [Start Here: Your First Steps with Ginger](../en/getting-started/start-here.md) — beginner; `getting-started.start-here`
- [Verify a Ginger Wallet Download](../en/getting-started/verify-download.md) — advanced; `getting-started.verify-download`

## Behavior evidence

| Claim reviewed | Pinned released source |
| --- | --- |
| New creates twelve English words | [WalletCreationOptions.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/AddWallet/Models/WalletCreationOptions.cs#L12) |
| First-wallet naming can be skipped | [WalletNamePageViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/AddWallet/ViewModels/WalletNamePageViewModel.cs#L100) |
| Passphrase after confirming words | [ConfirmRecoveryWordsViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/AddWallet/ViewModels/Create/ConfirmRecoveryWordsViewModel.cs#L138) |
| Wallet import options | [AddWalletPageViewModel.cs](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/AddWallet/ViewModels/AddWalletPageViewModel.cs#L35) |
| Background and update controls | [GeneralSettingsTabView.axaml](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/Settings/Views/GeneralSettingsTabView.axaml#L21) |
| Recovery word verification | [WalletToolsView.axaml](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi.Fluent/HomeScreen/WalletSettings/Views/WalletToolsView.axaml#L22) |

## Exact English UI labels

These labels used in the prose match the released resources. Literal XAML/enum labels are covered by the source files above. Button availability is checked in views/view models, not inferred only from a translated string.

| Visible label | Resource key |
| --- | --- |
| Add Passphrase | [`AddPassphrase`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1138) |
| Auto download new version | [`AutoDownloadNewVersion`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L817) |
| Automatically start coinjoin | [`AutomaticallyStartCoinjoin`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L487) |
| Coinjoin Settings | [`CoinjoinSettings`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L373) |
| Confirm Recovery Words | [`ConfirmRecoveryWordsViewModel`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1108) |
| General | [`General`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L136) |
| Import File | [`ImportWallet`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L568) |
| New | [`CreateNewWallet`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L565) |
| Recover | [`RecoverWallet`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L571) |
| Recovery Words | [`RecoveryWords`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1117) |
| Run in background when window closed | [`RunInBackgroundWhenClosed`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L799) |
| Settings | [`Settings`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L145) |
| Tools | [`Tools`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L478) |
| Verify | [`Verify`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1241) |
| Verify Recovery Words | [`WalletToolsVerifyRecoveryWords`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L514) |
| Wallet Name | [`WalletName`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L574) |
| Wallet Settings | [`WalletSettings`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L355) |

## Release differences and review limits

Release assets and OS requirements come from the v2.0.26 release notes. The signing fingerprint is corroborated against the website and released PGP key. Do not infer a desktop ARM package where the release has none. New-wallet auto-CoinJoin is deliberately described via the actual switch: WalletAttributes defaults to false despite onboarding copy describing automatic behavior.

## Integration handoff

Keep page IDs stable. Convert frontmatter keys to the chosen engine when integrating. The only relative manuscript links point inside this topic, so merging another topic is not a prerequisite. The PR00 page registry lists the intended navigation across topics; add those links after all relevant pages have merged. Keep source notes out of public reader navigation.

Before publication, review the instructions against the installed release and recheck live provider/coordinator terms. No screenshots or framework-specific components are required.

## Reader-level and FAQ revision

Every page now has a visible reading level and `reader_level` metadata. Beginner instructions keep recovery, recipient verification and fees in the ordinary flow; detailed reference is separate. No unrelated wallet-brand mention remains in the public manuscript. Exact code paths and original research names remain truthful editorial provenance.

The new first-use page links to installation and creation, then gives a short receive/send/CoinJoin orientation. The payment and CoinJoin controls were cross-checked against the released view models used by their full task guides.

### Additional released UI labels

| Visible label | Released resource |
| --- | --- |
| Automatic | [`WalletAutomatic`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L340) |
| Confirm | [`Confirm`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L1027) |
| Continue | [`Continue`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L583) |
| Receive | [`WalletReceive`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L367) |
| Send | [`WalletSend`](https://github.com/GingerPrivacy/GingerWallet/blob/fa27e5419da5dfa391fb1db38012c0b1141f59b3/WalletWasabi/Lang/Resources.resx#L337) |
