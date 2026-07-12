import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";
import { journal } from "@/lib/journal";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects", "/services", "/process", "/journal", "/testimonials", "/contact"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })
  );

  const projectRoutes = projects.map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const journalRoutes = journal.map((e) => ({
    url: `${site.url}/journal/${e.slug}`,
    lastModified: new Date(e.dateISO),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...routes, ...projectRoutes, ...journalRoutes];
}
