
console.log('Hello, Bebrai!');

console.log(1 + 5 * 10);

const manoPirmasSkaicius = 42;
// CamelCase or snake_case
const manoAntrasSkaicius = 3.14;

let manoPirmojiSuma = manoPirmasSkaicius + manoAntrasSkaicius;

manoPirmojiSuma = manoPirmasSkaicius + 100;

// let kintamaji galima keist o const ne

console.log(manoPirmojiSuma);
{
let manoPirmojiSuma = 'Labas';
console.log(manoPirmojiSuma)


}
console.log(manoPirmojiSuma, typeof manoPirmojiSuma);


let koksTipas1 = 1 + 1;
let koksTipas2 = 1 + 'bebras';
koksTipas2 = koksTipas2 + 2;

console.log(koksTipas1, typeof koksTipas1);
console.log(koksTipas2, typeof koksTipas2);

// '' tekstas(string)
// typeof yra tikrinimas
const as = {};
// {} nera blokas cia, tai tuscias objectas
as.vardas = 'Jonas';
as.pavarde= 'Jonaitis';
// vardas ir pavarde yra properties
as.apie ={};
as.apie.amzius = 99;
as.apie.miestas = 'Klaipeda';
// kintamojo(as) savybes galima keisti, o pati ne!
console.log(as, typeof as);


const ManoH1 = document.querySelector('h1');
ManoH1.innerText = manoPirmojiSuma;
ManoH1.style.color = 'crimson';

console.log(ManoH1);
