const STATIC_CACHE = "static";
//Se declara un vector con la ubicacion y el nombre
const APP_SHELL =[
"/",
"index.html",
"style.css",
"functions.js",
"main.js",
"script1.js",
"script2.js",
"img/logit0.png",
];
//En el evento install se agregan los archivos a la 
self.addEventListener("install", (e) => {
    const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});
//En el evento fetch se envian los archivos a la pagina
self.addEventListener("fetch", (e) => {
    console.log("fectch! ", e.request);

    e.respondWith(
        caches
            .match(e.request)
            .then(res => res || fetch(e.request))
            .catch(console.log)
    );
});