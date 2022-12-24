// Files to cache
const cacheName = 'revu-Geoloup-V1';
const file = [
  '/app/',
  '/app/reader.html',
  '/app/local/main.min.js',
  '/app/local/timer.js',
  '/app/local/session.js',
  '/app/style.css',
  '/app/blog.css',
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
