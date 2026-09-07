---
doc_id: "settings-network.secret-hunt"
title: "Secret Hunt in Ginger Wallet"
description: "Find Ginger Secret Hunt event results, control wallet participation, and understand the information the event service receives."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Reading level: Everyday use. Choose this guide when you need the task it describes.

**Secret Hunt** is a Ginger feature that displays event secrets associated with eligible CoinJoin activity. It is separate from the wallet's privacy score and from the ordinary process of receiving or spending bitcoin. Event availability depends on the service; the presence of the feature does not promise a current event, prize, or reward.

## View and control participation

Open a software wallet's menu and choose **Secret Hunt**. The dialog shows event results in a tree, including discovered words or sentences and an extra secret when the event's required secrets have been collected. Expand an event to inspect its entries.

Use **Enable/disable the use of this wallet for Secret Hunt.** to control that wallet's participation. The released default is enabled. Turning it off clears the displayed tree for the disabled view and stops the updater selecting that wallet for event eligibility checks. It does not cancel CoinJoin, delete blockchain transactions, or erase information already sent to a service.

The entry is not offered for watch-only wallets. It is not a hardware-wallet CoinJoin feature and does not require entering recovery words in an event website.

## What is shared

The client retrieves event information from Ginger's service. For an eligibility check, it can send a CoinJoin transaction ID, a selected input reference, and a cryptographic ownership proof. The proof demonstrates control for the event request without sending the private key. These are additional application-level disclosures even when the connection uses Tor.

Tor addresses network-level exposure; it does not remove the contents of a request from its recipient. If you do not want a wallet used for these event checks, disable its Secret Hunt participation. Event-list requests and ordinary wallet network activity are separate from this per-wallet switch.

## Missing or incomplete results

Results depend on the event dates, qualifying confirmed activity, service availability, and periodic updates. A round can complete successfully without revealing a new secret. Waiting for results is not evidence that bitcoin is missing.

Do not generate extra fee-paying transactions on the assumption that a reward will compensate you. Read an event's actual terms through an authenticated source before deciding whether to participate. Ignore requests to upload a wallet file or send a separate “claim fee” to an unsolicited support address.
