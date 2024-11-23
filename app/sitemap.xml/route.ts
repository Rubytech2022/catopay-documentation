// app/sitemap.js
export async function GET() {
    // Replace this with your dynamic data fetching logic
    const siteUrl = 'https://docs.catopay.com';
    const pages = ['', '/docs/getting-started/refund', '/docs/getting-started/payment']; // Static pages

    const urls = pages.map((page) => ({
        url: `${siteUrl}${page}`,
        lastModified: new Date().toISOString(),
    }));

    // Generate the XML structure
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
            .map(
                (url) => `
          <url>
            <loc>${url.url}</loc>
            <lastmod>${url.lastModified}</lastmod>
          </url>
        `
            )
            .join('')}
      </urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
