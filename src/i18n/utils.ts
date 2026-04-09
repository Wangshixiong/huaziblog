import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useLocalizedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const prefix = l === defaultLang ? "" : `/${l}`;
    let normalizedPath = path.startsWith("/") ? path : `/${path}`;

    // Ensure root path /en doesn't have trailing slash etc
    if (l !== defaultLang && normalizedPath === "/") {
      return `/${l}`;
    }

    return `${prefix}${normalizedPath}`.replace(/\/$/, "") || "/";
  };
}

export function getAlternateLangPath(path: string, targetLang: keyof typeof ui) {
  const normalizedPath = path === "/" ? "/" : path.replace(/\/$/, "");
  const basePath = normalizedPath.replace(/^\/en(?=\/|$)/, "") || "/";

  if (targetLang === defaultLang) {
    return basePath;
  }

  return basePath === "/" ? `/${targetLang}` : `/${targetLang}${basePath}`;
}
