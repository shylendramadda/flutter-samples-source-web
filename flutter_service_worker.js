'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "765c440dab854e01df86a12adf5ddc4e",
"/assets/assets/images/flutter_icon.png": "a203629ab4e77ff08e47b226545af7f8",
"/assets/assets/images/flutter_logo.png": "8a50b602aa79b19775c22d02a290f51f",
"/assets/assets/images/om.png": "b1b7ff43ec8b80be1bbf2ce020c175a6",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "7bbbb003c1e4c986838b85634f833fd5",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "66d96a01ba3825d7c72bd12e1328e26b",
"/main.dart.js": "f546343cf0a0dfa8f5a146328c04b07e",
"/manifest.json": "8976c4e82f75edffa075402f4e50628f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
