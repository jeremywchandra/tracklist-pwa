if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => console.log("service worker registered", reg))
    .catch((err) => console.log("service worker registered", err));
}

//this code checks if the browser supports service workers and if so, attempts to register the service worker
