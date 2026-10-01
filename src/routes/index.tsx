import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import bodyHtml from "@/site/body.html?raw";
import siteJs from "@/site/site.js.txt?raw";
import "@/site/site.css";

const title = "Front Range Water Pros | Water Filtration for Colorado Homes";
const description =
  "Front Range Water Pros helps Colorado homeowners evaluate whole-home filtration, softening, and drinking-water systems using utility data, household demand, and real water concerns.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0b666b" },
    ],
    links: [
      { rel: "preconnect", href: "https://api.fontshare.com" },
      {
        rel: "stylesheet",
        href: "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&f[]=cabinet-grotesk@500,700&display=swap",
      },
    ],
  }),
  component: Index,
});

let ran = false;

function Index() {
  useEffect(() => {
    if (ran) return;
    ran = true;
    new Function(siteJs)();
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
