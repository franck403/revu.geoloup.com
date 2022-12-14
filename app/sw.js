// Files to cache
const cacheName = 'revu-Geoloup-V1';
const file = ['/app/local/timer.js'
];


// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) return r;
    const response = await fetch(e.request);
    return response;
  })());
});