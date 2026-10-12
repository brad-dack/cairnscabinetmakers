# 03 Page plan

Status: SIGNED-OFF | Brad, 13 October 2026
Evidence: CLEAR | 13 October 2026

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
| index.html | / | pages.home | 1, built first | cabinet makers cairns | cabinet maker cairns, cabinetmakers cairns, joinery cairns, cabinet maker near me, custom cabinets | engine change: Home renders from `pages.home.blocks`. The stock Home is a services grid, the generic how-it-works steps, testimonials and an FAQ preview, with no place for the planned wardrobe and joinery sections, the job outline or the disclosure. Perth Tiling Specialists has this change |
| kitchen-renovations-cairns.html | /kitchen-renovations-cairns | services[0] | 1 on volume | kitchen renovations cairns | kitchens cairns, kitchen cabinets cairns, kitchen makers cairns, kitchen design cairns, flat pack kitchens cairns, kitchen benchtops cairns, stone benchtops cairns | fits: `services[0]` takes the block copy, a `form` block with `presetService` puts the enquiry form on the page, a `faqs` block feeds FAQPage schema, and the `Service` schema names the provider as Organization. The SVG images need no `widths`. The page-end call-to-action band and how-it-works section are the engine changes listed below |
| about.html | /about | pages.about | 3 | n/a | cabinet maker quote cairns | engine change: About renders from `pages.about.blocks`, so it can carry headed sections (what we do and do not do, how it is paid for, service area) as well as the contact section and form. Stock About is a run of paragraphs, auto-built contact lines and the form |
| privacy.html | /privacy | pages.privacy | 3 | n/a | n/a | engine change: Privacy renders from `pages.privacy.blocks`. The stock privacy text describes a three-field form and says calls are not recorded, which is the wrong data flow here (voicemail recorded and stored, Supabase in Tokyo, Resend, Twilio, 12-month retention) |

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

**Template fit, T18, 13 October 2026.** Read against this repo's `bake.js` and
`config.js` (the template as of d257368). Engine changes outside a page row,
each to be logged under README "Divergence from the template" and in the
Backport table when made at T25:

1. **Header nav.** `headerHtml` hard-codes Home, Services and Contact. The plan
   is Home, Kitchens, About. The footer's "About & Contact" label follows.
2. **Call-to-action band.** `ctaBand` says "request your free quote online" on
   every Home and service page. "No free quote" is a Positioning claim
   restriction, so the line changes.
3. **How-it-works section.** `howItWorksSection` renders unconditionally on Home
   and service pages, with the stock steps: "within 24 hours" (a response-time
   promise, banned) and "Get it done" (we do not do the work). It is dropped, as
   on Canberra Tile Layers and Perth Tiling Specialists.
4. **Job-type picker.** The picker lists `services[].name` plus "other", so
   Home and About would offer "Kitchen Renovations" and "Other" only.
   Wardrobes and joinery have no option. Perth reads `contact.jobTypes`
   instead.
5. **Not needed:** no new schema type (Service with an Organization provider is
   what the engine emits), no new image handling (SVG without `widths` works),
   no area pages, no separate Contact page, no 404 change.

Perth Tiling Specialists made these changes in its own `bake.js` (sixteen
logged there, none backported to the template). Copying them here is a second
unbackported divergence unless the same change goes into the template. T30
decides; flagged now so it is a choice, not a surprise.

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
captions.

Two kinds of image, approved by Brad on 13 October 2026:

- **Illustrative images**, generated with Gemini at T23 to make the site look
  appealing. They are never presented as our work or a renter's work: no
  caption, no "our projects" or "recent work" wording, no before and after, no
  readable business name or logo in the frame, and alt text that says what is
  illustrated ("an illustrated modern kitchen"), not what was done. R10 applies.
- **Diagrams**, drawn as SVG, wherever an image would make a factual claim. A
  diagram that makes a factual claim is tied to a Claim register row; one with
  no sourced row is not drawn.

| file | image | shows | photo or diagram | alt text | width | height | KB | widths |
|---|---|---|---|---|---|---|---|---|
| index.html | images/home-hero-kitchen.jpg | a modern fitted kitchen with cabinetry and a benchtop, bright and warm, no people, no text | illustrative image (Gemini) | An illustrated modern kitchen with white cabinetry, a timber island and open shelving | 1200 | 800 | 122 | 400, 560, 720, 960 |
| kitchen-renovations-cairns.html | images/kitchen-renovations-cairns.jpg | a different modern kitchen from a different angle: cabinetry, benchtop, island, no people, no text | illustrative image (Gemini) | An illustrated modern kitchen with timber and grey cabinetry and a stone-look island benchtop | 1200 | 800 | 146 | 400, 560, 720, 960 |
| kitchen-renovations-cairns.html | images/kitchen-cabinet-parts.svg | the named parts of a kitchen base cabinet: carcass, door, edge, shelf, hinge, kickboard, benchtop. Labels only, no performance or moisture claim. Replaces the moisture-points diagram, which was tied to claim 3, now dropped | diagram | Diagram naming the parts of a kitchen base cabinet: benchtop, carcass, shelf, kickboard, hinge, door and edge | 1200 | 800 | 4 | none |

T24, 13 October 2026. The two Gemini images arrived as `home.jpeg` and
`kitchens.jpeg` (1264 by 848), were cropped to 3:2, resized to 1200 by 800 and
saved as the file names above, with `-400`, `-560`, `-720` and `-960` variants.
The originals are kept in `build/source-images/`, which `_config.yml` keeps off
the live site. Wiring into `config.js` is part of T25.

### Gemini prompts for T23

Drafted 13 October 2026. Brad runs these in Gemini and saves the chosen image
into `images/` under the file name shown. Landscape 3:2 (about 1200 by 800 after
T24), the subject centred because the hero crops differently on phones.

Shared rules, repeated in each prompt because Gemini forgets: no people, no text
or lettering anywhere, no logos or brand names on appliances, no street or
landmark that identifies a place, no before and after, and a realistic finished
home kitchen rather than a showroom or a render.

**home-hero-kitchen.jpg** (Home)

> A photorealistic photograph of a modern fitted home kitchen in warm natural
> daylight. White and light timber-look cabinetry, a stone-look benchtop, a
> built-in shelving and storage wall at one side. A bright, calm, lived-in feel
> for a coastal Queensland home, with a soft green leafy view through a window.
> Shot at eye level, 3:2 landscape, subject centred. No people, no text or
> lettering, no logos or brand names, no signage, no pets, no food clutter.
> Realistic proportions: straight cabinet lines, one tap, one sink, handles
> that match.

**kitchen-renovations-cairns.jpg** (Kitchens page)

> A photorealistic photograph of a different modern kitchen, seen from a
> three-quarter angle across a kitchen island. Mid-tone timber-look and soft
> grey cabinetry, a pale stone-look benchtop with a clean waterfall edge,
> overhead cabinets and a tiled splashback, bright natural daylight from the
> side. A tropical, airy feel without palm trees in frame. 3:2 landscape,
> subject centred. No people, no text or lettering, no logos or brand names, no
> signage. Realistic proportions: straight lines, matching handles, one sink,
> one cooktop, no duplicated or floating objects.

**kitchen-cabinet-parts.svg** (Kitchens page): not a Gemini image. Drawn as SVG
on 13 October 2026 and committed at `images/kitchen-cabinet-parts.svg`, 1200 by
800, under 4 KB. Labels only: benchtop, carcass, shelf, kickboard, hinge, door,
edge. No performance or moisture claim. Has its own title and description
inside the file; T24 writes the page alt text.

Check each image before saving:

- Hands, handles, taps and appliances are not warped, doubled or fused
- Cabinet lines are straight and doors meet cleanly
- No readable text on any surface, and no brand shapes on appliances
- Nothing in the frame looks like a specific named place or business
- It reads as a plausible kitchen, not a luxury showroom the renter could not
  build

Gemini's output terms and any generated-image labelling are Brad's to confirm
for his own account. Nothing on the site calls these images work we did.

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

Researched 13 October 2026 by web search and page fetch. Where a row is narrowed, the
claim column carries the narrowed wording, which is all the copy may say.

| # | claim as it will appear | page | primary source required | status | source | edition | url | date checked |
|---|---|---|---|---|---|---|---|---|
| 1 | In Queensland, building work valued over $3,300 needs a QBCC licence, and the Cabinet making licence class covers installing, refurbishing or repairing kitchen and other fitted cabinets on site | kitchens, About | QBCC Act and the QBCC's own guidance | sourced | QBCC, "Who must hold a QBCC licence" and "Cabinet making" licence page | licence page last reviewed 16 April 2026; cabinet making page last reviewed 30 August 2021 | https://www.qbcc.qld.gov.au/my/node/7081 ; https://www.qbcc.qld.gov.au/licences/apply-licence/available-licences/other-trade/cabinet-making | 13 October 2026 |
| 2 | For domestic building work over $3,300 the QBCC says a written, dated and signed contract is essential and must include advice about a cooling-off period; the maximum deposit is 10% of the contract price from $3,301 to $19,999 and 5% above $20,000, with up to 20% allowed where more than half the price is made-to-measure work done off site, cabinetry being an example the QBCC gives | kitchens | QBCC Act, domestic building contracts provisions | sourced | QBCC, "Contracts and payments" and "Deposits and progress payments". The QBCC is the licensing authority. The Act itself was not read | contracts page last reviewed 14 May 2026; deposits page last reviewed 27 June 2025 | https://qbcc.qld.gov.au/node/1331 ; https://www.qbcc.qld.gov.au/home-owner-hub/build-renovate/contracts-payments/deposits-progress-payments | 13 October 2026 |
| 3 | Practical advice only: ask what the cabinet carcass is made of, whether it is a moisture-resistant grade, and whether cut and drilled edges are sealed. **No standard, no board class and no climate-specific claim; the advice stays, the regulatory specific is dropped** | kitchens | a board or hardware manufacturer's technical data, or Standards Australia for the board standard | dropped | none usable. The Standards Australia store pages returned no readable text, and the reseller pages are not primary | n/a | n/a | 13 October 2026 |
| 4 | Queensland Home Warranty insurance applies to residential building work valued over $3,300 including materials, labour and GST, and the QBCC lists replacing or refitting fixtures or fittings in a kitchen among it. The page does not name cabinetry, so the copy does not either | kitchens, About | QBCC home warranty scheme page | sourced | QBCC, "What work requires insurance" | last reviewed 1 August 2024 | https://www.qbcc.qld.gov.au/my/node/2886 | 13 October 2026 |
| 5 | None. The copy says to ask for a written timeline and what the lead times are, with no durations | kitchens, Home | a peak body or a named published source, not a competitor | dropped | no Master Builders, HIA or government source found; every figure came from builder and cost-guide sites, one of them a New Zealand builder | n/a | n/a | 13 October 2026 |
| 6 | None. No Cairns or Far North Queensland kitchen cost figure, and no national one stated as ours | kitchens | a Cairns or FNQ source (R10) | dropped | no Cairns source exists in what was found; the national guides disagree widely ($12,000 to $30,000 for the budget tier alone) | n/a | n/a | 13 October 2026 |
| 7 | Every page carries the unlicensed-advertiser value statement: "Cairns Cabinet Makers cannot perform building work valued in excess of $3,300. For work above that value, discuss it with the cabinet maker who quotes your job." The first sentence follows the QBCC's own example wording | all pages | the QBCC's advertising guidance (the legal question of whether it is required stays with a solicitor) | sourced | the QBCC advertising page says unlicensed advertisers must state the value of work they can do, with the example "Cannot perform building work valued in excess of $3,300". It does not say whether a pre-rental referral site is such an advertiser, which is the legal question | QBCC advertising page last reviewed 30 August 2021, last published 30 June 2025 | https://www.qbcc.qld.gov.au/running-your-business/advertising | 13 October 2026 |

## Dropped claims

T20. The claim text and why it went. A dropped claim is deleted from the copy,
not just from this table.

| claim | reason |
|---|---|
| Any standard, board class or climate-specific claim about cabinet materials in the tropics (register row 3) | No primary source could be read. The practical advice to ask about board grade and sealed edges stays |
| Any kitchen renovation duration or stage timeline (row 5) | Only builder and cost-guide sources, one of them for New Zealand |
| Any Cairns or FNQ kitchen cost (row 6) | No Cairns source; the national figures disagree too much to present |

## Traps found

T20. Claims that search results assert but primary sources do not support.

- **The particleboard classes differ by edition.** One search summary describes
  AS/NZS 1859.1 as three classes (standard, moisture resistant, high
  performance), taken from the 2004 edition. Another describes the 2017 edition
  as two service conditions, dry (STD) and moisture resistant (MR). A claim built
  on the wrong edition would be wrong, and the Standards Australia pages could
  not be read, so no class is named.
- **"$3,300" has different bases on different QBCC pages.** The home warranty
  page says it includes materials, labour and GST. The licence page does not say
  what is counted. The copy states the figure only as the QBCC states it on each
  page, with no valuation basis added to the licensing claim.
- **A search result gave deposit rules from an older guide**, with a flat 20%
  recommendation for small jobs. The QBCC's current deposits page (27 June 2025)
  gives the three bands used in row 2.
- **Search summaries are not sources.** Every figure above was re-read on the
  QBCC page itself.

## Cost figures

T20. **None published.** No Cairns or Far North Queensland kitchen cost source
was found (register row 6), and the national guides disagree too much to
present as a range. Cost copy is dropped. If a source is found later, this
section is filled before any figure is drafted.

Method: not applicable.

Gaps: a Cairns or FNQ kitchen cost source. The only figure in hand, a Sydney
benchmark, is not used.

Review date: not applicable until a figure is published.

## Sign-off

T19. H1 map and nav signed off by Brad in this file, not in a message.

13 October 2026. Brad approved the plan in the Code session: the inventory, the Head table
(titles, metas and H1s as written), the nav (Home, Kitchens, About; Privacy in the footer),
the cannibalisation map and the link graph. Two things he added: the QBCC value statement
on every page until a renter is signed (claim row 7), and generated illustrative images,
recorded under Image direction. The plan is the record; a later change to a title, meta,
H1 or the nav needs this section re-signed.
