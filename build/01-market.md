# 01 Market read

Status: GO | Brad, 11 October 2026

Written by T01 to T06. Read by T07 and T17. See PLAYBOOK.md.

## Candidates considered

T01. Every candidate looked at, not just the winner. The remote-execution
column is the one that is easy to skip: supplier relationships, sponsorships
and local PR do not work remotely as designed.

| niche | city | renters | volume | competitor strength | remote penalty | verdict |
|---|---|---|---|---|---|---|
| concreting | Wollongong, NSW | not counted; operators seen: South Coast Concreting, Clifton Concreting & Excavation, Concreters Wollongong | head group 140/mo located in Wollongong; ~400-450/mo total distinct; service terms mostly null | directory-heavy first page (Oneflare suburb pages, Top4, Localsearch); T03 and T04 never run | NSW general concreting licence required over $5,000, so the renter must be licensed; no other remote penalty assessed | PARKED, not rejected. Lost to Cairns: smaller demand, directory-held SERP, no SERP or link pull done |
| cabinet makers | Cairns, QLD | 9+ visible but not ranking (see Renter evidence) | head group 210/mo located in Cairns, 390 national; ~520/mo targetable across two pages | weak: head term top 9 is mostly hipages, Localsearch and Facebook; specialist sites 26-89 referring domains | QBCC licence required over $3,300; buyers expect a showroom or workshop visit, so the renter needs a visitable address | CHOSEN |

## Chosen

T01. Name the runner-up and the one reason it lost. This is the only record of
why this build happened.

Cabinet makers, Cairns QLD. Runner-up was concreting in Wollongong, which lost
because its head term had two-thirds of the local volume (140 against 210) on a
first page already held by lead-gen directories.

Workbook file and tab used: none. Both candidates came from Brad's brief on 11
October 2026, not from `dfseo/Workbook*.xlsx` tab `3 Verdict`. Volumes, SERPs
and referring domains were pulled ad hoc (see Data files).

## Keyword table

T02. Grouped duplicates are recorded as grouped, never summed. A term that
returns null decides what does **not** get a page.

Volume is `located in Cairns / national (Australia)`. CPC is the located-in-
Cairns figure in AUD. Scope "local" means the term carries a Cairns-area
modifier; "bare" means no location in the term.

| term | volume | cpc | scope | null? | intended page, section on X, or no page |
|---|---|---|---|---|---|
| cabinet makers cairns / cabinet maker cairns / cabinetmakers cairns / cabinetmaker cairns (grouped) | 210 / 390 | 2.14 | local | no | index.html |
| cabinet maker / cabinet makers (grouped) | 30 / 8,100 | 1.35 | bare | no | index.html (only the located 30 counts) |
| cabinet maker near me / cabinet makers near me (grouped) | 20 / 4,400 | 2.33 | bare | no | index.html; organic not localised, local pack only |
| joinery cairns / joiners cairns (grouped) | 10 / 30 | 2.14 | local | no | index.html |
| joinery near me | 10 / 1,900 | - | bare | no | index.html |
| custom cabinets | 10 / 1,600 | 5.04 | bare | no | index.html |
| custom cabinets cairns | null | - | local | yes | no page |
| kitchens cairns | 90 / 170 | 3.24 | local | no | kitchens page |
| kitchen renovations cairns | 110 / 170 | 3.17 | local | no | kitchens page (T03: cabinet makers own this SERP) |
| kitchen renovations | 30 / 6,600 | - | bare | no | kitchens page |
| kitchen cabinets cairns | 40 / 70 | 1.28 | local | no | kitchens page |
| kitchen makers cairns | 10 / 10 | 5.53 | local | no | kitchens page |
| kitchen design cairns | 10 / 20 | 3.49 | local | no | section on kitchens page |
| flat pack kitchens cairns | 20 / 30 | 1.46 | local | no | section on kitchens page (DIY intent likely) |
| kitchen benchtops cairns | 20 / 30 | 2.09 | local | no | section on kitchens page |
| stone benchtops cairns | 30 / 70 | 1.24 | local | no | section on kitchens page; segment likely stonemasons |
| kitchen resurfacing cairns | 10 / 10 | 2.51 | local | no | no page |
| custom kitchens cairns, kitchen manufacturers cairns, outdoor kitchens cairns | null | - | local | yes | no page |
| wardrobes cairns | 90 / 170 | 0.55 | local | no | section on index.html (T03: retail SERP) |
| built in wardrobes | 30 / 9,900 | 1.60 | bare | no | section on index.html |
| built in wardrobes cairns | 10 / 20 | 0.33 | local | no | section on index.html |
| custom wardrobes cairns | 10 / 10 | - | local | no | section on index.html |
| walk in wardrobe cairns | null | - | local | yes | no page |
| bathroom vanities cairns | 70 / 110 | 0.44 | local | no | no page (T03: retail bathroomware SERP) |
| custom vanities cairns, laundry cabinets cairns | null | - | local | yes | no page |
| entertainment units cairns | 10 / 10 | 0.50 | local | no | no page |
| shopfitting cairns / shopfitters cairns (grouped) | 10 / 20 | - | local | no | no page; commercial segment |
| commercial joinery cairns | null | - | local | yes | no page |
| cost of new kitchen | 10 / 480 | - | bare | no | no Cairns cost page; national intent |
| how much does a new kitchen cost | 10 / 260 | - | bare | no | no Cairns cost page; national intent |
| custom kitchen cost | 10 / 10 | - | bare | no | no page |
| kitchen renovation cost cairns | null | - | local | yes | no page |
| cabinet makers atherton | 10 / 20 | - | local | no | no page; service-area copy only |
| cabinet makers innisfail | 10 / 20 | - | local | no | no page; service-area copy only |
| cabinet makers smithfield | 10 / 20 | - | local | no | no page; service-area copy only |
| kitchens atherton | 10 / 10 | - | local | no | no page |
| cabinet makers port douglas, mareeba, tablelands; kitchens port douglas, tablelands; joinery port douglas, atherton | null | - | local | yes | no page |

## SERP ownership

T03. **One row for every intended page**, not just the head term. A gate closed
on the head term alone reversed itself two sessions later on Perth Tiling
Specialists, after the remedial SERPs were finally read.

Segment owner is one of: the trade itself, specialists, directories, another
trade.

Pulled 11 October 2026 by `serp_adhoc.py`, mobile, located in Cairns QLD.
Raw file: `build/data/serp-cairns-2026-10-11.csv`.

| query | ads (count, who) | local pack | AIO | top 3 domains | top 3 ref domains | segment owner | winnable? |
|---|---|---|---|---|---|---|---|
| cabinet makers cairns | 0 | Forged Kitchen Cabinetry; FNQ Kitchens; PRO-fit Cabinetmaking | no | fnqkitchens.com.au (page titled "Contact"), hipages.com.au, artizancabinets.com.au | 26, directory-scale (3,730), 57 | directories (hipages 4 of top 9, Localsearch, 2 Facebook pages), with 2 specialist sites | yes: two weak specialist sites, Facebook pages on page 1 |
| cabinet maker near me | 0 | Forged Kitchen Cabinetry; FNQ Kitchens; Cairns Assembled Cabinets | yes | hipages.com.au (Brisbane page), hipages.com.au (Brisbane page), uprenovations.com | directory-scale, directory-scale, not pulled | directories; organic is not localised to Cairns | no: local pack only, needs a Google Business Profile |
| kitchens cairns | 0 | Kitchens by CCJS; FNQ Kitchens; Style Line Cabinet's | no | cairnskitchens.com.au, kilfoycabinets.com.au, pro-flatpacks.com.au | 43, 89, 35 | specialists (8 of top 10, including franchises Dream Doors 273 and Moduline 91 on national domains) | yes, slower: highest link bar of the three pages |
| kitchen renovations cairns | 0 | Kitchens by CCJS; FNQ Kitchens; EK Design Kitchens | no | fnqkitchens.com.au, facebook.com (FNQ Kitchens), pro-flatpacks.com.au | 26, n/a, 35 | the trade itself (cabinet makers), with hipages, Localsearch and 4 Facebook threads | yes: cabinet makers own it, weak results below them |
| wardrobes cairns | 0 | Wardrobe World Cairns; Cairns Custom Wardrobes; Roll Edge | no | bunnings.com.au, localsearch.com.au, bunnings.com.au | not pulled | another trade: retail and DIY | no, section only |
| bathroom vanities cairns | 0 | Highgrove Bathrooms; Cairns Hardware; Tradelink Cairns | no | burdensbathrooms.com.au, wellsons.com.au, royalvanities.com.au | not pulled | another trade: retail bathroomware | no, dropped |
| custom wardrobes cairns | not read (16 November 2026 scan reads ads and the map pack for the head term only) | not read | not read | homeadvice.com.au, yellowpages.com.au, instagram.com | 73 (a listings site), directory, directory | directories | no by the test (no small specialist); Brad chose to plan a page on 16 November 2026 because page 1 is all directories. Source: build/data/niche-scan-cairns-2026-11-16.csv |

Referring-domain counts are raw totals from the bulk endpoint, not filtered for
quality. hipages.com.au and localsearch.com.au are directory-scale and excluded
from the bar. For comparison, Perth Tiling Specialists (a GO) read 4 to 74 on
its head term and 60 to 100 on floor tiling.

## Winnability

Stage 1.4, added 16 November 2026 after launch (plan C7). Scored every
distinct job people search for in Cairns, not just the head term. A job is
**winnable** when all three hold:

- (a) city volume is 20 or more a month, or its close variants add up to 20;
- (b) at least one of its top 3 organic results is a small specialist site
  with under 100 referring domains (not a directory, marketplace, national
  brand or government site);
- (c) keyword difficulty is 30 or under, or not shown.

Source: the Niches tab scan of 16 November 2026 (Google Ads volume located in
Cairns, Labs difficulty for Australia, mobile page 1 located in Cairns,
referring domains from DataForSEO Backlinks; $0.78). Every job is in
`build/data/niche-scan-cairns-2026-11-16.csv`. Volumes differ a little from
the 11 October Keyword table (cabinet makers cairns 210 here and in October;
kitchen renovations cairns 90 against 110) because Google Ads moves month to
month. Top 3 counts are referring main domains.

| job | city volume | top 3 domains | small specialist under 100 RD in top 3? | difficulty | winnable | intended page |
|---|---|---|---|---|---|---|
| cabinet makers cairns / cabinet makers cairns qld | 210 | ccwcabinetworks.com.au 91, pro-fitcabinetmaking.com.au 50, independentcabinetmaker.com.au 46 | yes, all three | 0 | yes | index.html |
| kitchen renovations cairns | 90 | brianlongcabinets.com.au 117, lazaruscc.com.au 60, dreamdoorskitchens.com.au 292 | yes (lazaruscc 60) | 0 | yes | kitchen-renovations-cairns.html |
| kitchens cairns / kitchens cairns qld | 70 | cairnskitchens.com.au 54, pro-flatpacks.com.au 45, kilfoycabinets.com.au 96 | yes, all three | 0 | yes | kitchen-renovations-cairns.html |
| custom wardrobes cairns / cairns custom wardrobes | 80 | homeadvice.com.au 73, Yellow Pages, Instagram | no: homeadvice.com.au is a listings site ("Find Joinery & Cabinet Makers", editorial "Top 10" lists of other businesses, read 16 November 2026), not a specialist, so all three are directories. The scan counted it as a business | 0 | no (b) [an all-directory page 1 can be an opening; Brad chose to plan a page on 16 November 2026] [VERIFY: October's SERP read named a local business "Cairns Custom Wardrobes" in the map pack, so part of this 80 may be people searching for that business by name] | built-in-wardrobes-cairns.html (Brad, 16 November 2026) |
| bathroom vanities cairns | 50 | eaglesplumbing.com.au 237, kilfoycabinets.com.au 96, idealbathroomcentre.com.au 240 | yes (kilfoy 96) | 0 | yes, narrowly; two of three are bathroomware retailers, so most of these searchers may want a vanity off the shelf | no page yet; Brad to decide |
| kitchen benchtops cairns | 20 | customstonesurfaces.com.au 36, marbleandgranitefitters.com.au 60, nqacrylicandstone.com.au 100 | yes; all stonemasons | 0 | yes | section on kitchen-renovations-cairns.html (stonemason segment) |
| stone benchtops cairns | 20 | marbleandgranitefitters.com.au 60, nqacrylicandstone.com.au 100, cdkstone.com.au 742 | yes; stonemasons | 0 | yes | section on kitchen-renovations-cairns.html (stonemason segment) |
| wardrobes cairns | 90 | Localsearch, AussieWeb, Pinterest | no, directories only | 0 | no (b) [an all-directory page 1 can be an opening; Brad chose to plan a page on 16 November 2026] | built-in-wardrobes-cairns.html |
| kitchen cabinets cairns | 40 | Yelp, Instagram, hipages | no, directories only | 0 | no (b) [an all-directory page 1 can be an opening; Brad to judge] | kitchen-renovations-cairns.html |
| flat pack kitchens cairns | 20 | MapQuest, Localsearch, MapQuest | no, directories only | 0 | no (b) | section on kitchen-renovations-cairns.html (DIY intent) |
| cabinets cairns | 20 | not read | not read | 36 | no (c) | index.html |
| benchtops cairns | 20 | not read (scan limit of 12 page 1 reads) | not read | 0 | no: not read, counted as no until read | section on kitchen-renovations-cairns.html |
| wardrobe doors cairns | 20 | not read (scan limit) | not read | 11 | no: not read, counted as no until read | built-in-wardrobes-cairns.html |
| kitchen warehouse cairns | 70 | Facebook, a restaurant storefront, MapQuest | passes the test | 12 | no: a cookware shop's name, not a job | no page |
| pacific kitchens cairns | 50 | kilfoycabinets.com.au 96, cabinetdesignsolutions.com.au 48, MapQuest | passes the test | 0 | no: a business's name, not a job | no page |
| robins kitchen cairns central | 50 | a place-listing site, Localsearch, Facebook | passes the test | 0 | no: a cookware shop's name, not a job | no page |
| distinction joinery cairns, ek kitchens cairns | 20 each | not read | not read | 14 / not shown | no: business names, not jobs | no page |
| 31 jobs at 10 a month (built in wardrobes, joinery, entertainment units, shopfitting, kitchen designs, granite and laminate benchtops, cabinet makers atherton, kitchen makers, and business names such as ccw kitchens, kilfoy kitchens, lazarus cabinets) | 10 each | not read | not read | 0 to 42 | no (a) | no page; sections where the October table already places them |

Totals: Winnable jobs: 6. Searches a month: 460 (210 + 90 + 70 + 50 + 20 + 20). Estimated monthly value: $3,220,000 (460 searches x $7,000 job value from the Niches tab; a ceiling that assumes every search is a job, for comparison between sites only, not a forecast). The scan's own count was 10 jobs and 710 searches: three shop and business names are taken out by hand, and custom wardrobes cairns (80) is taken out because its top result, homeadvice.com.au, is a listings site the scan counted as a business (corrected 16 November 2026; first written as 7 jobs and 540). Of the 6, vanities (50) carries an intent question and gets no page, and two (benchtops) belong to stonemasons, so the cabinet-maker core is 3 jobs and 370 searches, all three already with a page. Wardrobes passes no test on its own: its two searches (custom wardrobes cairns 80, wardrobes cairns 90) both have all-directory page 1s, which Brad chose to treat as an opening on 16 November 2026.

## Winnability reference

There is no pass mark (Brad, 14 Nov 2026). Read the totals above against the
existing sites. Copied from the template's reference table of 14 November
2026; not re-measured here.

| site | winnable jobs | outcome at 14 Nov 2026 (site age) |
|---|---|---|
| Perth Limestone | 10+ (backtest) | avg position 24.9, 8 leads a month (day 102) |
| Perth Brickwork | 10+ (backtest) | avg position 48.6, 5 leads a month (day 103) |
| Cairns Cabinet Makers | about 5 (backtest, narrow pass); 6 by the 16 November 2026 scan | avg position 69.3, no leads yet (day 32) |
| Gold Coast Cabinet Makers | fails on the head term, passes on suburb and kitchen terms | avg position 66.7, no leads yet (day 20) |
| Perth Tiling Specialists | head terms held by directories | avg position 74.4, no leads (day 63) |
| Canberra Tile Layers | head terms held by directories; volumes mostly 10 or fewer | avg position 70.9, no leads (day 75) |

## Competitor gaps

T05. What none of the top three publish.

Home pages of fnqkitchens.com.au, cairnskitchens.com.au and
kilfoycabinets.com.au were fetched on 11 October 2026. artizancabinets.com.au
did not resolve.

- None publish prices or cost ranges.
- None describe the process or a timeline. FNQ Kitchens says only that an
  estimate arrives within 24 hours.
- None say anything about materials for the Far North Queensland climate:
  humidity, moisture-resistant board, edging or hardware. Only supplier logos.
- None name a service area beyond Cairns.
- FNQ Kitchens ranks #1 on two queries with about five thin pages, no
  testimonials, and a ranking page titled "Contact". Cairns Specialized
  Cabinets has about nine thin pages and publishes no address.
- QBCC numbers are shown by FNQ Kitchens and Kilfoy, not by Cairns Specialized
  Cabinets.

The gap: the questions a kitchen buyer asks before calling (what it costs, how
long it takes, what holds up in tropical humidity, who is licensed) are not
answered by anyone on page 1. Every such claim needs a real source under R2
and R10 before it is written.

## Commercial thesis

T05. One paragraph. **Must cite rows from the SERP ownership table above.** A
thesis resting on CPC alone is not done: high CPC on a remedial term can be
plumbers and leak detection bidding, not the trade this site serves.

"cabinet makers cairns" (210 a month located in Cairns) carries no ads, and its
top nine are four hipages pages, a Localsearch page, two Facebook pages and two
specialist sites with 26 and 57 referring domains, the first of which ranks
with a page titled "Contact". "kitchen renovations cairns" (110 a month) is
held by the same cabinet makers, at 26 to 35 referring domains, above four
Facebook threads. A two-page site, home plus kitchens, that answers the cost,
process and climate questions no page-1 competitor answers can plausibly reach
the top three on both, for about 520 local searches a month on custom-kitchen
jobs that are likely in the tens of thousands (a Sydney benchmark of $15,000
to $40,000; no Cairns figure found yet). "kitchens cairns" is the slower win,
with a bar of 35 to 89. The weakness is the paid market: zero ads on all six
queries and $2 to $3 CPC on the head term, so there is no evidence that anyone
pays for these clicks, and the renter pitch rests on job value alone.

## Renter evidence

T05. Named businesses seen paying for leads, and the count.

Paying for leads, observed in the 11 October 2026 SERP pull: two cabinet makers
appear as hipages profile pages ranking for "cabinet makers cairns" (ONG
Custom Cabinets at #5, Darrell James Baker at #8), which means they are listed
on a paid lead marketplace. Oneflare's Cairns cabinet makers page lists 4
businesses with 13 reviews (web search, 11 October 2026). Nobody is buying
Google Ads: zero ads on all six queries.

Visible in the local pack or on page 1 but not ranking well organically, so
plausible renters: Forged Kitchen Cabinetry, PRO-fit Cabinetmaking, Cairns
Assembled Cabinets, Style Line Cabinets, EK Design Kitchens, M&M Cabinets
(Facebook page only), ONG Custom Cabinets, Artizan Cabinets, Kilfoy Cabinets,
Pacific Kitchens. Count: 10 named.

## Remote-execution verdict

T01. Either the link phases can be executed from here, or the ceiling is
accepted knowingly.

Accepted by Brad with the GO, 11 October 2026: the head term's bar (26 to 57 referring
domains) and kitchen renovations' (26 to 35) are within reach of
remotely-executable links such as citations, directories and content assets.
"kitchens cairns" (35 to 89, with franchise domains in the 90 to 270 range) may
need supplier or local links that do not work remotely, and that ceiling is
accepted knowingly. The local pack, and so "near me", is out of reach without a
Google Business Profile, which needs the renter's address.

## Data files

T02, T04. Every pull lands here as a file in `build/data/`, with the command
that produced it. G2 fails if a file listed here is missing from disk.

Commands were run from `C:\Users\bjdac\dfseo` with the input files copied
alongside here as `build/data/keywords.txt`, `serp-queries.txt` and
`refdomains-targets.txt`. `volume_adhoc.py` was fixed on 11 October 2026 to skip
`#` comment lines.

| file | command that produced it | date |
|---|---|---|
| build/data/volume-cairns-2026-10-11.csv | `python volume_adhoc.py --keywords cairns_cabinet_makers.txt --locations "Cairns,Queensland,Australia" --output cairns_cabinet_local.csv --yes` | 2026-10-11 |
| build/data/volume-australia-2026-10-11.csv | `python volume_adhoc.py --keywords cairns_cabinet_makers.txt --locations "Australia" --output cairns_cabinet_national.csv --yes` | 2026-10-11 |
| build/data/serp-cairns-2026-10-11.csv | `python serp_adhoc.py --queries cairns_serp.txt --location "Cairns,Queensland,Australia" --output cairns_serp.csv --yes` | 2026-10-11 |
| build/data/refdomains-2026-10-11.csv | `python refdomains_adhoc.py --domains domains_cairns_cabinet.txt --output refdomains_cairns_cabinet.csv --yes` | 2026-10-11 |
| build/data/volume-wollongong-concreting-2026-10-11.csv | `python volume_adhoc.py --keywords wollongong_concreting.txt --locations "Wollongong,New South Wales,Australia" --yes` (runner-up evidence) | 2026-10-11 |
| build/data/niche-scan-cairns-2026-11-16.csv | Niches tab, Cabinet Makers / Cairns, Scan again (admin-action niche_scan_start, version 39), exported from niche_jobs with `supabase db query --linked -o csv` | 2026-11-16 |

## Future niche log

Segments found that belong to a different trade, so they are not rediscovered
next build.

- Wardrobes, Cairns: 90 a month, SERP held by Bunnings and DIY retail, with
  wardrobe specialists (Wardrobe World Cairns, Cairns Custom Wardrobes) in the
  local pack.
- Bathroom vanities, Cairns: 70 a month, retail bathroomware (Reece, Tradelink,
  Highgrove, Beaumont Tiles).
- Stone benchtops, Cairns: 30 a month, likely stonemasons. SERP not read.
- Shopfitting, Cairns: 10 a month, commercial. SERP not read.
- Concreting, Wollongong: parked candidate, see Candidates considered.
