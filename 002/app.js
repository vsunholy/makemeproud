function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log("veikia");

const pTag = document.querySelector("p");
pTag.style.color = "skyblue";

const text = pTag.innerText;

console.log(text);
pTag.innerText = "Labas rytas";

const color = pTag.style.color;

console.log(color);
//klausymas ir atsakymas
const A = 300;
const B = 300;

const t = true; //taip
const f = false; //ne

console.log(typeof t);
//klausimas
if (A < B) {
  console.log("B didesnis"); //atsakymas true
} else if (B > A) {
  console.log("A didesnis"); //atsakymas false
} else {
  console.log("Lygu"); //trecias variantas, cia yra lygybe A ir B
}

//kuris kintamasis yra didesnis ^

// const Z = rand(1, 100);
// const X = rand(1, 100);
// const Y = rand(1, 100);

const Z = 200;
const X = 200;
const Y = 200;

console.log("Z:", Z, "X:", X, "Y:", Y);

if (Z > X) {
  if (Z > Y) {
    console.log("Z didziausas");
  } else if (Z == Y) {
    console.log("Y ir Z didziausas");
  } else {
    console.log("Y didziausas");
  }
} else if (X > Z) {
  if (X > Y) {
    console.log("X didziausas");
  } else if (X == Y) {
    console.log("X ir Y didziausas");
  } else {
    console.log("Y didziausas");
  }
} else if (Z == X) {
  if (Z > Y) {
    console.log("Z ir X didziausi");
  } else if (Z == Y) {
    console.log("Z, X ir Y lygus ");
  } else {
    console.log("Y didziausas");
  }
}
