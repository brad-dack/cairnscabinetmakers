# 02 Constants

Status: DRAFT | [NEEDS INPUT: set to FROZEN with the date at T16]

Written by T07 to T16. Read by T12, T16, T21, T25 and T27. See PLAYBOOK.md.

**G1 blocks `node bake.js` while this file is missing, not FROZEN, carries any
`[NEEDS INPUT` token, or disagrees with `config.js`.** Do not set FROZEN to
unblock a bake. Fill the value instead. See PLAYBOOK.md rule R1.

Field labels in the two tables below are read by G1. Keep them exactly as
written.

## Identity

| field | value |
|---|---|
| brand | Cairns Cabinet Makers |
| domain | https://cairnscabinetmakers.com.au |
| entity | Sole trader. Brad, trading as Cairns Cabinet Makers |
| abn | 78 538 005 810 |
| published name | Brad, first name only, on About and Privacy |
| email | [NEEDS INPUT: or the literal word none until an inbox exists] |
| phone e164 | +61740284041 |
| phone display | (07) 4028 4041 |

## Naming history

T07. Every name considered, so a rejected name is never re-litigated. Perth
Tiling Specialists revisited a rejected domain twice in one session.

T07 checks run 11 October 2026:

- **ASIC:** exact-word search of the ASIC Business Names dataset on data.gov.au
  (resource `55ad4b1c-5eeb-44ea-8b29-d410da431be3`, refreshed 6 October 2026),
  via its `datastore_search` API. Controls returned their registered names:
  Cairns Specialized Cabinets, CAIRNS CABINET WORKS, Cairns Kitchens. The search
  does not stem, so singular and plural were run separately.
- **ABN Lookup:** abr.business.gov.au active-ABN name search, looking for an
  active entity with a conflicting name.
- **Registrar:** the .au registry's RDAP service (`rdap.cctld.au/rdap/`, from
  the IANA bootstrap file). 404 means not registered. Controls cairnscabinets.com.au
  and fnqkitchens.com.au both returned 200.
- **auDA:** allocation by exact match to a registered business name, as on
  Perth Tiling Specialists (sole trader, ABN 78 538 005 810). That means
  registering the chosen name with ASIC before the domain. The close and
  substantial connection route is not relied on: auDA has accepted in
  principle a proposal to remove it (SmartCompany report, not yet final).

| name | domain | ASIC | ABN Lookup | registrar | auDA eligibility | verdict and reason |
|---|---|---|---|---|---|---|
| Cairns Cabinets | cairnscabinets.com.au | not checked | Cairns Specialized Cabinets and Cairns Kitchens share ABN 93 164 831 565, Cairns 4869 | registered (RDAP 200); nameservers ns1/ns2.allcorp-dns.com.au, the same as cairnskitchens.com.au | n/a | REJECTED: registered, and likely held by Cairns Specialized Cabinets, a page-1 competitor |
| Cairns Cabinetry, Cairns Cabinet Co, Cairns Custom Cabinets | cairnscabinetry / cairnscabinetco / cairnscustomcabinets .com.au | not checked | not checked | no NS record, 11 Oct 2026 | not assessed | REJECTED: too close to the trading names Cairns Cabinets and Cairns Specialized Cabinets |
| Kitchens Cairns, Cairns Kitchen Co, Cairns Custom Kitchens | kitchenscairns / cairnskitchenco / cairnscustomkitchens .com.au | not checked | not checked | no NS record, 11 Oct 2026 | not assessed | REJECTED: too close to Cairns Kitchens (cairnskitchens.com.au, #1 for "kitchens cairns") |
| any FNQ-prefixed name | fnqcabinetmakers / fnqcabinets .com.au | not checked | not checked | no NS record; fnqjoinery.com.au and fnqcabinetry.com are taken | not assessed | REJECTED: collides with FNQ Kitchens, the dominant competitor |
| Cairns Cabinet Makers | cairnscabinetmakers.com.au | clean: no registered name with those words, singular or plural | no identical name. Nearest: CAIRNS CABINET WORKS, also listed as "Cairns Cabinets and Joinery" (ABN 47 103 725 757, Cairns 4870, CCW Cabinet Works), and Cairns Specialized Cabinets | available (RDAP 404) | ok once "Cairns Cabinet Makers" is registered with ASIC on Brad's ABN | **CHOSEN at T08 by Brad, 11 October 2026.** Clean on all four checks and an exact match for the head group (210 a month). Risk accepted knowingly: it shares "Cairns Cabinet" with CCW's registered name. The third word differs and both names are descriptive, unlike the near-identical "Tiling of Perth" that ruled out tilingperth.com.au |
| Cabinet Makers Cairns | cabinetmakerscairns.com.au (also cabinetmakercairns.com.au) | clean, singular and plural | no identical name; nearest results are generic "Cabinet Maker" trading names in other states | both available (RDAP 404); cabinetmakerscairns.com is registered | ok once "Cabinet Makers Cairns" is registered with ASIC | candidate, fallback: clean, the same keyword match, and further from CCW. Reads less like a business name |
| Cairns Cabinet Making | cairnscabinetmaking.com.au | clean | no identical name; the same CCW proximity as Cairns Cabinet Makers | available (RDAP 404) | ok once registered with ASIC | candidate, not preferred: the same CCW proximity as the first pick, with a weaker keyword match |
| Cairns Kitchen and Joinery | cairnskitchenandjoinery.com.au | clean: no identical name | collides with Cairns Kitchens (registered business name, ABN 93 164 831 565) and "Cairns Cabinets and Joinery" (CCW's other name, ABN 47 103 725 757) | available (RDAP 404) | not relied on | REJECTED: built from two competitors' names |
| Cairns Joinery | cairnsjoinery.com.au | clean | no identical name; "Cairns Cabinets and Joinery" (CCW) is the nearest | available (RDAP 404) | not relied on | REJECTED: "joinery cairns" is 10 a month, and the name sits close to CCW's other name |
| Far North Cabinetry | farnorthcabinetry.com.au (also farnorthcabinets.com.au) | clean, both forms | no identical name; FAR NORTH CARPENTRY is held by two Cairns-area entities (ABN 86 255 150 983, Cairns 4870; ABN 26 004 472 740, 4868) | both available (RDAP 404) | ok once registered with ASIC | candidate, brandable fallback: clean, but no keyword match, and adjacent to two carpentry firms of a similar name |

## Infrastructure

| field | value |
|---|---|
| registrar | GoDaddy (2-year registration, ordered 11 October 2026) |
| hosting | GitHub Pages, from brad-dack/cairnscabinetmakers, branch main |
| dns provider | Cloudflare (nameservers evan.ns.cloudflare.com, thea.ns.cloudflare.com) |
| proxy status | DNS-only |
| workers_dev | n/a, this is a GitHub Pages build |
| dns verified | 11 October 2026, 03:20 UTC, through 1.1.1.1 and 8.8.8.8 (identical): `nslookup -type=NS` gives evan.ns.cloudflare.com and thea.ns.cloudflare.com; `nslookup -type=A` on the apex gives 185.199.108.153, .109.153, .110.153, .111.153; `nslookup www.cairnscabinetmakers.com.au` gives alias to brad-dack.github.io, which resolves to the same four addresses. www to apex redirect not yet checked: that needs the Pages custom domain set (T26) |
| ga4 measurement id | G-NLFZQK7WFQ (from Brad's gtag snippet, 12 October 2026) |
| ga4 property id | [NEEDS INPUT: T11, the numeric one, used by the dashboard] |
| turnstile site key | [NEEDS INPUT: T11, copied from the Cloudflare dashboard] |
| turnstile hostname added | [NEEDS INPUT: Y or N] |
| supabase site_id | [NEEDS INPUT: T14] |
| ingest url | [NEEDS INPUT: T14, the shared ingest-form function URL] |
| ingest secret location | [NEEDS INPUT: where it is set, never the value] |
| twilio voice webhook | https://bnfgnglzswtrvzfqkgjh.functions.supabase.co/twilio-voice, POST, primary and backup both set to it. Seen on Brad's Twilio screenshot, 12 October 2026, region Australia (AU1) |
| twilio status webhook | https://bnfgnglzswtrvzfqkgjh.functions.supabase.co/twilio-status, POST. Same screenshot |
| inbound email | [NEEDS INPUT: T11, and the Cloudflare routing rule it points at] |
| forward from email | [NEEDS INPUT: T14, after the Resend domain is verified] |
| storage regions | [NEEDS INPUT: Supabase and Cloudflare regions, named in privacy copy] |
| retention rule | [NEEDS INPUT: what is deleted, after how long, and by what] |

## Positioning

| field | value |
|---|---|
| level | [NEEDS INPUT: 1, 2 or 3] |
| voice rule | [NEEDS INPUT: including the named-individual decision] |
| renter signed | [NEEDS INPUT: Y or N] |

Claim restriction list, written out in full rather than referenced:

[NEEDS INPUT: what may not be said at this level]

## Privacy position

Standing portfolio position: **PLAYBOOK.md Appendix A, R3.** Not reopened.

Do not summarise R3 into this file. A one-line summary here is exactly what
caused a drafting session to re-derive the position from scratch and ship a
different answer. If it ever is reopened, replace this line with the date, who
decided, and why, and log it in `build/05-log.md` Decisions.

## Collection notices

T12. Both channels carry the same notice. See PLAYBOOK.md rule R4. G8 checks
the form notice against `config.js` and checks that this section's greeting
text carries the notice.

**Form notice** (`contact.reassurance` in `config.js`, rendered above every
form):

[NEEDS INPUT: exact text, naming the trade, saying the trade pays, linking the privacy policy]

**Voicemail greeting** (`sites.greeting_text` and the MP3 at
`sites.greeting_audio_url`, both columns, same words):

[NEEDS INPUT: exact text]

| field | value |
|---|---|
| mp3 recorded | [NEEDS INPUT: T13, Y or N] |
| greeting_audio_url set | [NEEDS INPUT: T14, Y or N] |
| greeting_text set | [NEEDS INPUT: T14, Y or N] |
| greeting heard on a real call | [NEEDS INPUT: T28, date] |

## Search Console

| field | value |
|---|---|
| property verified | [NEEDS INPUT: T15, Y or N] |
| method | [NEEDS INPUT: DNS TXT] |
| date | [NEEDS INPUT: T15] |
| gsc_site_url set on the site row | [NEEDS INPUT: T29, Y or N] |
