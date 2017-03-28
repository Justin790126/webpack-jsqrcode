import {qrcode} from './lib/qrcode.js';

var QRcodeReader = (function(URL) {

  var constructor = function(URL) {
    logger('qrcode reader start');
    if (!URL) {
      return;
    }
    this.sourceURL = './qrcode.png';
    this.qrCode = qrcode;
    this.qrCode.callback = function(qrCodeResult) {
      console.log(qrCodeResult);
    };
    this.qrCode.decode(this.sourceURL);
  };

  return constructor;

})();

