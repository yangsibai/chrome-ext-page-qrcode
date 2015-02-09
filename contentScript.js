// Generated by CoffeeScript 1.7.1
(function() {
  var showQRCode;

  showQRCode = false;

  chrome.runtime.onMessage.addListener(function(msg) {
    var qrCode;
    if (msg === "qrcode") {
      if (!showQRCode) {
        qrCode = $("<div></div>");
        qrCode.attr("id", "chrome-ext-page-qr-code");
        $("body").append(qrCode);
        new QRCode(document.getElementById("chrome-ext-page-qr-code"), {
          text: window.location.href,
          width: 128,
          height: 128
        });
        $("#chrome-ext-page-qr-code").show();
        return showQRCode = true;
      } else {
        $("#chrome-ext-page-qr-code").remove();
        return showQRCode = false;
      }
    }
  });

}).call(this);

//# sourceMappingURL=contentScript.map