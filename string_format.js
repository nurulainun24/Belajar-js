//menghitung jumlah karakter
var string = "ainun";
var jumlahstring = string.length;

console.log("panjang karakter yaitu:",jumlahstring)

//string replace
var kalimat = "NURUL nurul";   
var ganti = kalimat.replaceAll('U', '*').replaceAll('L', '*').replaceAll('u', '*').replaceAll('l', '*');
console.log("contoh",ganti);

//menggubah huruf kecil 
var a = "NURUL";

var hasil = a.toLowerCase();
console.log("kecil:",hasil);

//mengubah huruf besar
var b = "ainun";

var hasil = b.toUpperCase();
console.log("besar:",hasil)
