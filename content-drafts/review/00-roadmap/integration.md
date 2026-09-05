# Engine, search, and publication handoff

The engine decision remains with Norbi and the owner. These files are portable Markdown outside `docs/`, so they do not change the existing VuePress site or deployment. The earlier request for a separate infrastructure PR remains a subsequent phase; this foundation PR prepares content and localization without choosing or upgrading the engine prematurely.

## Search problem to solve

The existing repository imports VuePress's search plugin. The Wasabi discussion [Search in content, issue 1612](https://github.com/WalletWasabi/WasabiDoc/issues/1612) identifies the limitation: searching titles misses relevant body text. Previous external-index experiments should be examined when making the engine decision, including the stale-index and broken-result-link regressions discussed in that repository.

Astro Starlight with Pagefind remains a candidate, not a committed implementation. A maintained VuePress setup with working local full-text indexing could also satisfy the requirement. Choose based on a proof with this actual content, not only a demonstration site. Compare maintenance burden, locale support, URLs, hosting, accessibility, and data exposure.

## Privacy acceptance criteria for search

- Build the full-text index with the static site and serve it from the documentation origin.
- Run query matching in the browser without sending typed queries to a third-party search provider.
- Load scripts, fonts, styles, and search assets from the same origin where feasible; avoid third-party embeds and tracking.
- State the remaining hosting exposure accurately: the host can still observe requests for pages and index assets. Local query execution does not make browsing anonymous.
- Verify behavior through browser network requests, including an empty query and searches containing recovery/2FA terms. No third-party query requests should occur.

## One infrastructure PR after the decision

Pin supported runtime/dependency versions and a lockfile; make local build and CI use them consistently. Configure deployment, canonical URLs, redirects from old documentation, sitemap, page language, locale structure, shared notice, and local full-text indexing. Demonstrate that results link to real pages and headings after deployment. Only then integrate approved manuscripts into the engine's content directory.

## Publication checks

1. Merge and review the complete English content set. Resolve sensitive instructions against the released application and any outstanding source-review limits.
2. Map stable page IDs to final routes. Keep old paths such as `using-ginger/2fa/`, `using-ginger/coinjoin/`, `using-ginger/hardware-wallet/`, `using-ginger/annonset.html`, and the buy/sell pages working via appropriate redirects.
3. Add cross-topic navigation and the learning-to-task links from the registry. Check every relative link, anchor, and redirect on the deployed preview.
4. Test full-text searches for body-only phrases such as `original passphrase`, `ownership proof`, `mining fee`, and `output wallet`. Test a nonexistent phrase, keyboard operation, empty queries, and narrow layouts.
5. Add canonical and sitemap entries for real published pages only. Keep review files, unpublished drafts, and preview hosts out of public indexing. Prevent locale fallbacks from generating duplicate indexed copies.
6. Review the short notice and the privacy behavior of all external assets. No screenshots need replacement during an interface update.
7. After English approval and merges, create translation PRs for the remaining selectable application languages with source-commit tracking and visible review status.

Nothing in this content batch publishes the drafts or merges the owner's PRs. Engine testing and real device/application walkthroughs remain explicit publication work, not checks claimed by the Markdown-only PRs.
