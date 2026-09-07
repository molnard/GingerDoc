---
doc_id: "learn-privacy.repeated-payments"
title: "Receiving Donations and Repeated Payments"
description: "Receive Bitcoin donations and recurring payments with fresh addresses, useful labels, careful refunds, and deliberate handling of the resulting coins."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Reading level: Everyday use. Choose this guide when you need the task it describes.

Receiving bitcoin publicly does not require publishing every address in your wallet. It does require deciding what each payer or website visitor will see, then keeping unrelated receipts separate where useful. Ginger supports ordinary on-chain receiving and local labels; it is not an invoicing server or an automatic website address-rotation service.

## Choose how to give out addresses

| Approach | What it makes convenient | What becomes visible |
| --- | --- | --- |
| One permanent address on a website or profile | Anyone can pay without contacting you | Receipts to that address and its later spending can be inspected together; the page links the address to its owner |
| A fresh address supplied to each payer | Each payment request has a separate destination | The payer and the communication service may know the address and your identity; later transactions may create links |
| A fresh address for each recurring installment | You can keep private records per payment | Requires communicating the new instruction; a payer can still reuse an older address |

A public address's receipts are not necessarily the owner's full balance, income or number of donors. Someone can send themselves bitcoin, donors can pay repeatedly, and other addresses can exist. Avoid drawing stronger conclusions than the visible transactions support.

## Receive and keep useful records

1. Open the intended wallet and choose **Receive**. Add a label that will help you recognize the purpose later, such as a private invoice reference or the relevant activity.
2. Generate a fresh receiving address for that payment. For hardware, verify it on the device with **Show on the hardware wallet** when available.
3. Share the address and agreed on-chain Bitcoin amount through the intended channel. Verify what you pasted; do not reuse an address just because it is already in a chat history.
4. Check the actual receipt and confirmations in Ginger. A payer's message or payment-screen image is not the wallet's confirmation that the funds arrived.
5. Preserve the association between the receipt, label and any private invoice or donation record. Recovery words do not reconstruct all these notes.

Labels belong in local records; they are not published as names in the Bitcoin transaction. However, anyone who reads your local files, backup or shared screen may see them. Use enough detail to make future coin selection understandable without collecting unnecessary personal information about donors.

## Handle a permanently published address

If you use a permanent donation address, assume that its receipt history can be inspected. Replacing the address on a website does not erase the previous address or stop it from receiving future payments. Keep its recovery material and enough context to recognize late receipts.

CoinJoin can help reduce links to later spending under its assumptions; it does not make the donations to that public address disappear. Moving all receipts together into one ordinary transaction can add a new association. Plan the next spend with the same care as the initial receipt.

For a subscription or repeated customer payment, communicate a fresh destination for each installment when practical. Ginger does not revoke an old address or force the payer to follow the updated request. Reconcile late and duplicate payments before promising a refund.

## Refund the payer through a verified destination

Do not automatically send a refund to one of the original payment's input addresses. The payer may have used an exchange withdrawal, a custodial service or a collaborative transaction, and may not control that input address.

1. Confirm the original payment and refund request using your private records and a trusted contact channel.
2. Agree on the refund amount and who bears the transaction fee. Obtain a fresh Bitcoin refund address from the intended recipient and verify it through that channel.
3. Use **Send**, inspect the selected inputs and fee, and authorize only the agreed payment.
4. Record the refund transaction and check its outcome before retrying after a network error.

A refund is a new on-chain payment. It does not undo the original receipt or delete its records. Consider what the refund transaction reveals about the coins you chose to spend.

## Keep receipt handling deliberate

Open **Wallet Coins** to inspect the resulting coins. **Send** → **Manual Control** can help select funds already associated with the relevant activity. Review the final transaction rather than assuming a label automatically enforces separation.

Unexpected tiny payments need no immediate response. Spending a small output can cost a large percentage of its value and can associate it with other selected inputs. **Exclude Coins** affects CoinJoin participation only; it does not lock a coin against an ordinary spend. Do not follow instructions embedded in an unsolicited payment or contact claiming that you must send funds to unlock it.

If you direct eligible CoinJoin outputs to another loaded wallet for storage, check that choice before every session. It resets after restart, and the normal release flow does not force an extra round when all eligible funds are already private. A recurring receipt setup should not rely on an unverified assumption that everything is continually forwarded to hardware.

Continue with [spending after CoinJoin](/learn-privacy/spending-after-coinjoin/) for concrete examples and [information sharing](/learn-privacy/information-sharing/) for what websites, explorers and other apps can learn.
