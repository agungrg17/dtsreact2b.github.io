// Synchronous & Asynchronous
// const findKelipatan = (angkaKelipatan) => {
//     const withNumber = (number) => {
//         if (number % angkaKelipatan == 0) {
//             console.log(`${number} adalah kelipatan dari ${angkaKelipatan}`);
//         } else {
//             console.log(`${number} bukan kelipatan dari ${angkaKelipatan}`);
//         }
//     }
//     return withNumber;
// }

// const kelipatanTiga = findKelipatan(3);
// const kelipatanLima = findKelipatan(5);

// kelipatanTiga(9);
// kelipatanLima(87);

// kelipatanLima(345);
// kelipatanTiga(133);

// console.log("One");
// setTimeout(() => {
//     console.log("Two")
// }, 100);
// console.log("Three");

// console.log("one");
// setTimeout(() => {
//     setTimeout(() => {
//         console.log("four")
//     }, 4000);
//     console.log("two")
// }, 3000);
// console.log("three")

// console.log("One");
// setTimeout(() => console.log("Two"), 1000);
// console.log("Three");

// const calculator = (number1, number2, operation, formatPrint) => {
//     let result = operation(number1, number2);
//         formatPrint(result);
//         // console.log("result is " + result);
// }

// const add = (number1, number2) => {
//     return number1 + number2;
// }

// const substract = (number1, number2) => {
//     return number1 - number2;
// }

// const indonesia = (result) => {
//     console.log(`hasilnya adalah ${result}`);
// }

// const english = (result) => {
//     console.log(`the result is ${result}`);
// }


// calculator(5, 6, add, indonesia);
// calculator(4, 2, substract, english);
// calculator(3, 9, (x, y) => add(x, y));
// calculator(3, 9, (a, b) => substract(a, b));

// const one = (nextStep) => {
//     setTimeout(() => {
//         console.log("one");
//         nextStep();
//     }, 5000);
// }

// const two = (nextStep) => {
//     setTimeout(() => {
//         console.log("two");
//         nextStep();
//     }, 3000);
// }

// const three = (nextStep) => {
//     setTimeout(() => {
//         console.log("three");
//         nextStep();
//     }, 1000);
// }

// const four = () => {
//     console.log("four");
// }

// //one (() => two(three)); 
// //fungsi one butuh fungsi kosong sebelum jalan, 
// //agar fungsi two(three) tidak langsung dieksekusi 
// //sebelum fungsi one
// one (() => {
//     two (() => {
//         three(four)
//     })
// });
// //or
// // one (() => two (() => three(four)));

// const uploadImage = (imageFile, nextStep) => {
//     console.log(`uploading ${imageFile}`);
//     const image = `fs-${imageFile}`;
//     nextStep(image);
// };

// const cropImage = (image, nextStep) => {
//     setTimeout (() => {
//         console.log(`cropping ${image}`);
//         const croppedImage = `${image}-crop`;
//         nextStep(croppedImage);
//     }, 2000)
//     // console.log(`cropping ${image}`);
//     // const croppedImage = `${image}-crop`;
//     // nextStep(croppedImage);
// };

// const addWatermark = (croppedImage, nextStep) => {
//     setTimeout(() => {
//         console.log(`watermarking ${croppedImage}`);
//         const watermarkedImage = `${croppedImage}-wm`;
//         nextStep(watermarkedImage);
//     }, 2000)
//     // console.log(`watermarking ${croppedImage}`);
//     // const watermarkedImage = `${croppedImage}-wm`;
//     // nextStep(watermarkedImage);
// };

// //uploadImage("Bando", (image) => cropImage(image));
// uploadImage("Bando", (image) =>
//   cropImage(image, (croppedImage) =>
//     addWatermark(croppedImage, (watermarkedImage) => {
//         setTimeout(() => {
//             console.log(`your fie is ready ${watermarkedImage}`);
//         }, 2000)
//     //   console.log(`your fie is ready ${watermarkedImage}`);
//     })
//   )
// );

//  // Function didlam Function yg bs meng-isolir data
//  const variabelGlobal = 'global';

//  const fnLuar = () => {
//      const variabelLokal = 'lokal';

//      const fnDalam = (paramFnDalam) => {
//          return 'halo' + variabelLokal + ' ' + variabelGlobal + ' ' + paramFnDalam;
//      };
//      return fnDalam;
//  };

//  const fnReturn = fnLuar();
//  console.log(fnReturn('ini untuk fnDalam'));
//  console.log(fnReturn('ini akan dipanggil lagi'));

// const sebuahFungsi = () => {
//     console.log("halo dunia");
// };

// // Disini kita punya asumsi
// // Bahwa param1 yg diterima itu adalah sebuah FUNGSI
// const sebuahFungsiLain = (param1) => {
//     // Karena aram1 ini diasumsikan sbg sebuah FUNGSI
//     // dan FUNGSI itu bisa di-CALL/INVOKE
//     param1();
// };

// sebuahFungsiLain(sebuahFungsi);

// (function fnBlocking() {
//     console.log('satu');
//     console.log('dua');
//     console.log('tiga');
// })();

// // Function pake IIFE
// (function fnNonBlocking() {
//     console.log('pertama');
//     console.log('kedua');

//     // Fungsi Unusual
//     setTimeout(
//         //handler
//         function () {
//         console.log('ketiga');
//     }, 1000);

//     console.log('keempat');
// })();

// // CALLBACK
// // Asusmi cbSelanjutnya adalah sebuah parameter yg isinya FUNGSI
// function fungsiPertamma(param1, param2, cbSelanjutnya) {
//     setTimeout(
//         () => {
//             let hasilTarikData = ["selesai"];

//             //console.log('pertama');
//             // Panggil fungsi cbSelanjutnya
//             // Karea dia Fngsi yg ingin dijalankan berarti harus di-INVOKE
//             cbSelanjutnya(hasilTarikData);
//         },
//         2000
//     );
//     //console.log('pertama');
// };
// function fungsiKedua(paramHasilTerakhir) {
//     console.log('kedua', paramHasilTerakhir);
// };

// fungsiPertamma(1, "satu", fungsiKedua);
// //fungsiKedua();

// function filterAngka(paramArrayDeretAngka, fnLogicFiltering) {
//     let arrHasil = [];

//     for (let counter = 0; counter < paramArrayDeretAngka.length; counter++) {
//         // Cek apakah anggka ganjil?
//         //if (paramArrayDeretAngka[counter] % 2 === 1) {
//             if (fnLogicFiltering(paramArrayDeretAngka[counter])) {
//             arrHasil.push(paramArrayDeretAngka[counter]);
//         };
//     };
//     return arrHasil;
// };

// apakahAngkaGanjil = (angka) => {
//     return angka % 2 === 1;
// }
// function apakahAngkaGenap (angka) {
//     return angka % 2 === 0;
// }

// const sequenceOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log('angka ganjil = ' + filterAngka(sequenceOfNumbers, apakahAngkaGanjil));
// console.log('angka genap = ' + filterAngka(sequenceOfNumbers, apakahAngkaGenap));

const kumpulanAngka =[100, 200, 300, 400, 500];

const bacaData = (arrayAngka, posisi, callbackLogicUntukBaca) => {
    // Disini kita akan membuat suatu asumsi
    // bahwa callbackLogcUntukBaca akan punya 2 parameter
    // parameter-1 = error yg akan terjadi apabila ada error
    // parameter-2 = menampung data yg akan dilempar ke callback

    // Cek arrayAngka apa punya isi (length tdk boleh <= 0)
    if (arrayAngka.length <= 0) {
        callbackLogicUntukBaca("maaf, posisinya tidak beres", null) // saat error, data tdk ada / null
    } else {
        console.log("data yg sekarang tercetak adalah", arrayAngka[posisi]);
        // callback-nya ada data
        // ketika sukses maka tdk ada error atau error = null
        callbackLogicUntukBaca(null, arrayAngka[posisi]);
    };
};

bacaData(kumpulanAngka, 2, 
    // Handler bacaData 1
    (err, data1) => {
    // Cek apakah terjadi error
    // Terjadi error saat parameter-1 (err) bukan null (null = falsy)
        if (err) {
            return console.log(err);
        };

    bacaData(kumpulanAngka, 1, 
        // Handler bacaData 2
        (err, data2) => {
            if (err) {
                return console.log(err);
            };

            bacaData(kumpulanAngka, 0, 
                // Handler bacaData 3
                (err, data3) => {
                    if (err) {
                       return console.log(err);
                    }; 
                    console.log(
                        "hasil jumlah angka yg ditemukan",
                        data1 + data2 + data3
                    );
                });
        });
});