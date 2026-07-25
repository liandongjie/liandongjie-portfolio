export const profile = {
  name: 'DONGJIE',
  role: 'Full-stack Developer',
  direction: '全栈开发',
  description: 'DONGJIE 的个人主页，记录全栈开发方向的学习与探索。',
  intro: '以全栈开发为当前方向，持续探索从界面到应用逻辑的完整开发过程。',
  education: [
    { school: '中国农业大学', degree: '本科' },
    { school: '南京大学', degree: '硕士' },
  ],
  contact: {
    phone: '(+86) 19801296231',
    phoneHref: 'tel:+8619801296231',
    phoneCopy: '+86 19801296231',
    email: '502022270071@smail.nju.edu.cn',
    emailHref: 'mailto:502022270071@smail.nju.edu.cn',
  },
  nav: [
    { href: '#home', label: '首页' },
    { href: '#about', label: '关于' },
    { href: '#education', label: '教育经历' },
    { href: '#blog', label: '博客' },
    { href: '#contact', label: '联系方式' },
  ],
} as const;
