// Files to cache
const cacheName = 'revu-Geoloup-V1';
const file = [
  '/app/',
  '/app/view.html',
  '/app/local/main.min.js',
  '/app/local/timer.js',
  '/app/local/session.js',
  '/app/local/load.js',
  '/app/reader.html',
  '/app/reader.js',
  '/local/dflip/css/dflip.min.css',
  '/local/dflip/css/themify-icons.min.css',
  '/local/dflip/js/libs/jquery.min.js',
  '/local/dflip/js/libs/three.min.js?ver=1.7.3.5',
  '/local/dflip/js/libs/mockup.min.js?ver=1.7.3.5',
  '/local/dflip/js/libs/pdf.min.js?ver=1.7.3.5',
  '/local/dflip/fonts/themify.woff',
  '/search.js',
  '/app/bar.css',
  '/app/style.css',
  '/app/blog.css',
  '/loading.mp3',
  '/image/maison.png',
  '/image/maison144.png',
  '/local/page/georenard/2022/noel2022.html',
  '/local/page/georenard/2022/humain.html',
  '/local/page/georenard/2022/olympique.html',
  '/local/page/georenard/dieu/egypte/seth.html',
  '/local/page/georenard/2022/halloween2022.html'
];

// Installing Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(file);
  })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) return r;
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});
