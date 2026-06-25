import { BaseComponent } from "../baseComponents.js";

export class PageMeta extends BaseComponent {

    /**
     * The browser calls this once by default during registration to know which attributes to watch
    */
    static get observedAttributes() {
        return ["title", "description", "url", "og-image", "og-type", "schema"];
    }

    connectedCallback() {
        this.applyMeta();
    }

    attributeChangedCallback() {
        this.applyMeta();
    }

    applyMeta() {
        const title = this.getAttribute("title") || "Clarove Systems Limited | Clearly Crafted. Precisely Built.";
        const description = this.getAttribute("description") || "Clarove Systems builds websites, web apps, SaaS platforms, and marketplaces for business owners in Nigeria, the UK, Canada, and the US. Fixed pricing. Full transparency. Delivered on schedule.";
        const url = this.getAttribute("url") || "https://clarovesystems.com/";
        // const ogImage = this.getAttribute("og-image") || "https://clarovesystems.com/assets/images/og-image.jpg";
        const ogType = this.getAttribute("og-type") || "website";
        const schemaAttr = this.getAttribute("schema");

        document.title = title;

        const setMeta = (selector, attr, value) => {
            let el = document.head.querySelector(selector);
            if (!el) {
                el = document.createElement("meta");
                // derive the attribute name from the selector
                if (selector.includes("property=")) {
                    el.setAttribute("property", selector.match(/property="([^"]+)"/)[1]);
                } else if (selector.includes("name=")) {
                    el.setAttribute("name", selector.match(/name="([^"]+)"/)[1]);
                }
                document.head.appendChild(el);
            }
            el.setAttribute(attr, value);
        };

        const setLink = (rel, href) => {
            let el = document.head.querySelector(`link[rel="${rel}"][data-page-meta]`);
            if (!el) {
                el = document.createElement("link");
                el.setAttribute("rel", rel);
                el.setAttribute("data-page-meta", "");
                document.head.appendChild(el);
            }
            el.setAttribute("href", href);
        };

        setMeta('meta[name="description"]', "content", description);
        setMeta('meta[name="robots"]', "content", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

        setLink("canonical", url);

        setMeta('meta[property="og:type"]', "content", ogType);
        setMeta('meta[property="og:site_name"]', "content", "Clarove Systems Limited");
        setMeta('meta[property="og:url"]', "content", url);
        setMeta('meta[property="og:title"]', "content", title);
        setMeta('meta[property="og:description"]', "content", description);
        // setMeta('meta[property="og:image"]', "content", ogImage);
        setMeta('meta[property="og:image:width"]', "content", "1200");
        setMeta('meta[property="og:image:height"]', "content", "630");
        setMeta('meta[property="og:image:alt"]', "content", `${title} — Clarove Systems Limited`);
        setMeta('meta[property="og:locale"]', "content", "en_GB");

        setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
        setMeta('meta[name="twitter:site"]', "content", "@clarovesystems");
        setMeta('meta[name="twitter:url"]', "content", url);
        setMeta('meta[name="twitter:title"]', "content", title);
        setMeta('meta[name="twitter:description"]', "content", description);
        // setMeta('meta[name="twitter:image"]', "content", ogImage);
        setMeta('meta[name="twitter:image:alt"]', "content", `${title} — Clarove Systems Limited`);

        // Remove any existing page-meta schema before writing a new one
        const existing = document.head.querySelector('script[data-page-meta-schema]');
        if (existing) existing.remove();

        const defaultSchema = {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Clarove Systems Limited",
            "alternateName": "Clarove Systems",
            "url": "https://clarovesystems.com",
            "logo": "https://clarovesystems.com/assets/images/clarove-favicon.png",
            "description": description,
            "slogan": "Clearly crafted. Precisely built.",
            "foundingDate": "2026",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lagos",
                "addressCountry": "NG"
            },
            "areaServed": [
                { "@type": "Country", "name": "Nigeria" },
                { "@type": "Country", "name": "United Kingdom" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "United States" }
            ],
            "serviceType": [
                "Website Development",
                "Web Application Development",
                "SaaS Platform Development",
                "Marketplace Development",
                "Mobile App Development",
                "MVP Development"
            ],
            // "sameAs": [
            //     "https://linkedin.com/company/clarovesystems"
            // ]
        };

        const schema = schemaAttr ? JSON.parse(schemaAttr) : defaultSchema;

        const schemaScript = document.createElement("script");
        schemaScript.type = "application/ld+json";
        schemaScript.setAttribute("data-page-meta-schema", "");
        schemaScript.textContent = JSON.stringify(schema);
        document.head.appendChild(schemaScript);
    }

    render() { }
}