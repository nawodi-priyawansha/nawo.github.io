// scripts/generate-robots.js
const fs = require('fs');
require('dotenv').config();

const baseUrl = process.env.BASE_URL || 'https://your-domain.com';

const robotsTxt = `
User-agent: *
Allow: /
Disallow: /private/

Sitemap: ${baseUrl}/sitemap.xml
Host: ${baseUrl}
`;

fs.writeFileSync('public/robots.txt', robotsTxt.trim());
console.log('✅ robots.txt generated.');
