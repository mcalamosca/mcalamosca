/*
example command:
"build-sitemap": {
      "executor": "nx:run-commands",
      "outputs": [],
      "options": {
        "command": "node ./tools/sitemap.js --domain=https://www.davidesauce.com --routes=../apps/davide-sauce/src/app/app.routes.ts --out=../dist/apps/davide-sauce/browser"
      }
    }
*/

const fs = require('fs');
const { resolve } = require('path');

// Process command-line arguments
const args = process.argv.slice(2);
const params = args.reduce((acc, current) => {
  const [key, value] = current.split('=');
  acc[key.replace('--', '')] = value;
  return acc;
}, {});

// Extract parameters
const { domain, routes: routesPath, out: outputPath } = params;

// Function to read and extract routes from the Angular routing file
const extractRoutes = (routesPath) => {
  const routesFileContent = fs.readFileSync(resolve(__dirname, routesPath), 'utf8');
  const routeMatches = [...routesFileContent.matchAll(/path: '([^']*)'/g)];
  const routes = routeMatches.map((match) => match[1]).filter((path) => path !== '**');
  return routes;
};

const generateSitemap = (domain, routes, outputPath) => {
  const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
  const changefreq = 'yearly'; // For static business pages that rarely change

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route, index) => {
    const priority = (1 - index / routes.length).toFixed(2); // Decrease priority based on order
    return `
    <url>
        <loc>${`${domain}/${route}`.replace(/\/+$/, '')}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
    </url>`;
  })
  .join('')}
</urlset>`;

  // Ensure the output directory exists
  const outputDir = resolve(__dirname, outputPath);
  fs.mkdirSync(outputDir, { recursive: true });

  // Write the sitemap file
  fs.writeFileSync(resolve(outputDir, 'sitemap.xml'), sitemap);
  console.log(`Sitemap generated at ${outputDir}/sitemap.xml`);

  // Generate robots.txt and place in the same directory as the sitemap
  const robotsContent = `User-agent: *
Allow: /
Sitemap: ${domain}/sitemap.xml`;

  fs.writeFileSync(resolve(outputDir, 'robots.txt'), robotsContent);
  console.log(`robots.txt generated at ${outputDir}/robots.txt`);
};

const routes = extractRoutes(routesPath);
generateSitemap(domain, routes, outputPath);

process.exit(0);
