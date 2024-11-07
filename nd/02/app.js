console.log('darkness')




//1Naršyklėje įdėkite 14 h1 tagų su skaičiumi 4 ir 14 h4 tagų su skaičiumi 1. Visi tagai turi rikiuotis į vieną eilutę.

const uz1 = document.querySelector('#nr1');

let hash = '';

for (let i = 0; i < 14; i++) {
    hash += `<h1>4</h1>`;
}
for (let i = 0; i < 14; i++) {
    hash += `<h4>1</h4>`;
}
uz1.innerHTML = hash;


// Naudodamiesi funkcija rand() naršyklėje eilute (tarp skaičių turi būti tarpai) surašykite 44 atsitiktinius skaičius nuo 14 iki 44. Skaičius, kurie iš 4 dalinasi be liekanos nuspalvinkite raudonai, o kitus mėlynai.


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const uz2 = document.querySelector('#nr2');
const skaicius = rand(14, 44);

let lyginiai = '';
let nelyginiai = '';

for (let i = 0; i <= 44; i++) {
    let skaiciai = rand(14, 44);
    if (skaiciai % 4 === 0) {
        lyginiai += `<div style="color:crimson">${parseInt(skaiciai)}</div>`
    } else {
        nelyginiai += `<div style="color:blue">${parseInt(skaiciai)}</div>`
    }
}
uz2.innerHTML = lyginiai + nelyginiai;



//Naršyklėje nupieškite 14 mėlynų apskritimų, išdėliotų eilute.

const uz3 = document.querySelector('#nr3');

let apskritimai = '';

for (let i = 0; i < 14; i++) {
    apskritimai += `<div style="background-color:blue";></div>`
}
uz3.innerHTML = apskritimai;


//Naršyklėje nupieškite 4 mėlynus ir 4 raudonus apskritimus, išdėliotus eilute  “zebru”. (raudonas, mėlynas, raudonas…).

const uz4 = document.querySelector('#nr4');

let circle4 = '';

for (let i = 0; i <= 8; i++) {
    if (i % 2) {
        circle4 += ` <div class="blue">${i}</div>`;

    } else {
        circle4 += ` <div class="red">${i}</div>`;
    }
}
uz4.innerHTML = circle4;

// Naršyklėje nupieškite daygybos lentelę 4 dauginant iš skaičių nuo 4 iki 14.


const uz5 = document.querySelector('#nr5');

let daugyba = '';

for (let i = 4; i <= 14; i++) {
    daugyba += `<div class="daugyba"> 4 x ${i} = ${4 * i}`
}


uz5.innerHTML = daugyba;

// Naršyklėje nupieškite linija iš 444 “*” (tarp žvaigždučių tarpų nėra). Programiškai “suskaldykite” (naudodami tagus atskirom žvaigždučių grupėm) žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 44 “*”.

const uz6 = document.querySelector('#nr6');

const totalStars = 444;
const starsSize = 44;
let stars = '';

for (let i = 0; i < totalStars; i++) {
    stars += '*';
    if ((i + 1) % starsSize === 0) {
        stars += '<br>';
    }
}

uz6.innerHTML = stars;

//Naršyklėje nupieškite 14 atsitiktinių spalvų kvadratų esančių vienas kitame (“matrioška”).#pamastykKaip

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}


const uz7 = document.querySelector('#nr7');

let kvadratas = 300;
let totalKvadratai = '';

for (let i = 0; i <= 14; i++) {
    let kvadratoColor = randomColor();
    kvadratas -= 20;
    totalKvadratai += `<div class="quadro" style="background-color:${kvadratoColor};width:${kvadratas}px;height:${kvadratas}px;padding:10px">`
}
totalKvadratai += `</div></div></div></div></div></div></div></div></div></div></div></div></div></div>`
uz7.innerHTML = totalKvadratai;


//Iš simbolio &#9632; (kopijuoti visą žalią tekstą su kabliataškiu) sudėliokite žalią kvadratą turintį 41x41 šių simbolių. Kad kvadratas atrodytų “kvadratiškai” panaudokite css stilių ir papildomus tagus. #ciklasCikle

const uz8 = document.querySelector('#nr8');

let quadratas = '';

for (let i = 0; i < 41; i++) {
    for (let j = 0; j < 41; j++) {
        quadratas += `<span>&#9632;</span>`;
    }
    quadratas += `<br>`;
}
uz8.innerHTML = quadratas;

//

const uz9 = document.querySelector('#nr9');

let skersas = '';

for (let i = 0; i < 41; i++) {
    let first = i;
    let second = 40 - i;
    for (let j = 0; j < 41; j++) {
        if (j === first || j === second) {
            skersas += `<span style="color:yellow">&#9632;</span>`
        } else skersas += `<span style="color:green">&#9632;</span>`
    }
    skersas += `<br>`
}

uz9.innerHTML = skersas;


