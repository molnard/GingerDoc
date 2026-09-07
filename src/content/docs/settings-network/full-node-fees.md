---
doc_id: "settings-network.full-node-fees"
title: "Use Your Own Bitcoin Node and Choose Fee Estimates"
description: "Configure Ginger block downloads from a node you control, review the optional bundled Bitcoin Core feature, and choose a fee-rate provider."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "advanced"
prev: false
next: false
---

> Reading level: Advanced guide. First check the ordinary connection and synchronization status.

Using your own Bitcoin node can reduce reliance on public peers for block data. It also adds storage, bandwidth, availability, and maintenance responsibilities. You can use Ginger without enabling the optional full node.

## Start the bundled node

In **Settings** → **Bitcoin**, the switch is named **(EXPERIMENTAL) Run Bitcoin Core on startup**. Version 2.0.26 bundles Bitcoin Core 31. Use instructions that match this bundled node and your installed release.

1. Choose a **Bitcoin Core Data Folder** with adequate space and reliable storage. Do not point it at an unrelated folder or allow two node processes to manage the same directory simultaneously.
2. Enable **(EXPERIMENTAL) Run Bitcoin Core on startup** and restart Ginger when requested.
3. Allow the node's initial synchronization to proceed. Watch the connection and download status; first synchronization can take a long time.
4. Set **Stop Bitcoin Core on shutdown** according to whether you want the node to keep running after Ginger exits.

Do not enable this switch only to fix a missing wallet balance. A node cannot recover an unknown passphrase or restore labels. An existing node directory can contain valuable configuration and its own wallets; preserve its backup before changing which application manages it.

The full node can verify blocks locally, but this does not remove Ginger's coordinator, 2FA, buy/sell, or other service dependencies. It also does not hide a transaction you voluntarily disclose to an exchange.

## Connect to an existing node

With the bundled-startup switch off, **Bitcoin P2P Endpoint** lets you specify a node you control for block downloads. Enter its reachable host and P2P port. For a mainnet Bitcoin Core node on the same computer, the usual endpoint is `127.0.0.1:8333`, provided your node actually listens there. This field takes a Bitcoin peer endpoint, not a block explorer URL or RPC credential.

Make sure the node permits your wallet's connection and has the required block data. A pruned node may not retain old blocks needed by a recovered wallet. Check availability if a historical scan stalls rather than assuming all node configurations are interchangeable.

A remote node connection has its own network exposure. Use a node and transport you understand; simply setting an endpoint does not prove every connection to it is private. Avoid opening administrative RPC access to the public internet to make a wallet connection work.

## Choose fee estimates separately

**Fee Rate Provider** offers **Mempool Space**, **Blockstream Info**, and **Full Node**. Public providers supply estimates from their view of network conditions. The full-node choice needs Ginger's working node/RPC integration; entering only a P2P endpoint is not proof that RPC fee estimation is configured.

When **Full Node** is selected but the node is unavailable, v2.0.26 reports that fee estimation is unavailable and still allows manual entry in the payment flow. You can wait for the node, select a working estimate provider, or enter a rate you have reason to trust. Do not use a huge fee as a generic connection repair.

Fee estimates are predictions, not reservations for block space. A difference between providers can reflect different mempool observations. Review the total transaction fee as well as the displayed rate.

## Dust threshold

**Dust Threshold**, also under **Settings** → **Bitcoin**, controls the wallet's treatment of very small received amounts. It is distinct from network relay policy, the CoinJoin stop threshold, and a coordinator's minimum input amount. Raising it can affect which small payments the wallet processes; it does not delete their blockchain outputs or stop someone from sending them. Preserve your prior setting when investigating an unexpectedly missing small payment.
