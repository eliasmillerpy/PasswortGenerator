chrome.webRequest.onBeforeRequest.addListener(
    function (details){
        return {redirectUrl: "https://lichess.org"}
    },
    {urls:["*://*.doubleclick.net/*", "*://*.serving-sys.com/*"]},
    ["blocking"]
)