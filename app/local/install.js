// Files to cache
const cacheName = 'js13kPWA-v1';
const appShellFiles = [
  '/app/',
  '/app/view.html',
  '/app/local/main.min.js',
  '/app/local/session.js',
  '/search.js',
  '/app/style.css',
  '/app/blog.css',
  'https://revu.geoloup.com/image/maison.png',
];

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
