import rss from "@astrojs/rss";
import { getIndex, parseTitle, toNumericUrl } from "@/util";
import { renderSupportCalloutForRSS } from "@/supportCallout";
import { SITE } from "@/config";

export async function GET() {
  let allPosts = import.meta.glob("./posts/*.md", { eager: true });
  let posts = Object.values(allPosts);

  posts = posts.sort((a, b) => getIndex(b.url) - getIndex(a.url));

  // Only 12 are kept
  posts = posts.slice(0, 12);

  // Process Markdown content, return the original content of unfiltered tags
  const processContent = async (item) => {
    const content = await item.compiledContent();
    return content;
  };

  const extractFirstImage = (html) => {
    const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
    return match?.[1] ?? null;
  };

  const escapeXmlAttr = (value) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const getImageMimeType = (url) => {
    const cleanUrl = url.split("?")[0]?.split("#")[0] ?? "";
    const ext = cleanUrl.slice(cleanUrl.lastIndexOf(".") + 1).toLowerCase();
    switch (ext) {
      case "jpg":
      case "jpeg":
        return "image/jpeg";
      case "png":
        return "image/png";
      case "gif":
        return "image/gif";
      case "webp":
        return "image/webp";
      case "svg":
        return "image/svg+xml";
      case "avif":
        return "image/avif";
      default:
        return "image/jpeg";
    }
  };

  return rss({
    title: `${SITE.title} English Feed`,
    description: "English posts from Huazi's blog about AI, product work, insurance, and personal notes.",
    site: `${SITE.homePage}/en/`,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
      media: "http://search.yahoo.com/mrss/",
    },
    customData: `<atom:icon>${SITE.icon}</atom:icon><atom:logo>${SITE.icon}</atom:logo><image><url>${SITE.icon}</url><title>${SITE.title} English Feed</title><link>${SITE.homePage}/en/</link></image>`,
    items: await Promise.all(
      posts.map(async (item) => {
        const numericLink =
          item.frontmatter.numericUrl ?? toNumericUrl(item.url);
        // Add /en prefix to link if not present
        const enLink = numericLink.startsWith("/en")
          ? numericLink
          : `/en${numericLink}`;
        const title = parseTitle(
          numericLink,
          item.frontmatter.legacySlug,
          item.frontmatter.issueTitle,
          "en",
        );
        const html = await processContent(item);
        const coverImage = extractFirstImage(html);
        const coverImageUrl = coverImage ? escapeXmlAttr(coverImage) : null;
        const coverImageMime = coverImage ? getImageMimeType(coverImage) : null;
        return {
          link: enLink,
          title,
          description: `${html}${renderSupportCalloutForRSS("en")}`,
          pubDate: item.frontmatter.date,
          customData: coverImageUrl
            ? `<media:content url="${coverImageUrl}" medium="image" type="${coverImageMime}" /><media:thumbnail url="${coverImageUrl}" /><enclosure url="${coverImageUrl}" type="${coverImageMime}" />`
            : "",
        };
      }),
    ),
  });
}
