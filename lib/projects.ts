export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  location: string;
  area: string;
  scope: string[];
  materials: string[];
  intro: string;
  concept: string;
  hero: string; // hero image path
  tone: string; // fallback/accent tone for the project
  gallery: { src: string; caption: string; wide?: boolean }[];
};

// Real project imagery lives in /public/projects.
// Titles, years, areas and locations are editable — update freely as facts are confirmed.
export const projects: Project[] = [
  {
    slug: "rathod-residence",
    title: "Rathod Residence",
    category: "Private Residence",
    year: "2026",
    location: "Vadodara, Gujarat",
    area: "Residence",
    scope: ["Interior architecture", "Bespoke joinery", "Lighting design", "Styling"],
    materials: ["Walnut veneer", "Fluted stone", "Brushed brass", "Cream lacquer", "Marble"],
    intro:
      "A complete family home composed room by room — from a personalised entrance to a principal suite in cream and gold.",
    concept:
      "The home unfolds as a sequence of distinct moods held together by one hand. The living room pairs dark walnut with fluted stone around the media wall; the principal suite is an exercise in cream, soft gold and curved joinery; a second bedroom turns warmer, with terracotta tones and an arched mirror niche. Even the entrance is treated as a room of its own — a fluted vestibule with concealed light and the family's name in brass.",
    hero: "/projects/rathod-01.jpg",
    tone: "#CDC4B4",
    gallery: [
      { src: "/projects/rathod-01.jpg", caption: "Living room — walnut and fluted stone", wide: true },
      { src: "/projects/rathod-02.jpg", caption: "Principal suite in cream and gold" },
      { src: "/projects/rathod-04.jpg", caption: "Dressing corner, curved brass-framed mirrors" },
      { src: "/projects/rathod-03.jpg", caption: "Principal suite — the wider view", wide: true },
      { src: "/projects/rathod-05.jpg", caption: "Guest bedroom in warm terracotta" },
      { src: "/projects/rathod-06.jpg", caption: "Guest bedroom, morning light" },
      { src: "/projects/rathod-07.jpg", caption: "Entrance foyer with brass nameplate", wide: true },
    ],
  },
  {
    slug: "the-sage-apartment",
    title: "The Sage Apartment",
    category: "Apartment",
    year: "2026",
    location: "Vadodara, Gujarat",
    area: "Apartment",
    scope: ["Interior architecture", "Kitchen design", "Bespoke furniture", "Styling"],
    materials: ["Sage lacquer", "Reeded glass", "Ivory fluting", "Brass", "Quartzite"],
    intro:
      "A city apartment in a palette of sage, ivory and brass — calm, green and quietly playful.",
    concept:
      "One colour idea, carried with discipline. Sage green moves through the apartment at different volumes — deep in the kitchen cabinetry, soft in the living room upholstery, and set against ivory fluted walls and warm brass. A sculpted leaf relief anchors the living room; the kitchen pairs olive units with reeded glass and stone. The children's room breaks the rule on purpose: lavender, rope and a ball pit, designed for joy.",
    hero: "/projects/sage-01.jpg",
    tone: "#C6C0AF",
    gallery: [
      { src: "/projects/sage-01.jpg", caption: "Living room — sage seating, leaf relief wall", wide: true },
      { src: "/projects/sage-02.jpg", caption: "Living room toward the stair and media wall" },
      { src: "/projects/sage-03.jpg", caption: "Kitchen in olive, reeded glass and stone" },
      { src: "/projects/sage-04.jpg", caption: "Children's room in lavender", wide: true },
    ],
  },
  {
    slug: "dune-house",
    title: "Dune House",
    category: "Residence",
    year: "2025",
    location: "Vadodara, Gujarat",
    area: "Residence",
    scope: ["Interior architecture", "Bespoke furniture", "Wall treatments", "Styling"],
    materials: ["Hand-finished plaster", "Umber suede", "Limed oak", "Grey marble", "Aged bronze"],
    intro:
      "A home drawn in dunes — wave-edged joinery, hand-finished plaster and a palette taken from sand and earth.",
    concept:
      "A single motif, the dune, repeats through the house at every scale: in the scalloped edge of the bed, the carved wall panels, the mirror frames, and the hand-painted contour walls that move from room to room. The living room answers with a wall of circular niches in warm beige. Materials stay close to the earth — umber, sand, clay and stone — so the geometry can speak.",
    hero: "/projects/dune-01.jpg",
    tone: "#CFC5B3",
    gallery: [
      { src: "/projects/dune-01.jpg", caption: "Living room — circular niche wall", wide: true },
      { src: "/projects/dune-02.jpg", caption: "Principal bedroom, wave-edged headboard" },
      { src: "/projects/dune-03.jpg", caption: "Bedroom with hand-painted contour wall" },
      { src: "/projects/dune-04.jpg", caption: "Wardrobes and floating shelves", wide: true },
      { src: "/projects/dune-05.jpg", caption: "Dressing mirror toward the contour corridor" },
      { src: "/projects/dune-06.jpg", caption: "Study wall at dusk" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
