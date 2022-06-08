//forEach function -> directly modify array
//const numbers = [32, 93, 9, 2, 3];
//let total = 0;
// const sum = (item) => {
//     console.log(`item sekarang adalah ${item}`);
//     total += item;
//     console.log(`jumlah sekarang adalah ${total}`);
// }

//numbers.forEach(sum);

// const timesTen = (item, index, arr) => {
//     arr[index] = item * 10;
// }

// numbers.forEach(timesTen);
// console.log(numbers);



//Map -> return new array 
// const timesFive = (item) => {
//     return item * 5;
// }
//const newNumbers = numbers.map(timesFive);
// const newNumbers = numbers.map((item) => item * 5);

// console.log(newNumbers);

//filter
//const evenNumbers = numbers.filter((item) => item % 2 == 0);
// const evenNumbers = numbers.filter((item) => {
//     return item % 2 == 0;
// })
// console.log(evenNumbers);

//reduce
// const callbackSum = (previousValue, currentValue, currentIndex, array) => {
//     // console.log(`index sekarang = ${currentIndex}`);
//     // console.log(`array sekarang = ${array}`);
//     return previousValue + currentValue;
// }
// const totalReducer = numbers.reduce(callbackSum);
// console.log(`hasil reduce = ${totalReducer}`);

// const evenReducer = numbers.filter((item) => item % 2 == 0).reduce(callbackSum);
// console.log(`hasil even reduce = ${evenReducer}`);

// let total = 0;
// const sum = (item) => {
//     total += item;
// }
// numbers.forEach(sum);
// console.log(`hasil foreach = ${total}`);


// const callbackSum = (previousValue, currentValue) => {
//     if(currentValue % 2 == 0) {
//         return previousValue + currentValue;
//     }
//     return previousValue;
// }

// const sumReducer = numbers.reduce(callbackSum);

// console.log(`hasil jumlah genap: ${sumReducer}`);

// // Misal kita punya sebuah arrAngka
// // [10, 20]

// // Bagaimana caranya kita melakukan operasi matematika berdasarkan arrAngka ini bila kita
// // ingin menggunakan callback
// // ASUSMI
// // Lakukan pengecekan error untuk
// // - arrAngka ini hanya boleh ada 2 isinya, bila lebih kasih error
// // - Isi dari arrAngka tdk boleh NaN, bila ada kasih error
// //const arrAngka = [10, 20];

// // Fungsi deklarasi
// const fnOperasiMath = (arrAngka, fnCallback) => {
//     console.log("Fungsi akan dijalankan");

//     // Untuk cek apakah arrAngka yg dberikan jumlahnya pasti 2
//     if (arrAngka.length !== 2) {
//         // Berikan error
//         // lewat apa?
//         // Memiliki asusmi
//         // fnCallback = FUNGSI => parameter
//         // Memilik 2 parameter
//         // Paramete-1 umumnya adalah error
//         //Parameter-2 umumnya adalah data-nya

//         // Pada saat error
//         // Parameter-1 ada pesan error yg diberikan
//         // Parameter-2 adalah kosong / null
//         fnCallback("Jumlah dr arrAngka length tidak sama dengan 2", null);
//         return
//     }
//     // isi dr arrAngka tidak boleh NaN, bila ada kasih error
//     for (let counter = 0; counter < arrAngka.length; counter++) {
//         // Cek untuk setiap arrAngka yg dikunjungi
//         // apakah si angka adalah NaN
//         if (isNaN(arrAngka[counter])) {
//             // Akan terjadi error
//             // panggil callback nya lagi
//             // berikan error
//             fnCallback("Array pada posisi ke" + " " + counter + " " + "bukan suatu angka", null);
//             // Asumsikan looping selesai saat ketemu error
//             return; //Keluar dr looping for
//         }
//     }
//     // Sudah selesai semua, kita akan panggil operasi math nya
//     // Kondisi sukses
//     // error tidak ada
//     // data akan dimanipulasi sesuai kebutuhan
//     fnCallback(null, arrAngka);
// };

// // FUNGSI dijalankan
// //Pakai IIFE
// (() => {
//     const arrAngka = [10, 20];
//     fnOperasiMath(arrAngka, function cbPenjumlahan(err, data) {
//         // Kalau terjadi error
//         // error nya berupa message string
//         // null = falsy
//         if (err) {
//             // saat null akan jd falsy, saat ada string errornya akan jd truthy
//             console.log('error terjadi', err);
//         } else {
//             // Tambahkan kedua angka tsb
//             // data adalah array yg punya index 2
//             const angkaPenjumlahan = data[0] + data[1];
//             console.log('Penjumlahannya adalah :', angkaPenjumlahan);
//         }
//     })

//     fnOperasiMath(arrAngka, function cbPengurangan(err, data) {
//         // Kalau terjadi error
//         // error nya berupa message string
//         // null = falsy
//         if (err) {
//             // saat null akan jd falsy, saat ada string errornya akan jd truthy
//             console.log('error terjadi', err);
//         } else {
//             // Tambahkan kedua angka tsb
//             // data adalah array yg punya index 2
//             const angkaPengurangan = data[0] - data[1];
//             console.log('Pengurangannya adalah :', angkaPengurangan);
//         }
//     })
// })();

// Built in function
// // forEach
// const arrAngka = [100, 200, 300, 400, 500];

// arrAngka.forEach(
//     //fnCallback
//     (element, index) => {
//         console.log("Index:", index, "Element:", element);
// });

// arrAngka.forEach(
//     //fnCallback
//     (element, index) => {
//         console.log("Hasil perkalian:", index * element);
//     }
// );
// console.log(arrAngka);

// // map
// const arrString = ["kita", "sedang", "belajar", "array", "map"];

// const arrModif = arrString.map(
//     //fnCallback
//     (element) => {
//         return element + element.length;
//     })
//     console.log(arrModif);

// const arrModif2 = arrString.map((element) => element + element.length);
// console.log(arrModif2);

// // filter
// const arrObjAngka = [
//     {angka: 100},
//     {angka: 200},
//     {angka: 300},
//     {angka: 125}
// ]
// // FILTER yg angka-nya kurang dr 150
// const arrFilter = arrObjAngka.filter(
//     //fnCallback
//     (element) => {
//         // test nya / kondisi filteringnya
//         return element.angka < 150;
//     }
// );
// console.log(arrFilter);

// // reduce
// const arrAngka = [2, 4, 6, 8, 10];

// // Parameter pertama adalah ccallback
// // Parameter kedua adalah nilai awalnya
// const nilaiAkhirSetelahReduce = arrAngka.reduce(
//     //fnCallback
//     (nilaiSebelumnya, nilaiSekarang) => {
//         return nilaiSebelumnya + nilaiSekarang * 100;
//     },
//     //nilai awal
//     0
// );
// console.log(nilaiAkhirSetelahReduce);

// Cara baca data JSON
// Menggunakan fs (fs adalah module package dr node.js untuk baca data)
const fs = require('fs');

fs.readFile(
    // nama file yg ingin dibaca
    "./dummy.json",
    // options untuk baca file-nya, bisa object atau string
    // ini string
    "utf8",
    // ini object
    // {
    //     encoding: "utf8",
    // },
    // fnCallback-nya
    (err, data) => {
        if (err) {
            console.log(err);
        } else {
            // data kalau berhasil dibaca bentuknya adalah STRING!
           // console.log(data);

            // bagaimana carany supaya si strig yg dibaca
            // bisa dijadikan sbg ARRAY OF OBJECT
            const arrOfObjectHasilDataBacaan = JSON.parse(data);
            console.log(arrOfObjectHasilDataBacaan);
            console.log(arrOfObjectHasilDataBacaan[0].namaDepan);
        }
    }
    );

