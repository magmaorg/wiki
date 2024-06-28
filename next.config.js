module.exports = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    staticImage: true,
    output: 'export',
})({ i18n: { locales: ['ru'], defaultLocale: 'ru' } });
