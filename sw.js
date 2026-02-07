const CACHE_NAME = "mondo-fa-v1";

const FILES_TO_CACHE = [
  "./",
  "index.html",
  "langue.html",
  "categories.html",
  "mode.html",
  "jouer.html",
  "apprendre.html",

  "state.js",
  "app.js",
  "jouer.js",
  "apprendre.js",
  "js/data.js",

  "style.css",

  "manifest.json",

  "assets/logo.png",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png"
];

/* INSTALL */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

/* ACTIVATE */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

/* FETCH */
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});