// import module fs
// karena ini bawaan dari nodejs
// kita tidak perlu meng-install package apapun lagi
// selain menginstall nodejs itu sendiri
const fs = require('fs');

/*
https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilepath-options-callback

---
fs.readFile(path[, options], callback)
---
path <string> | <Buffer> | <URL> | <integer> 
  filename or file descriptor

options <Object> | <string>
  encoding <string> | <null> Default: null
  flag <string> 
    See support of file system flags. Default: 'r'.
  signal <AbortSignal> 
    allows aborting an in-progress readFile

callback <Function>
  err <Error> | <AggregateError>
  data <string> | <Buffer>
*/

/*
Path = nama file yang akan dibuka

options = yang akan kita gunakan adalah "encoding"
  tanpa encoding, maka data kita akan dibaca sebagai Buffer
  encoding yang umum digunakan adalah 'utf-8' atau 'utf8'

callback = function callback yang akan digunakan
  menerima 2 parameter:
    - err
    - data (berupa string atau Buffer)
      - Buffer = angka tidak jelas (hex) yang bisa dibaca komputer namun tidak bisa dibaca oleh manusia
*/
fs.readFile(
  // nama file
  './dummy.json',
  // Object encoding
  {
    encoding: 'utf8',
  },
  // callbackFn
  (err, dataYangDibaca) => {
    // apabila terjadi error, mari kita print errornya
    if (err) {
      // jangan lupa return bila tidak ingin menggunakan else
      return console.log('Ada terjadi error: ' + err);
    }

    console.log('Ini adalah isi dari file (string)');

    // Ingat bahwa output dari dataYangDibaca ini adalah String
    console.log(dataYangDibaca);

    // Lalu sekarang dari String JSON ini kita harus bagaimana
    // supaya bisa dibaca oleh javascript ?

    // Kita harus melakuan konversi dari String JSON ini menjadi
    // array dan object yang bisa dibaca oleh javascript

    // Javascript menyediakan JSON.parse(String) untuk mengubah
    // String JSON menjadi array dan object javascript
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

    const arrayOfObject = JSON.parse(dataYangDibaca);

    console.log('Ini adalah isi dari file (array of object)');
    console.log(arrayOfObject);
  }
);
