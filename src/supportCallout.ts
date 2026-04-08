export const SUPPORT_CALLOUT = {
  zh: "想交流或合作，去关于页找我",
  en: "Find me on the about page",
  link: "/about",
};

export const renderSupportCalloutForRSS = (lang: "zh" | "en" = "zh") => {
  const cta = SUPPORT_CALLOUT[lang] ?? SUPPORT_CALLOUT.zh;
  const { link } = SUPPORT_CALLOUT;
  return `
    <hr style="border:none;border-top:0.5px solid rgba(0,0,0,0.08);margin:26px 0 14px;" />
    <p style="text-align:left;margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
      <a
        href="${link}"
        style="
          display:inline-block;
          padding:6px 18px;
          border-radius:999px;
          background:#222;
          color:#fff;
          font-size:13px;
          text-decoration:none;
        "
        target="_blank"
        rel="noreferrer"
      >${cta}</a>
    </p>
  `.trim();
};
