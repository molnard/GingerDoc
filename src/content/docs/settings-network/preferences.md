---
doc_id: "settings-network.preferences"
title: "Appearance, Language, and Everyday Settings"
description: "Change Ginger language, display formats, background behavior, browser preferences, and discreet mode without confusing them with wallet security."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "everyday"
prev: false
next: false
---

> Reading level: Everyday use. Choose this guide when you need the task it describes.

Use **Settings** for application-wide preferences and **Wallet Settings** for the selected wallet's name, CoinJoin configuration, and tools. The application search can find actions such as **Data Folder**, **Wallet Info**, and **Discreet Mode** without relying on an icon's position.

## Language and amounts

In **Settings** → **Appearance**, **Language** selects the interface language. Version 2.0.26 offers English, Spanish, Hungarian, French, Chinese, German, Portuguese, Turkish, and Italian. Follow any restart prompt. This English manual uses the released English labels; translated labels may differ.

**Dark mode** changes appearance. **Exchange currency** changes the reference fiat display, while decimal and group separators, Bitcoin fraction grouping, and **Fee display unit** control number presentation. These do not change the underlying BTC amount or the network's transaction fee. Read the examples in the settings before entering an amount in an unfamiliar format.

## Discreet Mode

Use **Discreet Mode** when someone can see your screen. It conceals supported sensitive display fields to reduce casual observation. Check what is actually hidden before sharing a screen: the feature is not a guarantee that every dialog, address, or external application is concealed.

Discreet Mode does not encrypt files, lock the wallet, stop signing, or change blockchain privacy. A person with access to the computer can still interact with the application. Use your operating system's screen lock when stepping away.

## General settings

| Setting | Practical effect |
| --- | --- |
| **Run Ginger when computer starts** | Opens Ginger with the operating-system session. |
| **Run in background when window closed** | Allows the application to remain active after closing its window. CoinJoin and synchronization may therefore continue. |
| **Auto copy addresses** | Can place a displayed address on the clipboard automatically. |
| **Auto paste addresses** | Can use clipboard contents in address-entry workflows. Always review the resulting destination. |
| **Auto download new version** | Controls fetching an available update; follow the installation prompt separately. |
| **Browser used by Ginger** | Chooses the browser used for external pages; the custom option exposes **Custom browser path**. |

Clipboard convenience does not authenticate the recipient. Other applications can read or replace clipboard data. Never put recovery words on the clipboard as part of ordinary receiving or sending.

External pages use the selected browser's own network and privacy behavior. A buy/sell provider can ask for identifying information even though Ginger itself is using Tor. Changing a display or browser preference does not alter the provider's records.

## Wallet information and tools

**Wallet Info** can display account and extended public-key information. An extended public key cannot directly spend coins, but can reveal many related addresses. Do not post it in a public support request.

Under **Wallet Settings** → **General**, use the name control to rename the wallet. Under **Tools**, **Verify Recovery Words** checks an accessible software wallet's backup, **Resync** rebuilds its view, and **Delete Wallet** removes a local wallet through its confirmation flow. Deletion does not destroy the bitcoin, revoke recovery words, or replace a backup. Keep working recovery information before removing local access.
