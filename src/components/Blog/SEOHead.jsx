import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SEOHead = ({ title, description, keywords, url, image }) => (
  <HelmetProvider>
    <Helmet>
      <title>{title || "Blog - Learn Email Marketing"}</title>
      <meta
        name="description"
        content={description || "Free resource library for email marketing"}
      />
      <meta
        name="keywords"
        content={keywords || "email marketing, tutorials, guides"}
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content={title || "Blog - Learn Email Marketing"}
      />
      <meta
        property="og:description"
        content={description || "Free resource library for email marketing"}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || window.location.href} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={title || "Blog - Learn Email Marketing"}
      />
      <meta
        name="twitter:description"
        content={description || "Free resource library for email marketing"}
      />
      {image && <meta name="twitter:image" content={image} />}

      <link rel="canonical" href={url || window.location.href} />
    </Helmet>
  </HelmetProvider>
);

export default SEOHead;
