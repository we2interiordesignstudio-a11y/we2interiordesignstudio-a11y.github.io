import Link from "next/link";
import { nav, site } from "@/lib/site";
import { LogoMark } from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" aria-label="we2 home" className="inline-block text-ink">
              <LogoMark className="h-10 w-auto" />
            </Link>
            <p className="mt-4 font-sans text-[0.62rem] uppercase tracking-label text-ink/50">
              Architect&ensp;|&ensp;Interior&ensp;|&ensp;Civil
            </p>
            <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-ink/60">
              An architecture, interior and civil studio in Vadodara, composing timeless spaces
              defined by restraint, material honesty and quiet luxury.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="eyebrow">Explore</h3>
            <ul className="mt-6 space-y-3">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline font-sans text-sm text-ink/70 hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="eyebrow">Studio</h3>
            <address className="mt-6 space-y-3 font-sans text-sm not-italic text-ink/70">
              <p>{site.address.street}, {site.address.city}</p>
              <p>{site.address.region} {site.address.postalCode}, {site.address.country}</p>
              <p>
                <a href={`mailto:${site.email}`} className="link-underline">{site.email}</a>
              </p>
              <p>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-underline">{site.phone}</a>
              </p>
            </address>
            <div className="mt-8 flex gap-6">
              {site.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="link-underline font-sans text-[0.7rem] uppercase tracking-wide text-ink/60 hover:text-ink">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 font-sans text-[0.7rem] uppercase tracking-wide text-ink/40 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} we2 interior design studio</p>
          <p>Vadodara · India</p>
          <p>Designed with restraint</p>
        </div>
      </div>
    </footer>
  );
}
