import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Begin a project with we2 interior design studio, Vadodara. We take on a small number of commissions each year.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Begin a Project"
        title={["Let's begin", "a conversation."]}
        intro="We take on a small number of projects each year. Tell us a little about yours — where it is, how you wish to live, and what timeline you have in mind."
      />

      <section className="container-editorial grid gap-16 pb-24 md:grid-cols-12 md:gap-20">
        <div className="md:col-span-7">
          <ContactForm />
        </div>

        <aside className="md:col-span-5">
          <div className="space-y-10">
            <div className="border-t border-line pt-5">
              <h2 className="eyebrow">Studio</h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink/70">
                {site.address.street}, {site.address.city}
                <br />
                {site.address.region} {site.address.postalCode}, {site.address.country}
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <h2 className="eyebrow">Enquiries</h2>
              <p className="mt-3 space-y-1 font-sans text-sm text-ink/70">
                <a href={`mailto:${site.email}`} className="link-underline block">{site.email}</a>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-underline block">{site.phone}</a>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="link-underline block">
                  WhatsApp us
                </a>
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <h2 className="eyebrow">Hours</h2>
              <p className="mt-3 font-sans text-sm text-ink/70">Monday — Saturday, 10:00 – 18:00</p>
            </div>
          </div>
        </aside>
      </section>

      {/* Embedded map */}
      <section className="container-editorial pb-32">
        <div className="photo-frame overflow-hidden rounded-sm">
          <iframe
            title="we2 studio location — Vadodara"
            src="https://www.google.com/maps?q=Gotri,Vadodara,Gujarat&output=embed"
            className="h-[420px] w-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
