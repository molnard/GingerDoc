---
doc_id: "help.troubleshooting"
title: "Troubleshoot Ginger Wallet"
description: "Diagnose missing balances, connection problems, CoinJoin waiting states, 2FA failures, and hardware issues while preserving recovery data."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Reading level: Everyday use. Choose this guide when you need the task it describes.

Start with the exact error, selected wallet, network, and application version. Preserve recovery information and wallet files before changing data. Reinstalling, deleting folders, or creating new words is rarely the first step for a connection or display problem.

## Balance, recovery, and receiving

| Symptom | Check first | Next step |
| --- | --- | --- |
| Recovered wallet is empty | Original words, exact passphrase, network, scan progress | Compare known addresses or history after synchronization; use advanced recovery checks only if these ordinary checks do not explain it |
| Incoming payment is missing | Correct address, sender's transaction ID, selected wallet | Check broadcast and confirmation, then local synchronization |
| Receive or Send is missing | Is recovery still active? Is the wallet watch-only? | Wait for recovery, or use the required signing device |
| An old address vanished from the receive list | Was it paid or hidden? | Check history; list visibility does not invalidate keys |
| Only a tiny payment is missing | Dust threshold and synchronization | Compare the configured threshold before assuming funds were stolen |
| Labels disappeared after seed recovery | Was the matching ATTR file backed up? | Preserve that file; labels cannot be reconstructed from the blockchain |

Do not enter recovery words in a website to “resynchronize” a wallet. Use the installed, verified wallet's recovery workflow only on a trusted computer.

## Connection or synchronization

Check connectivity, the computer clock, free storage, and the status of a configured full node. A first scan may simply need time. If progress never changes, close Ginger normally and reopen once. Record what happens rather than repeatedly restarting a scan.

**Awaiting connection** can prevent CoinJoin and other services even when the wallet has cached history. Treat a disconnected balance as potentially incomplete. Keep Tor enabled while investigating. A configured node's P2P connection and RPC fee estimates are separate; a working one does not prove the other works.

If you use **Wallet Settings** → **Tools** → **Resync**, preserve backups first and expect another scan. Do not delete `Wallets`, `WalletBackups`, or 2FA files merely to clear a progress message.

## CoinJoin does not start

| Message or condition | Likely action |
| --- | --- |
| **Insufficient funds eligible for coinjoin** | Inspect confirmation, coin sizes, fees, and exclusions; total balance alone does not establish eligibility |
| **Only excluded funds are available** | Review **Exclude Coins** if you want some coins to participate |
| **Only immature funds are available** | Wait for the required maturity; newly mined outputs have special spending rules |
| **Some funds are rejected from coinjoining** | Read the related reason and current service terms; a rejection does not transfer ownership of your funds |
| **Awaiting cheaper coinjoins** | Review cost preferences and decide whether waiting fits your objective |
| **Coinjoin may be uneconomical** | Review the stop threshold and relative costs before a manual override |
| **Awaiting the blame round** | Wait for the protocol's retry; it is not an instruction to blame another user |
| **Awaiting closure of send dialog** | Finish or close the send workflow |
| **Mining fee rate was too high** or **Coordination fee rate was too high** | Wait or investigate offered conditions; do not blindly raise limits |
| Hardware source wallet | Automatic CoinJoin signing requires an eligible software wallet |

Round participants can fail to finish, or a coin can become temporarily unavailable after interrupted participation. Repeated retries, imports, or attempts to evade a coordinator's rejection are not a repair. Use the reason and current status to decide whether to wait or contact official support.

## Payment or fee problems

When fee estimates are unavailable, wait, repair the selected provider/node connection, or use a manually chosen fee rate you understand. Ensure the final amount plus fees fits spendable funds. A long unconfirmed transaction chain can require waiting for earlier confirmations.

Use **Speed Up Transaction** or **Cancel Transaction** only when Ginger offers it and after reviewing the fee. Cancellation is an attempt to replace a pending payment, not a confirmed-payment reversal. After an uncertain broadcast result, check history before paying twice.

## 2FA and hardware

For a rejected authenticator code, check phone time, the selected entry, the authenticator's compatibility with Ginger, and Tor/service connectivity. Preserve the existing wallet and 2FA files. If normal startup cannot be restored, recovery words plus the original passphrase are the independent key backup; reinstalling over the same data does not recreate a lost authenticator. The [advanced FAQ](/help/advanced-faq/#does-the-2fa-file-recover-the-wallet-without-the-service) explains the file dependency.

For device detection, use one unlocked hardware wallet, a data cable, and a direct USB port, with competing device applications closed. Complete the required device-side Bitcoin-app, PIN, or passphrase steps. On Linux, check manufacturer USB permissions. Keep the device seed off the computer.

## Report a useful issue

Use links from the [official Ginger repository](https://github.com/GingerPrivacy/GingerWallet/issues). Include the release version, operating system and processor, exact error, expected result, and the shortest non-secret steps that reproduce it. Mention a hardware model and firmware when relevant.

Ginger's search action **Logs** opens diagnostic logs. Inspect and redact before sharing: paths, addresses, transaction IDs, labels, and order information can be sensitive. Share a minimal relevant excerpt, not the whole data folder. A public issue is public; no support request should require your recovery words or passphrase.
