console.log('kek')

//1.



//// Atspausdinti visus masyvo skaičius ul tage nr1, įdėtus į <li> elementus nuo didžiausio iki mažiausio.
const ul = document.querySelector('#nr1')

const numbers = [-150, 410, 104, 258];
const numbersSorted = numbers.sort((a, b) => b - a);

numbersSorted.forEach(number => {
    const li = document.createElement('li');
    li.innerText = number;
    ul.appendChild(li);
});

//2. Html'e nupiešti kvadratą. Paspaudus ant kvadrato jis virsta į apskritimą. Paspaudus dar kartą, vėl tampa kvadratu ir t.t.

const div = document.createElement('div');

div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'black';
div.style.transition = 'border-radius 0.5s';
div.dataset.figurosBusena = 'kvadratas';
div.style.marginTop = '50px';

document.body.appendChild(div);

div.addEventListener('click', _ => {
    if (div.dataset.figurosBusena === 'kvadratas') {
        div.style.borderRadius = '50%';
        div.dataset.figurosBusena = 'rutulys';
    } else {
        div.style.borderRadius = '0px';
        div.dataset.figurosBusena = 'kvadratas';
    }
});

//3. Sekcijoje nr2 įrašius tekstą į input laukelį ir paspaudus mygtuką, tas tekstas atsiranda sekcijoje nr2, virš input laukelio.


const input = document.querySelector('#teksto-laukelis');
const h1 = document.querySelector('h1');
const button = document.querySelector('#mygtukas');

button.addEventListener('click', _ => {
    h1.innerText = input.value;
    input.value = '';
});


const mas1 = [45, 78, -98, 4, 87, -10];

//paskaiciuti suma ir atspaudinti
const suma = mas1.reduce((total, num) => total + num, 0);

console.log(suma);

// surasti maziausia skaiciu masyve with reduce

const min = mas1.reduce((min, num) => min < num ? min : num, mas1[0]);

console.log(min);


// surasti maziausia teigiama skaiciu with reduce

const minPositive = mas1.reduce((min, num) => num > 0 && num < min ? num : min, Infinity);

console.log(minPositive);


// surasti maziausia masyvo skaicium kuris yra didesnis nei 10 with reduce


const minDidesnisUz10 = mas1.reduce((min, num) => num > 10 && num < min ? num : min, Infinity);

console.log(minDidesnisUz10);



const mas2 = ['antis', 'višta', 'povas', 'kiaušas', 'puodas', 'šakė'];


// surasti ir atspaudinti ilgiausia zodi masyve

const ilgiausias = mas2.reduce((ilgiausias, zodis) => zodis.length > ilgiausias.length ? zodis : ilgiausias, '');

console.log(ilgiausias);


// trumpiausia
const trumpiausias = mas2.reduce((trumpiausias, zodis) => zodis.length < trumpiausias.length ? zodis : trumpiausias, mas2[0]);

console.log(trumpiausias);

// surasti trumpiausia bet ilgesni uz 5 simboliu

const trumpiausiasDidesnisUz5 = mas2.reduce((trumpiausias, zodis) => {
    return (zodis.length < trumpiausias.length && zodis.length > 5) ? zodis : trumpiausias
}, mas2.find(zodis => zodis.length > 5));

console.log(trumpiausiasDidesnisUz5);



//(zodis.length < trumpiausias.length && zodis.length > 5) REIKSME nuo kurios pradedam skaicioti  (zodis => zodis.length > 5)

// filter variantas ta pati

const temp1 = mas2.filter(zodis => zodis.length > 5);
const trumpiausiasDidesnisUz5WithFilter = temp1.reduce((trumpiausias, zodis) => zodis.length < trumpiausias.length ? zodis : trumpiausias, temp1[0]);
 
console.log(trumpiausiasDidesnisUz5WithFilter);


// forEach variantas

let trumpiausiasDidesnisUz5WithForeache = mas2.find(zodis => zodis.length > 5);
 
mas2.forEach(zodis => {
    if (zodis.length < trumpiausiasDidesnisUz5WithForeache.length && zodis.length > 5) {
        trumpiausiasDidesnisUz5WithForeache = zodis;
    }
});
 
console.log(trumpiausiasDidesnisUz5WithForeache);


// for method

let trumpiausiasDidesnisUz5WithForOnly = mas2[0];
 
for (let i = 0; i < mas2.length; i++) {
    if (mas2[i].length > 5) {
        trumpiausiasDidesnisUz5WithForOnly = mas2[i];
    }
}
 
for (let i = 0; i < mas2.length; i++) {
    if (mas2[i].length < trumpiausiasDidesnisUz5WithForOnly.length && mas2[i].length > 5) {
        trumpiausiasDidesnisUz5WithForOnly = mas2[i];
    }
}
 
console.log(trumpiausiasDidesnisUz5WithForOnly);


const find = mas2.find(zodis => zodis.length < 5) ;
const filter = mas2.filter(zodis => zodis.length < 5);

console.log('find', find);
console.log('filter', filter);