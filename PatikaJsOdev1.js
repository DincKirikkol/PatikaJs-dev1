
let fullName = prompt("Lütfen Adınızı Giriniz" , "Dinç Kırıkkol")


let isim = document.querySelector("#myName")

isim.innerHTML = `<big style="color:red">${fullName}  </big>`

//let myClock = document.querySelector("#myClock")
/*
const date = new Date()

let year = date.getFullYear(),
    mounth = date.getMonth(),
    day = date.getDate(),
    weekdays = date.getDay(),
    hour = date.getHours() 
    minute = date.getMinutes()
    second = date.getSeconds()

let mounths = [
"Ocak",
"Şubat",
"Mart",
"Nisan",
"Mayıs",
"Haziran",
"Temmuz",
"Ağustos",
"Eylül",
"Ekim",
"Kasım",
"Aralık"

]

let days = [
"Pazar",
"Pazartesi",
"Salı",
"Çarşamba",
"Perşembe",
"Cuma",
"Cumartesi"

]

//console.log (day + mounths[mounth] + year + days[day] + hour )
let clock = (`${ day} ${mounths[mounth]} ${year} ${days[weekdays]} ${hour}:${minute}:${second}`) 


function SAAT (){

    let myClock = document.querySelector("#myClock")

	myClock.innerHTML = `<big style="color:yellow">${clock}  </big>`

}

SAAT ();
setInterval ("SAAT()",1000);

*/