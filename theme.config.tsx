import { DocsThemeConfig } from 'nextra-theme-docs';
import React from 'react';

const config: DocsThemeConfig = {
    useNextSeoProps: () => ({ title: 'MagmaMC', description: '%s', themeColor: '#ff9500' }),
    head: (
        <>
            <link rel='icon' type='image/x-icon' href='/assets/magma.ico' />
            <meta content='/assets/magma.ico' property='og:image' />
        </>
    ),
    logo: (
        <>
            <img src='/assets/magma.ico' width={32} height={32} />
            <h1 style={{ marginLeft: '0.5rem', fontWeight: 600 }}>MagmaMC</h1>
        </>
    ),
    chat: { link: 'https://discord.gg/e2dq93gBuH' },
    docsRepositoryBase: 'https://github.com/magmaorg/wiki',
    themeSwitch: {
        useOptions: () => ({ dark: 'Черный', light: 'Белый', system: 'Системный' }),
    },
    search: {
        emptyResult: (
            <span className='nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400'>
                Результатов не найдено.
            </span>
        ),
        error: 'Произошла ошибка.',
        placeholder: () => 'Поиск документации…',
    },
    gitTimestamp: ({ timestamp }) => (
        <>
            Страница была изменена{' '}
            <time dateTime={timestamp.toISOString()}>
                {timestamp.toLocaleDateString('ru-RU', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                })}
            </time>
        </>
    ),
    navigation: { prev: true, next: true },
    feedback: { content: null },
    footer: { component: null },
    editLink: { text: 'Изменить страницу' },
    toc: { title: 'На этой странице' },
};

export default config;
