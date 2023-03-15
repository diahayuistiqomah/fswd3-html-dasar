let nama = "Wawan";
let umur = 25;
let mahasiswa = true;
console.log(nama, umur, mahasiswa);
let hobi = ["membaca", "berenang", "koding"];
let orang = {
  // object
  nama: "Rani",
  umur: 30,
  mahasiswa: false,
  hobi: ["bermain gitar", "membuat kue"],
};

// Konversi Tipe Data
let x = "10";
let y = 5;
let z = Number(x) + y;
let a = String(y);
console.log(x, y, z, a);
// Operator
let num1 = 10;
let num2 = 5;
let jumlah = num1 + num2;
let selisih = num1 - num2;
let produk = num1 * num2;
let rasio = num1 / num2;
let sisaBagi = num1 % num2;
console.log(jumlah, selisih, produk, rasio, sisaBagi);

// Popup Modal
alert("Selamat datang di situs web saya!");

// Kondisional
let cuaca = "cerah";
if (cuaca === "cerah") {
  console.log("Hari ini cerah sekali!");
} else if (cuaca === "berawan") {
  console.log("Mungkin akan hujan nanti.");
} else {
  console.log("Saya tidak tahu seperti apa cuaca hari ini.");
}

// Loop
for (let i = 0; i < hobi.length; i++) {
  console.log(hobi[i]);
}

// Fungsi
const sapa = (nama) => {
  console.log("Halo, " + nama + "!");
};

sapa("Kiki");
