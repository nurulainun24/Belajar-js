//looping
var i = 5;
var loop = []
var loop2 = []
for (let i = 0; i < 10; i++) {
 loop.push(i+1)
}
console.log("i adalah",loop)

for (let i = 0; i < 100; i++) {
    loop2.push(i+1)
   }
   console.log("i adalah",loop2.toString())


//looping + aritmatika ( print bilangan ganjil )
var x = [ 1, 2, 3, 4 ];

for(let i = 0;i < x.length; i++) {
    if(x[i] % 2 !== 0) {
    console.log(x[i])
} 
}

//looping print nama yang jumlahnya 3 karakter
var names = ["ady","icar","ayu", "yaumixxxxx"];

for (let i =0; i < names.length; i++){
    var name = names[i]

    if (name.length != 5  ){
        console.log(name,name.length)
    }
};
