/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    // Needed when using `output := 'export'` to disable the Image Optimization API
    // Read more: https://nextjs.org/docs/messages/export-image-api 
    images: { unoptimized: true }, 

    distDir: 'dist',

    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,

    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
