const uzduotis1 = document.querySelector(".select1");
const uzduotis2 = document.querySelector(".select2");
const uzduotis3 = document.querySelector(".select3");
const uzduotis4 = document.querySelector(".select4");
const uzduotis5 = document.querySelector(".select5");
const uzduotis6 = document.querySelector(".select6");
const uzduotis7 = document.querySelector(".select7");
const uzduotis8 = document.querySelector(".select8");
const uzduotis9 = document.querySelector(".select9");
const uzduotis10 = document.querySelector(".select10");

console.log('veikia');





const rand = function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


const skaicius = rand(-1000, 1000);

console.log(skaicius);


if (skaicius > 0) {
    uzduotis1.innerText = `Skaicius ${skaicius} yra teigiamas`
} 
else if (skaicius < 0) {
    uzduotis1.innerText = `Skaicius ${skaicius} yra neigiamas`
}
else{
    uzduotis1.innerText = `Skaicius yra 0`
}

const skaicius1 = rand(0, 1000);

console.log(skaicius1);

if (skaicius1 % 2 === 0) {
    uzduotis2.innerText = `Skaicius ${skaicius1} yra lyginis`

}
else {
    uzduotis2.innerText = `Skaicius ${skaicius1} yra nelyginis`
}


const skaicius2 = rand(-10, 30);
console.log(skaicius2);


if(skaicius2 > 0) {
    uzduotis3.innerText = `Temperatura ${skaicius2} yra teigiama`
} else if(skaicius2 < 0){
    uzduotis3.innerText = `Temperatura ${skaicius2} yra neigiama`
} else {
    uzduotis3.innerText = `Temperatura yra 0`
}

const skaicius5 = rand(1000, 2000)
const skaicius6 = rand(1000, 2000)

console.log(skaicius5,skaicius6);

if(skaicius5 > skaicius6){
    uzduotis5.innerText = `Pirmas skaicius ${skaicius5} yra didesnis uz ${skaicius6}`
} else if(skaicius5 < skaicius6){
    uzduotis5.innerText = `Pirmas skaicius ${skaicius5} yra mazesnis uz ${skaicius6}`
} else {
    uzduotis5.innerText = `skaiciai yra lygus`
}

const amzius = rand(1, 100);

if (amzius <= 18){
    uzduotis4.innerText = `Amazius ${amzius} yra mazesnis nei 18`
} else if(amzius <= 65){
    uzduotis4.innerText = `Amazius ${amzius} yra tarp 18 ir 65`
} else{
    uzduotis4.innerText = `Amazius ${amzius} yra daugiau nei 65`
}

const suma = rand(1, 600)

if(suma <100){
    uzduotis6.innerText = `Suma yra ${suma} Įsigyk daugiau prekių `
} else if (suma <= 500){
    uzduotis6.innerText = `Suma yra ${suma} Jūs gaunate nuolaidą! `
}else{
    uzduotis6.innerText = `Suma ura ${suma} Jūs gaunate papildomą dovaną!`
}



const Valandos = rand(8, 24);

if(Valandos >= 8 && Valandos <= 17){
    uzduotis9.innerText = `${Valandos} Darbo laikas`
} else{
    uzduotis9.innerText = `${Valandos} Ne darbo laikas`
}

const stud1 = rand(1, 100)
const stud2 = rand(1, 100)

if(stud1 > stud2){
    uzduotis10.innerText = `Pirmo Studento balas ${stud1} , Antro studentos balas yra ${stud2}. Pirmas surinko daugiau`
} else if (stud1 < stud2){
    uzduotis10.innerText = `Pirmo Studento balas ${stud1} , Antro studentos balas yra ${stud2}. Antras surinko daugiau`
}

const rez = rand(0, 100)

if(rez > 90){
    uzduotis8.innerText = `Jusu rezultatas yra ${rez}, Puiku!`
} else if(rez >= 60) {
    uzduotis8.innerText =  `Jusu rezultatas yra ${rez} ,Gerai!`
} else {
    uzduotis8.innerText = `Jusu rezultatas yra ${rez} ,Nepakanka!`
}

let vardas = rand(1, 3)
let Vardas1 = 'Jonas';
let Vardas2 = 'Ona';
let Vardas3 = 'Nepazistamais';


if (vardas === 'Jonas'){
    uzduotis7.innerText = `Labas, ${Vardas1}!`
} else if (vardas === 'Ona'){
    uzduotis7.innerText = `Labas, ${Vardas2}`
} else {
    uzduotis7.innterText = `Labas, ${Vardas3}`
}
console.log(Vardas1)

