//* 1. Soru
// function ücgeninalani(b, h) {

//     console.log (b*h/2)

// }

// ücgeninalani(5,4);


// //* 2.Soru

// const KareAl = (a)=>{return a*a}
// console.log(KareAl(3))

// const ÜsAl = (a,b) => {return a**b}
// console.log(ÜsAl(3,4))

// const KüpAl = (a) => {return a*a*a}
// console.log(KüpAl(3))


//* 3. Soru

const ArtikYil = function (Jahr) {

    if ((Jahr % 4 == 0 && Jahr % 100 != 0)||(Jahr % 100 == 0 && Jahr % 400 == 0))
        console.log("Girdiginiz", `${Jahr}`, "Yili, artik yildir")
    else {
        console.log("Girdiginiz yil artik yil degildir!")
    }
}

console.log(ArtikYil(1984));


//* 3. Soru

// let artikyil= function(x){;
//     let sonuc;
//     if ((x%100 ==0 && x%400 ==0) || (x%100 !=0 && x%4 ==0)) {
//         sonuc= "Artik yil";
//     }
//     else{sonuc= "Artik yil degil"; }
//     return sonuc;
// }
// let yil=+prompt("Yil'i giriniz");
// console.log("Girdiginiz yil,", artikyil(yil),"dir.");