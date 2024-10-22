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
const X = rand(0, 4);
const Y = rand(0, 4);
console.log(X);
console.log(Y);
const REZ = X / Y || Y / X;

if (X > Y) {
  console.log(REZ);
} else if (Y > X) {
  console.log(REZ);
} 



numberOne.innerText = X;
numberTwo.innerText = Y;
numberThree.innerText = REZ;

//6 span find

const span6 = document.querySelector("section#go6 [data-amount] span");
span6.innerText = 6;
