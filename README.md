# Webpack-jsqrcode

This is the porting from [jsqrcode](https://github.com/LazarSoft/jsqrcode).


## Build

````
npm install
npm run build
````

The **jsqrcode.js** is in **dist** folder.

## Usage

Example in **index.html**. Just inculde jsqrcode.js, then, you can use **qrcode** object.

````
    <script src="dist/jsqrcode.js"></script>
````


## API

### New an object
````
    var qrcode = window.qrcode;
````

### Start decode
To feed the source image to **qrcode** object, create a canvas with id of **qr-canvas**, and **drawImage** on it, and then call **decode** to decode the result.
````
    qrcode.decode(); // After decode finished onGetResult event will be evoked
````

### Event
When qrcode is decoded, and get the decoded result.
````
    qrcode.onGetResult = function(decodedResult) {
         
    }
````

### More detail example

Reference to [jsqrcode test.html](https://github.com/LazarSoft/jsqrcode/blob/master/src/test.html).


