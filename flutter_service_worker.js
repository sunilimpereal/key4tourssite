'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2704f6d34df06de048b25e5a08c674f0",
"assets/assets/icons/calender.svg": "3b4d62073ab8899a8650dc89b27874e3",
"assets/assets/icons/Default.svg": "3b4d62073ab8899a8650dc89b27874e3",
"assets/assets/icons/guest.svg": "b887f8aabef5358d243493bf85017abc",
"assets/assets/icons/location.svg": "02e7a81706330604cdc04fd0780f88d5",
"assets/assets/icons/search.svg": "d73abaced0c5ac58540b5c80b91ee424",
"assets/assets/images/7star.jpg": "517556fe7b4d95990ad3b6ce6847aeb7",
"assets/assets/images/back.json": "9bc0598d98bb8a026bc3127dc01f7f7b",
"assets/assets/images/desert.jpg": "6d0f7aa577dff4b8e2a498f34631db52",
"assets/assets/images/desert.webp": "91048f6de291970a9f0649d81c7b7a17",
"assets/assets/images/Dubai.jpg": "5d448b64e40320ab4fb40545d9d7aa29",
"assets/assets/images/fb.png": "fc6ae6e79e6598e6e3b1cbe89f23d0d9",
"assets/assets/images/float1.jpg": "f97124f291e87690db53b7c4af235022",
"assets/assets/images/float2.jpg": "024551099417a4cabeb51843d8cbb8b4",
"assets/assets/images/float3.jpg": "5dc2c91bab37a6b4bce440322d64debd",
"assets/assets/images/guest.png": "d165af87ec6b41e5a08e11a34011a712",
"assets/assets/images/home-bg-bottom.png": "30f13ced21031099625ca598a22cf8d1",
"assets/assets/images/home-bg-bottom1.png": "3765c92fb24dd4f30a5678ad56e12b7c",
"assets/assets/images/home-bg.jpg": "2e4831e026d7206ed773adb3969d8082",
"assets/assets/images/home-bg1.jpg": "308f3f3a2417bc0c5e132d925bb04f90",
"assets/assets/images/home-hero-2.jpg": "50e5d7ce7eb8df20e5608cc9460eff10",
"assets/assets/images/home-hero1-bg-ncp.png": "0ecdb463b6625b28d8fb581347a8e5f3",
"assets/assets/images/home-hero1-bg.png": "4b52ac71085a3abf222d77f42c9ef91f",
"assets/assets/images/home-hero1-fg-ncp.png": "6666d1172ba04b1d412b38665052fabe",
"assets/assets/images/home-hero1-fg.png": "6b2b790172a96238059e9274ba4db0d4",
"assets/assets/images/home-hero1.jpg": "69448a4f027d1eb88508afbbf88febfe",
"assets/assets/images/home-hero3.jpg": "556d878339c8fd620bd404786e2563ee",
"assets/assets/images/home-hero4-bg-ncp.png": "d344263e96ed43ab4efc9ed83d5caff5",
"assets/assets/images/home-hero4-bg.jpg": "38fce2a945c269a23ce3619c2d80929c",
"assets/assets/images/home-hero4-fg-ncp.png": "fc8ff907a6bd6a997b548f9fe919f994",
"assets/assets/images/home-hero4-fg.png": "07b631f85d71cc39a44cbe09af6689bf",
"assets/assets/images/home-hero5.jpg": "032489ae07fb44454ec8799c1c2a228d",
"assets/assets/images/home-hero6-bg-ncp.png": "8bcdb6f7881d0cf3b1519d5eb254466e",
"assets/assets/images/home-hero6-bg.jpg": "cb2a81e5ea57eab546e4eadca2f9ca6b",
"assets/assets/images/home-hero6-fg-ncp.png": "ce7b901cc8331aa606653b86547668c9",
"assets/assets/images/home-hero6-fg.png": "d4edcdb70782df81ff86354c02633348",
"assets/assets/images/ig.png": "36f50a8ff3533c5a4c472c84048db9cd",
"assets/assets/images/ITINERARY.png": "fe09808738b9718d8e53df3019c8f32a",
"assets/assets/images/logo.png": "6c6019d14d7d839528a47052cb6521e7",
"assets/assets/images/mosque.jpg": "6edd0c928fefa57b92c46e148203ab59",
"assets/assets/images/Pi7compressedhome-hero6-bg.png": "f6ef6abab116a84802eef639ac2ea7ba",
"assets/assets/images/quatar.jpg": "a82a191d8470273295c312e20f25e948",
"assets/assets/images/scroll.json": "eb0dd3c5b3ff831dcf0fb3da1b02f024",
"assets/assets/images/search.png": "ff3abceda80d67cb7e2c6c38148e6d58",
"assets/assets/images/twitter.png": "7725595bcae5bee696b35a8616eab8f5",
"assets/assets/images/whatsapp.png": "a34b48f83480ec9e83f3606095337dcf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/icons/calender.svg": "3b4d62073ab8899a8650dc89b27874e3",
"assets/icons/Default.svg": "3b4d62073ab8899a8650dc89b27874e3",
"assets/icons/guest.svg": "b887f8aabef5358d243493bf85017abc",
"assets/icons/location.svg": "02e7a81706330604cdc04fd0780f88d5",
"assets/icons/search.svg": "d73abaced0c5ac58540b5c80b91ee424",
"assets/images/7star.jpg": "517556fe7b4d95990ad3b6ce6847aeb7",
"assets/images/back.json": "9bc0598d98bb8a026bc3127dc01f7f7b",
"assets/images/desert.jpg": "6d0f7aa577dff4b8e2a498f34631db52",
"assets/images/desert.webp": "91048f6de291970a9f0649d81c7b7a17",
"assets/images/Dubai.jpg": "5d448b64e40320ab4fb40545d9d7aa29",
"assets/images/fb.png": "fc6ae6e79e6598e6e3b1cbe89f23d0d9",
"assets/images/float1.jpg": "f97124f291e87690db53b7c4af235022",
"assets/images/float2.jpg": "024551099417a4cabeb51843d8cbb8b4",
"assets/images/float3.jpg": "5dc2c91bab37a6b4bce440322d64debd",
"assets/images/guest.png": "d165af87ec6b41e5a08e11a34011a712",
"assets/images/home-bg-bottom.png": "30f13ced21031099625ca598a22cf8d1",
"assets/images/home-bg-bottom1.png": "3765c92fb24dd4f30a5678ad56e12b7c",
"assets/images/home-bg.jpg": "2e4831e026d7206ed773adb3969d8082",
"assets/images/home-bg1.jpg": "308f3f3a2417bc0c5e132d925bb04f90",
"assets/images/home-hero-2.jpg": "50e5d7ce7eb8df20e5608cc9460eff10",
"assets/images/home-hero1-bg-ncp.png": "0ecdb463b6625b28d8fb581347a8e5f3",
"assets/images/home-hero1-bg.png": "4b52ac71085a3abf222d77f42c9ef91f",
"assets/images/home-hero1-fg-ncp.png": "6666d1172ba04b1d412b38665052fabe",
"assets/images/home-hero1-fg.png": "6b2b790172a96238059e9274ba4db0d4",
"assets/images/home-hero1.jpg": "69448a4f027d1eb88508afbbf88febfe",
"assets/images/home-hero3.jpg": "556d878339c8fd620bd404786e2563ee",
"assets/images/home-hero4-bg-ncp.png": "d344263e96ed43ab4efc9ed83d5caff5",
"assets/images/home-hero4-bg.jpg": "38fce2a945c269a23ce3619c2d80929c",
"assets/images/home-hero4-fg-ncp.png": "fc8ff907a6bd6a997b548f9fe919f994",
"assets/images/home-hero4-fg.png": "07b631f85d71cc39a44cbe09af6689bf",
"assets/images/home-hero5.jpg": "032489ae07fb44454ec8799c1c2a228d",
"assets/images/home-hero6-bg-ncp.png": "8bcdb6f7881d0cf3b1519d5eb254466e",
"assets/images/home-hero6-bg.jpg": "cb2a81e5ea57eab546e4eadca2f9ca6b",
"assets/images/home-hero6-fg-ncp.png": "ce7b901cc8331aa606653b86547668c9",
"assets/images/home-hero6-fg.png": "d4edcdb70782df81ff86354c02633348",
"assets/images/ig.png": "36f50a8ff3533c5a4c472c84048db9cd",
"assets/images/ITINERARY.png": "fe09808738b9718d8e53df3019c8f32a",
"assets/images/logo.png": "6c6019d14d7d839528a47052cb6521e7",
"assets/images/mosque.jpg": "6edd0c928fefa57b92c46e148203ab59",
"assets/images/Pi7compressedhome-hero6-bg.png": "f6ef6abab116a84802eef639ac2ea7ba",
"assets/images/quatar.jpg": "a82a191d8470273295c312e20f25e948",
"assets/images/scroll.json": "eb0dd3c5b3ff831dcf0fb3da1b02f024",
"assets/images/search.png": "ff3abceda80d67cb7e2c6c38148e6d58",
"assets/images/twitter.png": "7725595bcae5bee696b35a8616eab8f5",
"assets/images/whatsapp.png": "a34b48f83480ec9e83f3606095337dcf",
"assets/NOTICES": "b16937cf0e849152545031946937597c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "7561d987a3a8475cf57f40bad2c1ea5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6156d3e1117d8d681b835586ccf03aae",
"/": "6156d3e1117d8d681b835586ccf03aae",
"main.dart.js": "f54a78ca30e062409a8bbf3f4ffc5e2e",
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
