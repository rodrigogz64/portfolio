document.addEventListener("DOMContentLoaded", function() {
  const nostrLink = document.querySelector(".home-sci a:first-child");

  nostrLink.addEventListener("click", function(event) {
    event.preventDefault();
    copyTextToClipboard("npub1s4qx7qajsua9nykemks284y96768t7uyh2vgmttykw6lnfg0xpzqptgcuv");
    showCopiedMessage();
  });

  function copyTextToClipboard(text) {
    const dummyTextArea = document.createElement("textarea");
    dummyTextArea.value = text;
    document.body.appendChild(dummyTextArea);
    dummyTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(dummyTextArea);
  }

  function showCopiedMessage() {
    const copiedMessage = document.createElement("div");
    copiedMessage.textContent = "Copied!";
    copiedMessage.classList.add("copied-message");

    nostrLink.appendChild(copiedMessage);

    setTimeout(function() {
      nostrLink.removeChild(copiedMessage);
    }, 1500);
  }
});