# liandongjie-portfolio

DONGJIE 的中英文个人主页，使用 Astro、TypeScript 和原生 CSS 构建。

## 页面语言

- 中文首页：`/`
- 英文首页：`/en/`
- 中文博客：`/blog/[slug]/`

项目使用 Astro 内置国际化路由。中文为默认语言，不根据浏览器语言自动跳转；博客本阶段仅提供中文版本。

## 本地开发

需要 Node.js 22.12.0 或更高版本，以及 npm 9.6.5 或更高版本。

```bash
npm install
npm run dev
```

默认开发地址为 `http://localhost:4321`。

## 检查与构建

```bash
npm run check
npm run build
npm run preview
```

生产构建输出到 `dist/`，本地预览默认使用 `http://localhost:4321`。

## 部署到 Vercel

1. 将仓库导入 Vercel。
2. Framework Preset 选择 Astro（通常会自动识别）。
3. Build Command 使用 `npm run build`，Output Directory 使用 `dist`。
4. 正式域名确定后，在 `astro.config.mjs` 中配置 `site`，并为页面补充绝对 canonical、`og:url` 和 `og:image` URL。

当前项目使用 Astro 的静态输出，无需安装 `@astrojs/vercel` 适配器。
