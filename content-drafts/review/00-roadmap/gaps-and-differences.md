# Existing documentation gaps and released Ginger differences

The repository baseline has a minimal home page, a VuePress sample page, short topical introductions, and empty or incomplete getting-started, comparison, and development entries. Its sidebar exposes CoinJoin, 2FA, hardware wallets, anonymity, fees, privacy, Tor, passphrases, address reuse, and buy/sell, but does not provide a continuous first-wallet-to-recovery user journey.

| Existing surface or missing task | Required manuscript coverage | Batch |
| --- | --- | --- |
| Home / getting started | Verified downloads, architecture/OS selection, first wallet, opening/importing, updating | 01 |
| No complete recovery journey | Offline words and original passphrase, wallet/ATTR files, verification, empty restore, gap limit | 02 |
| 2FA page | Actual server dependence, identifier file, authenticated restart/encryption, Tor, lost authenticator recovery | 02 |
| CoinJoin introduction | Start/pause, phases, waiting states, eligibility, exclusions, destinations, settings | 03 |
| Fee and anonymity introductions | Coordinator vs mining fees, input-based exemptions, weighted progress vs colored amount categories | 03 |
| Missing daily payment manual | Addresses, labels, QR, SegWit/Taproot, fees/change, coin control, history, RBF/CPFP/cancel | 04 |
| Missing PayJoin/message guide | Released sender compatibility/fallback and address-ownership signing | 04 |
| Hardware overview | Device recognition versus actual GUI support, address verification, PSBT export/sign/broadcast | 05 |
| Tor introduction / missing settings | Sync, node connections, Core 31, fee providers, display/language, browser/data folder | 06 |
| Missing Ginger event feature | Secret Hunt switch, enabled default, event requests and privacy disclosure | 06 |
| Buy/sell guides | Live quotes and limits, country/payment choices, browser handoff, exact sale payment, orders/support | 07 |
| Missing support journey | Symptom-based help, FAQ, useful glossary, private issue reporting | 08 |
| Why-privacy/address-reuse introductions | Observer-specific privacy, public graph, disclosure habits, fungibility | 09 |
| Missing explanation of costs versus benefits | CoinJoin operation in plain language and when it addresses a reader's concern | 10 |
| Passphrase/security concepts scattered | Self-custody, software/hardware tradeoffs, recovery routines | 11 |

## Ginger-specific or materially different behavior

These are additions or differences relative to the reviewed Wasabi documentation. They are not a claim that no other wallet has similar features.

| Finding | Documentation consequence | Released evidence |
| --- | --- | --- |
| Optional 2FA startup uses an online service | Describe its dependency and independent word/passphrase recovery | Topic 02 review |
| `2fa_info.gws` stores ClientServerId JSON | Correct the website's description of an encrypted recovery-like file | Topic 02 review |
| Encryption is ensured after authenticated startup | Include the restart step; old copies remain independently sensitive | Topic 02 review |
| Per-wallet ATTR metadata | Distinguish key recovery from labels/settings/order recovery | Topics 02 and 07 reviews |
| Experimental improved coin selection | Document each visible control without presenting it as a cost guarantee | Topic 03 review |
| Output routing includes eligible loaded destinations and resets | Verify destination every session; distinguish hardware receiver from hardware CoinJoin signer | Topics 03 and 05 reviews |
| Current website says no CoinJoin from/to hardware | Keep the narrower released source/signing limitation and explain destination eligibility | Topics 03 and 05 reviews |
| Secret Hunt is present and enabled by default | Explain event availability and the extra ownership-proof request | Topic 06 review |
| Buy/sell connects to providers in a separate browser | Explain identity/payment data and support responsibilities | Topic 07 review |
| Sell continuation does not supply address/amount automatically | Correct old documentation; user must enter or verify the provider request | Topic 07 review |
| Bundled Bitcoin Core 31, HWI 3.2.0, native Mac ARM components | Use current release names and assets; do not perpetuate Knots names from resource keys | Topics 01, 05 and 06 reviews |
| GUI offers Main and RegTest | Do not import public-testnet setup instructions from Wasabi | Topic 06 review |
| Normal receiving creates SegWit; optional Taproot action | Do not describe Wasabi's newer receiving default as Ginger's default | Topic 04 review |
| PayJoin may fall back; onion endpoints are rejected with Tor enabled | State actual release limits explicitly | Topic 04 review |
| Onboarding text suggests automatic CoinJoin but wallet default is false | Tell users to inspect their actual switch; no unconditional default-start promise | Topics 01 and 03 reviews |

## Excluded from this batch

No invented support for mobile wallets, Lightning payments, Silent Payments, SLIP39 recovery, Scheme scripting, Nostr discovery/update management, a multisig setup wizard, batch payments, arbitrary custom-change controls, a history CSV export, or public-testnet GUI. A feature present only in a dependency or a development branch does not qualify.

Build instructions, daemon/RPC reference, coordinator operation, deterministic-build production, startup scripting, and VM administration are outside this user-manual scope. Package verification remains in scope because it is an end-user task. Advanced user actions such as coin control, own-node connection, and hardware-file signing remain in scope.

The existing website's absolute security, zero-disclosure, and universal exchange-acceptance claims are not adopted. The manuscripts explain what a feature protects and its concrete limits.
