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
| index.html | / | pages.home | 1, built first | cabinet makers cairns | cabinet maker cairns, cabinetmakers cairns, joinery cairns, cabinet maker near me, custom cabinets | [NEEDS INPUT: T18] |
| kitchen-renovations-cairns.html | /kitchen-renovations-cairns | services[0] | 1 on volume | kitchen renovations cairns | kitchens cairns, kitchen cabinets cairns, kitchen makers cairns, kitchen design cairns, flat pack kitchens cairns, kitchen benchtops cairns, stone benchtops cairns | [NEEDS INPUT: T18] |
| about.html | /about | pages.about | 3 | n/a | cabinet maker quote cairns | [NEEDS INPUT: T18] |
| privacy.html | /privacy | pages.privacy | 3 | n/a | n/a | [NEEDS INPUT: T18] |

Two money pages, as `01-market.md` planned: the home page owns the head group
and the kitchens page owns the kitchen terms. Everything else is a section on
one of them or no page, per the Keyword table: wardrobes, built-in wardrobes
and joinery are sections on Home; kitchen design, flat pack, benchtops and
stone benchtops are sections on the kitchens page; vanities, shopfitting,
entertainment units, kitchen resurfacing and every null term get no page;
Atherton, Innisfail and Smithfield appear only in service-area copy.

The kitchens page takes "kitchen renovations cairns" (110 a month, held by
cabinet makers) as primary and "kitchens cairns" (90, held by specialists with
a higher link bar) as secondary, so the slower term rides on the winnable one.

Contact is not a page. It is a section inside About, with the enquiry form on
Home, the kitchens page and About, as on Perth Tiling Specialists.

Template fit is `fits`, `engine change: <reason>`, or `dropped`. A page whose
fit is unknown does not get drafted.

## Head

T17. Character counts include spaces. Title 60 or under, meta 155 or under.
The H1 is literal, including its local term, and is approved here rather than
polished later. No head says "licensed", "free", a price, a years claim or a
response time (Positioning claim restrictions, R11).

| file | title | chars | meta | chars | h1 |
|---|---|---|---|---|---|
| index.html | Cabinet Makers Cairns \| Kitchens, Wardrobes, Joinery | 52 | Looking for a cabinet maker in Cairns? Tell us about your kitchen, wardrobe or joinery job and we will pass it to a local cabinet maker who can quote it. | 153 | Find a Cabinet Maker in Cairns for Kitchens, Wardrobes and Joinery |
| kitchen-renovations-cairns.html | Kitchen Renovations Cairns \| Custom Kitchen Cabinets | 52 | Kitchen renovations in Cairns: what a custom kitchen involves, how cabinets cope with tropical humidity, and how to get a Cairns cabinet maker to quote. | 152 | Kitchen Renovations in Cairns: Cabinets, Benchtops and Design |
| about.html | About Cairns Cabinet Makers \| How This Site Works | 49 | What Cairns Cabinet Makers is, the area we cover, what happens when you enquire, how the service is paid for, and how to get in touch. | 134 | About Cairns Cabinet Makers |
| privacy.html | Privacy Policy \| Cairns Cabinet Makers | 38 | What Cairns Cabinet Makers collects when you make an enquiry or call, who your details go to, how long they are kept, and how to have them removed. | 147 | Privacy Policy |

## Nav

T17. Ordered: Home, Kitchens, About. No Services item and no dropdown. The call
button sits beside them. Footer-only: Privacy. The footer mirrors the nav plus
Privacy, and carries the s54 licence line only once a renter is signed (R14).

## Cannibalisation map

T17. See PLAYBOOK.md rule R12.

| page | owns | must not expand into | sends readers to |
|---|---|---|---|
| index.html | routing the reader, how the site works, a short outline of how a cabinet job runs, wardrobes and joinery as sections, commercial disclosure in brief | any cost figure, kitchen detail beyond a summary, benchtop or design detail | kitchens page, About |
| kitchen-renovations-cairns.html | kitchen cabinets, layout and design, benchtops and stone benchtops, flat pack against custom, what holds up in tropical humidity, how a kitchen job runs and how long it takes (each only once sourced) | wardrobes, vanities, shopfitting, any Cairns cost figure until a source is in "Cost figures" | Home for other rooms, About |
| about.html | who runs this, what the business does and does not do, the service area (Cairns, with Atherton, Innisfail and Smithfield named in copy only), how it is paid for, contact | service detail, prices | Home, kitchens page |
| privacy.html | collection, disclosure, retention, access | commercial explanation beyond what disclosure needs | About |

## Internal link graph

T17. Inbound hub: the kitchens page, the page with the higher link bar and the
one most worth linking to. Outbound hub: Home. No orphans: every page is in the
nav except Privacy, which is in the footer on every page.

| page | inbound anchors | outbound anchors |
|---|---|---|
| index.html | every page's logo and nav "Home" | "kitchen renovations in Cairns" to the kitchens page; "about this site" to About |
| kitchen-renovations-cairns.html | nav "Kitchens"; the kitchens block on Home | "other rooms and joinery" to Home; "how this site works" to About |
| about.html | nav "About"; the call-to-action band | "Cairns kitchens" to the kitchens page; "home" to Home |
| privacy.html | footer, every page; the form notice link | "about this site" to About |

## Image direction

T17 writes what each image must show; T24 fills the measured columns. No
captions. Positioning forbids photos of work, so these are drawn illustrations
or diagrams, never a near-miss photo of a finished job. A diagram that makes a
factual claim is tied to a Claim register row.

| file | image | shows | photo or diagram | alt text | width | height | KB | widths |
|---|---|---|---|---|---|---|---|---|
| index.html | images/home-hero-cabinetry.svg | a line illustration of fitted kitchen and wardrobe cabinetry | illustration | [NEEDS INPUT: T24] | | | | |
| kitchen-renovations-cairns.html | images/kitchen-renovations-cairns.svg | a line illustration of a kitchen layout with cabinets and benchtop | illustration | [NEEDS INPUT: T24] | | | | |
| kitchen-renovations-cairns.html | images/cabinet-moisture-points.svg | where moisture reaches kitchen cabinets: under the sink, the dishwasher edge, the floor line (tied to claim 3, drawn only if sourced) | diagram | [NEEDS INPUT: T24] | | | | |

## Linkable asset

T17. `conversion asset only`. The one page worth linking to would be a Cairns
kitchen cost and process guide, but there is no Cairns cost source yet (R10, the
open item in `05-log.md`), so no asset is nominated and no outreach targets are
named. If a source is found, nominate the kitchens page here and name six
targets before drafting.

## Claim register

T17 lists every safety, regulatory or standards claim and the primary source
required. T20 resolves every row. Status is `sourced` or `dropped`, never
`open`, before Evidence goes CLEAR. See PLAYBOOK.md rule R2.

| # | claim as it will appear | page | primary source required | status | source | edition | url | date checked |
|---|---|---|---|---|---|---|---|---|
| 1 | In Queensland, residential building work valued over a stated threshold needs a QBCC licence (the threshold figure and whether it applies to cabinetwork) | kitchens, About | QBCC Act and the QBCC's own guidance | open | | | | |
| 2 | A written contract is required for domestic building work over the stated threshold, and a deposit is capped | kitchens | QBCC Act, domestic building contracts provisions | open | | | | |
| 3 | Cabinet materials differ in how they cope with humidity, and edging and hardware matter in the tropics | kitchens | a board or hardware manufacturer's technical data, or Standards Australia for the board standard | open | | | | |
| 4 | Warranty or insurance protection applies to work over the threshold | kitchens, About | QBCC home warranty scheme page | open | | | | |
| 5 | A typical kitchen renovation sequence and how long each stage takes | kitchens, Home | a peak body or a named published source, not a competitor | open | | | | |
| 6 | Any Cairns or Far North Queensland cost range for a kitchen | kitchens | a Cairns or FNQ source (R10); the Sydney $15,000 to $40,000 benchmark is not used | open | | | | |
| 7 | The s53C advertising-statement requirement for a pre-rental site (whether "$3,300 or less" wording is needed) | all pages | written Queensland legal advice, not a web page | open | | | | |

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
