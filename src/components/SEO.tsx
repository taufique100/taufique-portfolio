import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export default function SEO({ 
  title = "Taufique Ali - Full Stack Developer | React, Node.js, TypeScript Expert",
  description = "Experienced Full Stack Developer specializing in React.js, Next.js, Angular, Node.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS. Frontend & Backend Developer with expertise in MERN Stack, REST APIs, MongoDB, Express.js",
  keywords = "frontend developer, backend developer, full stack developer, react developer, reactjs developer, nextjs developer, angular developer, javascript developer, typescript developer, nodejs developer, mern stack developer, html developer, css developer, tailwind css developer, web developer, software developer",
  canonical = "https://taufiqueali.dev1.cloud/"
}: SEOProps) {
  
  useEffect(() => {
    document.title = title;
    
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonical },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);
      
      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    });

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);
  }, [title, description, keywords, canonical]);

  return null;
}
