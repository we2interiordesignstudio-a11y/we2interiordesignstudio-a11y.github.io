export const site = {
  name: "we2 interior design studio",
  shortName: "we2",
  tagline: "We design spaces that become timeless.",
  description:
    "we2 is an interior design studio based in Vadodara, crafting timeless residential, hospitality and commercial interiors defined by restraint, material honesty and quiet luxury.",
  url: "https://we2studio.in",
  email: "studio@we2studio.in",
  phone: "+91 90000 00000",
  location: "Vadodara, Gujarat, India",
  address: {
    street: "Alkapuri",
    city: "Vadodara",
    region: "Gujarat",
    postalCode: "390007",
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
