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
| brand | [NEEDS INPUT: T08] |
| domain | [NEEDS INPUT: T08, with https:// and no trailing slash] |
| entity | [NEEDS INPUT: trading structure] |
| abn | [NEEDS INPUT: T08] |
| published name | [NEEDS INPUT: the name that appears on About and Privacy] |
| email | [NEEDS INPUT: or the literal word none until an inbox exists] |
| phone e164 | [NEEDS INPUT: T11, e.g. +61890000000] |
| phone display | [NEEDS INPUT: T11, e.g. (08) 9000 0000] |

## Naming history

T07. Every name considered, so a rejected name is never re-litigated. Perth
Tiling Specialists revisited a rejected domain twice in one session.

| name | domain | ASIC | ABN Lookup | registrar | auDA eligibility | verdict and reason |
|---|---|---|---|---|---|---|
| Cairns Cabinets | cairnscabinets.com.au | not checked | not checked | taken (Brad, 11 Oct 2026); nameservers ns1/ns2.allcorp-dns.com.au, the same as cairnskitchens.com.au | n/a | REJECTED: registered, and likely held by Cairns Specialized Cabinets, a page-1 competitor |
| Cairns Cabinetry, Cairns Cabinet Co, Cairns Custom Cabinets | cairnscabinetry / cairnscabinetco / cairnscustomcabinets .com.au | not checked | not checked | no NS record, 11 Oct 2026 | not assessed | REJECTED: too close to the trading names Cairns Cabinets and Cairns Specialized Cabinets |
| Kitchens Cairns, Cairns Kitchen Co, Cairns Custom Kitchens | kitchenscairns / cairnskitchenco / cairnscustomkitchens .com.au | not checked | not checked | no NS record, 11 Oct 2026 | not assessed | REJECTED: too close to Cairns Kitchens (cairnskitchens.com.au, #1 for "kitchens cairns") |
| any FNQ-prefixed name | fnqcabinetmakers / fnqcabinets .com.au | not checked | not checked | no NS record; fnqjoinery.com.au and fnqcabinetry.com are taken | not assessed | REJECTED: collides with FNQ Kitchens, the dominant competitor |
| Cairns Cabinet Makers | cairnscabinetmakers.com.au | [NEEDS INPUT: T07] | [NEEDS INPUT: T07] | no NS record, 11 Oct 2026 (a hint, not availability) | [NEEDS INPUT: T07] | candidate, first pick: exact match for the head group |
| Cabinet Maker Cairns | cabinetmakercairns.com.au / cabinetmakerscairns.com.au | [NEEDS INPUT: T07] | [NEEDS INPUT: T07] | no NS record for either .com.au; cabinetmakerscairns.com is taken | [NEEDS INPUT: T07] | candidate: exact match, reversed word order |
| Cairns Cabinet Making | cairnscabinetmaking.com.au | [NEEDS INPUT: T07] | [NEEDS INPUT: T07] | no NS record, 11 Oct 2026 | [NEEDS INPUT: T07] | candidate: close match, reads as a business name |
| Cairns Kitchen and Joinery | cairnskitchenandjoinery.com.au | [NEEDS INPUT: T07] | [NEEDS INPUT: T07] | no NS record, 11 Oct 2026 | [NEEDS INPUT: T07] | candidate: covers the kitchens page |
| Cairns Joinery | cairnsjoinery.com.au | [NEEDS INPUT: T07] | [NEEDS INPUT: T07] | no NS record, 11 Oct 2026 | [NEEDS INPUT: T07] | candidate: short, but "joinery cairns" is 10 a month |
| Far North Cabinetry | farnorthcabinetry.com.au / farnorthcabinets.com.au | [NEEDS INPUT: T07] | [NEEDS INPUT: T07] | no NS record, 11 Oct 2026 | [NEEDS INPUT: T07] | candidate: brandable, covers the Tablelands, no keyword match |

## Infrastructure

| field | value |
|---|---|
| registrar | [NEEDS INPUT: T09] |
| hosting | [NEEDS INPUT: GitHub Pages or Cloudflare Workers] |
| dns provider | [NEEDS INPUT: T09] |
| proxy status | [NEEDS INPUT: proxied or DNS-only] |
| workers_dev | [NEEDS INPUT: false, or n/a on GitHub Pages. See rule R5] |
| dns verified | [NEEDS INPUT: T10, paste the nslookup output and the date] |
| ga4 measurement id | [NEEDS INPUT: T11, the G- one, used on the page] |
| ga4 property id | [NEEDS INPUT: T11, the numeric one, used by the dashboard] |
| turnstile site key | [NEEDS INPUT: T11, copied from the Cloudflare dashboard] |
| turnstile hostname added | [NEEDS INPUT: Y or N] |
| supabase site_id | [NEEDS INPUT: T14] |
| ingest url | [NEEDS INPUT: T14, the shared ingest-form function URL] |
| ingest secret location | [NEEDS INPUT: where it is set, never the value] |
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
