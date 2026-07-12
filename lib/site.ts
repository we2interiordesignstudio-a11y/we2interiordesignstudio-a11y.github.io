export const site = {
  name: "we2 interior design studio",
  shortName: "we2",
  tagline: "We design spaces that become timeless.",
  description:
    "we2 is an architecture, interior design and civil studio based in Vadodara, crafting timeless residential and commercial spaces defined by restraint, material honesty and quiet luxury.",
  url: "https://we2interiors.com",
  email: "studio@we2interiors.com",
  phone: "+91 92656 36535",
  whatsapp:
    "https://wa.me/919265636535?text=Hello%20we2%20studio%20%E2%80%94%20I%27d%20like%20to%20discuss%20a%20project.",
  location: "Vadodara, Gujarat, India",
  address: {
    street: "Gotri",
    city: "Vadodara",
    region: "Gujarat",
    postalCode: "390021",
    country: "India",
  },
  social: [
    {
      label: "WhatsApp",
      href: "https://wa.me/919265636535?text=Hello%20we2%20studio%20%E2%80%94%20I%27d%20like%20to%20discuss%20a%20project.",
    },
    { label: "Instagram", href: "https://www.instagram.com/we2_interior/" },
    {
      label: "Justdial",
      href: "https://www.justdial.com/Vadodara/We2-Interior-Design-Studio-Sama/0265PX265-X265-210906145522-K6L9_BZDET",
    },
  ],
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Journal", href: "/journal" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
] as const;
