/**
 * Centralized site configuration.
 *
 * Single source of truth for personal + site-wide details (name, contact,
 * URLs). Update a value here and it propagates everywhere it's used.
 */
export const siteConfig = {
  // Branding
  siteName: "Hypochoco",
  url: "https://hypochoco.com",
  description:
    "Daniel Cho's portfolio — projects and writing across art, architecture, and computer science.",

  // Author / owner
  author: "Daniel Cho",

  // Contact
  email: "daniel_s_cho@alumni.brown.edu",
  phone: {
    // Raw digits used for the `tel:` href.
    raw: "7209369354",
    // Human-friendly version shown to visitors.
    display: "+1 (720) 936-9354",
  },
};

/** `mailto:` href for the configured email. */
export const emailHref = `mailto:${siteConfig.email}`;

/** `tel:` href for the configured phone number. */
export const telHref = `tel:${siteConfig.phone.raw}`;
