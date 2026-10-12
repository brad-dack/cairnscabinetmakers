# 03 Page plan

Status: DRAFT | [NEEDS INPUT: FITS at T18, then SIGNED-OFF with the date at T19]
Evidence: OPEN | [NEEDS INPUT: set to CLEAR at T20]

Written by T16a to T20. Read by T21, T24 and T25. See PLAYBOOK.md.

**G3 blocks `node bake.js` once real page copy exists and this file is not
SIGNED-OFF, or its Head table disagrees with `config.js`.** G4 fails
`--check` while Evidence is not CLEAR or any claim register row is still open.

Both tables below are keyed by the page's file name. Keep the column headings
as written; G3 reads them.

## Reference sites

T16a. Fetched 13 October 2026 (home pages only, static HTML, no script run), from
Brad's list of sites he thinks rank well in their markets. What the fetch
shows, not why they rank: no rankings, links or Google Business Profiles were
checked. 14 of 15 fetched; middletondesign.com.au returned HTTP 403.

| site | market | home words | notable on the home page |
|---|---|---|---|
| tailoredinteriorsqld.com.au | Brisbane | 543 | services by room; testimonials; hours; footer carries ABN, QBCC number and Master Builders number |
| atcabinetmakers.com.au | Brisbane south | 1,450 | suburb names in the H1; five-step process with "free in-home consultation"; reviews; awards; "over 40 years"; LocalBusiness schema with address, geo and opening hours |
| northsidejoinery.au | Brisbane north | 686 | architectural and commercial joinery; named owner with years of experience; showroom or workshop wording |
| huskandco.com.au | Sydney | 310 | awards and TV features; gallery |
| myjoinery.com.au | Sydney | 685 | services by room; reviews |
| middletondesign.com.au | not read | | blocked, HTTP 403 |
| perfectfitinterior.com.au | Melbourne | 4,045 | long page; many services; process; free quote |
| cosinteriors.com.au | Melbourne | 233 | trade clients (builders, architects); recent work only |
| melbournecabinetmakers.com.au | Melbourne | 572 | process; FAQ; warranty |
| customcabinets.com.au | not stated | 445 | room-by-room service blocks; workshop wording |
| winterfields.com.au | Adelaide | 183 | "35+ years"; room-by-room services; testimonial |
| spacecraftjoinery.com.au | Adelaide | 114 | gallery; finance offer |
| precisioncabinets.com.au | Perth | 751 | benefits; process; testimonials; projects; free quote |
| colraycabinets.com.au | Perth | 4,258 | awards; team; gallery; showroom; reviews; warranty |
| willettoncabinets.com.au | Perth | 2,024 | process; reviews; featured work |

| pattern | seen on | verdict | reason |
|---|---|---|---|
| Services shown by room (kitchens, bathrooms, laundry, wardrobes, commercial) | most | adopt, as sections of the two planned pages | matches the section plan in `01-market.md`; no extra pages, so no cannibalisation |
| A step-by-step process | A&T, Perfect Fit, CNA, Precision, Willetton | adopt once sourced | no Cairns competitor describes process (Competitor gaps); a general sequence needs a real source under R10 |
| FAQ block | CNA, others | adopt once sourced | answers the cost, timeline and humidity questions the market read found unanswered |
| Suburb or region names for the service area | A&T (in the H1) | adopt, in copy only | the keyword table puts Atherton, Innisfail and Smithfield in service-area copy, no pages |
| Licence number in the footer | Tailored Interiors | adopt once a renter is signed | PLAYBOOK R14 and G11: nothing licence-related before a renter |
| Reviews and testimonials | most | cannot claim | the claim restriction list forbids invented reviews and we have none |
| Awards, years in business, "over 40 years" | A&T, Colray, Husk, Winterfield | cannot claim | forbidden: years in business; the site does not do the work |
| Gallery and recent work | most | cannot claim | no photos of work (claim restrictions); a gallery waits for the renter |
| "Free in-home consultation" and "free quote" | A&T, Perfect Fit, Precision | cannot claim | forbidden: this site does not quote |
| Showroom, workshop address, hours, LocalBusiness schema | A&T, Northside, Colray | cannot claim | forbidden before a renter has premises; `schema.type` stays Organization |
| Finance offer | SpaceCraft, Precision | skip | not ours to offer |
| Long home pages (over 2,000 words) against short ones (114 to 233) | both kinds | skip | the sample shows no link between length and the sites chosen; length is not a reason |

What the sample suggests: most of what these sites lean on is trust that
comes from an operating business, which this site cannot claim before a renter
is signed. What is open to us is structure (rooms, process, FAQ, service area)
and the answers no Cairns competitor gives (cost, timeline, tropical climate),
each under R10. The three QLD sites read closely show no prices on the home
page.

## Inventory

T17, with the Template fit column filled at T18.

| file | route | config key | priority | primary keyword | secondary keywords | template fit |
|---|---|---|---|---|---|---|
| [NEEDS INPUT: e.g. index.html] | | | | | | |

Template fit is `fits`, `engine change: <reason>`, or `dropped`. A page whose
fit is unknown does not get drafted. On Perth Tiling Specialists, whether a
contact page could exist at all was settled by dropping the page rather than
by reading the engine.

## Head

T17. Character counts include spaces. Title 60 or under, meta 155 or under.
The H1 is literal, including its local term, and is approved here rather than
polished later.

| file | title | chars | meta | chars | h1 |
|---|---|---|---|---|---|
| [NEEDS INPUT: one row per inventory row] | | | | | |

## Nav

T17. Ordered. Footer-only pages listed separately.

[NEEDS INPUT: nav order, then footer-only pages]

## Cannibalisation map

T17. See PLAYBOOK.md rule R12.

| page | owns | must not expand into | sends readers to |
|---|---|---|---|
| [NEEDS INPUT: one row per page] | | | |

## Internal link graph

T17. Name the inbound hub and the outbound hub. No orphans.

[NEEDS INPUT: inbound hub, outbound hub, then per-page inbound and outbound anchors]

## Image direction

T17 writes what each image must show; T24 fills the measured columns. An image
that would make a factual or diagnostic claim is drawn as an SVG, never a
near-miss photo. No captions.

| file | image | shows | photo or diagram | alt text | width | height | KB | widths |
|---|---|---|---|---|---|---|---|---|
| [NEEDS INPUT: one row per image] | | | | | | | | |

## Linkable asset

T17. Which page, and six named outreach targets, or the words
`conversion asset only`. An asset nominated with no named target is a page
nobody will link to.

[NEEDS INPUT: page, then targets]

## Claim register

T17 lists every safety, regulatory or standards claim and the primary source
required. T20 resolves every row. Status is `sourced` or `dropped`, never
`open`, before Evidence goes CLEAR. See PLAYBOOK.md rule R2.

| # | claim as it will appear | page | primary source required | status | source | edition | url | date checked |
|---|---|---|---|---|---|---|---|---|
| [NEEDS INPUT: one row per high-risk claim] | | | | | | | | |

## Dropped claims

T20. The claim text and why it went. A dropped claim is deleted from the copy,
not just from this table.

[NEEDS INPUT: or "none"]

## Traps found

T20. Claims that search results assert but primary sources do not support. The
Western Australian waterproofing licence is the worked example: every source
asserting it traced back to training provider marketing, and the licence
belongs to a different state.

[NEEDS INPUT: or "none found"]

## Cost figures

T20, where the build publishes figures. Reader-facing copy uses the publisher
type, never the business name. Peak bodies may be named.

Method, in the words that will appear on the page:

[NEEDS INPUT: the method paragraph]

| item | low | high | publisher type | source name | url | date |
|---|---|---|---|---|---|---|
| [NEEDS INPUT: one row per figure] | | | | | | |

Convergence and disagreement: [NEEDS INPUT: what agrees, what diverges, why]

Gaps: [NEEDS INPUT: figures wanted but not found]

Review date: [NEEDS INPUT: 12 months from compilation]

## Sign-off

T19. H1 map and nav signed off by Brad in this file, not in a message.

[NEEDS INPUT: date]
