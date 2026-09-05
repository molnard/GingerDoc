---
doc_id: "getting-started.verify-download"
title: "Verify a Ginger Wallet Download"
description: "Check a Ginger Wallet release signature and signing-key fingerprint before installing the application."
lang: "en-US"
verified_release: "v2.0.26"
---

# Verify a Ginger Wallet Download

A detached signature helps establish that the file you downloaded was signed by the holder of a particular signing key and has not changed since signing. It does not prove that the software is free of bugs. You must also establish that the signing key is the one you intended to trust.

## Collect the matching files

From the [v2.0.26 release](https://github.com/GingerPrivacy/GingerWallet/releases/tag/v2.0.26), download your installer or archive and the file with the same name followed by `.asc`. Keep them in one folder. For example, the Windows pair is `Ginger-2.0.26.msi` and `Ginger-2.0.26.msi.asc`. A signature for a DMG, ZIP, or different version does not verify that MSI.

Obtain the public signing key through the PGP link on the [official website](https://gingerwallet.io/). Save the key as `PGP.txt`. Use a trusted OpenPGP application, such as GnuPG, to inspect and import it. If GnuPG is not installed, obtain it from [GnuPG's official download page](https://gnupg.org/download/).

## Check the fingerprint

The fingerprint published by Ginger for this release is:

```text
FA0B 017A 3E75 CE65 CBF7 838F A8FF 3767 EDF5 DCE9
```

In a terminal opened in the download folder, inspect the key before importing it:

```sh
gpg --show-keys --with-fingerprint PGP.txt
gpg --import PGP.txt
```

Compare the complete fingerprint, not only a short key ID or the displayed name. Where possible, corroborate it through a previously trusted copy or another established Ginger channel. Fetching a key and signature from the same compromised source would not, by itself, establish authenticity. If Ginger announces a key change, verify that announcement before trusting the new fingerprint.

## Verify the actual download

For the Windows installer, run:

```sh
gpg --verify Ginger-2.0.26.msi.asc Ginger-2.0.26.msi
```

For another platform, substitute both exact filenames. A successful verification should identify a good signature from the intended key. GnuPG can also warn that the key is not certified by a trusted signature: this concerns how you authenticated the key, and must not be confused with a bad file signature.

If the result says **BAD signature**, the key is missing, the fingerprint differs, or verification cannot finish, do not open the download yet. Check the filename pair, repeat the download, and obtain help through the official project's links if the problem persists. Do not mark an unfamiliar key trusted merely to remove a warning.

## Checksums and platform signatures

A checksum comparison can detect a download error. A checksum taken from an untrusted page cannot authenticate software, because an attacker can replace both the download and its checksum. The release also supplies checksum material; the matching detached signature procedure above is sufficient for verifying one selected package.

Windows code signing and macOS signing or notarization provide additional platform checks. They complement verification of the downloaded release; they do not replace the need to protect your recovery words and review transactions.
