console.log('background running');
//chrome.browserAction.onClicked.addListener(function () {
  //  chrome.tabs.update({ url: chrome.runtime.getURL("index.html") });
//});


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
     (function setInterval(){
         //big json
            chrome.tabs.query({ active: true }, function(tabs) {
                // const msg = "Hello from background 🔥";
                chrome.system.cpu.getInfo(function(cpuInfo) {
                            console.log(JSON.stringify(cpuInfo));
                chrome.tabs.sendMessage(tabs[0].id,  JSON.stringify({type: 'cpu', data: cpuInfo}),  function(response) {
                            console.log(response);
                    });
                });
            });
            //memoryUsage
             chrome.tabs.query({ active: true }, function(tabs) {
                // const msg = "Hello from background 🔥";
                chrome.system.memory.getInfo(function(memoryUsage) {
                            console.log(JSON.stringify(memoryUsage));
                chrome.tabs.sendMessage(tabs[0].id,  JSON.stringify({type: 'memory', data: memoryUsage}),  function(response) {
                            console.log(response);
                    });
                });
            });
            setTimeout(setInterval, 5000);
        })();
      }
});

// Listening to messages page
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    // Callback for that request
    sendResponse({ message: "Background has received that message 🔥" });
});
