const CACHE='520-v2';
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['index.html','valentine.html','manifest.json','bg-title.png','bg-ski.png','bg-cabin.png','boy-stand.png','boy-ski.png','girl-stand.png','girl-ski.png','dog.png','house.png','tree-large.png','tree-small.png','bgm-compressed.m4a','scene-data.js','icon-192.png','icon-512.png'])).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
