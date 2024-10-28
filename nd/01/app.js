function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log("Pradedam");

const h1Tag = document.querySelector("h1");
h1Tag.innerText = 1;

const h2Tag = document.querySelector("h2");
h2Tag.innerText = 2;

const h3Tag = document.querySelector("h3");
h3Tag.innerText = 3;

const h4Tag = document.querySelector("h4");

h4Tag.innerText = 4;
// 2 uzd
const div1 = document.querySelector("div:nth-of-type(1)");
div1.style.width = "50px";
div1.style.height = "50px";
div1.style.backgroundColor = "blue";

const div2 = document.querySelector("div:nth-of-type(2)");
div2.style.width = "80px";
div2.style.height = "80px";
div2.style.backgroundColor = "crimson";
div2.style.borderRadius = "50%";

//3
const numberOne = document.querySelector("section#go3 span");
const numberTwo = document.querySelector("#go3 > span:nth-child(2)");
const numberThree = document.querySelector("#go3 > span:nth-child(3)");
const numberFour = document.querySelector("#go3 > span:nth-child(3)");
const X = rand(0, 4);
const Y = rand(0, 4);
console.log(X);
console.log(Y);
let REZ = X / Y;
let REZ2 = Y / X;

if (X > Y) {
  console.log(REZ);
} else if (Y > X) {
  console.log(REZ2);
} else X == Y;
{
  console.log("lygu");
}

numberOne.innerText = X;
numberTwo.innerText = Y;
numberThree.innerText = REZ;
numberFour.innerText = REZ2;

//4

const pirmas = document.querySelector("#go4 > div:nth-child(1)");
const antras = document.querySelector("#go4 > div:nth-child(2)");
const trecias = document.querySelector("#go4 > div:nth-child(3)");
const sectionFour = document.querySelector("section#go4");

sectionFour.style.display = "flex";
pirmas.style.backgroundColor = "skyblue";
antras.style.backgroundColor = "skyblue";
trecias.style.backgroundColor = "skyblue";
pirmas.style.borderRadius = "50%";
antras.style.borderRadius = "50%";
trecias.style.borderRadius = "50%";

const apskritimas = rand(50, 200);
const apskritimasAntras = rand(50, 200);
const apskritimasTrecias = rand(50, 200);

if (pirmas >= antras && pirmas >= trecias) {
  if (antras >= trecias) {
    pirmas.style.width = apskritimasTrecias + "px";
    pirmas.style.height = apskritimasTrecias + "px";
    antras.style.width = apskritimasAntras + "px";
    antras.style.height = apskritimasAntras + "px";
    trecias.style.width = apskritimas + "px";
    trecias.style.height = apskritimas + "px";
  } else {
    pirmas.style.width = apskritimasAntras + "px";
    pirmas.style.height = apskritimasAntras + "px";
    antras.style.width = apskritimasTrecias + "px";
    antras.style.height = apskritimasTrecias + "px";
    trecias.style.width = apskritimas + "px";
    trecias.style.height = apskritimas + "px";
  }
} else if (antras >= pirmas && antras >= trecias) {
  if (pirmas >= trecias) {
    pirmas.style.width = apskritimasTrecias + "px";
    pirmas.style.height = apskritimasTrecias + "px";
    antras.style.width = apskritimas + "px";
    antras.style.height = apskritimas + "px";
    trecias.style.width = apskritimasAntras + "px";
    trecias.style.height = apskritimasAntras + "px";
  } else {
    pirmas.style.width = apskritimas + "px";
    pirmas.style.height = apskritimas + "px";
    antras.style.width = apskritimasTrecias + "px";
    antras.style.height = apskritimasTrecias + "px";
    trecias.style.width = apskritimasAntras + "px";
    trecias.style.height = apskritimasAntras + "px";
  }
} else if (trecias >= pirmas && trecias >= antras) {
  if (pirmas >= antras) {
    pirmas.style.width = apskritimasAntras + "px";
    pirmas.style.height = apskritimasAntras + "px";
    antras.style.width = apskritimas + "px";
    antras.style.height = apskritimass + "px";
    trecias.style.width = apskritimasTrecias + "px";
    trecias.style.height = apskritimasTrecias + "px";
  } else {
    pirmas.style.width = apskritimas + "px";
    pirmas.style.height = apskritimass + "px";
    antras.style.width = apskritimasAntras + "px";
    antras.style.height = apskritimasAntras + "px";
    trecias.style.width = apskritimasTrecias + "px";
    trecias.style.height = apskritimasTrecias + "px";
  }
}

//5

 const skaicius1 = document.querySelector("#go5 > span:nth-child(1)");
 const skaicius2 = document.querySelector("#go5 > span:nth-child(2)");
 const skaicius3 = document.querySelector("#go5 > span:nth-child(3)");

const skaiciusA = rand(-10, 10);
const skaiciusB = rand(-10, 10); 
const skaiciusC = rand(-10, 10);
skaicius1.style.fontSize = "28px"; 
skaicius1.style.fontWeight = "bold"; 
skaicius1.style.padding = "20px 0";

skaicius2.style.fontSize = "20px";
skaicius2.style.fontWeight = "bold";
skaicius2.style.padding = "28px 8";

skaicius3.style.fontSize = "28px"; 
skaicius3.style.fontWeight = "bold"; 
skaicius3.style.padding = "20px 8";


if (skaiciusA > 0){
  skaicius1.innerHTML = skaiciusA;
  skaicius1.style.color = 'blue';
} else if(skaiciusA <0){
  skaicius1.innerHTML = skaiciusA;
  skaicius1.style.color = 'red';
} else{
  skaicius1.innerHTML = skaiciusA;
  skaicius1.style.color = 'green';
}



if (skaiciusB > 0){
  skaicius2.innerHTML = skaiciusB;
  skaicius2.style.color = 'blue';
} else if(skaiciusB <0){
  skaicius2.innerHTML = skaiciusB;
  skaicius2.style.color = 'red';
} else{
  skaicius2.innerHTML = skaiciusB;
  skaicius2.style.color = 'green';
}



if (skaiciusC > 0){
  skaicius3.innerHTML = skaiciusC;
  skaicius3.style.color = 'blue';
} else if(skaiciusC <0){
  skaicius3.innerHTML = skaiciusC;
  skaicius3.style.color = 'red';
} else{
  skaicius3.innerHTML = skaiciusC;
  skaicius3.style.color = 'green';
}

//6 span find

const zvakiuNumber = document.querySelector("section#go6 [data-amount] span");
zvakiuNumber.innerText = 6;
