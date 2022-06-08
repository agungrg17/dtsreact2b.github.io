//built in function

//1. isNaN()
// console.log(isNaN(123)); //
// console.log(isNaN("hello"));
// console.log(isNaN(true)); //true dianggap sbg 1 jd dinaggap sbg number
// console.log(isNaN(false)); //false dianggap sbg 0 jd dinggap sbg number
// console.log(isNaN("34,5")); //, dianggap sbg karakter string
// console.log(isNaN("34.5")); //. dianggap sbg nilai desimal jd dianggap sbg number
// console.log(isNaN("234")); //strig number akan "dipaksa" dianggap sbg number
// console.log(isNaN(undefined));
// console.log(isNaN(NaN));

//2. Number() convert anything to number
//3. String() convert anything to string
//4. Date() create date
//5. parseInt()
//6. parseFloat()

//7. Math.function()
// console.log(Math.abs(-5));
// console.log(Math.random());
// console.log(Math.round(2.8)); //dibultkn kenilai yg lebiih mendekati
// console.log(Math.floor(2.9)); //dibulatkan ke nilai bawahnya(nilai terkecil)
// console.log(Math.ceil(2.1)); //dibulatkan ke nilai tertngginya

//8. String.unction()
// let sentence = "halo apa kabar kamu?";
// let array = sentence.split("a");
// let array2 = sentence.slice(0, 5)
// console.log(array);
// console.log(array2);

//9. Arrs.function()

// let arr1 = ["a", "b"];
// let arr2 = ["c", "d", "e"];
// let arr3 = ["f", "g", "h"];

// const result = arr1.concat(arr2, arr3);

// console.log(result);
// console.log(result.indexOf("c"));
// //console.log(result.join("\n"));
// console.log(result.pop());

//10. Date.function()
// const tanggal = new Date();
// const tanggal2 = Date.now();

// console.log(tanggal.toString());
// console.log(tanggal.toDateString());

// Scope & Closure
// Scope is access
// const global = "hello world";
// const greeting = () => {
//     const local = "halo dunia";

//     console.log(local);
//     console.log(global);
// }
// greeting();
// console.log(global);
//console.log(local); // error

// Closure
// function greeting() {
//     let message = "Halo";

//     function sayHi() {
//         console.log(message);
//     }
//     return sayHi;
    
// }
// //console.log(greeting());
// let hi = greeting();
// hi();

// const salam = (greet) => {
//     const salamNama = (name) => {
//         console.log(`${greet} ${name}`);
//     }
//     return salamNama;
// }
// const say = salam("hi");
// const sayHelo = salam("hello");

// say("Budi");
// sayHelo("Adi");

const greeting = (greet) => {
    //let greet = "hi";

    const withName = (name) => {
        console.log(`${greet} ${name}`);
    }
    return withName;
}

const sayHi = greeting("hi");
const sayHello = greeting("Hello");
const sayWelcome = greeting("Welcome");

sayHi('Budi');
sayHello("Adi");
sayWelcome("Agung");