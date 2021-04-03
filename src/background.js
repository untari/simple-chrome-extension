console.log('background running');
//chrome.browserAction.onClicked.addListener(function () {
  //  chrome.tabs.update({ url: chrome.runtime.getURL("index.html") });
//});
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { 
    var cpuInfo = chrome.system.cpu.getInfo(function(cpuInfo) {
            console.log(cpuInfo);
        });
  chrome.tabs.sendMessage(tabs[0].id, cpuInfo, function(response) {
    console.log(response);
  });
});
