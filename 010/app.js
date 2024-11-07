console.log('hello darkness');


const fun1 = (text) => {
    const body = document.querySelector('body');
    const h1Html = `<h1> ${text} </h1>`;
    body.innerHTML = h1Html;
}
fun1('hekkkk')
//

const fun2 = (color) => {
    const h1Color = document.querySelector("body > h1");
    h1Color.style.color = color;
}
fun2('crimson')

//

const fun3 = _ => {
    const h1 = document.querySelector('h1');
    h1.innetText = 'Kaboom!';

}
fun3('Kaboom!');



let A = 5;
let B = A;

A = A + 2;

console.log(A, B);


const C = [5];
const D = C; // by reference
const F = [...C] // by copying values
C[0] = C[0] + 2;
console.log(C, D, F);
//rest
const fun15 = (...rest) => {
    console.log(rest[0] + rest[1]);

}
fun15(5, 8);
// spread
const fun16 = (a, b) => {
    console.log(a + b);
}
const spread = [5, 8];

fun16(...spread);


const person = {
    name: 'Vardenis',
    surname: 'Paverdenis',
    age: 99,
    city: 'Vilnius',
    country: 'Lietuva',
    hasTail: true
}

const { age, city, country } = person;

console.log(age, city, country);


const animals = ['bebras', 'lokys', 'vilkas'];
const [animal1, animal2] = animals;

console.log(animal1, animal2);


const bigFun = (a, b) => {
    console.log('BIG FUN SUMA', a + b);
}


const notBigFun = c => {
    const d = 5;
    const e = 8;

    c(d, e);
}

notBigFun(bigFun);


// const printItem = item => {
//     console.log('ITEM:', item.toUpperCase());
// }


const itemsData = f => {
    const items = ['stalas', 'kede', 'lova', 'spinta'];

    for (let i = 0; i < items.length; i++) {
        f(items[i]);
    }

}

itemsData(item => {
    console.log('ITEM:', item.toUpperCase());
});

console.log('---------------------------------')


const coolItems = ['stalas', 'kede', 'lova', 'spinta'];

for (let i = 0; i < coolItems.length; i++) {
    console.log('ITEM:', coolItems[i].toUpperCase());
}

console.log('---------------------------------')


coolItems.forEach((myFancyItem, numberAsFancyIndex, darKazkas) => {
    if (numberAsFancyIndex < 4) { // kiek itemu spausdinam 4 visus spausdina, 3 3 ,2 2 , 1 1


        console.log('ITEM:', numberAsFancyIndex, myFancyItem.toUpperCase(), darKazkas);
    }
})

console.log('---------------------------------')
console.log('---------------------------------')
console.log('---------------------------------')
console.log('---------------------------------')
console.log('---------------------------------')
console.log('---------------------------------')

// mapas

const gr = coolItems.map((myFancyItem , index) => {
    return index + ': ' +myFancyItem.toUpperCase();
});

console.log('GR:',gr);


const withDivs = coolItems.map(item => {
    return `<div>${item.toUpperCase()}</div>`;
});
 
console.log('WITH DIVS:', withDivs);
 
let divs = '';
 
for (let i = 0; i < withDivs.length; i++) {
    divs += withDivs[i];
}

const body = document.querySelector('body');
body.innerHTML = divs;