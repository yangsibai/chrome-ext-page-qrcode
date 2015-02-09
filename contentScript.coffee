showQRCode = false
chrome.runtime.onMessage.addListener (msg)->
    if msg is "qrcode"
        unless showQRCode
            qrCode = $("<div></div>")
            qrCode.attr("id", "chrome-ext-page-qr-code")
            $("body").append(qrCode)
            new QRCode(document.getElementById("chrome-ext-page-qr-code"), {
                text: window.location.href,
                width: 128,
                height: 128
            })
            $("#chrome-ext-page-qr-code").show()
            showQRCode = true
        else
            $("#chrome-ext-page-qr-code").remove()
            showQRCode = false
