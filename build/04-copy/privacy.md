# Privacy: /privacy

Status: DRAFT v1 | [NEEDS INPUT: APPROVED with Brad's date at T22]

## Head

| field | value |
|---|---|
| file | privacy.html |
| title | Privacy Policy \| Cairns Cabinet Makers |
| meta | What Cairns Cabinet Makers collects when you make an enquiry or call, who your details go to, how long they are kept, and how to have them removed. |
| h1 | Privacy Policy |

## Blocks

Standing position: PLAYBOOK.md Appendix A, R3. This page implements it and does not restate or reopen it. It follows the Perth Tiling Specialists privacy page, which Brad approved as live on 5 October 2026, with the trade, the storage regions and the retention rule taken from `build/02-constants.md`.

`pages.privacy.lastUpdated` is "13 October 2026" and renders as the first line.

1. `h2`: Who this covers

2. `p`: This policy applies to Cairns Cabinet Makers (ABN 78 538 005 810), run by Brad as a sole trader, and to information collected through this website and its phone number.

3. `h2`: What we collect

4. `p`: When you send an enquiry through the form, we collect:

5. `ul`:
    - Your name
    - Your phone number
    - Your suburb
    - The type of job
    - Anything you tell us about the job

6. `p`: When you email us, we collect your email address and whatever you send, including any photos of the job.

7. `p`: When you call the number on this site, we collect your phone number and the time and length of the call. Calls are not answered live. They go to voicemail, and if you leave a message it is recorded and stored so that it can be passed on and acted on. Voicemails are not transcribed. Recordings are kept for up to twelve months and then deleted, though a record that the call happened is kept for our own accounting.

8. `p`: When you visit the site, standard analytics data is collected, including pages visited, approximate location derived from your IP address, device type and how you arrived at the site.

9. `h2`: Why we collect it

10. `p`: To pass your enquiry to a cabinet maker who can quote the job, and to respond to you about that enquiry.

11. `p`: Enquiries are also used in aggregate, without names or contact details, to understand what kinds of jobs people are asking about, so the site can be improved.

12. `h2`: Who we share it with

13. `p`: **The cabinet maker.** Where we have a cabinet maker covering that type of work in your area, your enquiry details go to them so they can contact you about the job. The cabinet maker pays for the enquiry. Your job is not sent to multiple businesses. Where we do not have a cabinet maker for your area, we will tell you rather than pass your details anywhere. Once a cabinet maker has your details, how they handle them is their responsibility.

14. `p`: **Service providers.** The site uses third party services that process data on our behalf. The enquiry form submits directly to our own system rather than to a third party form service. That system is hosted by Supabase in Tokyo, Japan, and that is where your details are stored. A Cloudflare Turnstile check runs in your browser first to filter out automated spam. Calls and voicemails are handled by Twilio. Enquiries are sent on to the cabinet maker by email through Resend. Cloudflare handles this site's DNS and email routing, the site itself is hosted on GitHub Pages, and Google Analytics is used to understand how the site is used. Each of these is a large international provider, each may store or process data outside Australia, and each publishes its own privacy policy describing how it handles data.

15. `p`: **What we do not do.** We do not sell your information. We do not add you to a marketing list. We do not share your details with advertisers, data brokers, or any business other than the cabinet maker handling your enquiry.

16. `h2`: How long we keep it

17. `p`: Enquiry details and call records are kept only as long as needed to handle the enquiry and to run the site, and for a reasonable period afterwards for our own records. Voicemail recordings and email attachments are deleted after twelve months, though the record of the enquiry itself is kept for our own accounting. Analytics data is kept for fourteen months. If you would like your details removed sooner, contact us and we will remove them.

18. `h2`: Where it is stored

19. `p`: Enquiry details, call records and voicemail recordings are kept in our own system, which is hosted by Supabase in Tokyo, Japan. The other services listed under "Who we share it with" may also store or process data outside Australia, and each publishes its own privacy policy describing how.

20. `h2`: Cookies and analytics

21. `p`: This site uses Google Analytics to understand how visitors find and use it, for example which pages are viewed. Google Analytics uses cookies and collects usage data such as general location and device type. It does not see anything typed into the enquiry form. You can block cookies in your browser settings and the site still works.

22. `p`: Cloudflare Turnstile may set a token while you are using the enquiry form. It is there to keep spam out.

23. `h2`: Accessing or deleting your information

24. `p`: You can ask us what information we hold about you, ask for it to be corrected, or ask for it to be deleted. Contact us at hello@cairnscabinetmakers.com.au.

25. `p`: If your enquiry has already gone to a cabinet maker, we can delete our copy, but you would need to ask the cabinet maker about theirs. We will tell you who they are so you can.

26. `h2`: Complaints

27. `p`: If you are unhappy with how we have handled your information, contact us first at hello@cairnscabinetmakers.com.au.

28. `p`: If you are not satisfied with our response, you can contact the Office of the Australian Information Commissioner at [oaic.gov.au](https://www.oaic.gov.au).

29. `h2`: Changes

30. `p`: We may update this policy. The current version is always the one on this page, with the date it was last updated at the top.

31. `h2`: Contact

32. `p`: Cairns Cabinet Makers. Phone: (07) 4028 4041. Email: hello@cairnscabinetmakers.com.au.

## Changes from plan

- Titles, meta and H1 match `build/03-plan.md`.
- The Perth page says "Voicemail recordings are deleted after twelve months". This page also names email attachments, which the `prune-storage` function deletes on the same schedule (`rank-and-rent-backend/README.md`, Storage lifecycle), and gives the GA4 retention as fourteen months (set 12 October 2026). Both come from `build/02-constants.md` Infrastructure.

## Markers outstanding

None.

## Operator notes

Live as `/* TODO (Brad) */` comments in `config.js`:

- This page and the About page's "Your details" section move together.
- The storage claims (Supabase in Tokyo, 12-month deletion) are read from `build/02-constants.md`. If the retention rule or a region changes, change this page and that file together.
- R3 is not reopened here. The page does not mention the small business exemption or consent in legal terms; it states the data flow plainly, which is what makes the consent informed.
- Resend sends from Tokyo (apne1). The page says only that each provider "may store or process data outside Australia", as Perth does.
- The Supabase Tokyo claim was read from `supabase projects list` on 13 October 2026.

## Decisions locked on this page

- Standing privacy position, R3. Do not re-derive and do not reopen.
- The cabinet maker pays for the enquiry is stated here as well as on About and in the collection notices, in the present tense (R11).
