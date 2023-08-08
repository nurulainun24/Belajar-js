var peserta_magang = ["Meisya", "Desi", "Nurul", "Arif","ainun"];

console.log("jumlah item:", peserta_magang.length);
console.log("item kedua:", peserta_magang[1]);
//untuk bisa mengetahui data akhir dalam array bisa menggunakan 
console.log("peserta urutan terakhir:", peserta_magang[peserta_magang.length-1]);
//atau
console.log("peserta urutan terakhir:", peserta_magang.pop());

var daftar_nilai = [90,90,80,40];

let total = 0;
for (let i = 0; i < daftar_nilai.length; i++) {
    console.log("daftar nilai:",daftar_nilai[i])
    total = total + daftar_nilai[i]
} console.log("total", total)