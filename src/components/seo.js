import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = '⚡Shayne Fawcett: a seasoned web developer who builds websites and eCommerce storefronts using Shopify, React, WordPress, and more.⚡',
  author = 'Shayne Fawcett',
  meta,
  title = 'Websites, eCommerce &#38; User Experience | Shayne Fawcett',
}) {
  const metaData = [
    {
      name: `description`,
      content: `⚡Shayne Fawcett: a seasoned web developer who builds websites and eCommerce storefronts using Shopify, React, WordPress, and more.⚡`,
    },
    {
      name: `keywords`,
      content: `web, web design, web development, ecommerce, ecommerce website, shopify, react, next.js, wordpress, ux, user experience, headless, graphql`,
    },
    {
      property: `og:title`,
      content: `Websites, eCommerce &#38; User Experience | Shayne Fawcett`,
    },
    {
      property: `og:description`,
      content: `⚡Shayne Fawcett: a seasoned web developer who builds websites and eCommerce storefronts using Shopify, React, WordPress, and more.⚡`,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:image`,
      content: `https://www.shaynefawcett.dev/open-graph-site-thumbnail.webp`,
    },
    {
      property: `og:url`,
      content: `https://www.shaynefawcett.dev/`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: `Shayne Fawcett`,
    },
    {
      name: `twitter:title`,
      content: `Websites, eCommerce &#38; User Experience | Shayne Fawcett`,
    },
    {
      name: `twitter:description`,
      content: `⚡Shayne Fawcett: a seasoned web developer who builds websites and eCommerce storefronts using Shopify, React, WordPress, and more.⚡`,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content, property, keywords }, i) => (
        <meta key={i} property={property} name={name} keywords={keywords} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
