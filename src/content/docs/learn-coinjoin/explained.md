---
doc_id: "learn-coinjoin.explained"
title: "What Is CoinJoin? A Simple Explanation"
description: "Learn in plain language how a shared Bitcoin transaction can help privacy, what it costs and what it cannot hide."
lang: "en-US"
verified_release: "v2.0.26"
reader_level: "beginner"
prev: false
next: false
---

> Reading level: Start here. The essential steps come first; advanced references are optional follow-up.

CoinJoin puts several people's Bitcoin activity into one shared transaction. This can make it harder for someone reading the public transaction history to tell which resulting coins belong to which person.

Think of several people paying into a shared transaction and receiving new pieces of bitcoin back. The public can see the amounts moving. What may be less clear is which person's money became which piece. This is only an illustration: real rounds have different amounts and more complicated details.

## Do I hand my bitcoin to someone else?

Ginger's wallet keeps the information used to approve spending and checks the proposed transaction before signing. You do not first deposit into a balance controlled by a mixing service.

You still need a trustworthy installation, a protected computer and a recovery backup. The service organizing a round also needs to be available. Keeping control of keys does not mean every other problem disappears.

## Why might I use it?

You might want a person you pay to learn less about your other payments. Or you might want future spending to be less directly connected to an address you previously published.

CoinJoin can help with those links. It cannot delete an exchange's withdrawal record or make a merchant forget who placed an order. The blockchain remains public, and a later payment can reveal a new connection.

## What will it cost?

A successful round pays Bitcoin mining fees and may also charge a coordinator fee. An exemption from the coordinator fee does not remove mining costs. Several rounds can mean several costs.

There is no fixed completion time. Ginger may wait for confirmations, acceptable fees or other participants. Read the status and review the result before leaving repeated participation unattended.

## Do I need it before my first payment?

No. Receiving, sending and CoinJoin are separate actions. You can learn ordinary payments first, then decide what privacy problem you want to address.

For that decision, read [when CoinJoin is useful](/learn-coinjoin/when-to-use/). Optional advanced reading: [trust and limitations](/learn-coinjoin/trust-and-limits/), including what different observers can learn. You do not need to study the protocol to use the ordinary start-and-pause controls.
