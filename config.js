/* =============================================================================
   SITE CONFIG — the ONLY file you edit when swapping niche/city.
   Every page on the site reads from this object at load time.
   Placeholder content below is for a generic "home services" example.
   =============================================================================
   QUICK-SWAP CHECKLIST (see README.md for details):
   1. business: name, city, state, serviceArea. phone/email/hours ship EMPTY
      on purpose — see "Unset config degrades to absent" in README. Add them
      when you have a real number/inbox/hours to publish.
   2. domain — bake.js regenerates CNAME, robots.txt, and sitemap.xml from it
   3. brand colors + theme (style/pattern — makes each site look different)
   4. ga4Id — REQUIRED before launch: analytics + call tracking stay OFF
      while the X placeholder is in place
   5. ingestUrl / ingestSecret — REQUIRED before launch: the form cannot
      deliver leads until these are real values. turnstileSiteKey alongside
      them, or the form ships with no spam protection.
   6. schema.type — stays "Organization" until a renter's real premises/
      hours exist. See "Schema: Organization until a renter exists" in
      README before ever changing this.
   7. services (3–5) — each is an ordered array of content BLOCKS (see the
      block-type reference in README), plus its own page filename — make it
      a keyword URL, not a numbered stub.
   8. areas (0+) — optional suburb/area pages, ships empty. See README:
      only add these once the core pages are live and genuinely different
      content exists per area.
   9. about.faqs, howItWorks, about.paragraphs, page titles/descriptions,
      contact.fields
   Then run:  node bake.js          (regenerates pages + CNAME/robots/
                                     sitemap/404/favicon)
              node bake.js --check  (preflight: fails loudly on leftover
                                     placeholders, unresolved { marker }
                                     blocks, and broken references)
============================================================================= */

window.SITE_CONFIG = {

  /* --- Core business identity ---------------------------------------------
     phone / phoneDisplay / email / hours ship EMPTY. This is deliberate,
     not an oversight: with no renter attached yet, a fake phone number
     would be worse than no phone number — it looks live but reaches no
     one. Every consumer of these fields (header, hero, footer, about,
     404 page, schema, the form's error fallback) omits the corresponding
     UI element while the field is empty, rather than rendering something
     broken. Fill them in only once there's a real line to answer. */
  business: {
    name: "Cairns Cabinet Makers",
    phone: "+61740284041", // tel: link format, e.g. "+15551234567" — leave "" until real
    phoneDisplay: "(07) 4028 4041", // human-readable, e.g. "(555) 123-4567"
    email: "hello@cairnscabinetmakers.com.au", // leave "" until a real inbox exists
    city: "Cairns",
    state: "QLD",
    serviceArea: "Cairns and the surrounding area, including Smithfield, Atherton and Innisfail",
    hours: ""          // e.g. "Mon–Sat, 7am–7pm" — only once a renter has real hours
  },

  /* --- Trade licence display (licensed trades only) -----------------------
     QLD: QBCC Act s54 needs the licensee's name, the words "licensed under
     the QBCC Act" and the licence number on all advertising, and the QBCC
     counts websites. Leave holder and number EMPTY until a licensed renter
     is signed: with both empty nothing is rendered, so a pre-renter site
     shows no licence line at all. Once both are filled, the footer on every
     page carries them. Set required:true for a licensed trade; --check (G11)
     then fails if build/02-constants.md says the renter is signed and either
     value is missing, and fails if only one is filled or if a value is filled
     before a renter is signed. */
  licence: {
    required: true,
    holder: "",   // the renter's licensed name exactly as on the licence
    number: "",   // the renter's QBCC licence number
    /* Shown on every page while holder and number are empty (no renter yet),
       and removed once they are filled. The unlicensed-advertiser value
       statement the QBCC asks for: see build/03-plan.md claim register row 7. */
    preRenterStatement: "Cairns Cabinet Makers cannot perform building work valued in excess of $3,300. For work above that value, discuss it with the cabinet maker who quotes your job."
  },

  /* Used for canonical URLs, schema, and OG tags. No trailing slash.
     bake.js derives CNAME, robots.txt, and sitemap.xml from this — you
     never edit those files by hand. */
  domain: "https://cairnscabinetmakers.com.au",

  /* Build options (README "Build options"): this site uses extensionless routes
     and a nav built from services[]. */
  cleanUrls: true,
  navFromServices: true,

  /* --- Brand ----------------------------------------------------------- */
  brand: {
    color: "#8b5a2b",         // primary accent (buttons, links, highlights)
    colorDark: "#6b4421",     // hover/darker shade of the accent
    colorContrast: "#ffffff", // text color used ON the accent color

    /* Visual theme — pick a different combination per deployment so every
       site built from this template looks different. All tints, glows, and
       the footer color are derived automatically from `color` above.

       style   — the overall design personality:
         "classic" — clean and trustworthy; soft gradient hero
         "bold"    — full-color gradient hero, pill buttons, diagonal edge
         "soft"    — rounded everything, pale tinted sections, blob imagery
         "sharp"   — squared corners, offset shadows, uppercase headings
         "elegant" — serif display headings, thin rules, quiet and premium

       pattern — a subtle background texture on the hero and CTA band:
         "none" | "dots" | "grid" | "diagonal" | "crosshatch"              */
    style: "bold",
    pattern: "diagonal"
  },

  /* --- Tracking / integrations ----------------------------------------- */
  /* GA4 measurement ID. The snippet is only injected when this doesn't
     contain "XXXX", so the placeholder below keeps tracking OFF. */
  ga4Id: "G-NLFZQK7WFQ",

  /* Form leads POST straight to our own ingest endpoint, not to a third-party
     form service — see rank-and-rent-backend's docs/DASHBOARD_PLAN.md, Phase 2
     Stage B. ingestUrl is the endpoint, ingestSecret is the shared secret it
     checks (light abuse resistance + the site's identity), and
     turnstileSiteKey is the Cloudflare Turnstile key used for spam filtering.
     Whichever services host the endpoint receive enquiry data, so name them in
     the privacy policy copy (see privacyContentHtml in bake.js). */
  ingestUrl: "https://bnfgnglzswtrvzfqkgjh.functions.supabase.co/ingest-form",
  ingestSecret: "0eab12eb84b8ddff6014b83a179927bd",
  turnstileSiteKey: "0x4AAAAAAEHD1tLftcrbDXIx",

  /* --- Structured data ---------------------------------------------------
     Organization, sitewide, until a renter's real premises/hours exist —
     see "Schema: Organization until a renter exists" in README. No
     LocalBusiness subtype, no AggregateRating, no Review, no priceRange:
     a rank-and-rent site with nobody attached yet has no premises, no
     opening hours, no service counter, and no reviews, so those properties
     would all be invented. node bake.js --check greps the baked HTML for
     these terms and fails if they reappear while schema.type is
     "Organization". Upgrade schema.type to a real LocalBusiness subtype
     (e.g. "Plumber", "HomeAndConstructionBusiness" — see
     schema.org/LocalBusiness) only once a renter's real address, hours,
     and reviews are on the site. */
  schema: {
    type: "Organization",
    priceRange: "$$", // only used once schema.type is a LocalBusiness subtype
    /* Who actually researched and wrote the site's copy. Two uses: the
       `credit` byline on long-form pages, and a --check guard — the author's
       own name inside a `note` block is almost always them auditing their
       sourcing ("X knows this area firsthand") rather than something a reader
       needs. Leave empty to switch that guard off. */
    founder: ""
  },

  /* --- Homepage ---------------------------------------------------------- */
  pages: {
    home: {
      /* TODO (Brad): Home copy is build/04-copy/index.md, approved 13 Oct 2026.
         Smithfield, Atherton and Innisfail are named in copy only: no area
         pages, no suburb list. Every claim is advice or one of the sourced
         QBCC rows in build/03-plan.md. No duration, price, "licensed" or
         "free" wording. */
      metaTitle: "Cabinet Makers Cairns | Kitchens, Wardrobes, Joinery",
      metaDescription: "Looking for a cabinet maker in Cairns? Tell us about your kitchen, wardrobe or joinery job and we will pass it to a local cabinet maker who can quote it.",
      headline: "Cabinet Makers in Cairns for Kitchens, Wardrobes and Joinery",
      subheadline: "Tell us what you want built, and we pass it to a cabinet maker who can quote the job.",
      ctaText: "Get a cabinet quote",
      image: {
        "src": "images/home-hero-kitchen.jpg",
        "alt": "An illustrated modern kitchen with white cabinetry, a timber island and open shelving.",
        "width": 1200,
        "height": 800,
        "widths": [
          400,
          560,
          720,
          960
        ],
        "sizes": "(min-width: 900px) 450px, min(520px, calc(100vw - 40px))"
      },
      blocks: [
        {
          "type": "h2",
          "text": "Start with what you actually need"
        },
        {
          "type": "p",
          "text": "Most people looking for a cabinet maker in Cairns are in one of three situations. They are different jobs, and working out which one you are in makes the quote more useful."
        },
        {
          "type": "h3",
          "text": "You are renovating a kitchen"
        },
        {
          "type": "p",
          "text": "New cabinets, a new layout, a new benchtop, or all three. Kitchens are the biggest cabinet job in most homes, and the quote depends on the layout, the materials and what has to be removed first. [Kitchen renovations in Cairns](kitchen-renovations-cairns.html)"
        },
        {
          "type": "h3",
          "text": "You want storage built to fit a room"
        },
        {
          "type": "p",
          "text": "Built-in wardrobes, a laundry, shelving or an entertainment unit. These are made to the size of the space, so the cabinet maker will want to measure before quoting."
        },
        {
          "type": "h3",
          "text": "You are not sure what you need yet"
        },
        {
          "type": "p",
          "text": "Describe the room and what is not working. A cabinet maker can say whether it is a kitchen job, a joinery job, or something smaller, and the form below takes as much or as little detail as you have."
        },
        {
          "type": "h2",
          "text": "What we can get quoted"
        },
        {
          "type": "p",
          "text": "**Kitchens.** New cabinets, a full renovation, or replacing doors and benchtops. More on [kitchen renovations in Cairns](kitchen-renovations-cairns.html)."
        },
        {
          "type": "p",
          "text": "**Wardrobes and built-in storage.** Built-in robes, walk-in layouts and bedroom storage, made to fit the room."
        },
        {
          "type": "p",
          "text": "**Laundries and other joinery.** Laundry cabinets, shelving, entertainment units and other custom pieces."
        },
        {
          "type": "p",
          "text": "**Small jobs.** A replacement door, a drawer that no longer runs, a shelf that needs adding. Small jobs are harder to get quoted than large ones, so it helps to be specific about what you need."
        },
        {
          "type": "h2",
          "text": "What a good quote covers"
        },
        {
          "type": "p",
          "text": "Quotes for the same job can differ because they cover different things. Whoever you hear from, it is worth asking:"
        },
        {
          "type": "ul",
          "items": [
            "What is included: the cabinets, the benchtop, removal of the old kitchen, installation",
            "What the cabinets are made of, and whether the edges are sealed",
            "Who supplies and fits anything that is not the cabinets, such as the benchtop or appliances",
            "What happens if the job changes once work has started",
            "Their QBCC licence number, and whether the job needs a written contract"
          ]
        },
        {
          "type": "p",
          "text": "The detail on contracts, deposits and licensing is on the [kitchen renovations](kitchen-renovations-cairns.html) page."
        },
        {
          "type": "h2",
          "text": "Where we cover"
        },
        {
          "type": "p",
          "text": "Cairns and the surrounding area, including Smithfield, Atherton and Innisfail. If you are somewhere else in Far North Queensland, tell us where, and we will say straight away whether we can find someone."
        },
        {
          "type": "h2",
          "text": "What to include when you enquire"
        },
        {
          "type": "p",
          "text": "The more specific you are, the more useful the quote. Worth including:"
        },
        {
          "type": "ul",
          "items": [
            "The room, and roughly how big it is",
            "Whether it is new work, a replacement or a repair",
            "Whether you have a layout or drawings, or just an idea",
            "What you want it made of, if you have a view",
            "Anything unusual about access, timing or the state of the room"
          ]
        },
        {
          "type": "p",
          "text": "You will not know all of it, and that is fine. A cabinet maker will want to see the room before pricing it properly."
        },
        {
          "type": "h2",
          "text": "Common questions"
        },
        {
          "type": "faqs",
          "items": [
            {
              "q": "Is a custom kitchen different from a flat-pack kitchen?",
              "a": "Flat-pack cabinets come in standard sizes and are assembled and fitted from parts. Custom cabinets are made to the size of your room. Which suits you depends on the room, the layout and the budget, and a cabinet maker can tell you where each makes sense. More on [kitchen renovations in Cairns](kitchen-renovations-cairns.html)."
            },
            {
              "q": "Does the cabinet maker need a licence?",
              "a": "In Queensland, building work valued over $3,300 needs a QBCC licence. Ask for the licence number before you agree to anything, and check it with the QBCC. The details are on the [kitchen renovations](kitchen-renovations-cairns.html) page."
            },
            {
              "q": "Do you publish prices?",
              "a": "No. What a job costs depends on the size of the room, the layout, the materials and the benchtop, so a figure here would not be your figure. The cabinet maker prices it after seeing the room."
            },
            {
              "q": "What happens when I send an enquiry?",
              "a": "Your details go to a local cabinet maker who can quote the job, and they contact you directly. The cabinet maker pays for the enquiry and you do not. The [About page](about.html) has the full account."
            }
          ]
        },
        {
          "type": "h2",
          "text": "Get a cabinet quote"
        },
        {
          "type": "p",
          "text": "Tell us the room and what you want built. We will pass it to a local cabinet maker who can quote it."
        },
        {
          "type": "form"
        }
      ]
    },
    about: {
      /* TODO (Brad): About copy is build/04-copy/about.md, approved 13 Oct
         2026. Every sentence in "Who runs this" must be true of Brad
         personally; cut rather than soften. "Calls are not answered live" is
         true only while no renter is attached: change it with the voicemail
         greeting. "We do not take a cut" is the commercial disclosure and
         stays true only while the model is a flat payment for enquiries. */
      metaTitle: "About Cairns Cabinet Makers | How This Site Works",
      metaDescription: "What Cairns Cabinet Makers is, the area we cover, what happens when you enquire, how the service is paid for, and how to get in touch.",
      headline: "About Cairns Cabinet Makers",
      blocks: [
        {
          "type": "h2",
          "text": "Who runs this"
        },
        {
          "type": "p",
          "text": "Cairns Cabinet Makers is run by Brad, trading as Cairns Cabinet Makers. ABN 78 538 005 810. I run this website and I am a sole trader."
        },
        {
          "type": "h2",
          "text": "What this site does"
        },
        {
          "type": "p",
          "text": "This is a referral site. You tell us about a kitchen, wardrobe or joinery job, and we pass your enquiry to a local cabinet maker who can quote it. The cabinet maker then contacts you directly."
        },
        {
          "type": "h2",
          "text": "What we do not do"
        },
        {
          "type": "p",
          "text": "We do not make cabinets, install them or quote for them. We do not publish prices, because a price depends on the room and only the cabinet maker can see the room. If you are asking whether a job can be done or what it will cost, that is a question for the cabinet maker who receives your enquiry."
        },
        {
          "type": "h2",
          "text": "What happens after you enquire"
        },
        {
          "type": "p",
          "text": "Your enquiry goes to a local cabinet maker who can quote the job. They contact you directly to talk through what you want, and usually to arrange a time to see the room. If we do not have a cabinet maker for your area or your kind of job, we will tell you rather than pass your details anywhere."
        },
        {
          "type": "p",
          "text": "A renovation is often a larger job than a single piece of joinery. The cabinet maker will tell you if your enquiry is outside what they do."
        },
        {
          "type": "h2",
          "text": "Your details"
        },
        {
          "type": "p",
          "text": "When you send an enquiry we collect your name, your phone number, your suburb and what you want done. We pass these to the cabinet maker so they can contact you about the job. We do not sell them, and we do not add you to a marketing list. The [privacy policy](privacy.html) has the full account, including who else handles your details and how long they are kept."
        },
        {
          "type": "h2",
          "text": "How the service is paid for"
        },
        {
          "type": "p",
          "text": "The cabinet maker who receives your enquiry pays for it. You do not pay anything to send an enquiry, and we do not take a cut of the work. A cabinet maker who pays for enquiries has a reason to look at yours."
        },
        {
          "type": "h2",
          "text": "Where we cover"
        },
        {
          "type": "p",
          "text": "Cairns and the surrounding area, including Smithfield, Atherton and Innisfail. If you are somewhere else in Far North Queensland, tell us where and we will say straight away whether we can find someone."
        },
        {
          "type": "h2",
          "text": "Contact"
        },
        {
          "type": "p",
          "text": "Phone: (07) 4028 4041. Calls are not answered live. They go to voicemail, and if you leave a message it is recorded and passed on with your enquiry. Email: hello@cairnscabinetmakers.com.au."
        }
      ]
    },
    privacy: {
      /* TODO (Brad): Privacy copy is build/04-copy/privacy.md, approved 13 Oct
         2026. Standing position R3, not reopened. Moves with About's "Your
         details". Storage regions and retention come from
         build/02-constants.md: change both together. */
      metaTitle: "Privacy Policy | Cairns Cabinet Makers",
      metaDescription: "What Cairns Cabinet Makers collects when you make an enquiry or call, who your details go to, how long they are kept, and how to have them removed.",
      headline: "Privacy Policy",
      lastUpdated: "13 October 2026",
      blocks: [
        {
          "type": "h2",
          "text": "Who this covers"
        },
        {
          "type": "p",
          "text": "This policy applies to Cairns Cabinet Makers (ABN 78 538 005 810), run by Brad as a sole trader, and to information collected through this website and its phone number."
        },
        {
          "type": "h2",
          "text": "What we collect"
        },
        {
          "type": "p",
          "text": "When you send an enquiry through the form, we collect:"
        },
        {
          "type": "ul",
          "items": [
            "Your name",
            "Your phone number",
            "Your suburb",
            "The type of job",
            "Anything you tell us about the job"
          ]
        },
        {
          "type": "p",
          "text": "When you email us, we collect your email address and whatever you send, including any photos of the job."
        },
        {
          "type": "p",
          "text": "When you call the number on this site, we collect your phone number and the time and length of the call. Calls are not answered live. They go to voicemail, and if you leave a message it is recorded and stored so that it can be passed on and acted on. Voicemails are not transcribed. Recordings are kept for up to twelve months and then deleted, though a record that the call happened is kept for our own accounting."
        },
        {
          "type": "p",
          "text": "When you visit the site, standard analytics data is collected, including pages visited, approximate location derived from your IP address, device type and how you arrived at the site."
        },
        {
          "type": "h2",
          "text": "Why we collect it"
        },
        {
          "type": "p",
          "text": "To pass your enquiry to a cabinet maker who can quote the job, and to respond to you about that enquiry."
        },
        {
          "type": "p",
          "text": "Enquiries are also used in aggregate, without names or contact details, to understand what kinds of jobs people are asking about, so the site can be improved."
        },
        {
          "type": "h2",
          "text": "Who we share it with"
        },
        {
          "type": "p",
          "text": "**The cabinet maker.** Where we have a cabinet maker covering that type of work in your area, your enquiry details go to them so they can contact you about the job. The cabinet maker pays for the enquiry. Your job is not sent to multiple businesses. Where we do not have a cabinet maker for your area, we will tell you rather than pass your details anywhere. Once a cabinet maker has your details, how they handle them is their responsibility."
        },
        {
          "type": "p",
          "text": "**Service providers.** The site uses third party services that process data on our behalf. The enquiry form submits directly to our own system rather than to a third party form service. That system is hosted by Supabase in Tokyo, Japan, and that is where your details are stored. A Cloudflare Turnstile check runs in your browser first to filter out automated spam. Calls and voicemails are handled by Twilio. Enquiries are sent on to the cabinet maker by email through Resend. Cloudflare handles this site's DNS and email routing, the site itself is hosted on GitHub Pages, and Google Analytics is used to understand how the site is used. Each of these is a large international provider, each may store or process data outside Australia, and each publishes its own privacy policy describing how it handles data."
        },
        {
          "type": "p",
          "text": "**What we do not do.** We do not sell your information. We do not add you to a marketing list. We do not share your details with advertisers, data brokers, or any business other than the cabinet maker handling your enquiry."
        },
        {
          "type": "h2",
          "text": "How long we keep it"
        },
        {
          "type": "p",
          "text": "Enquiry details and call records are kept only as long as needed to handle the enquiry and to run the site, and for a reasonable period afterwards for our own records. Voicemail recordings and email attachments are deleted after twelve months, though the record of the enquiry itself is kept for our own accounting. Analytics data is kept for fourteen months. If you would like your details removed sooner, contact us and we will remove them."
        },
        {
          "type": "h2",
          "text": "Where it is stored"
        },
        {
          "type": "p",
          "text": "Enquiry details, call records and voicemail recordings are kept in our own system, which is hosted by Supabase in Tokyo, Japan. The other services listed under \"Who we share it with\" may also store or process data outside Australia, and each publishes its own privacy policy describing how."
        },
        {
          "type": "h2",
          "text": "Cookies and analytics"
        },
        {
          "type": "p",
          "text": "This site uses Google Analytics to understand how visitors find and use it, for example which pages are viewed. Google Analytics uses cookies and collects usage data such as general location and device type. It does not see anything typed into the enquiry form. You can block cookies in your browser settings and the site still works."
        },
        {
          "type": "p",
          "text": "Cloudflare Turnstile may set a token while you are using the enquiry form. It is there to keep spam out."
        },
        {
          "type": "h2",
          "text": "Accessing or deleting your information"
        },
        {
          "type": "p",
          "text": "You can ask us what information we hold about you, ask for it to be corrected, or ask for it to be deleted. Contact us at hello@cairnscabinetmakers.com.au."
        },
        {
          "type": "p",
          "text": "If your enquiry has already gone to a cabinet maker, we can delete our copy, but you would need to ask the cabinet maker about theirs. We will tell you who they are so you can."
        },
        {
          "type": "h2",
          "text": "Complaints"
        },
        {
          "type": "p",
          "text": "If you are unhappy with how we have handled your information, contact us first at hello@cairnscabinetmakers.com.au."
        },
        {
          "type": "p",
          "text": "If you are not satisfied with our response, you can contact the Office of the Australian Information Commissioner at [oaic.gov.au](https://www.oaic.gov.au)."
        },
        {
          "type": "h2",
          "text": "Changes"
        },
        {
          "type": "p",
          "text": "We may update this policy. The current version is always the one on this page, with the date it was last updated at the top."
        },
        {
          "type": "h2",
          "text": "Contact"
        },
        {
          "type": "p",
          "text": "Cairns Cabinet Makers. Phone: (07) 4028 4041. Email: hello@cairnscabinetmakers.com.au."
        }
      ]
    }
  },

  /* Value points shown under the hero on every page: none. Each stock line
     ("free quotes", "response within 24 hours") is banned here, and an honest
     replacement would repeat the page. */
  valueProps: [],

  /* How it works: not used on this build. The stock steps promise a response
     time and say "Get it done", and the engine no longer renders the section. */
  howItWorks: [],

  /* --- Services (3–5 entries) --------------------------------------------
     Each entry is an ordered array of typed content BLOCKS rather than a
     fixed card layout, so real copy — headings, tables, callouts, inline
     citations — fits without fighting the template. Block types:

       h2, h3      { type: "h2", text }              section headings
       p           { type: "p", text }                paragraph
       lead        { type: "lead", text }              larger intro paragraph
       ul, ol      { type: "ul", items: [...] }        list
       table       { type: "table", caption?, headers: [...], rows: [[...]] }
       note        { type: "note", text }              sourced callout/aside
       credit      { type: "credit", text }            small citation line
       marker      { type: "marker", text }             LOUD unfinished box —
                     node bake.js --check FAILS while any remain. Fill it
                     from a real source, or delete the claim it guards.
                     Never just delete the marker itself.
       faqs        { type: "faqs", items: [{q,a}] }    FAQPage schema for
                     this page is built from exactly the faqs blocks
                     present on it — never a separate global list.
       form        { type: "form", heading?, presetService?, extraField?,
                     placeholders? }                    embeds the quote
                     form inline on this page
       image       { type: "image", src, alt, width, height, caption? }
                     illustrative images carry NO caption (a caption
                     implies authorship of real work — see README)

     `text` supports **bold**, [label](url), and newlines — escaped first,
     so config copy can never inject HTML.

     Each entry maps to its own page via "page" — make this a keyword URL
     (e.g. "plumbing-repairs.html"), not a numbered stub. */
  services: [
    {
      /* TODO (Brad): copy is build/04-copy/kitchen-renovations-cairns.md,
         approved 13 Oct 2026. The "Before you sign" section rests on QBCC
         pages (claim rows 1, 2 and 4 in build/03-plan.md), not the Act:
         re-check them before launch. The humidity section is advice only:
         do not add a standard or a "withstands humidity" claim. No cost
         figure until a Cairns source is in the plan's Cost figures. */
      page: "kitchen-renovations-cairns.html",
      name: "Kitchens",
      shortDescription: "New cabinets, benchtops and layouts for Cairns kitchens",
      metaTitle: "Kitchen Renovations Cairns | Custom Kitchen Cabinets",
      metaDescription: "Kitchen renovations in Cairns: what a custom kitchen involves, how cabinets cope with tropical humidity, and how to get a Cairns cabinet maker to quote.",
      headline: "Kitchen Renovations in Cairns: Cabinets, Benchtops and Design",
      subheadline: "What to decide, what to ask and what to check before you agree to a kitchen renovation in Cairns.",
      ctaText: "Get a kitchen quote",
      image: {
        "src": "images/kitchen-renovations-cairns.jpg",
        "alt": "An illustrated modern kitchen with timber and grey cabinetry and a stone-look island benchtop.",
        "width": 1200,
        "height": 800,
        "widths": [
          400,
          560,
          720,
          960
        ],
        "sizes": "(min-width: 900px) 450px, min(520px, calc(100vw - 40px))"
      },
      blocks: [
        {
          "type": "lead",
          "text": "A kitchen renovation is mostly a set of decisions: the layout, what the cabinets are made of, what the benchtop is, and who does each part. This page sets out those decisions and the questions worth asking, so that the quotes you collect are quotes for the same job."
        },
        {
          "type": "h2",
          "text": "Start with the layout"
        },
        {
          "type": "p",
          "text": "The layout drives most of the quote. Keeping the sink, cooktop and fridge where they are is a smaller job than moving them, because moving services means more trades and more work behind the walls. Ask each cabinet maker to quote against the same layout, or to say clearly where theirs differs."
        },
        {
          "type": "p",
          "text": "A drawing of the proposed kitchen is worth asking for before you agree to anything. It is much cheaper to change a line on paper than a cabinet that has been made."
        },
        {
          "type": "h2",
          "text": "Custom or flat-pack"
        },
        {
          "type": "p",
          "text": "Flat-pack kitchens arrive as standard-sized cabinets in cartons and are assembled and fitted from parts. Custom kitchens are made to the size of your room, so they fit awkward corners and unusual wall lengths without filler panels. Flat-pack can suit a room that works with standard sizes, and custom suits a room that does not."
        },
        {
          "type": "p",
          "text": "Neither is better in every case. A cabinet maker can tell you which they would use for your room, and why."
        },
        {
          "type": "h2",
          "text": "Benchtops"
        },
        {
          "type": "p",
          "text": "The benchtop is a decision of its own: the material, the thickness, the edge, and the cut-outs for the sink and cooktop. Ask whether the quote includes the benchtop at all, and who is supplying and fitting it. Quotes that look different on price are sometimes the same job with the benchtop in one and out of the other."
        },
        {
          "type": "h2",
          "text": "Cabinets in a humid climate"
        },
        {
          "type": "p",
          "text": "Cairns is humid for much of the year, and kitchens are damp places even in dry climates. It is worth asking what the cabinets are made of rather than assuming. Questions to put to the cabinet maker:"
        },
        {
          "type": "ul",
          "items": [
            "What is the cabinet box made of, and is it a moisture-resistant grade?",
            "Are the cut and drilled edges sealed, including the edges that will not be seen?",
            "What are the hinges, runners and handles made of?",
            "Which cabinets sit under the sink or beside the dishwasher, and how is the material there protected?"
          ]
        },
        {
          "type": "p",
          "text": "Each of these is a question, not a rule. A good answer names a material and a method, and a vague answer is worth noticing."
        },
        {
          "type": "h2",
          "text": "The parts of a cabinet"
        },
        {
          "type": "p",
          "text": "A few terms come up in every quote. The diagram names them."
        },
        {
          "type": "image",
          "src": "images/kitchen-cabinet-parts.svg",
          "alt": "Diagram naming the parts of a kitchen base cabinet: benchtop, carcass, shelf, kickboard, hinge, door and edge.",
          "width": 1200,
          "height": 800
        },
        {
          "type": "h2",
          "text": "Before you sign"
        },
        {
          "type": "p",
          "text": "Queensland has specific rules for building work, and they apply to many kitchen renovations. These are the points the building regulator, the QBCC, sets out."
        },
        {
          "type": "p",
          "text": "**A licence.** Building work valued over $3,300 needs a QBCC licence. The QBCC has a Cabinet making licence class, which covers installing, refurbishing, restoring or repairing kitchen, bathroom, laundry and other fitted cabinets on site. Ask for the licence number before you agree to anything."
        },
        {
          "type": "p",
          "text": "**A written contract.** For work over $3,300 the QBCC says a written, dated and signed contract is essential, and that the contract must include advice about your right to a cooling-off period."
        },
        {
          "type": "p",
          "text": "**The deposit.** The most a contractor can ask for as a deposit depends on the price of the job. From $3,301 to $19,999 it is 10% of the contract price, and for more than $20,000 it is 5%. There is an exception of up to 20% where more than half the price is made-to-measure work done away from your home, and the QBCC gives made-to-measure kitchen cabinetry as an example."
        },
        {
          "type": "p",
          "text": "**Insurance.** Queensland Home Warranty insurance applies to residential building work valued over $3,300, counting materials, labour and GST. The QBCC lists replacing or refitting fixtures or fittings in a kitchen among the work it covers. Ask whether it applies to your job."
        },
        {
          "type": "credit",
          "text": "Sources: the Queensland Building and Construction Commission pages \"Who must hold a QBCC licence\" (reviewed 16 April 2026), \"Cabinet making\" (licence class), \"Contracts and payments\" (reviewed 14 May 2026), \"Deposits and progress payments\" (reviewed 27 June 2025) and \"What work requires insurance\" (reviewed 1 August 2024), at qbcc.qld.gov.au. Rules and figures change, so check the QBCC pages for the current position."
        },
        {
          "type": "h2",
          "text": "What to include when you enquire"
        },
        {
          "type": "ul",
          "items": [
            "The size of the kitchen, and whether it is a straight run, an L or a U",
            "Whether you are keeping the layout or changing it",
            "Whether you want custom or flat-pack cabinets, or want advice",
            "What you would like the benchtop to be, if you have a view",
            "Whether the old kitchen needs removing, and whether appliances are staying",
            "Anything unusual about access, timing or the state of the walls and floor"
          ]
        },
        {
          "type": "p",
          "text": "You will not know all of it, and that is fine. A cabinet maker will want to see the room before pricing it properly."
        },
        {
          "type": "h2",
          "text": "Common questions"
        },
        {
          "type": "faqs",
          "items": [
            {
              "q": "What does a kitchen renovation cost in Cairns?",
              "a": "This page does not give a figure. A Cairns price depends on the size of the room, the layout, the materials and the benchtop, and the figures published nationally disagree widely and are not for Cairns. A cabinet maker prices it once they have seen the room."
            },
            {
              "q": "Does the quote include the benchtop and installation?",
              "a": "Not always. Ask each cabinet maker to list what is included, and who supplies and fits the benchtop and any appliances."
            },
            {
              "q": "Can I keep my existing cabinets and replace only the doors?",
              "a": "Sometimes. It depends on the condition of the cabinet boxes and whether the layout still works. Say so in your enquiry and the cabinet maker can tell you whether it is worth doing."
            },
            {
              "q": "Should I pay a deposit?",
              "a": "A deposit is normal, and the QBCC sets a limit on it, set out under \"Before you sign\" above. A deposit above the limit is not something you have to pay."
            }
          ]
        },
        {
          "type": "h2",
          "text": "Get a kitchen quote"
        },
        {
          "type": "p",
          "text": "Tell us the room, roughly how big it is, and what you want done. We will pass it to a local cabinet maker who can quote it."
        },
        {
          "type": "form",
          "presetService": "Kitchens"
        }
      ]
    }
  ],

  /* --- Service-area pages (0 or more) ---------------------------------------
     One page per surrounding suburb/town, targeting "service + suburb"
     searches. SHIPS EMPTY on purpose: six thin suburb pages with lightly
     reworded copy is the scaled-content pattern search engines filter out.
     Only add area pages once the core pages are live AND you have genuinely
     differentiated content per area (see README).

     Each entry:
       slug        — becomes the filename "<slug>.html". Make it the keyword
                     URL you want, e.g. "epoxy-flooring-joondalup". Must not
                     collide with an existing page (bake.js enforces this).
       name        — display name of the area, e.g. "Joondalup"
       headline    — message-matched H1, e.g. "Epoxy Flooring in Joondalup"
       metaTitle / metaDescription — unique per area (--check enforces this)
       intro       — array of paragraphs. Write genuinely about serving that
                     area; do NOT clone another area's text with the suburb
                     name swapped — thin duplicate pages get filtered out.
       localDetail — OPTIONAL string or array of strings: extra paragraphs
                     of genuinely local detail (housing stock, travel time,
                     common local job types).
       subheadline — OPTIONAL hero sub-line (defaults to none)
       ctaText     — OPTIONAL CTA copy (falls back to the homepage's)
       services    — OPTIONAL array of service page filenames to feature on
                     this area page (defaults to all services)
       faqs        — OPTIONAL per-area FAQ block: [{ q: "...", a: "..." }]
  */
  areas: [],

  /* --- About page ------------------------------------------------------------
     About renders from pages.about.blocks and its quote section; the FAQs live
     on Home, so this list is empty. */
  about: {
    paragraphs: [],
    faqs: []
  },

  faqPreviewCount: 0,

  /* --- Contact form ---------------------------------------------------------
     `fields` is the base field list for every quote form on the site
     (the general one on about.html, and any inline `form` block on a
     service page). Add/remove/reorder fields freely — the form and its
     submit payload follow this array. A `form` block can add one
     `extraField` and override `placeholders` for its own page. */
  contact: {
    formHeadline: "Send an enquiry",
    /* The call-to-action band says this, not "request your free quote online":
       this site does not quote. */
    ctaBandAction: "send an enquiry online",
    /* Job-type picker options. `services` lists pages, not jobs, so the
       picker reads these (the headings of Home's "What we can get quoted"). */
    jobTypes: [
      "Kitchens",
      "Wardrobes and built-in storage",
      "Laundries and other joinery",
      "Repairs and small jobs"
    ],
    /* COLLECTION NOTICE (R3, R4): this line is held word for word in
       build/02-constants.md Collection notices, and G8 checks they match.
       The voicemail greeting (sites.greeting_text and the MP3) says the same
       thing. Do not soften it and do not reopen it. */
    reassurance: "No spam and no obligation. Your details go to a local cabinet maker so they can quote your job, and the cabinet maker pays for the enquiry. We never add you to a marketing list. [How we handle your information](privacy.html).",
    fields: [
      { name: "name", label: "Name", type: "text", autocomplete: "name" },
      { name: "phone", label: "Phone", type: "tel", autocomplete: "tel" },
      { name: "suburb", label: "Suburb", type: "text", autocomplete: "address-level2" },
      { name: "message", label: "Tell us about the job", type: "textarea", rows: 4, required: false, placeholder: "The room, roughly how big it is, and what you want done." }
    ],
    step1Label: "What do you need help with?",
    step2Label: "Your details",
    otherServiceLabel: "Something else",
    submitText: "Send an enquiry",
    successMessage: "Thanks, your request is in.",
    errorMessage: "Something went wrong sending your request. Please try again, or reach out directly:"
  },

  /* --- Testimonials / photos (REAL EVIDENCE ONLY) ---------------------------
     Leave these arrays EMPTY until a real business supplies real, verifiable
     testimonials and photos. The sections stay hidden while empty.
     Do NOT invent names, star ratings, or review counts.
     testimonial format: { quote: "...", name: "...", detail: "e.g. job type / area" }
     photo format:       { src: "images/...", alt: "...", caption: "...",
                           width: <px>, height: <px> } */
  testimonials: [],
  photos: []
};
