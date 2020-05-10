document.addEventListener(
  "DOMContentLoaded",
  function () {
    var verifyButton = document.getElementById("verifyButton");
    var ci = document.getElementById("cred_input");
    chrome.tabs.executeScript(
      {
        code: "window.getSelection().toString();",
      },
      function (selection) {
        if (ci) {
          ci.value = selection[0];
        }
      }
    );

    verifyButton.addEventListener(
      "click",
      function () {
        var inp = document.getElementById("cred_input");

        chrome.tabs.create({
          url: "https://verified.cv/en/verify/" + inp.value,
        });
      },
      false
    );
  },
  false
);
