import type { MetadataRoute } from "next";
import { SITE } from "../config/site";

export const dynamic = "force-static";

const paths = [
  "",
  "/about",
  "/skills",
  "/experience",
  "/projects",
  "/designs",
  "/blogs",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  return paths.map((path) => ({
    url: path === "" ? `${base}/` : `${base}${path}/`,
    lastModified: new Date(),
  }));
}
