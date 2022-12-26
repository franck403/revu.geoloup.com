// Files to cache
const cacheName = 'revu-Geoloup-V1';
const file = [
  '/app/',
  '/app/codeview.html',
  '/app/local/main.min.js',
  '/app/local/timer.js',
  '/app/local/session.js',
  '/app/local/load.js',
  '/app/reader.html',
  '/app/reader.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js',
  '/search.js',
  '/app/bar.css',
  '/app/style.css',
  '/app/blog.css',
  '/loading.mp3',
  '/image/maison.png',
  '/image/maison144.png',
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


if(navigator.onLine) {
  // delete cache
  self.addEventListener("delete", (e) => {
    console.log('[Service Worker] Delete the cache');
    e.waitUntil(
      caches.keys().then((keyList) =>
        Promise.all(
          keyList.map((key) => {
            caches.delete(key);
          })
        )
      )
    );
    console.log('[Service Worker] Finish to delete the cache');
  });
}
else {
  console.log("you are not online")
}