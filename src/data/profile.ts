type Project = {
    name: string
    description: string
    technologies: readonly string[]
    status: string
    url?: string
}

export const profile = {
    name: 'DONGJIE',
    direction: '全栈开发 / 前端开发 / 后端开发',
    description: 'DONGJIE 的个人主页。',
    experience: [
        {
            company: '上海量客私募基金管理有限公司',
            role: '全栈实习生',
            location: '南京',
            period: '2026.06–2026.08'
        },
        {
            company: 'FilmAction AI',
            role: '全栈实习生',
            location: '北京',
            period: '2026.04–2026.06'
        },
        {
            company: '百度',
            role: '前端实习生',
            location: '上海',
            period: '2025.08–2025.11'
        },
        {
            company: '生态环境部环境发展中心',
            role: 'WebGIS 全栈实习生',
            location: '北京',
            period: '2021.10–2022.03'
        }
    ],
    projects: [
        {
            name: 'OMMS 运维监控系统',
            description: '基于 Vue 和 FastAPI 构建的运维监控系统，用于监控和管理服务器资源。',
            technologies: ['Vue', 'TypeScript', 'Ant Design Vue', 'Axios', 'Python', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'MySQL', 'Uvicorn'],
            url: 'https://github.com/liandongjie/omms_app',
            status: '已上线'
        }
    ] satisfies readonly Project[],
    skills: [
        {
            category: '前端开发',
            description: '响应式页面、组件化开发、接口联调与交互优化',
            technologies: ['JavaScript、TypeScript', 'React、Vue', 'Element Plus、Ant Design']
        },
        {
            category: '后端与接口',
            description: '接口设计、业务逻辑实现及前后端联调',
            technologies: ['Python', 'FastAPI、Flask', 'RESTful API、SQLAlchemy']
        },
        {
            category: '数据库与数据',
            description: '数据表设计、SQL 查询、数据持久化和数据库迁移',
            technologies: ['MySQL、PostgreSQL、SQLite']
        },
        {
            category: '工程化与部署',
            description: 'Linux 环境下的构建、测试、部署和问题排查基础',
            technologies: ['Git、Docker、Nginx、Postman', 'GitHub Actions']
        }
    ],
    education: [
        {
            school: '南京大学',
            logo: '/nju-logo.png',
            logoAlt: '南京大学校徽',
            tags: ['985', '211', '双一流', 'C9'],
            period: '2024.09—2027.06',
            status: '硕士在读',
            location: '南京',
            degrees: [
                {
                    label: '硕士阶段',
                    period: '2024.09—2027.06',
                    major: '地图学与地理信息系统',
                    credential: '硕士',
                    college: '地理与海洋科学学院',
                    studyMode: '全日制',
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
                    title: '研究与成果',
                    items: ['研究方向：遥感语义分割', '发表 SCI 论文 1 篇', '国家发明专利 3 项', '获学业一等奖学金']
                }
            ]
        },
        {
            school: '中国农业大学',
            logo: '/cau-logo.png',
            logoAlt: '中国农业大学校徽',
            tags: ['985', '211', '双一流'],
            period: '2018.09—2022.06',
            status: '',
            location: '北京',
            degrees: [
                {
                    label: '主修',
                    period: '2018.09—2022.06',
                    major: '地理信息科学',
                    credential: '本科',
                    college: '土地科学与技术学院',
                    studyMode: '全日制',
                    facts: ['GPA：3.74/4.00', '专业排名：4/35'],
                    courses: ['地理信息系统', '遥感原理', '遥感数字图像处理']
                },
                {
                    label: '双学位',
                    period: '2019.09—2022.06',
                    major: '计算机科学与技术',
                    credential: '本科',
                    college: '信息与电气工程学院',
                    studyMode: '',
                    facts: [],
                    courses: ['数据结构', '计算机网络', '面向对象程序设计', '数据库原理']
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
                    title: '专业成果',
                    items: ['发表 SCI 论文 1 篇（第一作者）', '获软件著作权 2 项']
                },
                {
                    title: '学生工作',
                    items: ['担任学院分团委部门负责人、班级委员', '策划并组织多项志愿服务活动，累计覆盖人数超过 1000 人']
                },
                {
                    title: '荣誉奖项',
                    items: ['中国农业大学优秀毕业生', '学习优秀一等奖学金', '全国大学生英语竞赛二等奖（国家级）', '全国大学生数学竞赛二等奖（国家级）', '美赛 Honorable Mention']
                },
                {
                    title: '升学',
                    items: ['2021 年获推免资格，推免至南京大学地理与海洋科学学院']
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
    },
    nav: [
        { href: '#home', label: '首页' },
        { href: '#experience', label: '经历' },
        { href: '#projects', label: '项目' },
        { href: '#skills', label: '技能' },
        { href: '#education', label: '教育' },
        { href: '#blog', label: '博客' },
        { href: '#contact', label: '联系' }
    ]
} as const
