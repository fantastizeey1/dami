interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  canonical?: string;
}

export function SEO({
  title,
  description = "We manage your full email system and write persuasive copy that converts your list into customers, stress-free.",
  image = "/og-image.png",
  url = typeof window !== "undefined" ? window.location.href : "",
  canonical,
}: SEOProps) {
  const siteTitle = "InkyRepertoire";

  const fullTitle = title.includes(siteTitle)
    ? title
    : `${title} | ${siteTitle}`;

  const canonicalUrl = canonical || url;

  // 🟢 FORCE FIX: Manually update the document title
  // This ensures the tab text updates even if React 19's hoisting is delayed
  // useEffect(() => {
  //   document.title = fullTitle;
  // }, [fullTitle]);

  return (
    <>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Optional: Robots (Ensures you are indexed) */}
      <meta name="robots" content="index, follow" />
    </>
  );
}
