
import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogImage = "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  structuredData
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const metaTags = {
      description: description,
      keywords: keywords || "",
      "og:title": title,
      "og:description": description,
      "og:type": "website",
      "og:image": ogImage,
      "og:url": canonicalUrl || window.location.href,
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": ogImage
    };
    
    // Set meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      // Remove existing meta tag if it exists
      const existingTag = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (existingTag) {
        existingTag.remove();
      }
      
      // Create and append new meta tag
      if (content) {
        const meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    });
    
    // Set canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonicalUrl);
    } else if (linkCanonical) {
      linkCanonical.remove();
    }
    
    // Add structured data if provided
    if (structuredData) {
      // Remove any existing structured data
      const existingStructuredData = document.querySelector('script[type="application/ld+json"]');
      if (existingStructuredData) {
        existingStructuredData.remove();
      }
      
      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    // Cleanup function
    return () => {
      // This is optional since in a SPA they'll be replaced anyway
      // but good practice for component unmounting
    };
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);
  
  return null; // This component doesn't render anything
};

export default SEO;
