'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "93cc9353404d92c6559bd11d5f0ea18c",
"assets/assets/images/home-bg-bottom.png": "30f13ced21031099625ca598a22cf8d1",
"assets/assets/images/home-bg-bottom1.png": "3765c92fb24dd4f30a5678ad56e12b7c",
"assets/assets/images/home-bg.jpg": "2e4831e026d7206ed773adb3969d8082",
"assets/assets/images/home-bg.mp4": "6c5d428d6881eca3e47c5879c2e7f7d5",
"assets/assets/images/home-bg1.jpg": "308f3f3a2417bc0c5e132d925bb04f90",
"assets/assets/images/home-bg1.psd": "39cd23c74e74aa4c4225d152a4de6f9f",
"assets/assets/images/home-hero-2.jpg": "50e5d7ce7eb8df20e5608cc9460eff10",
"assets/assets/images/home-hero1-bg.png": "0ecdb463b6625b28d8fb581347a8e5f3",
"assets/assets/images/home-hero1-fg.png": "6666d1172ba04b1d412b38665052fabe",
"assets/assets/images/home-hero1-fg.psd": "dabaebcc713928b1810dc3619f6bfa7c",
"assets/assets/images/home-hero1.jpg": "69448a4f027d1eb88508afbbf88febfe",
"assets/assets/images/home-hero3.jpg": "556d878339c8fd620bd404786e2563ee",
"assets/assets/images/logo.png": "6c6019d14d7d839528a47052cb6521e7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/home-bg-bottom.png": "30f13ced21031099625ca598a22cf8d1",
"assets/images/home-bg-bottom1.png": "3765c92fb24dd4f30a5678ad56e12b7c",
"assets/images/home-bg.jpg": "2e4831e026d7206ed773adb3969d8082",
"assets/images/home-bg.mp4": "6c5d428d6881eca3e47c5879c2e7f7d5",
"assets/images/home-bg1.jpg": "308f3f3a2417bc0c5e132d925bb04f90",
"assets/images/home-bg1.psd": "39cd23c74e74aa4c4225d152a4de6f9f",
"assets/images/home-hero-2.jpg": "50e5d7ce7eb8df20e5608cc9460eff10",
"assets/images/home-hero1-bg.png": "0ecdb463b6625b28d8fb581347a8e5f3",
"assets/images/home-hero1-fg.png": "6666d1172ba04b1d412b38665052fabe",
"assets/images/home-hero1-fg.psd": "dabaebcc713928b1810dc3619f6bfa7c",
"assets/images/home-hero1.jpg": "69448a4f027d1eb88508afbbf88febfe",
"assets/images/home-hero3.jpg": "556d878339c8fd620bd404786e2563ee",
"assets/images/logo.png": "6c6019d14d7d839528a47052cb6521e7",
"assets/NOTICES": "1e07d5102a705b78ac5d4832e8b3e730",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "7561d987a3a8475cf57f40bad2c1ea5d",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6c7e860d29770c4e912cda75182bfa73",
"/": "6c7e860d29770c4e912cda75182bfa73",
"main.dart.js": "30e140a8f80fa2fd4995ffc5d8d7146f",
"manifest.json": "7c7fb7e3e492e95712755cd35ed29397",
"version.json": "683acfbca6acf330b3afae3afea6cc4d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
