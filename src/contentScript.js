console.log('content script');

const msg = 'Hello from content Script ⚡'
chrome.runtime.sendMessage({ message: msg }, function(response) {
    console.log(response);
});

// Listening to messages in Context Script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    //create event 
    var elem = document.querySelector('body');
    var event = new CustomEvent("build", {
        detail: {
           request
        }
    });
    elem.dispatchEvent(event);
    // Callback
    sendResponse({ message: 'Content script has received that message ⚡' })
})
