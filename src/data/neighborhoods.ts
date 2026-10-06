export type HoodSub = { h: string; ps: string[]; bullets?: string[] };
export type HoodStep = { t: string; d: string };
export type HoodFaq = { q: string; a: string };
export type Hood = {
  slug: string; name: string; h1: string; title: string; description: string; intro: string; heroPs: string[];
  bodyH2: string; bodyPs: string[]; considerations: string[];
  svcH2: string; svcLead: string; svcNotes: Record<string, string>;
  appsH2: string; apps: HoodSub[]; implH2: string; implPs: string[]; impl: HoodSub[];
  planH2: string; planPs: string[]; steps: HoodStep[];
  mapH2: string; mapIntro: string; mapQuery: string; mapTitle: string;
  nearbyH2: string; nearbyP: string; faqH2: string; faqs: HoodFaq[]; ctaH2: string; ctaPs: string[];
};
export const neighborhoods: Hood[] = [
  {
    "slug": "second-street",
    "name": "Second Street museum area",
    "h1": "Hydro Jetting in Second Street museum area, Liverpool NY",
    "title": "Hydro Jetting in Second Street museum area, Liverpool | Liverpool Hydro Jetting Pros",
    "description": "Hydro jetting near Liverpool's Second Street museum area, NY: how older buildings shape drain line questions and how cleaning gets planned. Call (877) 761-0283.",
    "intro": "The village historian places the museum at 314 Second Street in the 1857 Gleason Mansion. Older buildings may have replacement plumbing, so ask for repair records rather than inferring pipe age.",
    "heroPs": [
      "Older homes and buildings around the Second Street museum can develop slow drains from grease, scale or roots, and replaced sections are common in houses of this age. Hydro jetting can clear buildup from a sound line when an inspection shows it is the right method. Ask for repair records and an inspection rather than assuming the pipe from the building's age."
    ],
    "bodyH2": "Hydro Jetting for Second Street museum area Properties",
    "bodyPs": [
      "The village historian places the museum at 314 Second Street, in the Gleason Mansion built in 1857. A landmark of that age sets the tone for the area, which has older buildings from several eras sitting near each other.",
      "Older buildings often carry replacement plumbing. A house from the nineteenth century is unlikely to have its original drain lines, and the replacement may itself be decades old. That means the age of the building and the age of the pipe are two separate facts.",
      "Hydro jetting uses high-pressure water to scour grease, scale and roots from a sound pipe wall. On a line with an unknown history, the inspection decides whether it is safe and what the camera shows about the pipe's condition."
    ],
    "considerations": [
      "Records of past plumbing repairs or replacements",
      "What the line is made of and where materials change",
      "Mature trees near the path of the lateral",
      "Where the cleanout is and whether renovations have covered it",
      "Whether the property is a home, a shop or an institution",
      "Whether the problem sits in the private line or the public system"
    ],
    "svcH2": "Hydro Jetting Services in Second Street museum area",
    "svcLead": "Each service page answers one question. Pick the one that sounds like your drain.",
    "svcNotes": {
      "severe-grease-and-sludge": "Older kitchens can carry a hardened grease layer in the line.",
      "tree-root-intrusions": "Mature village trees and aged joints often go together.",
      "recurring-clogs-and-slow-drains": "A line that keeps clogging needs a cause identified, not another quick clear.",
      "mineral-and-scale-deposits": "Scale can build over decades in older pipe and narrow it at joints.",
      "preventative-maintenance": "An inspection before trouble starts helps decide what an older line needs."
    },
    "appsH2": "Hydro Jetting Situations Around Older Buildings",
    "apps": [
      {
        "h": "Replacement plumbing in older houses",
        "ps": [
          "Most older houses have had pipe replaced at some point. Share what you know about when, so the crew knows which sections are old and which are new."
        ]
      },
      {
        "h": "Lines that run under additions",
        "ps": [
          "Additions can cover cleanouts and reroute drains. The camera shows what the line looks like beneath the structure."
        ]
      },
      {
        "h": "Kitchens with decades of use",
        "ps": [
          "A kitchen that has served a household for decades can carry a thick grease layer. Jetting strips it from the pipe wall when the pipe can take the pressure."
        ]
      },
      {
        "h": "Planned cleaning for a known history",
        "ps": [
          "If a line has clogged before, plan the next cleaning after an inspection rather than waiting for the next backup."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for Second Street museum area",
    "implPs": [
      "Older buildings reward a careful first look. The history in the walls is rarely written down in one place.",
      "These are the points that shape the work around the Second Street museum area."
    ],
    "impl": [
      {
        "h": "Building age is not pipe age",
        "ps": [
          "A line can be much newer than the building above it."
        ],
        "bullets": [
          "Ask for any repair or replacement records",
          "Expect inspection before cleaning"
        ]
      },
      {
        "h": "Access after renovations",
        "ps": [
          "Cleanouts can end up behind finished walls or under additions."
        ],
        "bullets": [
          "Locate yours before the visit",
          "Mention any renovations"
        ]
      },
      {
        "h": "Private line, public system",
        "ps": [
          "The village sewer is separate from your lateral. The location of the blockage decides who handles it."
        ],
        "bullets": [
          "Describe whether neighbors are affected",
          "Ask whether a public-system report is needed"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in Second Street museum area",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Gather repair records and find the cleanout",
        "d": "Collect any plumbing records, and locate the access point."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in Second Street museum area, Liverpool NY",
    "mapIntro": "Liverpool Hydro Jetting Pros takes requests in Second Street museum area and across Liverpool. The map shows the neighborhood area, not a business office.",
    "mapQuery": "Second St, Liverpool, NY",
    "mapTitle": "Map of Second Street museum area, Liverpool, NY",
    "nearbyH2": "Serving Second Street museum area and Nearby Liverpool Neighborhoods",
    "nearbyP": "Liverpool Hydro Jetting Pros serves Second Street museum area and the rest of Liverpool, including Oswego Street village center. Each neighborhood page covers the local context that matters for its properties.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in Second Street museum area",
    "faqs": [
      {
        "q": "Does an 1857 landmark nearby tell me anything about my pipes?",
        "a": "No. Local history does not identify private pipe material, age or condition. Records and an inspection do."
      },
      {
        "q": "Is high pressure safe for older lines?",
        "a": "It depends on the line's condition. A sound one can take it, and a weak one may need repair first."
      },
      {
        "q": "What should I tell the crew about my house?",
        "a": "Share its approximate age, any plumbing repairs you know of, and which fixtures are slow."
      },
      {
        "q": "Can roots be the cause in an older village area?",
        "a": "Yes. Mature trees and aged joints are a common combination, and the camera can confirm it."
      },
      {
        "q": "Does a cleaning fix a cracked pipe?",
        "a": "No. It removes an obstruction. A crack needs a repair assessment."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your Second Street museum area Hydro Jetting Project With Liverpool Hydro Jetting Pros",
    "ctaPs": [
      "Older buildings give every property its own pipe story. A clear account of the symptoms and any past work gets the inspection started well.",
      "Use the request form on this page or call (877) 761-0283 to describe what is happening."
    ]
  },
  {
    "slug": "oswego-street",
    "name": "Oswego Street village center",
    "h1": "Hydro Jetting in Oswego Street village center, Liverpool NY",
    "title": "Hydro Jetting in Oswego Street village center, Liverpool | Liverpool Hydro Jetting Pros",
    "description": "Hydro jetting in Liverpool's Oswego Street village center, NY: drain line questions for a mixed village center and how cleaning gets planned. Call (877) 761-0283.",
    "intro": "The village historian records that the Hurst family willow workshop originally stood on Oswego Street. This page concerns the village center, not the wider Liverpool postal area.",
    "heroPs": [
      "Homes and businesses in the Oswego Street village center can develop slow drains from grease, scale or roots, and a mix of uses puts varied loads on the lines. Hydro jetting can clear buildup from a sound line when an inspection shows it is the right method. Describe what the property is used for and which fixtures are affected."
    ],
    "bodyH2": "Hydro Jetting for Oswego Street village center Properties",
    "bodyPs": [
      "The village historian records that the Hurst family's willow workshop originally stood on Oswego Street before it moved to the Gleason Mansion grounds in 1992. It is a small piece of local history that points to Oswego Street as a long-standing part of the village center.",
      "A village center mixes homes, shops and services, and a line in that setting can carry a very different load from one in a purely residential block. This page is about the village center and not about every address that uses the Liverpool postal name.",
      "Hydro jetting uses high-pressure water to scour grease, scale and roots from a sound pipe wall. The inspection decides whether the line can take it, and what the blockage actually is."
    ],
    "considerations": [
      "Whether the line serves a home, a business or both",
      "Which fixtures are slow and whether the pattern is new",
      "Grease handling if there is a kitchen on the line",
      "Trees near the path of the lateral",
      "Where the cleanout is and how easy it is to reach",
      "Whether the problem sits in the private line or the public system"
    ],
    "svcH2": "Hydro Jetting Services in Oswego Street village center",
    "svcLead": "These five pages cover the problems people call about most. Start with the one closest to what you are seeing.",
    "svcNotes": {
      "severe-grease-and-sludge": "A shop or eatery in the village center can put steady grease into a line.",
      "tree-root-intrusions": "Street and yard trees near an older lateral can reach aged joints.",
      "recurring-clogs-and-slow-drains": "A line serving several uses can slow in ways a single household would not see.",
      "mineral-and-scale-deposits": "Scale narrows a line slowly, in any setting.",
      "preventative-maintenance": "A planned cleaning suits properties with heavy or varied daily use."
    },
    "appsH2": "Hydro Jetting Situations in a Village Center",
    "apps": [
      {
        "h": "Shops and eateries on the same street as homes",
        "ps": [
          "A business on a village street can put more grease into a line than a household. Jetting strips it from the wall if the pipe can take the pressure."
        ]
      },
      {
        "h": "Upstairs apartments over storefronts",
        "ps": [
          "A building with a shop below and a home above runs both loads through one line. Describe both so the inspection knows what to look for."
        ]
      },
      {
        "h": "Roots from village street trees",
        "ps": [
          "Trees along the street can reach nearby laterals. Jetting clears roots from a sound line, and the camera shows if the entry point needs repair."
        ]
      },
      {
        "h": "Upkeep before a repeat backup",
        "ps": [
          "A line that has backed up once is worth a planned cleaning after an inspection."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for Oswego Street village center",
    "implPs": [
      "Village centers combine uses in a small footprint, and drain lines show it. A clear picture of what the line serves makes the work simpler.",
      "These are the points that shape the work in the Oswego Street village center."
    ],
    "impl": [
      {
        "h": "Know every use on the line",
        "ps": [
          "Shops, apartments and offices each load a line differently."
        ],
        "bullets": [
          "List each use served by the drain",
          "Share any shared-line arrangements"
        ]
      },
      {
        "h": "Grease handling",
        "ps": [
          "Where a kitchen is on the line, grease is the first suspect."
        ],
        "bullets": [
          "Ask how grease is handled today",
          "Expect the inspection to check for buildup"
        ]
      },
      {
        "h": "Private line, public system",
        "ps": [
          "The village sewer is separate from your lateral."
        ],
        "bullets": [
          "Describe whether neighbors have problems",
          "Ask whether a public-system report is needed"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in Oswego Street village center",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "List the uses on the line",
        "d": "Note every home, shop or office connected to the affected drain, and find the cleanout."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in Oswego Street village center, Liverpool NY",
    "mapIntro": "Liverpool Hydro Jetting Pros takes requests in Oswego Street village center and across Liverpool. The map shows the neighborhood area, not a business office.",
    "mapQuery": "Oswego St, Liverpool, NY",
    "mapTitle": "Map of Oswego Street village center, Liverpool, NY",
    "nearbyH2": "Serving Oswego Street village center and Nearby Liverpool Neighborhoods",
    "nearbyP": "Liverpool Hydro Jetting Pros serves Oswego Street village center and the rest of Liverpool, including Second Street museum area. Each neighborhood page covers the local context that matters for its properties.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in Oswego Street village center",
    "faqs": [
      {
        "q": "Is this page about all of Liverpool?",
        "a": "No. It concerns the Oswego Street village center and not the wider Liverpool postal area."
      },
      {
        "q": "Does the willow workshop history tell me anything about my pipes?",
        "a": "No. Local history does not identify private pipe material, age or condition."
      },
      {
        "q": "Why do village center lines clog more?",
        "a": "Mixed uses, shared lines and heavier daily loads can all contribute. The camera shows the actual cause."
      },
      {
        "q": "Can jetting help a shop's kitchen line?",
        "a": "Where grease is the cause and the pipe is sound, yes. Ask the crew about preventing it returning."
      },
      {
        "q": "Who handles a public sewer problem?",
        "a": "The village. A blockage in the private lateral is the property owner's."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your Oswego Street village center Hydro Jetting Project With Liverpool Hydro Jetting Pros",
    "ctaPs": [
      "A village center mixes homes and businesses in small spaces, and knowing what a line serves is half the diagnosis. A clear account of the symptoms gets the inspection pointed in the right direction.",
      "Use the request form on this page or call (877) 761-0283 to describe what you are seeing."
    ]
  }
];
export const neighborhoodBySlug = Object.fromEntries(neighborhoods.map(n => [n.slug,n]))
