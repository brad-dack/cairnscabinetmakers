# <page name>: <route>

Status: DRAFT v1 | [NEEDS INPUT: APPROVED with Brad's date at T22]

One file per page, named for its route, for example `floor-tiling-perth.md`
or `index.md`. Copy this file, do not edit it. Written by T21, approved at
T22, transcribed into `config.js` at T25. See PLAYBOOK.md.

**G5 fails `--check` while any page in `config.js` has no approved copy file,
or while a Head table here disagrees with `config.js`.**

## Head

Must match `build/03-plan.md` or list the difference under Changes from plan.

| field | value |
|---|---|
| file | [NEEDS INPUT: e.g. index.html] |
| title | [NEEDS INPUT] |
| meta | [NEEDS INPUT] |
| h1 | [NEEDS INPUT] |

## Blocks

Ordered. Label every block with the `config.js` block type it becomes: `lead`,
`p`, `h2`, `h3`, `ul`, `ol`, `table`, `note`, `credit`, `faqs`, `form`,
`marker`. Anything unsourced stays a `marker` or a `[VERIFY: ...]` token until
T20 clears it. See PLAYBOOK.md rules R8 and R9.

[NEEDS INPUT: the page copy, block by block]

## Changes from plan

Any difference from `build/03-plan.md`, with the reason. A meta rewritten
during drafting is a change, and it needs re-approval at T22.

[NEEDS INPUT: or "none"]

## Markers outstanding

Count, then the list. Resolved per page as the page is finished, never batched
to the end of the build.

[NEEDS INPUT: count and list, or "none"]

## Operator notes

Everything here becomes a `/* TODO (Brad): ... */` code comment at T25.
**Nothing here reaches public copy.** Every string value in `config.js`
renders to the site, so a note left in a `note` or `p` block ships. See
PLAYBOOK.md rule R9.

[NEEDS INPUT: or "none"]

## Decisions locked on this page

Decisions already made that a later session must not relitigate, each with its
date. For example: "enquiry-flow wording stays present tense, Brad, 18
September 2026. Do not reopen."

[NEEDS INPUT: or "none"]
