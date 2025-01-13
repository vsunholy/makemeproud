console.log('hello');

const rand = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}




let pirmas;

// 1 rand funkcija sugeneruoti skaičių intervale nuo 0 iki 4. Jeigu skaiius yra 0, 1 arba 2
// kimntamajam pirmas priskirti raidę "A", kitu atveju raidę "B". Naudoti ternary operatorių.

const randomNumber = rand(0, 4);

pirmas = (randomNumber === 0 || randomNumber === 1 || randomNumber === 2) ? "A" : "B";

console.log(`Random number: ${randomNumber}, pirmas: ${pirmas}`);


//2. Rand funkcija sugeneruoti skaiciu intervale nuo 1 iki 20. Jeigu skaicius yra 5,10,15 arba 20
//kintamajam antras priskirti raide A, kitu atveju raide B. Nauduoti ternary


let antras;

const randomNumber2 = rand(1, 20);

antras = (randomNumber2 === 5 || randomNumber2 === 10 || randomNumber2 === 15 || randomNumber2 === 20) ? 'A' : 'B';

console.log(`Random Number: ${randomNumber2}, antras: ${antras}`);

// 3. Sukurti masyvą iš 5 elementų. kiekvienas elementas random skaičius nuo 5 iki 25. Naujo elemento pridėjimui NAUDOTI rest operatorių.

let trecias = [];
console.log("Pradinis masyvas:", trecias);

// Pridedame naują atsitiktinį skaičių
for (let i = 0; i < 5; i++) {
    const newSkaiciai = rand(5, 25);
    trecias = [...trecias, newSkaiciai];

}

console.log("Atnaujintas masyvas:", trecias);


//4.Sukurti masyva [5,4,3,2,1,1,2,3,4,5] NAUDOTI res operatoriu ir for 5 kartus

let ketvirtas = [];

// Pirmoji pusė: [5, 4, 3, 2, 1]
for (let i = 5; i >= 1; i--) {
    ketvirtas = [...ketvirtas, i];
}

// Antroji pusė: [1, 2, 3, 4, 5]
for (let i = 1; i <= 5; i++) {
    ketvirtas = [...ketvirtas, i];
}

console.log("Sukurtas masyvas:", ketvirtas);


const skaiciai = [45, 6, 87, 20, 47, 33, 1, 8, 99, 100];
// 5. Sukurti nauj1 masyv1 pagal duotą, kuriame skaičiai išrūšiuoti nuo didžiausio iki mažiausio. Nenaudoti rest operatoriaus.

const skaiciai2 = [];

for (let i = 0; i < skaiciai.length; i++) {
    skaiciai2.push(skaiciai[i]);


}

skaiciai2.sort((a, b) => b - a);


const penktas = skaiciai.toSorted((a, b) => b - a);




console.log(skaiciai2);
console.log(penktas);

// 6. Sukurti naują masyvą pagal duotą, kuriame kiekvienas elementas vienetu didesnis už pradinį masyvą.

const skaiciai3 = skaiciai.map(skaicius => skaicius + 1);
console.log(skaiciai3);


// 7. Sukurti naują masyvą pagal duotą, kuriame kiekvienas elementas didesnis nei 50 virsta "A", pasilieka nepakitę. Naudojame map ir ternary operatorių.


const skaiciai4 = skaiciai.map(skaicius => skaicius > 50 ? "Bebras" : skaicius)

console.log(skaiciai4);
// 8. Sukurti naują masyvą pagal duotą, kuriame gyvuliai išrūšiuoti nuo vyriausio iki jauniausio. Nenaudoti rest operatoriaus.
const gyvuliai = [
    { id: 10, vardas: 'Rex', amzius: 5, veisle: 'Lietuvos lenciuginis' },
    { id: 68, vardas: 'Pukis', amzius: 3, veisle: 'Lietuvos lenciuginis' },
    { id: 35, vardas: 'Snekutis', amzius: 1, veisle: 'Zalvarinis retriveris' },
    { id: 45, vardas: 'Murka', amzius: 2, veisle: 'Lietuvos patvorinis' },
    { id: 41, vardas: 'Sniegė', amzius: 7, veisle: 'Lietuvos pagalvinis' },
    { id: 98, vardas: 'Bebras', amzius: 3, veisle: 'Lietuvos medinis' },
];

const bebriniai = gyvuliai.toSorted((a, b) => b.amzius - a.amzius);

console.log(bebriniai);

const astuntasPlusiVardas = gyvuliai.toSorted((a, b) => {
    if (a.amzius > b.amzius) {
      return 1;
    }
    if (a.amzius < b.amzius) {
      return -1;
    }
    return a.vardas.localeCompare(b.vardas);
  });
  
  console.log(astuntasPlusiVardas);
