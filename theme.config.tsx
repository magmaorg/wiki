import { DocsThemeConfig } from 'nextra-theme-docs';
import React from 'react';

const config: DocsThemeConfig = {
    useNextSeoProps: () => ({ titleTemplate: '%s – MagmaMC' }),
    head: <link rel='icon' type='image/x-icon' href='/magma.ico' />,
    logo: (
        <>
            <img src='/magma.ico' width={32} height={32} />
            <h1 style={{ marginLeft: '0.5rem', fontWeight: 600 }}>MagmaMC</h1>
        </>
    ),
    chat: { link: 'https://discord.gg/e2dq93gBuH' },
    docsRepositoryBase: 'https://github.com/magmaorg/wiki',
    themeSwitch: {
        useOptions: () => ({ dark: 'Черный', light: 'Белый', system: 'Системный' }),
    },
    feedback: { content: null },
    footer: { component: null },
    editLink: { text: 'Изменить страницу' },
    toc: { title: 'На этой странице' },
};

export default config;
