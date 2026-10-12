# About: /about

Status: APPROVED | v1, Brad, 13 October 2026

## Head

| field | value |
|---|---|
| file | about.html |
| title | About Cairns Cabinet Makers \| How This Site Works |
| meta | What Cairns Cabinet Makers is, the area we cover, what happens when you enquire, how the service is paid for, and how to get in touch. |
| h1 | About Cairns Cabinet Makers |

## Blocks

1. `h2`: Who runs this

2. `p`: Cairns Cabinet Makers is run by Brad, trading as Cairns Cabinet Makers. ABN 78 538 005 810. I run this website and I am a sole trader.

3. `h2`: What this site does

4. `p`: This is a referral site. You tell us about a kitchen, wardrobe or joinery job, and we pass your enquiry to a local cabinet maker who can quote it. The cabinet maker then contacts you directly.

5. `h2`: What we do not do

6. `p`: We do not make cabinets, install them or quote for them. We do not publish prices, because a price depends on the room and only the cabinet maker can see the room. If you are asking whether a job can be done or what it will cost, that is a question for the cabinet maker who receives your enquiry.

7. `h2`: What happens after you enquire

8. `p`: Your enquiry goes to a local cabinet maker who can quote the job. They contact you directly to talk through what you want, and usually to arrange a time to see the room. If we do not have a cabinet maker for your area or your kind of job, we will tell you rather than pass your details anywhere.

9. `p`: A renovation is often a larger job than a single piece of joinery. The cabinet maker will tell you if your enquiry is outside what they do.

10. `h2`: Your details

11. `p`: When you send an enquiry we collect your name, your phone number, your suburb and what you want done. We pass these to the cabinet maker so they can contact you about the job. We do not sell them, and we do not add you to a marketing list. The [privacy policy](privacy.html) has the full account, including who else handles your details and how long they are kept.

12. `h2`: How the service is paid for

13. `p`: The cabinet maker who receives your enquiry pays for it. You do not pay anything to send an enquiry, and we do not take a cut of the work. A cabinet maker who pays for enquiries has a reason to look at yours.

14. `h2`: Where we cover

15. `p`: Cairns and the surrounding area, including Smithfield, Atherton and Innisfail. If you are somewhere else in Far North Queensland, tell us where and we will say straight away whether we can find someone.

16. `h2`: Contact

17. `p`: Phone: (07) 4028 4041. Calls are not answered live. They go to voicemail, and if you leave a message it is recorded and passed on with your enquiry. Email: hello@cairnscabinetmakers.com.au.

18. `h2`: Send an enquiry (`#quote`)

19. `p`: Tell us the room, roughly how big it is, and what you want built.

20. `form`: no `presetService`; the job picker shows, from `contact.jobTypes`. The collection notice above the form is `contact.reassurance`.

## Changes from plan

- Titles, meta and H1 match `build/03-plan.md`.

## Markers outstanding

None.

## Operator notes

Live as `/* TODO (Brad) */` comments in `config.js`:

- Every sentence in "Who runs this" must be true of Brad specifically. If any is not, cut it rather than soften it. Nothing about years, volumes or numbers of clients, and nothing about other businesses.
- "Calls are not answered live" is true while no renter is attached. When a renter is signed and calls forward, change this line and the voicemail greeting together.
- "We do not take a cut" is the commercial disclosure in the Positioning claim restrictions. It stays true only while the model is a flat payment for enquiries (R3, and its note on per-lead pricing).
- "Your details" is kept in step with the privacy page's "Why we collect it" and "Who we share it with". The privacy page is the fuller disclosure. If either changes, change both.
- The phone and email lines in Contact follow `business.phone`, `business.phoneDisplay` and `business.email` in `config.js`; change them there first.
- The licence statement shown in the footer is separate from this page (`licence.preRenterStatement`).

## Decisions locked on this page

- Enquiry-flow wording stays in the present tense. See PLAYBOOK.md Appendix A, R11.
- The named individual is deliberate (Positioning voice rule, Brad, 13 October 2026).
- No "free quote" anywhere: this site does not quote.
