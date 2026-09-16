const fs = require('fs');
const path = require('path');
const root = path.resolve('out');
const files = [];
function walk(dir) { for (const e of fs.readdirSync(dir,{withFileTypes:true})) { const p=path.join(dir,e.name); if(e.isDirectory())walk(p);else files.push(p); } }
walk(root);
const pages=files.filter(p=>p.endsWith('.html'));
const errors=[];
let links=0,images=0;
const external=new Set();
for(const p of pages){
 const html=fs.readFileSync(p,'utf8');
 if(!p.includes('_not-found')&&!p.endsWith('404.html')){
  if((html.match(/<h1\b/g)||[]).length!==1)errors.push(`${p}: expected one H1`);
  if(!/<meta name="description" content="[^"]+"/.test(html))errors.push(`${p}: missing description`);
 }
 const route='/'+path.relative(root,p).replaceAll('\\','/').replace(/index\.html$/,'');
 for(const m of html.matchAll(/<(a|img)\b[^>]*?\b(href|src)="([^"]+)"[^>]*>/g)){
  const [tag,kind,,value]=m;
  if(kind==='a')links++;else {images++;if(!/\balt="[^"]+"/.test(tag))errors.push(`${p}: empty image alt`);}
  if(/^(https?:|mailto:|tel:)/.test(value)){external.add(value);continue;}
  if(value.startsWith('data:'))continue;
  const u=new URL(value,'https://local.test'+route);
  const target=path.join(root,decodeURIComponent(u.pathname));
  const candidates=[target,path.join(target,'index.html'),target+'.html'];
  const file=candidates.find(f=>fs.existsSync(f)&&fs.statSync(f).isFile());
  if(!file){errors.push(`${p}: missing ${value}`);continue;}
  if(u.hash&&kind==='a'){
   const body=fs.readFileSync(file,'utf8');
   if(!body.includes(`id="${decodeURIComponent(u.hash.slice(1))}"`))errors.push(`${p}: missing anchor ${value}`);
  }
 }
}
const services=pages.filter(p=>p.includes(path.join('services',path.sep))&&!p.endsWith(path.join('services','index.html')));
if(services.length!==70)errors.push(`Expected 70 service pages, got ${services.length}`);
for(const asset of ['robots.txt','sitemap.xml','favicon.svg'])if(!fs.existsSync(path.join(root,asset)))errors.push(`Missing ${asset}`);
console.log(JSON.stringify({pages:pages.length,servicePages:services.length,linksChecked:links,imagesChecked:images,external:[...external],errors},null,2));
if(errors.length)process.exitCode=1;
