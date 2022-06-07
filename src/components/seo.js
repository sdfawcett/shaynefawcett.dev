import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!',
  author = 'Shayne Fawcett',
  meta,
  title = 'THE TITLE',
}) {
  const metaData = [
    {
      name: `description`,
      content: `description with backticks`,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
