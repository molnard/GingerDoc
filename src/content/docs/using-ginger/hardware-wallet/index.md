---
doc_id: "hardware-wallets.connect"
title: "Connect and Use a Hardware Wallet"
description: "Connect a supported hardware wallet to Ginger, verify receiving addresses on the device, and approve payments safely."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

<span id="does-ginger-support-hardware-wallets"></span>

> Reading level: Everyday use. Choose this guide when you need the task it describes.

A hardware wallet keeps signing keys on a separate device. Ginger can display its balance and prepare transactions, while the device authorizes supported signing operations. The desktop still handles sensitive public information, so hardware storage does not make wallet activity anonymous.

## Compatibility in this release

Ginger 2.0.26 bundles Hardware Wallet Interface (HWI) 3.2.0. Device recognition in Ginger includes Coldcard, Ledger Nano S, Nano S Plus and Nano X, Trezor One, Model T, Safe 3 and Safe 5, BitBox01, BitBox02, KeepKey, and Blockstream Jade. Recognition is not a guarantee that every device, firmware, passphrase workflow, and address type works in the graphical interface.

The [HWI 3.2.0 device matrix](https://github.com/bitcoin-core/HWI/blob/3.2.0/docs/devices/index.rst) describes the underlying transport's capabilities. Ginger exposes a subset: for example, its normal device connection imports the native SegWit account. HWI support for multisig or Taproot does not by itself create a corresponding Ginger wallet setup flow.

Before moving substantial funds, confirm that your exact device can connect, display a receiving address, and sign a small test payment. If a device requires a PIN or passphrase entry method that Ginger cannot complete, finish the supported device-side workflow or consult the device maker. Do not type the device's recovery words into Ginger as a workaround.

## Add the device

1. Initialize and back up the hardware wallet using its manufacturer's instructions. Use trusted firmware and a data-capable USB cable.
2. Connect one device at a time, unlock it, and open its Bitcoin application if the device requires one. Close other wallet applications that could hold the USB connection.
3. In Ginger's add-wallet screen, choose **Hardware Wallet** and provide a wallet name if prompted.
4. Follow detection and device prompts. Ginger may recognize a wallet you previously added and offer to open that wallet instead of making a duplicate.
5. Let Ginger synchronize. Confirm that the selected network and account are the ones you intended.

Ginger can keep a public wallet record on the computer without the hardware attached. That record permits observation and address generation; spending still needs the signing device or a valid recovery of its keys.

## Receive and verify

Choose **Receive**, add a label, and generate an address. Use **Show on the hardware wallet** when available. Compare the full device-displayed address with Ginger's address before sharing it. If the device and desktop disagree, stop: approving a different address can send funds outside your wallet.

The desktop can display a believable address even if it is compromised. The device screen is useful because it supplies a separate check against the device's own keys. Use a fresh address for each payment to avoid linking unrelated receipts.

## Send and approve

Prepare a payment in Ginger and review the recipient, amount, change, and fee. On the hardware wallet, inspect what it asks you to sign. Reject the request if the destination or amount differs from what you intended, or if the device reports a change/output condition you cannot explain.

Keep the device connected until the signing step finishes. Then check Ginger's transaction history for broadcast and confirmation. Removing a device does not cancel a transaction already broadcast.

## CoinJoin and other limits

A hardware wallet cannot be the source signing wallet for automatic Ginger CoinJoin. A loaded hardware wallet may appear as a CoinJoin output destination for a software wallet; that is a receiving role, and its selection resets on restart. Use only the destination actually offered by Ginger and verify control before relying on it.

The [exchange-to-cold-storage walkthrough](/hardware-wallets/exchange-to-cold-storage/) compares direct receipt of eligible CoinJoin outputs with a later ordinary transfer. It includes the private-only startup restriction and checks for reconciling the two wallets.

PayJoin sending is rejected for hardware wallets in this release. Message signing depends on device and verifier compatibility. Neither the device nor Ginger can reverse a confirmed payment. For file-based signing, read [Use the PSBT workflow](/hardware-wallets/psbt/).

## Connection problems

Try a known data cable, a direct USB port, and a single unlocked device. On Linux, follow the manufacturer's applicable udev/USB permission instructions and reconnect afterward. Avoid running the wallet as root as a permanent fix. If a different passphrase opens an unexpected empty account, check the original device passphrase rather than resetting the device.
