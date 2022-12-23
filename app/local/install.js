// Files to cache
const cacheName = 'revu-Geoloup-V1';
const assets = [
  '/app/',
  '/app/view.html',
  '/app/local/main.min.js',
  '/app/local/session.js',
  '/search.js',
  '/app/style.css',
  '/app/blog.css',
  '/image/maison.png',
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cachename).then(cache => {
      cache.addAll(assets)
    })
  )
})
