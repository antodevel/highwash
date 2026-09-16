const fs=require('fs');
fs.mkdirSync('public/placeholders',{recursive:true});
const schemes={cleaning:['#dce4dd','#8daba1'],height:['#dce0d6','#839185'],facade:['#e7e4da','#a5a396'],glazing:['#dce6e5','#88a5a5'],roof:['#e5e2d7','#a8a087']};
for(const [key,[bg,stroke]] of Object.entries(schemes)){
 const lines=key==='roof'?'<path d="M35 225 287 63 560 192 312 369Z M65 211 312 344 529 195 M113 181 359 316 M161 150 408 282 M211 118 460 245"/>':'<path d="M120 342V94L364 34V278L120 342 468 398V137L364 34 M180 327V79 M242 308V64 M303 294V50 M120 156L364 98 468 200 M120 218L364 159 468 263 M120 279L364 220 468 325"/>';
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450"><rect width="600" height="450" fill="${bg}"/><g stroke="${stroke}" stroke-width="1.7" fill="none">${lines}</g><path d="M364 35V278L468 398V137Z" fill="${stroke}" opacity=".13"/><path d="M145 360H210" stroke="#d2af17" stroke-width="5"/><g fill="#676e63" font-family="Arial,sans-serif" font-size="9" letter-spacing="2"><text x="24" y="420">HIGHWASH / ФОТО УСЛУГИ</text><text x="24" y="32">ВРЕМЕННЫЙ МАКЕТ</text></g></svg>`;
 fs.writeFileSync(`public/placeholders/${key}.svg`,svg);
}
