---
doc_id: "getting-started.install"
title: "Install Ginger Wallet"
description: "Choose the right Ginger Wallet desktop download, check compatibility, and install the released application."
lang: "en-US"
verified_release: "v2.0.26"
---

# Install Ginger Wallet

Ginger Wallet is a desktop Bitcoin wallet. You hold the keys to your bitcoin and can use CoinJoin to make transaction tracing harder. It does not provide a mobile wallet, a Lightning wallet, or support for other cryptocurrencies in this release.

This guide covers version 2.0.26. Obtain software through the [official Ginger website](https://gingerwallet.io/) or its linked [GitHub release](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26). A search advertisement, a private message, or a similarly named mobile app is not a reliable download source.

## Choose a download

| Computer | Supported system for this release | Download |
| --- | --- | --- |
| Windows PC, x64 | Windows 10, version 1607 or newer; Windows 11, build 22000 or newer | `Ginger-2.0.26.msi` |
| Mac with Apple silicon | macOS 12 or newer | `Ginger-2.0.26-arm64.dmg` |
| Mac with an Intel processor | macOS 12 or newer | `Ginger-2.0.26.dmg` |
| Ubuntu or Debian, x64 | Ubuntu 22.04 or newer; Debian 11 or newer | `Ginger-2.0.26.deb` |
| Other supported Linux, x64 | The release also lists Fedora 37 or newer | `Ginger-2.0.26.tar.gz` |

On a Mac, **About This Mac** identifies the chip or processor. The release also contains ZIP archives labelled `win-x64`, `linux-x64`, `macOS-x64`, and `macOS-arm64`. There is no Windows ARM or Linux ARM package in this release. Do not assume that an archive for another processor will work.

Ginger needs an internet connection and writable storage for its wallet and synchronization data. The optional full node needs substantially more disk space, bandwidth, and initial synchronization time than ordinary wallet use. You do not need a full node, a separate Tor installation, or developer tools to start.

## Install the application

1. Download the package for your system and its matching `.asc` signature. Follow [Verify a download](verify-download.md) before opening the package.
2. On Windows, open the `.msi` and follow the installer. On macOS, open the `.dmg` and copy Ginger to Applications. On Ubuntu or Debian, open the `.deb` with the system's software installer. For the Linux archive, extract the complete archive and launch the included application; keep its companion files together.
3. Open Ginger. Allow time for its first connection and synchronization. Tor is included and normally starts with the wallet.
4. Continue with [Create and open a wallet](first-wallet.md).

A ZIP or tar archive avoids the normal installer, but does not make your wallet disposable or leave no data on the computer. Wallet files are stored separately from the application. Keep backups before moving or removing either.

## If your operating system displays a warning

A new release may not yet have a strong download reputation. A warning can also indicate a damaged or untrusted file. Check the download source, matching version, and signature first. If verification fails, stop and download again from the official release. Do not disable antivirus protection or system-wide security checks to get past an unexplained warning.

For Linux device access problems, see your hardware wallet manufacturer's USB permission instructions. Installing a wallet does not require running it permanently as an administrator.

## Updates and availability

The [release list](https://github.com/GingerPrivacy/GingerWallet/releases) shows published versions and their changes. In **Settings** → **General**, **Auto download new version** controls downloading updates. Downloading an update is different from installing it; follow the update prompt and allow Ginger to close normally. Keep your recovery backup available before updating. The application files can be replaced without intentionally deleting your wallet data.

Read the service terms presented by Ginger before accepting them. Service availability has geographic and other restrictions; the official website currently states that the service is unavailable to U.S. citizens. A successful installation does not establish eligibility to use every connected service.
