const CACHE_NAME =
"maus-pos-1-14" ;
const FILES = [
/index.htm1iồi
./manifest.webmanifestồạồi
./icon-192.png",
./icon-512.png'
self.addEventListener ("install", function (event) {
event.waitUntil(
caches.open (CACHE_NAME) .then (function (cache) {
return cache.addAll(FILES);
）i
self.skipwaiting();
}>:
self.addEventListener("activate", function(event) {
event.waitUntil(
caches.keys ().then (function (names) {
return Promise.all(names.map(function(name) {
if (name !== CACHE_NAME) return caches.delete(n
子））；
self.clients.claim();
self.addEventListener ("fetch", function (event) {
if (event.request.method !== "GET") return; event.respondwith(
caches.match(event.request).then(function(response)
return response || fetch(event.request);
）；
}>: