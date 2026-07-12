export type JournalEntry = {
  slug: string;
  title: string;
  category: string;
  date: string;
  dateISO: string; // for schema.org
  excerpt: string;
  tone: string;
  cover: string;
  coverAlt: string;
  readingTime: string;
  // Article body — plain paragraphs; strings starting with "> " render as pull quotes
  body: string[];
};

export const journal: JournalEntry[] = [
  {
    slug: "the-quiet-luxury-of-restraint",
    title: "The Quiet Luxury of Restraint",
    category: "Philosophy",
    date: "June 2026",
    dateISO: "2026-06-15",
    excerpt: "Why the most memorable rooms are often the ones that ask the least of you.",
    tone: "#D4CBBB",
    cover: "/projects/rathod-03.jpg",
    coverAlt: "Principal suite in cream and gold — Rathod Residence by we2 studio",
    readingTime: "4 min read",
    body: [
      "There is a moment we watch for on every handover day. The client walks through the finished home, and somewhere — usually in the quietest room — they slow down. They stop talking. They simply stand there. That silence is the project succeeding.",
      "It is tempting, especially in India's current design climate, to equate luxury with abundance: more veneer, more gold, more drama per square foot. The homes we admire most do the opposite. They hold back. A single fluted wall is given room to breathe. One material is allowed to finish a sentence before the next begins.",
      "> Restraint is not the absence of ideas. It is the discipline of choosing one.",
      "In the principal suite of a recent residence, we tested every impulse against a simple rule: if a detail did not serve calm, it did not stay. The palette settled into cream, soft gold and one warm grey. The joinery curves because hands touch it, not because curves photograph well. The result feels inevitable — as though the room could not have been any other way.",
      "Restraint also has a practical kindness to it. Rooms that ask little of you are rooms you can live in for decades. Trends exhaust themselves; a disciplined palette absorbs new objects, new art, new phases of life without breaking. This is what we mean when we say we design for the tenth year, not the first photograph.",
      "The next time you walk into a room that feels expensive, count the ideas in it. Our guess: fewer than you expect, each given the space to matter.",
    ],
  },
  {
    slug: "materials-that-age-well",
    title: "Materials That Age Well",
    category: "Craft",
    date: "April 2026",
    dateISO: "2026-04-10",
    excerpt: "On patina, honesty, and choosing surfaces for the life they will lead.",
    tone: "#CBC2B2",
    cover: "/projects/sage-03.jpg",
    coverAlt: "Olive kitchen with reeded glass and stone — The Sage Apartment by we2 studio",
    readingTime: "5 min read",
    body: [
      "Every material in a home is making you a promise. Laminate promises to look the same until the day it fails. Brass makes a stranger promise: it will change with you — darken where it is held, brighten where it is polished, and record twenty years of one family's habits on its surface.",
      "We think about that second kind of promise constantly, because a home in Gujarat leads a demanding life. Heat, monsoon humidity, a decade of festivals and everyday cooking — surfaces here cannot merely be beautiful in a showroom. They must know how to age.",
      "> Patina is a material keeping its promise.",
      "Some of our reliable companions: stone, which wears its small scars with dignity; solid timber and honest veneers, which can be re-oiled and renewed; lime plasters, which soften visually as they cure over years; woven cane and rope, whose slight irregularity forgives daily use. And brass — always brass — which in an Indian home carries generations of association, from temple bells to kitchen vessels.",
      "What we avoid is equally deliberate. High-gloss finishes that show every fingerprint and cannot be repaired, only replaced. Printed textures pretending to be what they are not — a photograph of oak glued to dust-board. Anything whose beauty depends on remaining untouched, because untouchable homes make anxious owners.",
      "There is a question we ask suppliers that surprises them: not \"how do we keep this looking new?\" but \"what does it look like in its tenth monsoon?\" If the answer is 'worse', we pass. If the answer is 'different, and rather lovely', it earns a place in the palette.",
      "Choose materials the way you choose people to grow old with — for how they change, not just how they arrive.",
    ],
  },
  {
    slug: "designing-for-indian-light",
    title: "Designing for Indian Light",
    category: "Field Notes",
    date: "February 2026",
    dateISO: "2026-02-20",
    excerpt: "The particular gift, and challenge, of a subcontinental sun.",
    tone: "#DED6C6",
    cover: "/projects/rathod-06.jpg",
    coverAlt: "Guest bedroom in morning light — Rathod Residence by we2 studio",
    readingTime: "4 min read",
    body: [
      "Most of the interiors we grew up admiring in books were designed for weak light. Scandinavian whites, Parisian greys — palettes composed for skies that ration the sun. Vadodara's sky does not ration anything. By ten in the morning, our light is loud, vertical and certain, and it stays that way for most of the year.",
      "Designing here means treating that light as a material — one you are given free, in enormous quantity, and must shape rather than merely admit.",
      "> In India, the curtain is not window dressing. It is architecture.",
      "Pure white walls turn harsh under a hard sun; that is why our canvas is warm white, tempered with sand and clay tones that absorb glare instead of bouncing it. Sheer layers do serious work: a double curtain — one diffusing, one blocking — lets a bedroom hold four different moods between dawn and night. Deep window reveals, pergolas and fluted screens do not decorate a window; they slice the light before it ever reaches the room.",
      "Then there is the evening, which Indian homes live for. Rooms that dazzle at noon must know how to become intimate at nine, when the family actually gathers. This is why we light in layers — concealed coves for the architecture, lamps for the people — and why every project leaves the dimmer generously specified.",
      "The reward for taking light seriously is a home that keeps time with the day: bright and industrious in the morning, golden and unhurried by dusk. No imported palette can give you that. It has to be designed here, for this sun.",
    ],
  },
];

export function getJournalEntry(slug: string) {
  return journal.find((e) => e.slug === slug);
}
