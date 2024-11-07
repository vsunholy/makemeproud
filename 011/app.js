console.log('Rytas')

//1






// const fun2 = (color) => {
//     const h1Color = document.querySelector("#nr1")
//     h1Color.style.color = color;
// }
// fun2('crimson')

const nr1 = document.querySelectorAll('#nr1 div');
nr1.forEach(div => {
    div.style.color = 'crimson';
});

//document.querySelectorAll('#nr1 div').forEach(div => div.style.color = 'crimson');

//2 Nuspalvinti visus žodžius iš NR1 sekcijos mėlynai., kurie prasideda raide "J". Naudoti forEach.

document.querySelectorAll('#nr1 div').forEach(div => {
    if (div.innerText[0] == 'J') {
        div.style.color = 'skyblue';
    }
});


// document.querySelectorALL('#nr1 div').forEach(div => div.innerText[0] == 'J' && (div.style.color = 'skyblue'));

const obj = {
    person: {
        name: 'Jonas',
        age: 99,
        car: {
            model: 'Volvo'
        },
        motocycle: {
            model: 'Yamaha'
        }
    }
};

console.log(obj.person.car?.model ?? 'neturi masinos');


//3. Nuspalvinti visus skaičius iš NR2 sekcijos mėlynai, kurie yra didesni nei 10. Naudoti forEach.
const nr2 = document.querySelectorAll('#nr2 div');

document.querySelectorAll('#nr2 div').forEach(div => {
    if (div.innerText > 10) {
        div.style.color = 'skyblue';
        div.style.fontFamily = 'Tahoma';
    }

});


//4. Prie visų skaičių iš NR2 sekcijos pridėti 7. Naudoti forEach.

document.querySelectorAll('#nr2 div').forEach(div => {
    div.innerText = parseInt(div.innerText) + 7; //parseFloat dos dar po kablialius skaiciu
});

// one liner document.querySelectorAll('#nr2 div').forEach(div => div.innerText = parseFloat(div.innerText) + 7);


const I = document.querySelector('#I');
const Ia = document.querySelector('#Ia');
I.innerHTML = '<h2 style="color: skyblue">Bebras</h2>';
Ia.innerHTML = '<h2 style="color: skyblue">Bebras</h2>';
//------------------------------------------------------

const II = document.querySelector('#II');
const IIa = document.querySelector('#IIa');

const h2 = document.createElement('h2');
h2.style.color = 'skyblue'
const text = document.createTextNode('Zioplys')
h2.appendChild(text);


// clone
const h2Clone = h2.cloneNode(true);
// h2 = h2Clone
II.appendChild(h2);
IIa.appendChild(h2Clone);


const m1 = [1,2,[100,200,300],4,5];

const m2 = m1;
const m3 = [...m1]
const m4 = structuredClone(m1);


m2[0]++;
m3[1]++;
m1[2][0]++;
m4[2][0]++;
console.log(m1);

const mas1 = [1,2,3,4,5];

mas1.forEach((el, i) =>{
    console.log(i, el);
});


const mas2 = mas1.map(el => {
    return el * 2;
});
console.log(mas2);

const mas3 = mas1.filter(el => {
    return el > 2;
});
 
console.log(mas3);

const mas4 = mas1.map(el => el *  2).filter(el => el > 5);

console.log(mas4);

mas1[5] = 'Bebras';

mas1.push('Gaidys', 'kriakas') // taip dedam i massivo gala

mas1.unshift('Ona','sup')//  ideda i massivo pradzia

mas1.pop(); // nutryna paskutini el

mas1.shift(); // nutryna pirma el

console.log(mas1);

const mas1WO3 = mas1.filter(el=> el != 3);

console.log(mas1WO3)

