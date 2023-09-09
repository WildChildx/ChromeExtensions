chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "linkOpenerId",
        title: "OctopusLinkOpener",
        contexts: ["link"],
    });
});

chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "linkOpenerId") {
        const correctUrl = info.linkUrl.replace("oct-eu01.centiro.cloud", "octopus.centiro.se");
        // openIncognitoTabIfNotOpen(correctUrl);

        chrome.windows.create({ url: correctUrl, incognito: true });
    }
});


identifyAllWindows();


function identifyAllWindows() {
    chrome.windows.getAll({ populate: true }, function (windows) {
        for (let window in windows) {
            console.log("Window ID:", window.id);
            console.log("Tabs in this window:", window.tabs);
            console.log("Is this window focused?", window.focused);
            console.log("----------------------");
        }
    })
}

// function openIncognitoTabIfNotOpen(url) {
//     if (!isWindowOpen(url)) {
//         window.open(url, '_blank');
//     }
// }

// function isWindowOpen(url) {
//     var windows = window.open('', '_blank');
//     return windows.location.href == url && windows.incognito == "true";
// }