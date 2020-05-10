var contextMenuItem = {
  id: "verifyCredential",
  title: "Verify Credential",
  contexts: ["selection"],
};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function (clickData) {
  chrome.tabs.create({
    url: "https://verified.cv/en/verify/" + clickData.selectionText.trim(),
  });
});
