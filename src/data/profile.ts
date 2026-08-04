import type { Locale } from '../i18n/config'

type LocalizedText = Record<Locale, string>
type LocalizedOptionalText = Record<Locale, string | null>

const text = (zh: string, en: string): LocalizedText => ({ 'zh-cn': zh, en })
const optionalText = (zh: string, en: string | null): LocalizedOptionalText => ({ 'zh-cn': zh, en })

const profileData = {
    name: 'DONGJIE',
    direction: text('全栈开发 / 前端开发 / 后端开发', 'Full-Stack Developer / Frontend Developer / Backend Developer'),
    experience: [
        {
            company: text('上海量客私募基金管理有限公司', 'Shanghai Liangke Private Equity Fund Management Co., Ltd.'),
            showOriginalInEnglish: true,
            role: text('全栈实习生', 'Full-Stack Developer Intern'),
            location: text('南京', 'Nanjing'),
            period: '2026.06–2026.08'
        },
        {
            company: text('FilmAction AI', 'FilmAction AI'),
            showOriginalInEnglish: false,
            role: text('全栈实习生', 'Full-Stack Developer Intern'),
            location: text('北京', 'Beijing'),
            period: '2026.04–2026.06'
        },
        {
            company: text('百度', 'Baidu'),
            showOriginalInEnglish: false,
            role: text('前端实习生', 'Frontend Developer Intern'),
            location: text('上海', 'Shanghai'),
            period: '2025.08–2025.11'
        },
        {
            company: text('生态环境部环境发展中心', 'Environmental Development Center, Ministry of Ecology and Environment'),
            showOriginalInEnglish: true,
            role: text('WebGIS 全栈实习生', 'WebGIS Full-Stack Developer Intern'),
            location: text('北京', 'Beijing'),
            period: '2021.10–2022.03'
        }
    ],
    projects: [
        {
            name: text('OMMS 运维监控系统', 'OMMS — Operations Monitoring System'),
            description: text('基于 Vue 和 FastAPI 构建的运维监控系统，用于监控和管理服务器资源。', 'An operations monitoring system built with Vue and FastAPI for monitoring and managing server resources.'),
            technologies: ['Vue', 'TypeScript', 'Ant Design Vue', 'Axios', 'Python', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'MySQL', 'Uvicorn'],
            url: 'https://github.com/liandongjie/omms_app',
            status: text('已上线', 'Deployed')
        }
    ],
    skills: [
        {
            category: text('前端开发', 'Frontend Development'),
            description: text('响应式页面、组件化开发、接口联调与交互优化', 'Responsive web development, component-based development, API integration, and interaction refinement'),
            technologies: {
                'zh-cn': ['JavaScript、TypeScript', 'React、Vue', 'Element Plus、Ant Design'],
                en: ['JavaScript, TypeScript', 'React, Vue', 'Element Plus, Ant Design']
            }
        },
        {
            category: text('后端与接口', 'Backend Development & APIs'),
            description: text('接口设计、业务逻辑实现及前后端联调', 'API design, business logic implementation, and frontend-backend integration'),
            technologies: {
                'zh-cn': ['Python', 'FastAPI、Flask', 'RESTful API、SQLAlchemy'],
                en: ['Python', 'FastAPI, Flask', 'RESTful API, SQLAlchemy']
            }
        },
        {
            category: text('数据库与数据', 'Databases & Data'),
            description: text('数据表设计、SQL 查询、数据持久化和数据库迁移', 'Database schema design, SQL querying, data persistence, and database migrations'),
            technologies: {
                'zh-cn': ['MySQL、PostgreSQL、SQLite'],
                en: ['MySQL, PostgreSQL, SQLite']
            }
        },
        {
            category: text('工程化与部署', 'Engineering & Deployment'),
            description: text('Linux 环境下的构建、测试、部署和问题排查基础', 'Build, testing, deployment, and basic troubleshooting in Linux environments'),
            technologies: {
                'zh-cn': ['Git、Docker、Nginx、Postman', 'GitHub Actions'],
                en: ['Git, Docker, Nginx, Postman', 'GitHub Actions']
            }
        }
    ],
    education: [
        {
            school: text('南京大学', 'Nanjing University'),
            logo: '/nju-logo.png',
            logoAlt: text('南京大学校徽', 'Nanjing University logo'),
            tags: [text('985', '985'), text('211', '211'), text('双一流', 'Double First-Class'), text('C9', 'C9')],
            period: '2024.09—2027.06',
            status: text('硕士在读', 'Master’s Student'),
            location: text('南京', 'Nanjing'),
            degrees: [
                {
                    label: text('硕士阶段', 'Master’s Program'),
                    period: '2024.09—2027.06',
                    major: text('地图学与地理信息系统', 'Cartography and Geographic Information System'),
                    credential: text('硕士', 'Master’s Degree'),
                    college: text('地理与海洋科学学院', 'School of Geography and Ocean Science'),
                    studyMode: text('全日制', 'Full-time'),
                    facts: [],
                    courses: []
                }
            ],
            publication: {
                title: 'PFEB: A Post-Fusion Enhanced Decoder Module for Remote Sensing Semantic Segmentation',
                venue: 'Remote Sensing',
                date: '2026-04-20',
                doi: '10.3390/rs18081246',
                url: 'https://doi.org/10.3390/rs18081246',
                authors: 'Dongjie Lian; Gang Chen; Biao Wu; Feifan Yang'
            },
            sections: [
                {
                    title: text('研究与成果', 'Research & Achievements'),
                    items: [
                        optionalText('研究方向：遥感语义分割', 'Research Area: Remote Sensing Semantic Segmentation'),
                        optionalText('发表 SCI 论文 1 篇', 'Published 1 SCI-indexed paper'),
                        optionalText('国家发明专利 3 项', null),
                        optionalText('获学业一等奖学金', 'Received a First-Class Academic Scholarship')
                    ]
                }
            ]
        },
        {
            school: text('中国农业大学', 'China Agricultural University'),
            logo: '/cau-logo.png',
            logoAlt: text('中国农业大学校徽', 'China Agricultural University logo'),
            tags: [text('985', '985'), text('211', '211'), text('双一流', 'Double First-Class')],
            period: '2018.09—2022.06',
            status: text('', ''),
            location: text('北京', 'Beijing'),
            degrees: [
                {
                    label: text('主修', 'Primary Major'),
                    period: '2018.09—2022.06',
                    major: text('地理信息科学', 'Geographic Information Science'),
                    credential: text('本科', 'Bachelor’s Degree'),
                    college: text('土地科学与技术学院', 'College of Land Science and Technology'),
                    studyMode: text('全日制', 'Full-time'),
                    facts: [text('GPA：3.74/4.00', 'GPA: 3.74/4.00'), text('专业排名：4/35', 'Rank in Major: 4/35')],
                    courses: [text('地理信息系统', 'Geographic Information Systems'), text('遥感原理', 'Principles of Remote Sensing'), text('遥感数字图像处理', 'Digital Image Processing for Remote Sensing')]
                },
                {
                    label: text('双学位', 'Dual Degree'),
                    period: '2019.09—2022.06',
                    major: text('计算机科学与技术', 'Computer Science and Technology'),
                    credential: text('本科', 'Bachelor’s Degree'),
                    college: text('信息与电气工程学院', 'College of Information and Electrical Engineering'),
                    studyMode: text('', ''),
                    facts: [],
                    courses: [text('数据结构', 'Data Structures'), text('计算机网络', 'Computer Networks'), text('面向对象程序设计', 'Object-Oriented Programming'), text('数据库原理', 'Database Principles')]
                }
            ],
            publication: {
                title: 'The contrasting trend of global urbanization-induced impacts on day and night land surface temperature from a time-series perspective',
                venue: 'Sustainable Cities and Society',
                date: '2024-08',
                doi: '10.1016/j.scs.2024.105521',
                url: 'https://doi.org/10.1016/j.scs.2024.105521',
                authors: 'Dongjie Lian; Bo Yuan; Xuecao Li; Zitong Shi; Qiwei Ma; Tengyun Hu; Shuangxi Miao; Jianxi Huang; Guanpeng Dong; Yong Liu'
            },
            sections: [
                {
                    title: text('专业成果', 'Academic Achievements'),
                    items: [optionalText('发表 SCI 论文 1 篇（第一作者）', 'Published 1 SCI-indexed paper as first author'), optionalText('获软件著作权 2 项', '2 software copyright registrations')]
                },
                {
                    title: text('学生工作', 'Student Leadership'),
                    items: [
                        optionalText('担任学院分团委部门负责人、班级委员', 'Served as a department lead in the school’s Youth League committee and as a class committee member'),
                        optionalText('策划并组织多项志愿服务活动，累计覆盖人数超过 1000 人', 'Planned and organized volunteer service activities with a cumulative reach of more than 1,000 participants.')
                    ]
                },
                {
                    title: text('荣誉奖项', 'Honors & Awards'),
                    items: [
                        optionalText('中国农业大学优秀毕业生', 'Outstanding Graduate of China Agricultural University'),
                        optionalText('学习优秀一等奖学金', 'First-Class Scholarship for Academic Excellence'),
                        optionalText('全国大学生英语竞赛二等奖（国家级）', 'Second Prize, National English Competition for College Students — National Level'),
                        optionalText('全国大学生数学竞赛二等奖（国家级）', 'Second Prize, Chinese Mathematics Competitions — National Level'),
                        optionalText('美赛 Honorable Mention', 'Honorable Mention, COMAP ICM')
                    ]
                },
                {
                    title: text('升学', 'Graduate Admission'),
                    items: [optionalText('2021 年获推免资格，推免至南京大学地理与海洋科学学院', 'In 2021, received recommendation-based admission to the School of Geography and Ocean Science at Nanjing University without taking the national postgraduate entrance examination.')]
                }
            ]
        }
    ],
    contact: {
        phone: '(+86) 19801296231',
        phoneHref: 'tel:+8619801296231',
        phoneCopy: '+86 19801296231',
        email: '502022270071@smail.nju.edu.cn',
        emailHref: 'mailto:502022270071@smail.nju.edu.cn'
    }
} as const

export const getProfile = (locale: Locale) => ({
    name: profileData.name,
    direction: profileData.direction[locale],
    experience: profileData.experience.map(item => ({
        company: item.company[locale],
        companyOriginal: locale === 'en' && item.showOriginalInEnglish ? item.company['zh-cn'] : undefined,
        role: item.role[locale],
        location: item.location[locale],
        period: item.period
    })),
    projects: profileData.projects.map(project => ({
        name: project.name[locale],
        description: project.description[locale],
        technologies: project.technologies,
        url: project.url,
        status: project.status[locale]
    })),
    skills: profileData.skills.map(skill => ({
        category: skill.category[locale],
        description: skill.description[locale],
        technologies: skill.technologies[locale]
    })),
    education: profileData.education.map(item => ({
        school: item.school[locale],
        logo: item.logo,
        logoAlt: item.logoAlt[locale],
        tags: item.tags.map(tag => tag[locale]),
        period: item.period,
        status: item.status[locale],
        location: item.location[locale],
        degrees: item.degrees.map(degree => ({
            label: degree.label[locale],
            period: degree.period,
            major: degree.major[locale],
            credential: degree.credential[locale],
            college: degree.college[locale],
            studyMode: degree.studyMode[locale],
            facts: degree.facts.map(fact => fact[locale]),
            courses: degree.courses.map(course => course[locale])
        })),
        publication: item.publication,
        sections: item.sections.map(section => ({
            title: section.title[locale],
            items: section.items.map(detail => detail[locale]).filter((detail): detail is string => detail !== null)
        }))
    })),
    contact: profileData.contact
})

export type Profile = ReturnType<typeof getProfile>

export const profile = getProfile('zh-cn')
