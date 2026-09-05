# Validation of the manuscript batch

Checked on 2026-09-05 against the v2.0.26 source baseline. This is validation of documentation and release evidence, not a wallet security audit or a completed interactive acceptance test.

| Check | Result |
| --- | --- |
| Complete English reader pages | 36 |
| Approximate reader word count, including headings/tables | 27,217 |
| Stable IDs, required frontmatter, one H1 matching title | Pass |
| English-only locale and released-version metadata | Pass |
| Relative links resolve; reader links remain inside their own topic PR | Pass |
| Exact English UI labels checked against resources or literal view/enum definitions | Pass |
| Ginger source links pinned to the release; paths and line anchors checked | 324 references validated |
| Wasabi headings/subquestions assigned a disposition | 676 across 44 source pages |
| Screenshots, embedded scripts, framework components in reader pages | None |
| Markdown lint | Pass, markdownlint-cli2 0.23.2 / markdownlint 0.41.1 |
| Original public non-snapshot reference check | 24 checked; HTTP 200 in the original batch |
| Expansion references | Primary reader references opened during source review; research access limits recorded in the addendum |
| Research expansion coverage | All ten proposals developed: six new pages and four expansions in three existing pages |
| Registry and numerical examples | 36 unique IDs with valid related-page targets; spending, fee and score examples reconciled |
| Released PGP public-key fingerprint | Matches FA0B017A3E75CE65CBF7838FA8FF3767EDF5DCE9 |
| Released SHA256SUMS.asc signature | Valid under the checked release key |

Markdown lint keeps ordinary structural checks enabled. Long lines and table-alignment style are not enforced. `MD025.front_matter_title` is empty because the portable manuscript deliberately contains both title metadata and a single visible H1; the future engine must avoid generating a second H1 when integrating it.

No installer binary was executed. No real funds, provider orders, hardware devices, or authenticator setup were used. The signature check above covers the release's signed checksum file; it is not a claim that every installer was independently downloaded and executed.

The topic branches add only `content-drafts/` files. The live `docs/` tree, dependencies, and deployment workflow remain unchanged by this batch. Per-branch scope is checked before commit. Each PR body links directly to its rendered manuscripts and review evidence.

The research expansion adds 29 specific released-behavior anchors to its evidence ledger, with references reused where several topics depend on the same behavior. The most consequential finding is the normal all-private CoinJoin start guard: the cold-storage instructions do not promise an extra private-only forwarding round. See [the implementation record](topic-expansion.md).

Before public integration, finish maintainer review of the instructions, run representative application/device walkthroughs, recheck any changed live service policy, and perform engine/search/deployment checks described in `integration.md`. Translation begins after the English content is reviewed and merged.
