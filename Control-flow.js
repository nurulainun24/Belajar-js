var nilai = 70;

if ( nilai >= 90 ) {
    console.log("A")
} else if ( nilai >= 85 ) {
    console.log ("B")
} else if ( nilai >= 80 ) {
    console.log ("C")
} else if ( nilai >= 70 ) {
    console.log ("D")
}else {
    console.log ("E")
}

// 1. buat variable nilai: number
// 2. print grade
// 90 >= A
// 85 - 90 B
// 80 - 85 C
// 70 - 80 D
// < 70 E

var harga = 4000;

if ( harga == 2000  || 3000 == harga ) {
    console.log ("beli 3 ikat");
}else {
    console.log ("beli 2 ikat");
}

//control-flow
var nilai_ujian = 70;
var nilai_kehadiran = 75;

if(nilai_kehadiran < 75){
  console.log("Grade: E (Tidak Lulus karena Kehadiran Rendah)")
}else if (nilai_kehadiran >= 75){
  if(nilai_ujian >= 90){
    console.log("Grade A")
  }else if(nilai_ujian >= 80){
    console.log("Grade B")
  }else if(nilai_ujian >= 70){
    console.log("Grade C")
  }else if(nilai_ujian >= 60){
    console.log("Grade D")
  }else{
    console.log("Grade E")
  }
};

//kalkulator ongkos pengiriman 
var berat_barang = 2;
var kota_tujuan = "C";
var biaya = 0;
var ongkir = 0;

if(berat_barang <= 1){
  biaya = 5000;
} else if (berat_barang > 1 && berat_barang <= 5){
  biaya = 10000
} else if (berat_barang > 5 && berat_barang <= 10){
  biaya = 20000
} else {
  biaya = 30000
}

if(kota_tujuan == "a"){
  ongkir = 5000
} else if (kota_tujuan == "b"){
  ongkir = 10000
} else {
  ongkir = 20000
}
console.log("harganya:",biaya + ongkir)