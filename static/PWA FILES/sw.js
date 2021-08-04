// @TODO: FINIRE IL SERVICE WORKER
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("static/PWA FILES/sw.js")
        .then(serviceWorker => {
            console.log("Service Worker registered: ", serviceWorker);
        })
        .catch(error => {
            console.error("Error registering the Service Worker: ", error);
        });
    self.addEventListener("install", event => {
        console.log("Service Worker installing.");
    });

    self.addEventListener("activate", event => {
        console.log("Service Worker activating.");
    });
}