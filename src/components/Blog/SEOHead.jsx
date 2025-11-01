import React, { useEffect } from "react";

const SEOHead = ({ title, description, keywords, url, image }) => {
  useEffect(() => {
    // Update the document title
    document.title = title || "Blog - Learn Email Marketing";

    // Helper to create/update meta tags dynamically
    const updateMeta = (name, content, attr = "name") => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard meta tags
    updateMeta(
      "description",
      description || "Free resource library for email marketing"
    );
    updateMeta("keywords", keywords || "email marketing, tutorials, guides");

    // Open Graph tags
    updateMeta("og:title", title || "Blog - Learn Email Marketing", "property");
    updateMeta(
      "og:description",
      description || "Free resource library for email marketing",
      "property"
    );
    updateMeta("og:type", "website", "property");
    updateMeta("og:url", url || window.location.href, "property");
    if (image) updateMeta("og:image", image, "property");

    // Twitter Card tags
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title || "Blog - Learn Email Marketing");
    updateMeta(
      "twitter:description",
      description || "Free resource library for email marketing"
    );
    if (image) updateMeta("twitter:image", image);

    // Canonical link
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url || window.location.href);
  }, [title, description, keywords, url, image]);

  return null; // This component only updates the head
};

export default SEOHead;
