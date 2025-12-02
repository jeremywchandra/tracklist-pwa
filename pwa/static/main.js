document.getElementById("load-sw").addEventListener("click", async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      console.log("Service worker started with scope:", registration.scope);
    } catch (error) {
      console.error("Service worker not started:", error);
    }
  }
});
