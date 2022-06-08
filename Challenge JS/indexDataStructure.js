// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};

firstUser.name = "Monica";

firstUser.gender = "Female";

firstUser.age = 17;

firstUser.email = "monica@dingdong.com";

// firstUser.favoriteColor = new Set ();
// firstUser.favoriteColor.add("Yellow");
// firstUser.favoriteColor.add("Pink");
// firstUser.favoriteColor.add("White");
// firstUser.favoriteColor.add("Purple");
firstUser.favoriteColor = [];
firstUser.favoriteColor.push("Yellow");
firstUser.favoriteColor.push("Pink");
firstUser.favoriteColor.push("White");
firstUser.favoriteColor.push("Purple");

firstUser.isHavePet = true;

firstUser.education = [
    {
    name : "SD 01",
    city : "Jakarta",
    graduate : 2016
    },
    {
    name : "SMP 02",
    city : "Jakarta",
    graduate : 2019
    },
    {
    name : "SMA 03",
    city : "Tangerang",
    graduate : 0
    }
];

// firstUser.favoriteRestaurant = new Set ();
// firstUser.favoriteRestaurant.add("Bento");
// firstUser.favoriteRestaurant.add("Sushi");
// firstUser.favoriteRestaurant.add("Pancake");
// firstUser.favoriteRestaurant.add("Eggy");
// firstUser.favoriteRestaurant.add("Tempura");
// firstUser.favoriteRestaurant.add("Bento");
// firstUser.favoriteRestaurant.add("Eggy");
// firstUser.favoriteRestaurant.add("Padang");
// firstUser.favoriteRestaurant.add("Tteok");
// firstUser.favoriteRestaurant.add("Sushi");
// firstUser.favoriteRestaurant.add("Sushi");
firstUser.favoriteRestaurant = [];
firstUser.favoriteRestaurant.push("Bento");
firstUser.favoriteRestaurant.push("Sushi");
firstUser.favoriteRestaurant.push("Pancake");
firstUser.favoriteRestaurant.push("Eggy");
firstUser.favoriteRestaurant.push("Tempura");
// firstUser.favoriteRestaurant.push("Bento");
// firstUser.favoriteRestaurant.push("Eggy");
firstUser.favoriteRestaurant.push("Padang");
firstUser.favoriteRestaurant.push("Tteok");
// firstUser.favoriteRestaurant.push("Sushi");
//  firstUser.favoriteRestaurant.push("Sushi");

const secondUser = {};

secondUser.name = "Wendy";

secondUser.gender = "Male";

secondUser.age = 23;

secondUser.email = "wendy@dingdong.com";

// secondUser.favoriteColor = new Set ();
// secondUser.favoriteColor.add("Blue");
// secondUser.favoriteColor.add("Black");
// secondUser.favoriteColor.add("Grey");
secondUser.favoriteColor = [];
secondUser.favoriteColor.push("Blue");
secondUser.favoriteColor.push("Black");
secondUser.favoriteColor.push("Grey");

secondUser.isHavePet = false;

secondUser.education = [
    {
        name : "SD 02",
        city : "Jakarta",
        graduate : 2010
        },
        {
        name : "SMP 03",
        city : "Bogor",
        graduate : 2013
        },
        {
        name : "SMA 01",
        city : "Surabaya",
        graduate : 2016
        },
        {
        name : "Universitas Maju",
        city : "Tangerang",
        graduate : 0
        }
];

// secondUser.favoriteRestaurant = new Set ();
// secondUser.favoriteRestaurant.add("Tempura");
// secondUser.favoriteRestaurant.add("Bento");
// secondUser.favoriteRestaurant.add("Sushi");
// secondUser.favoriteRestaurant.add("Pancake");
// secondUser.favoriteRestaurant.add("Padang");
// secondUser.favoriteRestaurant.add("Katsu");
// secondUser.favoriteRestaurant.add("Geprek");
// secondUser.favoriteRestaurant.add("Pancake");
// secondUser.favoriteRestaurant.add("Eggy");
secondUser.favoriteRestaurant = [];
secondUser.favoriteRestaurant.push("Tempura");
secondUser.favoriteRestaurant.push("Bento");
secondUser.favoriteRestaurant.push("Sushi");
secondUser.favoriteRestaurant.push("Pancake");
secondUser.favoriteRestaurant.push("Padang");
secondUser.favoriteRestaurant.push("Katsu");
secondUser.favoriteRestaurant.push("Geprek");
//secondUser.favoriteRestaurant.push("Pancake");
secondUser.favoriteRestaurant.push("Eggy");

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];
//console.log(users);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};