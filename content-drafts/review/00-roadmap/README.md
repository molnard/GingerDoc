# Editorial Foundation: Ginger User Manual

The batch contains 42 complete English reader pages in 11 independent subject PRs, plus this foundation. Start here is the first-use route; everyday tasks, plain-language explanations and advanced references have distinct entrances. The basic FAQ contains 34 short answers and the advanced FAQ contains 25.

All PRs target `molnard/GingerDoc:master`. The application baseline is v2.0.26, published 2026-07-31, commit `fa27e5419da5dfa391fb1db38012c0b1141f59b3`. Research and source checks are dated 2026-09-05. The subject PRs can be reviewed independently; links across topics are added during integration using the stable page IDs.

## Review the structure

- [Reader paths and all pages](page-registry.md)
- [Beginner/advanced structure and FAQ research](reader-research.md)
- [Topic coverage and exclusions](topic-coverage.md)
- [Existing gaps and released-feature boundaries](gaps-and-differences.md)
- [Audience and search-intent research](audience-and-seo.md)
- [Research from talks, articles and publications](additional-topics.md)
- [Implementation of the earlier ten research topics](topic-expansion.md)
- [Authoring, reader levels and future localization](authoring-and-localization.md)
- [Engine, private search and publication handoff](integration.md)
- [Validation results and limits](validation.md)

## What belongs on the public site

The public manual is the English reader content under `en/`, eventually localized after English review and merging. Source inventories, comparisons, original question records and implementation evidence belong only in `review/`; exclude them from public navigation and search. Reader instructions and PR descriptions focus on Ginger.

`page-registry.json` gives stable IDs and paths. `navigation.json` gives the reading order, page levels, search-result requirements and FAQ follow-up mapping. `question-research.json` retains accurate source provenance for reviewers. `locales.json` prepares the nine released UI languages without publishing unreviewed translations.

The Markdown remains outside the live site build while the engine decision is pending. No deployment or dependency change is included. Source inspection and document checks do not replace representative wallet, recovery and hardware walkthroughs before public integration.
