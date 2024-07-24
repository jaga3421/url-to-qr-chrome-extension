document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var url = tabs[0].url;
    var qrCode = new QRCode(document.getElementById('qr-code'), {
      text: url,
      width: 128,
      height: 128
    });
    document.getElementById('url-text').textContent = url;
  });
});
