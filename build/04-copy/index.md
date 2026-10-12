# Home: /

Status: APPROVED | v1, Brad, 13 October 2026

## Head

| field | value |
|---|---|
| file | index.html |
| title | Cabinet Makers Cairns \| Kitchens, Wardrobes, Joinery |
| meta | Looking for a cabinet maker in Cairns? Tell us about your kitchen, wardrobe or joinery job and we will pass it to a local cabinet maker who can quote it. |
| h1 | Find a Cabinet Maker in Cairns for Kitchens, Wardrobes and Joinery |

## Blocks

Hero sub-headline (`pages.home.subheadline`):

Tell us what you want built, and we pass your enquiry to a local cabinet maker who can quote the job.

Hero image: `images/home-hero-kitchen.jpg`, T23 and T24. Alt text is written at T24 and describes an illustrated kitchen, not work we did.

1. `h2`: Start with what you actually need

2. `p`: Most people looking for a cabinet maker in Cairns are in one of three situations. They are different jobs, and working out which one you are in makes the quote more useful.

3. `h3`: You are renovating a kitchen

4. `p`: New cabinets, a new layout, a new benchtop, or all three. Kitchens are the biggest cabinet job in most homes, and the quote depends on the layout, the materials and what has to be removed first. [Kitchen renovations in Cairns](kitchen-renovations-cairns.html)

5. `h3`: You want storage built to fit a room

6. `p`: Built-in wardrobes, a laundry, shelving or an entertainment unit. These are made to the size of the space, so the cabinet maker will want to measure before quoting.

7. `h3`: You are not sure what you need yet

8. `p`: Describe the room and what is not working. A cabinet maker can say whether it is a kitchen job, a joinery job, or something smaller, and the form below takes as much or as little detail as you have.

9. `h2`: What we can get quoted

10. `p`: **Kitchens.** New cabinets, a full renovation, or replacing doors and benchtops. More on [kitchen renovations in Cairns](kitchen-renovations-cairns.html).

11. `p`: **Wardrobes and built-in storage.** Built-in robes, walk-in layouts and bedroom storage, made to fit the room.

12. `p`: **Laundries and other joinery.** Laundry cabinets, shelving, entertainment units and other custom pieces.

13. `p`: **Small jobs.** A replacement door, a drawer that no longer runs, a shelf that needs adding. Small jobs are harder to get quoted than large ones, so it helps to be specific about what you need.

14. `h2`: What a good quote covers

15. `p`: Quotes for the same job can differ because they cover different things. Whoever you hear from, it is worth asking:

16. `ul`:
    - What is included: the cabinets, the benchtop, removal of the old kitchen, installation
    - What the cabinets are made of, and whether the edges are sealed
    - Who supplies and fits anything that is not the cabinets, such as the benchtop or appliances
    - What happens if the job changes once work has started
    - Their QBCC licence number, and whether the job needs a written contract

17. `p`: The detail on contracts, deposits and licensing is on the [kitchen renovations](kitchen-renovations-cairns.html) page.

18. `h2`: Where we cover

19. `p`: Cairns and the surrounding area, including Smithfield, Atherton and Innisfail. If you are somewhere else in Far North Queensland, tell us where, and we will say straight away whether we can find someone.

20. `h2`: What to include when you enquire

21. `p`: The more specific you are, the more useful the quote. Worth including:

22. `ul`:
    - The room, and roughly how big it is
    - Whether it is new work, a replacement or a repair
    - Whether you have a layout or drawings, or just an idea
    - What you want it made of, if you have a view
    - Anything unusual about access, timing or the state of the room

23. `p`: You will not know all of it, and that is fine. A cabinet maker will want to see the room before pricing it properly.

24. `h2`: Common questions

25. `faqs`:
    - Q: Is a custom kitchen different from a flat-pack kitchen? A: Flat-pack cabinets come in standard sizes and are assembled and fitted from parts. Custom cabinets are made to the size of your room. Which suits you depends on the room, the layout and the budget, and a cabinet maker can tell you where each makes sense. More on [kitchen renovations in Cairns](kitchen-renovations-cairns.html).
    - Q: Does the cabinet maker need a licence? A: In Queensland, building work valued over $3,300 needs a QBCC licence. Ask for the licence number before you agree to anything, and check it with the QBCC. The details are on the [kitchen renovations](kitchen-renovations-cairns.html) page.
    - Q: Do you publish prices? A: No. What a job costs depends on the size of the room, the layout, the materials and the benchtop, so a figure here would not be your figure. The cabinet maker prices it after seeing the room.
    - Q: What happens when I send an enquiry? A: Your details go to a local cabinet maker who can quote the job, and they contact you directly. The cabinet maker pays for the enquiry and you do not. The [About page](about.html) has the full account.

26. `h2`: Get a cabinet quote

27. `p`: Tell us the room and what you want built. We will pass it to a local cabinet maker who can quote it.

28. `form` (no `presetService`, so the job picker shows; the picker's options come from `contact.jobTypes` once the T25 engine change is made)

Collection notice above the form is `contact.reassurance`, held in `build/02-constants.md`. It is not repeated here.

## Changes from plan

- The plan's cannibalisation map gives Home "a short outline of how a cabinet job runs". That outline is not written. Its source claim, the typical sequence and timing of a kitchen job (register row 5), was dropped at T20 because no peak body or government source exists. In its place Home carries "What a good quote covers", which is advice and states no sequence or duration. The kitchens page does the same.
- Titles, meta and H1 match `build/03-plan.md`.

## Markers outstanding

None.

## Operator notes

Live as `/* TODO (Brad) */` comments in `config.js`:

- "Smithfield, Atherton and Innisfail" are named in copy only. No area pages (plan, Inventory). Do not add a suburb list.
- Every claim on this page is advice or one of the sourced rows (1 and 2 in the plan's claim register). Do not add a duration, a price, a "licensed" statement or a years claim.
- The licence statement shown in the footer (`licence.preRenterStatement`) is separate from this copy, and G11 governs it. This page does not repeat it.

## Decisions locked on this page

- Enquiry-flow wording stays in the present tense: enquiries are passed to a local cabinet maker who can quote the job, and the cabinet maker pays for the enquiry. See PLAYBOOK.md Appendix A, R11. Do not soften it and do not reopen it.
- No "free quote" and no response-time promise anywhere: the site does not quote, and nothing backs a promise. Brad, 13 October 2026.
