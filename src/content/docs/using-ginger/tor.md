---
doc_id: "settings-network.tor-sync"
title: "Tor, Synchronization, and Network Privacy"
description: "Understand how Ginger connects, what Tor protects, and how to investigate slow synchronization without exposing wallet activity."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Reading level: Everyday use. Choose this guide when you need the task it describes.

Ginger needs network data to discover your transactions, broadcast payments, and participate in CoinJoin. Tor is included and enabled by default for its ordinary network connections. It helps separate your IP address from the services you contact, but does not hide public Bitcoin amounts and transactions.

## Tor settings

Open **Settings** → **Security** and find **Network anonymization (Tor)**. Keep it enabled for normal private use. Restart when prompted so the running network configuration matches the settings. Ginger's 2FA feature requires Tor, and the interface restricts disabling it while 2FA is enabled.

**Terminate Tor when Ginger shuts down** controls Tor's shutdown behavior. A Tor process can remain after the wallet window closes because the wallet is running in the background or Tor has not been configured to terminate. Closing a window and exiting the application are different actions.

Disabling Tor changes the information exposed to contacted services and peers. It is not a harmless performance switch. In particular, connections to a coordinator or transaction-broadcast peer can become associated with your network address. Do not disable it as a routine response to a waiting CoinJoin.

Ginger's Tor connection also does not turn an external browser into Tor Browser. Provider pages, explorers, and other links use the configured browser. Review that browser separately before assuming its requests inherit the wallet's network protection.

## What synchronization does

Ginger uses compact block filters to find potentially relevant blocks and processes downloaded block data locally for its wallet. This reduces the need to send a list of all your addresses to a public wallet server. It still depends on network services and peers for data and on the correctness of its local software.

First use and recovery can take longer than reopening a recently used wallet. Progress can include connecting, obtaining filters, downloading blocks, and processing the wallet. A recovered wallet may temporarily show incomplete history or hide actions until its scan finishes.

Running a full node and synchronizing a wallet are separate jobs. The optional full node validates the blockchain; the wallet then needs to find its own transactions. A full-node status of synchronized does not necessarily mean a newly recovered wallet has finished scanning.

## When synchronization appears stuck

1. Check the exact status and whether it changes over time. A large recovery scan is different from **Awaiting connection**.
2. Confirm that the computer has internet access, its date and time are correct, and the disk has space. Check that Ginger has permission to write its data.
3. If you configured a full node, check that it is reachable and synchronized. Revisit the configured endpoint rather than changing wallet credentials.
4. Close Ginger normally and reopen it once if the connection remains stalled. Preserve the error text and log context if the failure returns.

If Tor is blocked on your network, consult the [Tor Project's connection guidance](https://support.torproject.org/). The released Ginger settings do not expose a documented bridge-configuration wizard. Do not copy Tor Browser settings into arbitrary Ginger configuration fields and assume they work.

Use **Wallet Settings** → **Tools** → **Resync** only when there is a reason to rebuild the wallet's view. Preserve backups first and allow another scan to complete. Deleting the data folder is not the first troubleshooting step.

## Separate network choice from real funds

The released **Settings** → **Bitcoin** network selector offers Main and RegTest. RegTest is for an isolated test environment and has no real bitcoin value; this manual does not cover operating that environment. This release does not offer a public testnet selection in that interface. Switching networks does not move funds between them.
