---
doc_id: "hardware-wallets.psbt"
title: "Use the PSBT Workflow"
description: "Prepare a Bitcoin transaction in Ginger, sign it with a hardware wallet using a file, and import the result for broadcast."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Reading level: Advanced guide. First establish a verified hardware wallet and its independent backup.

A partially signed Bitcoin transaction (PSBT) is a file that carries a transaction and information needed by a signer. It lets you separate preparation on the desktop from signing on a hardware wallet. A PSBT can disclose addresses, amounts, and wallet information, so treat it as private even before it can spend anything.

## Prepare the wallet connection

You need a compatible hardware-wallet record in Ginger, linked to the keys on the signing device. For a supported Coldcard wallet JSON export, add the file with **Import File**. Use the manufacturer's current export instructions for that firmware; a PSBT transaction file is not a wallet-import file.

The export contains public account information and a device fingerprint, not the recovery words. Verify that Ginger's receiving address matches the device before funding the wallet. An imported account with a different derivation path or passphrase can be a different wallet even when the device is the same.

## Export a transaction

1. Open the hardware wallet in Ginger. In **Wallet Settings** → **General**, enable **PSBT workflow**.
2. Choose **Send** and prepare the destination and amount as usual. Review selected inputs, change, and fee.
3. In the preview, choose **Save PSBT file** and save the proposed transaction. The alternative **Send Now** follows immediate signing instead of saving for the file workflow.
4. Transfer the file to the signing device through the method it supports, such as removable media. Follow that device's instructions and inspect the destination, amount, fee, and change on its trusted display.
5. Save the signed result without confusing it with the original unsigned proposal.

Do not approve a transaction solely because Ginger prepared it. The device must authorize the intended payment. Keep recovery words off both the PSBT file and the computer.

## Import and broadcast

Return to the hardware wallet in Ginger and choose **Broadcast**, visible with the PSBT workflow. The **Import Transaction** file dialog accepts supported transaction files, including PSBT and transaction files. Select the signed result and inspect the broadcast screen before submitting it to the network.

An unsigned or incompletely signed PSBT cannot be broadcast as a valid payment. A successful signature also does not guarantee acceptance if its inputs have already been spent or its fee no longer meets network conditions. Keep the original wallet available, synchronize, and check history before creating another payment.

Once a transaction is broadcast, the signing device no longer has to stay connected for it to confirm. Check the final history entry and confirmations in Ginger. Deleting a signed file does not cancel a transaction another party could already broadcast.

## Handle files carefully

Use distinguishable filenames for proposals and signed results. Do not email PSBTs or upload them to an online decoder to inspect your own transaction. Keep sensitive account exports protected too: an extended public key can reveal many addresses even though it cannot directly sign a spend.

This workflow documents the released hardware-wallet interface. It does not establish a general multisignature coordinator, a developer signing API, or compatibility with every PSBT format produced by other applications.
