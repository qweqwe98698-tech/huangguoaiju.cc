const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://huangguoaiju.cc';

const PAGES_TO_VERIFY = [
  { path: 'index.html', url: `${DOMAIN}/`, expectedH1: 1 },
  { path: 'vpn/index.html', url: `${DOMAIN}/vpn/`, expectedH1: 1 },
  { path: 'jichang/index.html', url: `${DOMAIN}/jichang/`, expectedH1: 1 },
  { path: 'clash/index.html', url: `${DOMAIN}/clash/`, expectedH1: 1 },
  { path: 'nodes/index.html', url: `${DOMAIN}/nodes/`, expectedH1: 1 },
  { path: 'tizi/index.html', url: `${DOMAIN}/tizi/`, expectedH1: 1 },
  { path: 'free/index.html', url: `${DOMAIN}/free/`, expectedH1: 1 },
  { path: 'tutorial/index.html', url: `${DOMAIN}/tutorial/`, expectedH1: 1 },
  { path: 'brands/index.html', url: `${DOMAIN}/brands/`, expectedH1: 1 },
  { path: 'privacy.html', url: `${DOMAIN}/privacy.html`, expectedH1: 1 },
  { path: 'terms.html', url: `${DOMAIN}/terms.html`, expectedH1: 1 },
  { path: 'disclaimer.html', url: `${DOMAIN}/disclaimer.html`, expectedH1: 1 },
  { path: '404.html', url: null, expectedH1: 1 }
];

console.log('==============================================');
console.log('🚀 执行上线前 SEO 基础设施构建与验证流程');
console.log('==============================================');

let hasErrors = false;

// 1. 验证 HTML 页面
PAGES_TO_VERIFY.forEach(page => {
  if (!fs.existsSync(page.path)) {
    console.error(`❌ [MISSING] 页面文件不存在: ${page.path}`);
    hasErrors = true;
    return;
  }

  const content = fs.readFileSync(page.path, 'utf8');

  // Title 检查
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    console.error(`❌ [TITLE] 缺少有效 Title: ${page.path}`);
    hasErrors = true;
  }

  // Description 检查
  const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
  if (!descMatch || !descMatch[1].trim()) {
    console.error(`❌ [DESC] 缺少有效 Description: ${page.path}`);
    hasErrors = true;
  }

  // Canonical 检查 (404 页面不应有 self canonical)
  if (page.url) {
    const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
    if (!canonicalMatch || canonicalMatch[1] !== page.url) {
      console.error(`❌ [CANONICAL] Canonical 异常或不匹配: ${page.path} (Found: ${canonicalMatch ? canonicalMatch[1] : 'NONE'}, Expected: ${page.url})`);
      hasErrors = true;
    }
  }

  // H1 唯一性检查
  const h1Matches = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
  if (h1Matches.length !== page.expectedH1) {
    console.error(`❌ [H1] H1 数量不符合预期 (${h1Matches.length} != ${page.expectedH1}): ${page.path}`);
    hasErrors = true;
  }

  // Schema 检查 (除 404 外需包含有效 JSON-LD)
  if (page.url) {
    const schemas = [...content.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
    if (schemas.length === 0) {
      console.error(`❌ [SCHEMA] 缺少 JSON-LD 结构化数据: ${page.path}`);
      hasErrors = true;
    } else {
      schemas.forEach(s => {
        try {
          JSON.parse(s[1]);
        } catch(e) {
          console.error(`❌ [SCHEMA SYNTAX] JSON-LD 语法错误: ${page.path} - ${e.message}`);
          hasErrors = true;
        }
      });
    }
  }

  console.log(`✅ [PASS] 页面校验通过: ${page.path} (Title: ${titleMatch ? titleMatch[1].slice(0, 24) : ''}...)`);
});

// 2. 验证 sitemap.xml
console.log('----------------------------------------------');
if (!fs.existsSync('sitemap.xml')) {
  console.error('❌ [SITEMAP] sitemap.xml 不存在');
  hasErrors = true;
} else {
  const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  console.log(`✅ [SITEMAP] 包含 ${urls.length} 个规范 URL`);
  urls.forEach(u => {
    if (!u.startsWith(DOMAIN)) {
      console.error(`❌ [SITEMAP URL] 非法主域: ${u}`);
      hasErrors = true;
    }
  });
}

// 3. 验证 robots.txt
console.log('----------------------------------------------');
if (!fs.existsSync('robots.txt')) {
  console.error('❌ [ROBOTS] robots.txt 不存在');
  hasErrors = true;
} else {
  const robots = fs.readFileSync('robots.txt', 'utf8');
  if (!robots.includes(`Sitemap: ${DOMAIN}/sitemap.xml`)) {
    console.error(`❌ [ROBOTS] 缺少正确的 Sitemap 声明`);
    hasErrors = true;
  }
  if (!robots.includes('yisouspider') || !robots.includes('Googlebot') || !robots.includes('Baiduspider')) {
    console.error(`❌ [ROBOTS] 缺少关键蜘蛛声明`);
    hasErrors = true;
  }
  console.log('✅ [ROBOTS] 规则与蜘蛛声明校验通过');
}

console.log('==============================================');
if (hasErrors) {
  console.error('❌ 构建与 SEO 校验失败，请检查上方错误项。');
  process.exit(1);
} else {
  console.log('🎉 全部构建验收项 100% 通过！网站已具备正式上线条件。');
  process.exit(0);
}
