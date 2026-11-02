<div align="center">

<img src="./assets/images/logo.png" alt="黄果短剧 Logo" width="120" height="120" style="border-radius: 24px; box-shadow: 0 8px 24px rgba(245, 176, 38, 0.35);">

# 黄果短剧 (huangguoaiju.cc)

### 🎬 新一代高质量 AI 短剧索引平台 · 垂直流量高转化系统 · 纯净独立技术 SEO 架构

<p align="center">
  <a href="https://huangguoaiju.cc/"><img src="https://img.shields.io/badge/Domain-huangguoaiju.cc-f5b026?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Domain"></a>
  <a href="#"><img src="https://img.shields.io/badge/SEO_Score-98%2F100-00f59b?style=for-the-badge&logo=google&logoColor=white" alt="SEO Score"></a>
  <a href="#"><img src="https://img.shields.io/badge/Framework-Pure_Vanilla_ES6+-61dafb?style=for-the-badge&logo=javascript&logoColor=black" alt="Vanilla"></a>
  <a href="#"><img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License"></a>
</p>

<p align="center">
  <strong>面向全球华语用户的高品质 AI 漫剧、真人创意短剧与魔改脑洞剧集索引平台</strong><br>
  集成了 <strong>100% 独立的技术 SEO 资产体系</strong>、<strong>GEO 生成式 AI 搜索友好架构</strong> 与 <strong>高转化引流漏斗</strong>。
</p>

---

[🌐 在线预览](https://huangguoaiju.cc/) • [📁 目录规范](#-目录结构规范) • [⚡ 核心特性](#-核心系统架构与特性) • [🚀 快速开始](#-本地开发与部署) • [📊 SEO与风控审计](#-seo--geo-技术规范)

</div>

<br>

## 📖 项目简介

**黄果短剧** 是一套专为高并发、高转化与强搜索引擎收录设计的轻量级流媒体索引落地系统。全站采用纯原生现代 Web 技术构建，彻底剔除了重型前端框架的指纹与运行时开销，首屏实现毫秒级秒开，并在架构层面对 Google、Bing、神马（UC/夸克）、百度等传统爬虫及 GPTBot、Perplexity 等生成式 AI 搜索引擎提供了极致的语义可读性支持。

---

## ⚡ 核心系统架构与特性

### 1. 🛡️ 纯净代码级资产体系 (Zero Fingerprints)
- **彻底去除框架残留**：无任何第三方构建哈希（已清理 Astro Scoping CIDs 及框架生成器标签）。
- **100% 独立主域闭环**：统一采用裸域 `https://huangguoaiju.cc/`，全站静态资源（CSS、JS、封面图像、Favicon）本地化封装。
- **信誉隔离墙**：商业跳转外链严格遵循 Google 最新 Link Spam 规范，标配 `rel="nofollow sponsored noopener noreferrer"`。

### 2. 🎯 高转化引流漏斗 (Conversion Funnel)
- **全站海报与播放交互拦截**：点击任意剧集封面或播放键，自动触发流媒体专属专线激活弹窗。
- **动态剧名提取**：弹窗自适应抓取用户所点击的剧集名称，呈现高拟真度的海外 4K 解密提示。
- **10秒停留主动挽留**：首屏停留 10 秒后自动唤起专属观影名额弹窗，挽回跳出流量。
- **全环境防封防红盾牌**：
  - 自动识别微信、QQ、微博等受控内置浏览器；
  - 触发右上角“在浏览器中打开”动态指引，并配备剪贴板一键转存功能。

### 3. 🔍 深度 SEO 与 GEO 搜索引擎基础设施
- **标准化 URL 矩阵**：覆盖 8 大独立搜索意图专区（`/vpn/`、`/jichang/`、`/clash/`、`/nodes/`、`/tizi/`、`/free/`、`/tutorial/`、`/brands/`）。
- **GEO (生成式引擎) Answer-First 实体锚点**：在首屏直接输出大语言模型友好的陈述句与分类对比 `<table>` 表格。
- **结构化数据 (JSON-LD)**：严格按照 Schema.org 规范配置 `WebSite`、`Organization`、`CollectionPage`、`BreadcrumbList` 与 `FAQPage`。
- **E-E-A-T 信任资产**：完备的独立合规三件套（隐私政策、服务条款、免责声明）。

---

## 📁 目录结构规范

```text
huangguoaiju.cc/
├── assets/
│   ├── css/
│   │   └── style.css            # 核心响应式样式表 (流媒体深色主题 + 表格 + 转化弹窗)
│   ├── js/
│   │   └── main.js              # 原生 ES6+ 脚本 (分类筛选、弹窗控制器、防红引导)
│   └── images/
│       ├── covers/              # 30+ 张优化版短剧海报 (cover-01.webp ~ cover-30.webp)
│       ├── logo.png             # 官方高清矢量 Logo
│       ├── apple-touch-icon.png # iOS Web App 触控图标
│       └── og-home.jpg          # 社交媒体分享卡片封面
├── vpn/index.html               # 核心专区 1：VPN 加速器评测与指南
├── jichang/index.html           # 核心专区 2：最新高速稳定机场排行榜
├── clash/index.html             # 核心专区 3：Clash 客户端下载与订阅配置
├── nodes/index.html             # 核心专区 4：全球 4K 原画高速节点导航
├── tizi/index.html              # 核心专区 5：稳定科学上网梯子推荐
├── free/index.html              # 核心专区 6：免费节点与试用体验专区
├── tutorial/index.html          # 核心专区 7：全平台新手配置完全教程
├── brands/index.html            # 核心专区 8：优质网络加速品牌名录
├── privacy.html                 # 隐私保护政策 (Privacy Policy)
├── terms.html                   # 用户服务条款 (Terms of Service)
├── disclaimer.html              # 免责声明与第三方合作说明 (Disclaimer)
├── 404.html                     # 语义化 404 错误页 (杜绝 Soft 404)
├── index.html                   # 官方首页 (主转化阵地)
├── robots.txt                   # 爬虫抓取协议 (包含 Google, Bing, 百度, 神马, AI爬虫)
├── sitemap.xml                  # 规范化 XML 站点地图 (全量收录 12 个正式页面)
├── server.js                    # 轻量级本地生产预览 HTTP 服务器
├── build.js                     # 上线前自动化静态校验与完整性构建脚本
├── audit.js                     # 代码级纯净度与指纹审计工具
├── preview.bat                  # Windows 极速双击预览启动脚本
└── package.json                 # 项目依赖与执行脚本管理
```

---

## 🚀 本地开发与部署

### 1. 运行环境要求
- **Node.js**: v18.0.0 或更高版本
- **包管理器**: npm / pnpm / yarn (项目采用原生标准模块，零第三方依赖安装)

### 2. 启动本地预览
```bash
# 安装依赖 (无外部依赖，秒级就绪)
npm install

# 启动本地 HTTP 静态服务器 (监听 3000 端口)
npm start
```
> Windows 用户也可以直接双击目录下的 `preview.bat` 极速打开浏览器预览。

### 3. 上线前构建与自动化校验
```bash
# 执行全站 HTML、Title、Canonical、H1、Schema 完整性构建校验
npm run build

# 执行代码级暗桩与指纹深度审计
npm run audit
```

---

## 🌐 生产环境部署建议

### 推荐方案 A：Cloudflare Pages / Vercel (全球 CDN 加速)
1. 将本仓库关联至 **Cloudflare Pages** 或 **Vercel**；
2. 构建设置：
   - **Framework Preset**: `None / Other`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `.` (根目录)
3. 在 Cloudflare 中添加 **Redirect Rule**：将 `www.huangguoaiju.cc` 301 永久重定向至 `huangguoaiju.cc`。

### 推荐方案 B：Nginx 独立 VPS 部署
```nginx
server {
    listen 80;
    server_name huangguoaiju.cc www.huangguoaiju.cc;
    return 301 https://huangguoaiju.cc$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.huangguoaiju.cc;
    return 301 https://huangguoaiju.cc$request_uri;
}

server {
    listen 443 ssl http2;
    server_name huangguoaiju.cc;

    root /var/www/huangguoaiju.cc;
    index index.html;

    # 404 页面配置
    error_page 404 /404.html;

    # 静态资产长效缓存
    location /assets/ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    location / {
        try_files $uri $uri/ =404;
    }
}
```

---

## 📊 SEO 与站长平台提交指引

项目上线后，请直接将 `https://huangguoaiju.cc/sitemap.xml` 提交至各搜索引擎站长平台：

| 平台 | 入口 | 验证方式 |
| :--- | :--- | :--- |
| **Google Search Console** | [search.google.com](https://search.google.com/search-console) | HTML 标记 (已预留插槽) 或 DNS TXT |
| **Bing Webmaster Tools** | [bing.com/webmasters](https://www.bing.com/webmasters) | GSC 一键导入 或 HTML 标记 |
| **神马站长平台 (UC/夸克)** | [zhanzhang.sm.cn](https://zhanzhang.sm.cn/) | `shenma-site-verification` |
| **百度搜索资源平台** | [ziyuan.baidu.com](https://ziyuan.baidu.com/) | HTML 标签验证 |

---

## 📄 版权与协议

本项目遵循 [MIT License](LICENSE) 开源许可协议。

© 2026 **黄果短剧** (huangguoaiju.cc). All rights reserved.
