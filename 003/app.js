console.log("labas,ka tu?");

//number
//string (text)
//object
//boolean (logikos reiksme true/false)
//undefined let A;

let A;

// console.log(A,'->', typeof A);

const B = 5;

if (B > 10) {
    A = "Daugiau nei 10";
} else {
    A = "Ne daugiau nei 10";
}

console.log(A, "->", typeof A);

const R1 = 1 + 2;
const R2 = 1 * 2;
const R3 = 1 / 2;
const R4 = 1 - 2;

console.log(R1, R2, R3, R4);

const R5 = 0.1 + 0.2;

const R5_galutiniam = R5.toFixed(2); //2 kiek skaiciu po kableliu imam

console.log(R5, R5_galutiniam, "->", typeof R5_galutiniam);

const R6 = 7 % 3; //dalyba su liekana ir gaunam liekana rez

const R7 = parseInt(7 / 3);// kad gauti sveika skaiciaus

console.log(R6, R7);

let R8 = 2;
R8++; //R8 = R8 + 1

console.log(R8 + 10)

console.log(R8++); // left ++ pliusina tada spausdina . right++ spausdina o poto pliusina

console.log(R8);

let R9 = 2;
let rezultatas = R9++ * ++R9; //2 * 4 = 8
console.log(rezultatas);

S1 = 'labas';
S2 = 'rytas';

const S3 = S1 + ' ' + S2; //tarpas ' ' 

console.log(S3);

let raideB = 'b';

raideB++;

console.log(raideB, "->", typeof raideB); //NaN reiskia pridejom ne skaiciu o kazka kita

const isNulio = 10 / 0; //NaN ir Infinity yra klaidos matomos consoleje

console.log(isNulio, '->', typeof isNulio);

const be = 'bebras';

console.log(be[parseInt((be.length - 1) / 2)]);// [.length] parodo raidziu skaiciu -1 atima is final skaiciaus


const bebras2 = 'Bebras'+55+20; 
console.log(bebras2);