# 05 Log

Every task appends here. Every session reads it first. See PLAYBOOK.md.

## Decisions

Every decision, and every reversal of one, with what it supersedes. Written in
the same commit as the change it describes. Without the supersedes column, a
later session reads the newest note as if nothing came before it, which is how
the same three questions were reopened across four sessions on Perth Tiling
Specialists.

`by` is `Brad`, or `Code, accepted by Brad` where Brad agreed to a proposal.

| date | task | decision | by | supersedes | reason |
|---|---|---|---|---|---|
| 2026-10-11 | T01 | Concreting in Wollongong parked after a volume pull; switched to cabinet makers in Cairns | Brad | none | Brad's call after seeing the Wollongong volumes (140 a month head term, most service terms null) |
| 2026-10-11 | T01 | Cabinet makers, Cairns QLD chosen; Wollongong concreting is the runner-up | Brad | none | see `01-market.md` Chosen |
| 2026-10-11 | T00 | Repo created before T06, so research could live in `build/` | Brad | none | Brad made the folder; research moved in from `dfseo/*_notes.md`. `01-market.md` stays DRAFT until T06 |
| 2026-10-11 | T02 | Bathroom vanities dropped, wardrobes demoted to a section on index.html | Code, accepted by Brad | none | T03 showed both SERPs held by retail |
| 2026-10-11 | T02 | "kitchen renovations cairns" joins the kitchens page | Code, accepted by Brad | none | T03 showed cabinet makers own that SERP |
| 2026-10-11 | T06 | GO on cabinet makers, Cairns, including the remote-execution verdict as proposed | Brad | none | `01-market.md` |
| 2026-10-11 | T08 | Brand Cairns Cabinet Makers, domain cairnscabinetmakers.com.au | Code, accepted by Brad | none | clean on all four T07 checks; exact match for the head group. Shared "Cairns Cabinet" with CCW's registered name is accepted knowingly (`02-constants.md` Naming history) |

## Open items

Anything owed, by anyone. `blocks` names the task ID it blocks, or `launch`,
or `none`. `closes when` names the check that will close it, written when the
item is opened. `closing evidence` is that check's output, and stays empty
until it has actually been run. An item never closes because someone says it
is done.

**G7 fails `--check` while an item with `blocks` set to `launch` has no
closing evidence.**

| item | blocks | surface | opened | closes when | closed | closing evidence |
|---|---|---|---|---|---|---|
| T06 go or no-go on `01-market.md` | T07 | Me | 2026-10-11 | `01-market.md` Status reads GO or NO-GO with Brad's date | 2026-10-11 | `01-market.md` line 3 reads Status GO, Brad, 11 October 2026 (Brad's GO given in the Code session) |
| QBCC s53C: does a pre-rental site published by an unlicensed operator, worded as "enquiries go to a licensed local cabinet maker" (R11), have to carry an "Only work valued at $3,300 or less" statement? Source: qbcc.qld.gov.au/running-your-business/advertising, read 11 Oct 2026. Websites count as advertising | T21 | Me | 2026-10-11 | written legal advice (QLD) summarised here with its date | | |
| Once rented, every page must show the renter's licensed name, "licensed under the QBCC Act" and the licence number (QBCC Act s54). The template has no field for this | launch | Code | 2026-10-11 | a config field renders those three items on every page, shown by `node bake.js` output and a grep of the baked pages; or a standing rule in PLAYBOOK Appendix A says otherwise | | |
| First licensed-trade build in the portfolio: no standing rule covers licence display or s53C | T30 | Code | 2026-10-11 | a rule in the template's PLAYBOOK.md Appendix A, cited here by ID and template commit | | |
| Renter must have a showroom or workshop address customers can visit; kitchen buyers expect one | none | Me | 2026-10-11 | named in `02-constants.md` Positioning at T16 | | |
| Register the business name "Cairns Cabinet Makers" with ASIC on Brad's ABN, before the domain, so .com.au allocation rests on an exact match | T09 | Me | 2026-10-11 | the ASIC Business Names dataset or ABN Lookup shows "Cairns Cabinet Makers" registered against the ABN in `02-constants.md` | | |
| Cairns kitchen cost source (R10). The only figure in hand is a Sydney benchmark ($15,000 to $40,000) | T21 | Code | 2026-10-11 | a Cairns or FNQ source in `03-plan.md` Cost figures, or cost copy dropped | | |

## QA

T27 and T28. Status goes PASS only when every row below has a result and its
evidence. **G7 fails `--check` if Status is PASS with a required row missing.**
Keep the check names in the first column exactly as written.

Status: [NEEDS INPUT: PASS or FAIL at T28]

| check | result | evidence | date |
|---|---|---|---|
| no-js crawl | [NEEDS INPUT] | word count per page, with the command | |
| console errors | [NEEDS INPUT] | | |
| layout | [NEEDS INPUT] | mobile, tablet, desktop | |
| pagespeed | [NEEDS INPUT] | the two heaviest pages | |
| internal links | [NEEDS INPUT] | no orphans | |
| sitemap | [NEEDS INPUT] | matches disk | |
| notice above form | [NEEDS INPUT] | rendered, on every page with a form | |
| preflight on deployed commit | [NEEDS INPUT] | `node bake.js --check` output | |
| form end to end | [NEEDS INPUT] | row landed against the right site_id | |
| call routes and logs | [NEEDS INPUT] | call_events row | |
| greeting_audio_url | [NEEDS INPUT] | heard on the call | |
| greeting_text | [NEEDS INPUT] | column set, same words | |
| ga4 realtime | [NEEDS INPUT] | pageview and click_to_call | |
| single indexable hostname | [NEEDS INPUT] | platform hostname fetched directly | |
| operator files not served | [NEEDS INPUT] | 404 on PLAYBOOK.md and README.md | |

## Index log

T29.

| field | value |
|---|---|
| sitemap submitted | [NEEDS INPUT: date] |
| sitemap last read | [NEEDS INPUT: date Search Console reports] |
| pages requested | [NEEDS INPUT] |
| review dates set | [NEEDS INPUT: what, and when it falls due] |
| link inventory | [NEEDS INPUT: the named pre-renter linkable assets] |
| outreach targets and status | [NEEDS INPUT] |

## Backport

T30. One row per `###` heading under "Divergence from the template" in this
site's `README.md`. **G6 fails `--check` while a heading has no row here.**
Either the change is in the template, or there is a written reason it cannot
be. See PLAYBOOK.md rule R7.

| divergence | template commit | or reason it stays here |
|---|---|---|
| [NEEDS INPUT: or "none"] | | |
