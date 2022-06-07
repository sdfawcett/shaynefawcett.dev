import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = '⚡Shayne Fawcett: a seasoned web developer from a communications background with UX chops. Building web and eCommerce experiences using Shopify, React, WordPress, and other API-driven technologies.⚡',
  author = 'Shayne Fawcett',
  meta,
  title = 'Web Development, eCommerce Consulting &#38; UX Optimization | Shayne Fawcett',
}) {
  const metaData = [
    {
      name: `description`,
      content: `⚡Shayne Fawcett: a seasoned web developer from a communications background with UX chops. Web experiences built with Shopify, React, WordPress, and more.⚡`,
    },
    {
      property: `og:title`,
      content: `Web Development, eCommerce Consulting &#38; UX Optimization | Shayne Fawcett`,
    },
    {
      property: `og:description`,
      content: `⚡Shayne Fawcett: a seasoned web developer from a communications background with UX chops. Building web and eCommerce experiences using Shopify, React, WordPress, and other API-driven technologies.⚡`,
    },
    {
      property: `og:type`,
      content: `website`,
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
      content: `Web Development, eCommerce Consulting &#38; UX Optimization | Shayne Fawcett`,
    },
    {
      name: `twitter:description`,
      content: `⚡Shayne Fawcett: a seasoned web developer from a communications background with UX chops. Building web and eCommerce experiences using Shopify, React, WordPress, and other API-driven technologies.⚡`,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content, property }, i) => (
        <meta key={i} property={property} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
