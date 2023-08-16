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
} 
console.log("total", total)

//menghitung rata-rata  
var number = [2, 3, 5, 10];
var average = 0;
var score = 0;  

for(var i=0;i<number.length;i++){
  score = score + number[i];
  average = score/(i+1);
}
console.log("The score is :" + score)
console.log("The average is :" + average)

//menggabungkan 2 array /list
var array1 = [1,2,3];
var array2 = [4,5,6];
var array3 = [...array1, ...array2];

console.log(array3); 

//mencari nilai max dan min
const arr = [1,10,9,8];
let max = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

let min = 100;
for (i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(min);

//menghitung jumlah total bilangan genap
var angka = [1,2,3,4,5,6];
var total_genap = 0;

for(var i = 0; i < angka.length; i++) {
  if(angka[i] %2 == 0){
    total_genap += angka[i]
    console.log(angka[i])
  }
} 
console.log("total nilai genap :", total_genap)


//looping array data
console.log("---------")
var angka = [1,2,3,4,5,6,7,8,9,10];
var genap = [];
var ganjil = [];
var habis_dibagi4 = [];

for (var i = 0; i < angka.length; i++) {
  if (angka[i] %2 == 0 ) {
    genap.push(angka[i]) 
    if(angka[i] %4 == 0){
      habis_dibagi4.push(angka[i])
    }
    
  } else {
    ganjil.push(angka[i])
  } 
}
console.log(genap);
console.log(ganjil);
console.log(habis_dibagi4)

//mencari index item dalam array/list
console.log("--------")
var x = [1,2,3,4,5]

var indexOfThree = x.indexOf(3);
var indexFromArray = x.findIndex((v) => {
  return v == 3
})

console.log(indexOfThree)
console.log(indexFromArray);

x.splice(indexOfThree,1);
console.log(x)

//remove item dari index
const index = x.indexOf(2);
if (index > -1) { 
  x.splice(index, 1); 
}

console.log(x); 