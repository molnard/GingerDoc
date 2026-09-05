# Authoring contract and future localization

Write for a person using a released desktop wallet. Explain the task, prerequisites, exact action, expected result, and the relevant recovery or privacy limit. Prefer ordinary Markdown paragraphs, headings, numbered steps, and compact tables. Use no screenshots, framework components, embedded tracking, or UI text guessed from Wasabi.

## Stable content format

Manuscripts live at `content-drafts/en/<topic>/<slug>.md`. Each has frontmatter with `doc_id`, `title`, `description`, `lang`, and `verified_release`. IDs such as `backup-recovery.restore` survive route and engine changes. They are not public URLs. Keep one H1 matching the title. Technical source evidence lives in the review folder and stays outside public reader navigation.

The checked release's English resources provide button/menu spelling. Check the corresponding view and view model as well, because a resource string can exist for a hidden or unavailable action. Record material differences from current marketing or Wasabi behavior. A merged development commit alone does not qualify a feature as released.

Use local links only when the destination ships in the same topic PR. Cross-topic journeys use page IDs in the editorial registry until integration. Do not publish a link that points to an unmerged manuscript.

## English first, all released languages later

Only English content is authored in this batch. Begin translation after the complete English documentation has been reviewed and merged. `locales.json` mirrors the nine selectable locale codes in v2.0.26, including **pt-PT** and **zh-SG**; do not substitute a different regional variant merely because the future engine has a convenient default.

Translations keep the same `doc_id`. Store each translation's source English commit, last synchronization date, translator/method, and review state. Suggested states: `machine-draft`, `language-reviewed`, `release-checked`, and `published`. English edits should mark affected translations stale rather than silently presenting them as current.

Maintain a glossary for CoinJoin, passphrase, recovery words, change, anonymity score, UTXO, and device PIN. Do not translate recovery-word examples into another word list or localize file extensions, fingerprints, addresses, or code samples. UI labels should come from the corresponding released resource locale, with fallback English when the app itself falls back.

The owner can review English and Hungarian. Other translations must visibly state their actual review status; machine translation is not labelled human-verified. Seek a competent language review for critical recovery, signing, fee, and 2FA instructions before publication. Keep an easy link to the English source, and preserve untranslated fallback navigation where a translation is absent.

## Short notice prepared for the future site

Proposed site notice:

> Documentation and translations may contain errors or outdated information. Verify critical steps in Ginger Wallet. To the extent permitted by applicable law, Ginger Wallet accepts no liability for losses resulting from reliance on this documentation.

Additional notice for a translation that has not been reviewed:

> This translation was generated automatically and has not been reviewed by a fluent speaker. Consult the English version if anything is unclear.

The notice is editorial wording for owner review, not a claim of universal legal enforceability. Place it once in a consistent footer/about location, and show translation status near translated content. It does not justify publishing known inaccuracies.

## Release maintenance

For a new stable release, inspect changes to UI resources, available actions, backup formats, 2FA, fee handling, node/HWI versions, provider flows, and privacy-related behavior. Update the release baseline per page after checking the relevant source and workflow. Keep provider limits and live coordinator policies explicitly time-dependent rather than freezing them as permanent product capabilities.
