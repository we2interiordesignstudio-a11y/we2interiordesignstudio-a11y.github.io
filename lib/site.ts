export const site = {
  name: "we2 interior design studio",
  shortName: "we2",
  tagline: "We design spaces that become timeless.",
  description:
    "we2 is an architecture, interior design and civil studio based in Vadodara, crafting timeless residential and commercial spaces defined by restraint, material honesty and quiet luxury.",
  url: "https://we2interiors.com",
  email: "we2interiordesignstudio@gmail.com",
  phone: "+91 92656 36535",
  location: "Vadodara, Gujarat, India",
  address: {
    street: "Gotri",
    city: "Vadodara",
    region: "Gujarat",
    postalCode: "390021",
    country: "India",
  },
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
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
