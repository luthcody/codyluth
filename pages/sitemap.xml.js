import React from "react";
import projects from '../static/json/projects.json';

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const host = 'https://www.codyluth.com';

  const projectXML = projects.reduce((acc, project) => {
    acc += `
    <url>
      <loc>${host}/project/${project.id}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
    `;
    return acc;
  }, "")

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${host}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      ${projectXML}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;