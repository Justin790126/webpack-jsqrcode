# Jsqrcode in webpack

[jsqrcode]: https://github.com/LazarSoft/jsqrcode.git

## Description

* This is the webpack porting from [jsqrcode] .

## Usage

* In qrCodeReader.js :

        import {qrcode} from './lib/qrcode.js';
    
        this.sourceURL = path_to_qrcode_png;
        this.qrCode = qrcode;
        this.qrCode.callback = function(result) {
            console.log(result);
        }
        this.qrCode.decode(this.sourceURL);
    

