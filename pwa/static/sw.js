self.addEventListener("install", function (event) {
  console.log("[Service Worker] installing service worker...", event);
});

self.addEventListener("activate", function (event) {
  console.log("[Service Worker] activating service worker...", event);
});

self.addEventListener("fetch", function (event) {
  console.log("[Service Worker] fetching service worker...", event);
});

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});

const cacheName = "tracklist-pwa";
const appShellFiles = [
  "pwa/static/favicon.png",
  "pwa/static/main.js",
  "pwa/static/styles.css",
  "pwa/static/sw.js",
  "pwa/static/images/backbuttonnobackground.png",
  "pwa/static/images/blackcircle.png",
  "pwa/static/images/buttonnobackground.png",
  "pwa/static/images/europebuttonnobackground.png",
  "pwa/static/images/logo.svg",
  "pwa/static/images/the_black_plaugenobg.png",
  "pwa/static/images/trackmaps/barcelona.png",
  "pwa/static/images/trackmaps/hungaroring.png",
  "pwa/static/images/trackmaps/imola.png",
  "pwa/static/images/trackmaps/monaco.png",
  "pwa/static/images/trackmaps/monza.png",
  "pwa/static/images/trackmaps/redbullring.png",
  "pwa/static/images/trackmaps/silverstone.png",
  "pwa/static/images/trackmaps/sochi.png",
  "pwa/static/images/trackmaps/spa.png",
  "pwa/static/images/trackmaps/zandvoort.png",
];

//This file defines events that the service worker is capable of doing and defines the files that the service worker downloads for when you're offline

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(pwa).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

