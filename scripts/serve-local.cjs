// Serve only the production export; source files and environment files are never exposed.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../out');
const host = process.env.HOST || '127.0.0.1';
const port = Number(process.env.PORT || 3000);
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.txt':'text/plain; charset=utf-8','.xml':'application/xml; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.ico':'image/x-icon','.woff2':'font/woff2'};
if (!fs.existsSync(path.join(root, 'index.html'))) throw new Error('Run npm run build first.');
const server = http.createServer((req,res)=>{
  if (!['GET','HEAD'].includes(req.method)) {res.writeHead(405, {Allow:'GET, HEAD'});res.end();return;}
  let pathname;
  try {pathname=decodeURIComponent(new URL(req.url, 'http://localhost').pathname);} catch {res.writeHead(400);res.end();return;}
  if (pathname.includes('\0') || pathname.includes('\\')) {res.writeHead(400);res.end();return;}
  let file=path.resolve(root, '.'+pathname);
  if (!file.startsWith(root+path.sep) && file!==root) {res.writeHead(403);res.end();return;}
  let status=200;
  try {if(fs.statSync(file).isDirectory())file=path.join(file,'index.html');if(!fs.statSync(file).isFile())throw new Error();}
  catch {file=path.join(root,'404.html');status=404;}
  const contentType=types[path.extname(file)]||'application/octet-stream';
  res.writeHead(status, {'Content-Type':contentType,'Content-Length':fs.statSync(file).size,'X-Content-Type-Options':'nosniff','Cache-Control':pathname.startsWith('/_next/static/')?'public, max-age=31536000, immutable':'no-cache'});
  if(req.method==='HEAD'){res.end();return;}
  const stream=fs.createReadStream(file);stream.on('error',()=>res.destroy());stream.pipe(res);
});
server.listen(port,host,()=>console.log(`Highwash: http://${host}:${port}`));
server.on('error',error=>{console.error(error.message);process.exitCode=1;});
