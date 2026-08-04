import type { Locale } from './config'

const ui = {
    'zh-cn': {
        seo: {
            title: 'DONGJIE｜全栈 / 前端 / 后端',
            description: 'DONGJIE 的个人主页。'
        },
        nav: {
            items: [
                { href: '#home', label: '首页' },
                { href: '#experience', label: '经历' },
                { href: '#projects', label: '项目' },
                { href: '#skills', label: '技能' },
                { href: '#education', label: '教育' },
                { href: '#blog', label: '博客' },
                { href: '#contact', label: '联系' }
            ],
            homeLabel: '返回首页',
            mainLabel: '主导航',
            mobileLabel: '移动端主导航',
            openMenuLabel: '打开导航菜单',
            menu: '菜单',
            languageLabel: '语言选择',
            chineseLabel: '中文',
            englishLabel: '切换到英文页面',
            englishHomeLabel: '前往英文首页，本文暂无英文版本'
        },
        theme: {
            dark: '深色',
            light: '浅色',
            switchToDark: '切换为深色模式',
            switchToLight: '切换为浅色模式'
        },
        hero: {
            eyebrow: '求职方向',
            contact: '联系我',
            projects: '查看项目',
            portraitLabel: '个人照片',
            portraitAlt: 'DONGJIE 个人照片'
        },
        sections: {
            experience: '实习经历',
            projects: '个人项目',
            skills: '专业技能',
            education: '教育经历',
            contact: '保持联系'
        },
        projects: {
            newTab: '在新标签页打开',
            technologies: '技术'
        },
        education: {
            schoolTags: '学校标签',
            major: '专业',
            degree: '学位',
            school: '学院',
            studyMode: '培养方式',
            courses: '代表课程',
            publication: '论文成果',
            courseSeparator: '、'
        },
        contact: {
            description: '如果你想与我交流，可以通过电话或邮件联系。',
            phone: '电话',
            email: '邮箱',
            copyPhone: '复制电话',
            copyEmail: '复制邮箱',
            phoneCopied: '电话号码已复制',
            emailCopied: '邮箱地址已复制',
            copyFailed: '复制失败，请手动选择并复制。'
        }
    },
    en: {
        seo: {
            title: 'DONGJIE | Full-Stack / Frontend / Backend Developer',
            description: "DONGJIE's portfolio featuring experience, projects, skills and education in full-stack, frontend and backend development."
        },
        nav: {
            items: [
                { href: '#home', label: 'Home' },
                { href: '#experience', label: 'Experience' },
                { href: '#projects', label: 'Projects' },
                { href: '#skills', label: 'Skills' },
                { href: '#education', label: 'Education' },
                { href: '#contact', label: 'Contact' }
            ],
            homeLabel: 'Back to homepage',
            mainLabel: 'Main navigation',
            mobileLabel: 'Mobile navigation',
            openMenuLabel: 'Open navigation menu',
            menu: 'Menu',
            languageLabel: 'Language selection',
            chineseLabel: 'Switch to the Chinese version',
            englishLabel: 'English',
            englishHomeLabel: 'English homepage'
        },
        theme: {
            dark: 'Dark',
            light: 'Light',
            switchToDark: 'Switch to dark mode',
            switchToLight: 'Switch to light mode'
        },
        hero: {
            eyebrow: 'Target Roles',
            contact: 'Contact Me',
            projects: 'View Projects',
            portraitLabel: 'Personal photo',
            portraitAlt: 'Portrait of DONGJIE'
        },
        sections: {
            experience: 'Experience',
            projects: 'Projects',
            skills: 'Skills',
            education: 'Education',
            contact: 'Get in Touch'
        },
        projects: {
            newTab: 'opens in a new tab',
            technologies: 'technologies'
        },
        education: {
            schoolTags: 'School labels',
            major: 'Major',
            degree: 'Degree',
            school: 'School',
            studyMode: 'Study Mode',
            courses: 'Selected Coursework',
            publication: 'Publications',
            courseSeparator: ', '
        },
        contact: {
            description: 'Feel free to contact me by phone or email.',
            phone: 'Phone',
            email: 'Email',
            copyPhone: 'Copy phone number',
            copyEmail: 'Copy email address',
            phoneCopied: 'Phone number copied',
            emailCopied: 'Email address copied',
            copyFailed: 'Copy failed. Please select and copy it manually.'
        }
    }
} as const

export type Ui = (typeof ui)[Locale]

export const getUi = (locale: Locale): Ui => ui[locale]
