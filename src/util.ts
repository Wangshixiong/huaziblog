// Helper function to extract and decode the title part from the URL
export const extractTitlePart = (currentPage: string) => {
  const [, raw = ""] = currentPage.split("/posts/");
  return decodeURIComponent(raw.replace(/\/$/, ""));
};

export const getSlugParts = (slug: string) => {
  const [numberPart = "", ...nameParts] = slug.split("-");
  return {
    numberPart,
    name: nameParts.join("-"),
  };
};

export const getIndex = (currentPage: string) => {
  const { numberPart } = getSlugParts(extractTitlePart(currentPage));
  return Number.parseInt(numberPart, 10);
};

export const sortPosts = (allPosts: any) => {
  return allPosts.sort((a: any, b: any) => getIndex(b.url) - getIndex(a.url));
};

export const toNumericUrl = (currentPage: string) => {
  const index = getIndex(currentPage);
  return Number.isNaN(index) ? currentPage : `/posts/${index}`;
};

export const parseTitle = (
  currentPage: string,
  legacySlug?: string,
  fallbackName = "",
  lang = "zh",
  isSidebar = false,
) => {
  const slug = legacySlug ?? extractTitlePart(currentPage);
  const { numberPart, name } = getSlugParts(slug);
  const displayName = name || fallbackName;
  const cleanName = displayName.replace(/-/g, " ").trim();

  if (cleanName) {
    return cleanName;
  }

  if (!numberPart) {
    return lang === "en" ? "Untitled Note" : "未命名记录";
  }

  if (isSidebar) {
    return lang === "en" ? `Note ${numberPart}` : `记录 ${numberPart}`;
  }

  return lang === "en" ? `Note ${numberPart}` : `记录 ${numberPart}`;
};
