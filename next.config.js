module.exports = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
})({
    output: 'export',
    images: { unoptimized: true },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/wiki' : undefined,
});
