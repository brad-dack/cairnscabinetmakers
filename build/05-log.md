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
| [NEEDS INPUT: first decision] | | | | | |

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
| [NEEDS INPUT: first open item] | | | | | | |

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
