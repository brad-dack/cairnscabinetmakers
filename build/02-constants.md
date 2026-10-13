# 02 Constants

Status: FROZEN | 13 October 2026

Written by T07 to T16. Read by T12, T16, T21, T25 and T27. See PLAYBOOK.md.

**G1 blocks `node bake.js` while this file is missing, not FROZEN, carries any
unfilled input token (the bracketed NEEDS INPUT marker), or disagrees with `config.js`.** Do not set FROZEN to
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
| email | hello@cairnscabinetmakers.com.au |
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
| pages checks | 13 October 2026 (T26), after Brad set the Pages custom domain and Enforce HTTPS: `gh api .../pages` shows cname cairnscabinetmakers.com.au, https_enforced true, certificate approved for the apex and www, expiring 11 January 2027. `https://cairnscabinetmakers.com.au/` 200; `https://www.` 301 to the apex; `https://brad-dack.github.io/cairnscabinetmakers/` 301 to the apex. PLAYBOOK.md, README.md, bake.js, CODE-SESSION-START.md, TEMPLATE_SUMMARY.md, `New site prompt.txt`, build/02-constants.md and _config.yml all 404. Home, kitchens, about and privacy 200; an unknown path 404; robots.txt and sitemap.xml serve and list the apex URLs only. `http://cairnscabinetmakers.com.au/` still answered 200 rather than redirecting to https at 15:50 AWST, minutes after Enforce HTTPS was ticked: recheck |
| workers_dev | n/a, this is a GitHub Pages build |
| dns verified | 11 October 2026, 03:20 UTC, through 1.1.1.1 and 8.8.8.8 (identical): `nslookup -type=NS` gives evan.ns.cloudflare.com and thea.ns.cloudflare.com; `nslookup -type=A` on the apex gives 185.199.108.153, .109.153, .110.153, .111.153; `nslookup www.cairnscabinetmakers.com.au` gives alias to brad-dack.github.io, which resolves to the same four addresses. www to apex redirect checked at T26, 13 October 2026: see Pages checks below |
| ga4 measurement id | G-NLFZQK7WFQ |
| ga4 property id | 558470374 (web stream id 16111385210, stream URL https://www.cairnscabinetmakers.com.au, per Brad's screenshot, 12 October 2026) |
| ga4 settings | 12 October 2026, per Brad: event data retention 14 months; internal-traffic filter set up (IP not recorded here); stream URL changed to https://cairnscabinetmakers.com.au (apex) |
| turnstile site key | 0x4AAAAAAEHD1tLftcrbDXIx |
| turnstile hostname added | Y. First reported added 12 October 2026; the live page threw Turnstile error 110200 (domain not allowed) on 13 October 2026, then Brad fixed the hostname list the same day. Rechecked live after the fix: no console error, and the widget renders its "Verify you are human" checkbox on https://cairnscabinetmakers.com.au/kitchen-renovations-cairns. A token was not obtained, because the checkbox is a human check Code does not complete; T28's real test enquiry proves it end to end |
| supabase site_id | 00ee0b19-363b-4387-abfc-d04652f55346 (slug cairns-cabinet-makers), created by migration 029 in rank-and-rent-backend, commit 61773b8, applied 13 October 2026. `supabase db push --dry-run` showed only 029 pending first; `select` on the remote returns the row with twilio_number +61740284041, inbound_email and forward_from_email hello@cairnscabinetmakers.com.au, ga4_property_id 558470374 |
| ingest url | https://bnfgnglzswtrvzfqkgjh.functions.supabase.co/ingest-form |
| ingest secret location | `sites.ingest_secret` on the Cairns row (32 hex characters, set by migration 029 in the backend repo). It is the form's hidden field, so it is also placed in `config.js` as `ingestSecret` at T16 |
| twilio voice webhook | https://bnfgnglzswtrvzfqkgjh.functions.supabase.co/twilio-voice, POST, primary and backup both set to it. Seen on Brad's Twilio screenshot, 12 October 2026, region Australia (AU1) |
| twilio status webhook | https://bnfgnglzswtrvzfqkgjh.functions.supabase.co/twilio-status, POST. Same screenshot |
| inbound email | hello@cairnscabinetmakers.com.au, Cloudflare Email Routing rule Active, action is the Worker rank-and-rent-email-ingest (seen on Brad's screenshot, 12 October 2026). Catch-all is Disabled (Drop). Public check through 1.1.1.1 the same day: MX route1/2/3.mx.cloudflare.net, apex TXT v=spf1 include:_spf.mx.cloudflare.net ~all. Not yet tested by sending a message: that is the T14 and T28 check |
| resend domain | cairnscabinetmakers.com.au, Verified in Resend (sending enabled, receiving off), 12 October 2026. Public check through 1.1.1.1 the same day: TXT resend._domainkey returns the DKIM key; CNAME rsend gives rsend-apne1.forge.rmta.net and send gives send.forge.rmta.net (both DNS only). Resend region is apne1 (Tokyo), to name in privacy copy. DMARC _dmarc (v=DMARC1; p=none;) is shown in Resend but is not in DNS yet: NXDOMAIN |
| forward from email | hello@cairnscabinetmakers.com.au, set on the site row by migration 029 |
| storage regions | Supabase: ap-northeast-1, Tokyo, read from `supabase projects list` on 13 October 2026, to be named on the privacy page. Resend sends from apne1 (Tokyo), seen in its CNAME. Cloudflare: nothing stored at rest, the shared email Worker has no storage bindings (carried from the Perth Tiling Specialists record, not re-checked here). Twilio, GitHub Pages and Google are not pinned to a region; the privacy page says they may store data outside Australia |
| retention rule | `prune-storage` runs monthly and deletes voicemail audio and email attachments older than 12 months. The leads and call_events rows are kept, because they are the invoicing evidence. GA4 event data is kept 14 months |

Provenance for the three rows above that carry bare values (G1 compares them
literally to `config.js`):

- **ga4 measurement id:** from Brad's gtag snippet, 12 October 2026.
- **turnstile site key:** sent by Brad twice on 12 October 2026. It is the same
  string as the shared "Rank and Rent forms" widget key recorded in the Perth
  Tiling Specialists constants (`ingest url` and the key both match that file),
  which settles the doubt left by a blurry screenshot. A full form test at T14
  and T28 still proves it end to end.
- **ingest url:** the shared ingest-form function, the same URL as Perth.

## Positioning

| field | value |
|---|---|
| level | 2 |
| voice rule | "We" for the business throughout. First person singular for Brad's own section on About. Naming the individual is allowed, as on Perth Tiling Specialists, Canberra Tile Layers and Perth Limestone Group, and matches "Brad, first name only" in Identity |
| renter signed | N |

Claim restriction list, written out in full rather than referenced:

- No claim that we do the work. The site takes enquiries and passes them on.
- No invented reviews, star ratings, photos of work, years in business or job counts. Generated illustrative images are allowed (Brad, 13 October 2026) as long as nothing presents them as our work or a renter's work: no caption, no "our projects" wording, alt text that describes the illustration (see `03-plan.md` Image direction).
- No licence number and no "licensed" wording before a renter is signed (PLAYBOOK R14). Instead, every page carries the QBCC value statement: "Cairns Cabinet Makers cannot perform building work valued in excess of $3,300. For work above that value, discuss it with the cabinet maker who quotes your job." Adopted by Brad, 13 October 2026, as the conservative answer to the open QBCC s53C item in `05-log.md`.
- No response-time promise.
- No pricing presented as ours. A Cairns cost source is still open (R10), so no cost figures until one is in `03-plan.md`. The Sydney benchmark is not used.
- No "free quote". This site does not quote, and no draft says the cabinet maker's quote is free.
- No showroom, workshop or street address, and no "visit us".
- Commercial disclosure on About: the cabinet maker pays, we do not take a cut.
- `schema.type` stays `Organization`. No premises, no hours, no reviews.

Approved by Brad, 13 October 2026.

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

No spam and no obligation. Your details go to a local cabinet maker so they can quote your job, and the cabinet maker pays for the enquiry. We never add you to a marketing list. [How we handle your information](privacy.html).

**Voicemail greeting** (`sites.greeting_text` and the MP3 at
`sites.greeting_audio_url`, both columns, same words):

Hi, thanks for calling Cairns Cabinet Makers. Leave your name, suburb and job details after the tone. We will pass your enquiry on to a local cabinet maker who can quote the job, and the cabinet maker pays for the enquiry.

Wording approved by Brad, 13 October 2026, in the Code session. His edits kept: "We will pass your enquiry on", and "we never sell your details" dropped. The clause that the cabinet maker pays for the enquiry stays in both, as R3, R4, R11 and G8 require. The form text carries the privacy link, which cannot be spoken. Neither says "licensed": that wording sits inside the open QBCC s53C question in `05-log.md`. The MP3 (T13) must say the greeting words exactly.

| field | value |
|---|---|
| mp3 recorded | Y, uploaded by Brad to the Greetings bucket; https://bnfgnglzswtrvzfqkgjh.supabase.co/storage/v1/object/public/Greetings/Cairns%20Cabinet%20Makers.mp3 returns HTTP 200, audio/mpeg, 96,290 bytes, checked 13 October 2026. The words in it are not yet checked by ear: T28 does that on a real call |
| greeting_audio_url set | Y, on the site row, 13 October 2026 |
| greeting_text set | Y, on the site row, the approved T12 words |
| greeting heard on a real call | N, owed at T28 |

## Search Console

| field | value |
|---|---|
| property verified | Y. Brad's Search Console screenshot, Settings, shows "You are a verified owner" for the cairnscabinetmakers.com.au Domain property |
| method | DNS TXT, added through Cloudflare's automatic route from Search Console (Domain property). `nslookup -type=TXT cairnscabinetmakers.com.au 1.1.1.1` on 13 October 2026 returns google-site-verification=xFEvZ8lwiNdF_Q-Moteh2U_woraknz-JidTjkddb8P0 beside the SPF record |
| date | Property added 12 October 2026 (per Search Console); verified status seen 13 October 2026 |
| gsc_site_url set on the site row | N, owed at T29 |
