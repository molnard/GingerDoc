# Editorial foundation: English Ginger user manual

This batch provides 30 complete English Markdown manuscripts in 11 independently reviewable subject PRs, plus this foundation PR. It expands the sparse existing documentation using Wasabi's user-facing topics as a research inventory and Ginger's released behavior as the feature boundary.

Application baseline: **v2.0.26**, published 2026-07-31, commit `fa27e5419da5dfa391fb1db38012c0b1141f59b3`. Wasabi documentation inventory: `6d1a5730824e7757e2d3a57bcbbafae8c0a25c8c`. Research and source review date: **2026-09-05**. The 44 Wasabi pages contain 676 headings/subquestions; the inventory preserves a source-line locator for every one, including excluded material.

## Review sequence

All branches target **molnard/GingerDoc:master**, starting at `b48dfd161434bdfad52cf989baee9cb8c9505a3a`. They may be reviewed in any order and do not wait for one another to merge. Subject PRs only add their own topic and review record. This foundation provides the cross-topic registry and editorial rules.

| PR batch | Scope |
| --- | --- |
| 00 | This foundation, inventory, SEO research, localization contract, and publication handoff |
| 01 | Installation, signature verification, and first wallet |
| 02 | Backups, recovery, passphrases, and 2FA |
| 03 | CoinJoin operation, settings, fees, progress, and output wallets |
| 04 | Receive/send, fees/change, coin control, history, acceleration/cancellation, PayJoin, message signing |
| 05 | Hardware wallets and PSBT |
| 06 | Tor/sync, own node, fee providers, appearance/languages, and Secret Hunt |
| 07 | Buy/sell and provider-order support |
| 08 | Troubleshooting, FAQ, and glossary |
| 09 | Bitcoin privacy education |
| 10 | CoinJoin education and decision-making |
| 11 | Self-custody education and recoverable security |

## Read the research

- [Page registry and intended journeys](page-registry.md)
- [Existing documentation gaps and Ginger-specific additions](gaps-and-differences.md)
- [Wasabi coverage, exclusions, and source locators](wasabi-coverage.md)
- [Top three educational topics and SEO research](audience-and-seo.md)
- [Authoring and future localization](authoring-and-localization.md)
- [Engine/search decision and publication checks](integration.md)
- [Validation results and limits](validation.md)

Machine-readable companions are `page-registry.json`, `locales.json`, `wasabi-coverage.csv`, and `baseline.json` in this directory. They are editorial inputs, not runtime code. The registry uses stable page IDs so the eventual engine can choose routes without rewriting the manuscripts.

## What has been checked

Manuscripts are complete reading drafts, with source and UI-label evidence in each topic's review record. UI availability and behavior were inspected in the released code. No real wallet payment, CoinJoin, provider order, 2FA setup, or physical-device compatibility test was performed. Source evidence does not replace the maintainer's review of sensitive user instructions before publication.

No screenshots, generated translations, site dependencies, deployment changes, or upstream PRs are included. English content is reviewed and merged first. The site engine is still subject to Norbi's decision; these Markdown files can be integrated afterward.
