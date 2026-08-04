export const locales = ['zh-cn', 'en'] as const

export type Locale = (typeof locales)[number]

export const localeMeta = {
    'zh-cn': {
        htmlLang: 'zh-CN',
        ogLocale: 'zh_CN',
        homePath: '/'
    },
    en: {
        htmlLang: 'en',
        ogLocale: 'en_US',
        homePath: '/en/'
    }
} as const satisfies Record<Locale, {
    htmlLang: string
    ogLocale: string
    homePath: string
}>
