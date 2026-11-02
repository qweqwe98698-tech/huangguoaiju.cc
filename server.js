const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  // 1. WWW 301 重定向规划模拟（生产环境 CDN / DNS 会直接生效）
  const host = req.headers.host || '';
  if (host.startsWith('www.')) {
    const nakedHost = host.replace(/^www\./, '');
    res.writeHead(301, {
      'Location': `https://${nakedHost}${req.url}`
    });
    res.end();
    return;
  }

  // 2. 解析请求路径
  let reqPath = decodeURI(req.url.split('?')[0].split('#')[0]);
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  let filePath = path.join(ROOT, reqPath.startsWith('/') ? reqPath.slice(1) : reqPath);

  // 安全检查：防目录穿越
  if (!filePath.startsWith(ROOT)) {
    res.statusCode = 403;
    res.end('403 Forbidden');
    return;
  }

  // 如果请求的是目录（例如 /vpn/ 或 /vpn），自动寻找该目录下的 index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    const indexFile = path.join(filePath, 'index.html');
    if (fs.existsSync(indexFile)) {
      filePath = indexFile;
    }
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // 3. 真实 HTTP 404 响应，杜绝 Soft 404
      const notFoundPath = path.join(ROOT, '404.html');
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Cache-Control', 'no-cache, no-store');
      if (fs.existsSync(notFoundPath)) {
        fs.createReadStream(notFoundPath).pipe(res);
      } else {
        res.end('<h1>404 Not Found</h1>');
      }
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // 禁用开发期间强缓存，确保用户刷新即可见最新代码
    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'X-Content-Type-Options': 'nosniff'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`黄果短剧官网本地预览已启动: http://localhost:${PORT}`);
});
